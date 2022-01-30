import * as React from "react";
import { ThemeContext } from "../ThemeContext";


export function NewInvoice({setOpenModal}) {
  const handleClick = () => {
    setOpenModal(true)
  }

  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <button
      className="buttonInvoice"
      style={darkMode ? { borderColor: "#151624" } : {}}
      onClick={handleClick}
    >
      <div className="buttonAdd">
        <p id="buttonplus">+</p>
      </div>
      <div className="newFull">New Invoice</div>
    </button>
  );
}
