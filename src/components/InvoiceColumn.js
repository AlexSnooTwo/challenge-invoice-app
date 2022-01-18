import * as React from "react"
import profile from "../images/profile.png";
import { ThemeContext } from "../ThemeContext"
import bulb from "../images/light-bulb.png";
import moon from "../images/moon.png";

export function InvoiceColumn() {
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