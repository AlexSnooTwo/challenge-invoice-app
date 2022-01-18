import "./App.css";
import * as React from "react";
// eslint-disable-next-line
import data from "./data.json";
import { ThemeContext } from "./ThemeContext";
import bulb from "./images/light-bulb.png";
import profile from "./images/profile.png";
import moon from "./images/moon.png";
//APPEL API BINANCE

//Partie Dark/light mod

//Partie InvoiceColumn
function InvoiceColumn() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="InvoiceColumn"
      style={darkMode ? { borderColor: "#151624" } : {}}
    >
      <div id="circle-div">
        <div id="circle">
          <div id="circle-vow"></div>
        </div>
      </div>
      <ToggleMoon />
      <div id="profile-div">
        <img
          style={{ height: "40px", width: "40px" }}
          src={profile}
          alt="Profile-Pic"
        />
      </div>
    </div>
  );
}

function ToggleMoon() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
      console.log("Mis au light mod");
    } else {
      theme.dispatch({ type: "DARKMODE" });
      console.log("Mis au dark mod");
    }
  };

  return (
    <div id="center-column">
      {darkMode ? (
        <img onClick={onClick} id="sun" src={bulb} alt="Bulb" />
      ) : (
        <img onClick={onClick} id="moon" src={moon} alt="Moon" />
      )}
    </div>
  );
}

//Partie Main
function NewInvoice() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  function toggleNewInvoice() {}
  return (
    <button
      className="buttonInvoice"
      style={darkMode ? { borderColor: "#151624" } : {}}
      onClick={toggleNewInvoice}
    >
      <div className="buttonAdd">
        <p id="buttonplus">+</p>
      </div>
      <div>New Invoice</div>
    </button>
  );
}

function InvoiceHeader() {
  return (
    <div className="InvoiceHeader">
      <div className="InvoiceHeaderLeft">
        <div id="title">Invoices</div>
        <div style={{ color: "#bfbcc7" }}>There are 7 total invoices</div>
      </div>
      <div className="InvoiceHeaderRight">
        <div className="statusButton">
          <label style={{ fontWeight: 600 }}>Filter by status</label>
          <select className="selectFilter">
            <option></option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Draft</option>
          </select>
        </div>
        <div className="buttonContainer">
          <NewInvoice />
        </div>
      </div>
    </div>
  );
}

function InvoiceSection() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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

function InvoiceApp() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="InvoiceApp"
      style={darkMode ? { backgroundColor: "#151624", color: "white" } : {}}
    >
      <InvoiceHeader />
      <InvoiceSection />
    </div>
  );
}

function App() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={darkMode ? { backgroundColor: "#151624" } : {}}>
      <InvoiceColumn />
      <InvoiceApp />
    </div>
  );
}

export default App;
