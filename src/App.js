/* eslint-disable no-unused-vars */
import "./App.css";
import * as React from "react";
import db from "./data.js";
// eslint-disable-next-line
import { ThemeContext } from "./ThemeContext";
import { InvoiceColumn } from "./components/InvoiceColumn";
import { InvoiceApp } from "./components/InvoiceApp";

function App() {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [allDatas, setAllDatas] = React.useState(db)
  const handleAddData = formDatas => {
    if (formDatas.serial === '') {
      window.alert("Il n'y a pas d'id")
      return
    }
    if (formDatas.name === '') {
      window.alert("Il n'y a pas de nom")
      return
    }
    if (formDatas.date === '') {
      window.alert("Il n'y a pas de date de début")
      return
    }
    if (formDatas.price === 0) {
      window.alert("Il n'y a pas de prix")
      return
    }
    if (formDatas.status === null) {
      window.alert("Il n'y a pas de status")
      return
    }
    setAllDatas([...allDatas, formDatas])
    console.log("Submit effectué")
  }
  
  return (
    <div className="App" style={darkMode ? { backgroundColor: "#151624" } : {}}>
      <InvoiceColumn />
      <InvoiceApp datas={allDatas} onAddData={handleAddData} setAllDatas={setAllDatas}/>
    </div>
  );
}

export default App;