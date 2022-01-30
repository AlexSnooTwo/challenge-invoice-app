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
  const handleAddData = FormData => {
    setAllDatas([...allDatas, FormData])
  }
  
  return (
    <div className="App" style={darkMode ? { backgroundColor: "#151624" } : {}}>
      <InvoiceColumn />
      <InvoiceApp datas={allDatas} setAllDatas={setAllDatas} onAddData={handleAddData}/>
    </div>
  );
}

export default App;