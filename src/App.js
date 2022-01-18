import "./App.css";
import * as React from "react";
// eslint-disable-next-line
import { ThemeContext } from "./ThemeContext";
import { InvoiceColumn } from "./components/InvoiceColumn";
import { InvoiceApp } from "./components/InvoiceApp";

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
