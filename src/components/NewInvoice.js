import * as React from "react"
import { ThemeContext } from "../ThemeContext";

export function NewInvoice() {
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