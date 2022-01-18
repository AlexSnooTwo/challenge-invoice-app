import * as React from "react";
import { ThemeContext } from "../ThemeContext";
import { NewInvoice } from "./NewInvoice";
import dataJSON from "../data.json";
import { FilterByStatus } from "./FilterByStatus";


export function InvoiceApp() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [status, setStatus] = React.useState();
  console.log(status);
  return (
    <div
      className="InvoiceApp"
      style={darkMode ? { backgroundColor: "#151624", color: "white" } : {}}
    >
      <InvoiceHeader setStatus={setStatus} />
      <InvoiceSection status={status} />
    </div>
  );
}

function InvoiceHeader({ setStatus }) {
  return (
    <div className="InvoiceHeader">
      <div className="InvoiceHeaderLeft">
        <div id="title">Invoices</div>
        <div
          style={{ color: "#bfbcc7" }}
        >{`There are ${dataJSON.length} total invoices`}</div>
      </div>
      <div className="InvoiceHeaderRight">
        <FilterByStatus setStatus={setStatus} />
        <div className="buttonContainer">
          <NewInvoice />
        </div>
      </div>
    </div>
  );
}

function InvoiceSection({ status }) {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let data = dataJSON.slice()
  if (status === "paid"){
      data = data.filter(data => data.status === "Paid")
    console.log("test paid")
  }
  if (status === "pending"){
    data = data.filter(data => data.status === "Pending")
    console.log("test paid")
  }
  if (status === "draft"){
    data = data.filter(data => data.status === "Draft")
    console.log("test paid")
  }
  return (
    <section className="InvoiceSection">
      {data.map((data) => (
        <div
          className="InvoiceDiv"
          style={
            darkMode
              ? { backgroundColor: "#1e203a", borderColor: "#1e203a" }
              : {}
          }
        >
          <div className="InvoiceLi" style={{ fontWeight: 700 }}>
            #{data.serial}
          </div>
          <div
            className="InvoiceLi"
            style={darkMode ? { color: "#8b8ca7" } : { color: "gray" }}
          >
            {data.date}
          </div>
          <div
            className="InvoiceLi"
            style={darkMode ? { color: "#8b8ca7" } : { color: "gray" }}
          >
            {data.name}
          </div>
          <div className="InvoiceLi" style={{ fontWeight: 700, fontSize: 18 }}>
            £{data.price}
          </div>
          <div
            className="InvoiceLiButton"
            style={
              data.status === "Pending"
                ? darkMode
                  ? { backgroundColor: "#2c2933", color: "#f28f17" }
                  : { backgroundColor: "#fffaef", color: "#f28f17" }
                : data.status === "Paid"
                ? darkMode
                  ? { backgroundColor: "#202a40", color: "#40d2a0" }
                  : { backgroundColor: "#effcf8", color: "#40d2a0" }
                : darkMode
                ? { backgroundColor: "#2b2c42", color: "#dee0f8" }
                : { backgroundColor: "#f3f2f4", color: "#383447" }
            }
          >
            {data.status}
          </div>
          <select
            style={
              darkMode
                ? {
                    backgroundColor: "#1e203a",
                    borderColor: "#1e203a",
                    color: "#7d5cf9",
                  }
                : { border: "none", color: "#7d5cf9" }
            }
          ></select>
        </div>
      ))}
    </section>
  );
}
