import * as React from "react";
import { ThemeContext } from "../ThemeContext";
import { NewInvoice } from "./NewInvoice";
import Modal from "./Modal";
import { FilterByStatus } from "./FilterByStatus";

export function InvoiceApp({datas, setAllDatas, onAddData}) {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [status, setStatus] = React.useState();
  const [openModal, setOpenModal] = React.useState(false)
  

  console.log(status);
  return (
    <div
      className="InvoiceApp"
      style={darkMode ? { backgroundColor: "#151624", color: "white" } : {}}
    >
      <InvoiceHeader datas={datas} setStatus={setStatus} setAllDatas={setAllDatas} setOpenModal={setOpenModal}/>
      <InvoiceSection datas={datas} status={status}  />
      <Modal open={openModal} setOpenModal={setOpenModal} datas={datas} onAddData={onAddData}></Modal>
    </div>
  );
}

function InvoiceHeader({datas, setStatus, setOpenModal}) {
  return (
    <div className="InvoiceHeader">
      <div className="InvoiceHeaderLeft">
        <div id="title">Invoices</div>
        <div className="fullText"
          style={{ color: "#bfbcc7" }}
        >{`There are ${datas.length} total invoices`}</div>
        <div className="shortText"
          style={{ color: "#bfbcc7" }}
        >{`${datas.length} invoices`}</div>
      </div>
      <div className="InvoiceHeaderRight">
        <FilterByStatus setStatus={setStatus} />
        <div className="buttonContainer">
          <NewInvoice setOpenModal={setOpenModal}/>
        </div>
      </div>
    </div>
  );
}

function InvoiceSection({datas, status}) {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let internData = datas
  if (status === "paid"){
    internData = datas.filter(data => data.status === "Paid")
    console.log(`test paid ${internData.length}`)
  }
  if (status === "pending"){
    internData = datas.filter(data => data.status === "Pending")
    console.log(`test pending ${internData.length}`)
  }
  if (status === "draft"){
    internData = datas.filter(data => data.status === "Draft")
    console.log(`test draft ${internData.length}`)
  }
  return (
    <section className="InvoiceSection">
      {internData.map((data) => (
        <div key={data.serial}
          className="InvoiceDiv"
          style={
            darkMode
              ? { backgroundColor: "#1e203a", borderColor: "#1e203a" }
              : {}
          }
        >
          <div className="InvoiceLi" style={{ fontWeight: 700 }} >
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
          <div className="InvoiceLi" style={{ fontWeight: 700, fontSize: "1.2em" }}>
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