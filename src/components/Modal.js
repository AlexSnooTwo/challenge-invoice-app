import React from "react";
import { ThemeContext } from "../ThemeContext";
import { FormModal } from "./FormModal";

export default function Modal({datas, open, setOpenModal, onAddData }) {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  const MODAL_STYLE_WHITE = {
    backgroundColor: "white",
    color: "black",
    zIndex: "1000",
    position: "absolute",
    height: "100%",
    width: "30%",
    left: "6%",
    display: "flex",
    flexDirection: "column",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  };
  const MODAL_STYLE_DARK = {
    backgroundColor: "#151624",
    color: "white",
    zIndex: "1000",
    position: "absolute",
    height: "100%",
    width: "30%",
    left: "6%",
    display: "flex",
    flexDirection: "column",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  };

  const OVERLAY_STYLE = {
    backgroundColor: "rgba(0, 0, 0, .7)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: "6%",
    right: 0,
    zIndex: "1000",
  };

  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLE}></div>
      <div style={ darkMode ? MODAL_STYLE_DARK : MODAL_STYLE_WHITE}>
        <div style={{ padding: "20px", height:"100%", display:"grid", gridTemplateRows:"0.5fr 4fr 0.2fr" }}>
          <h2>New Invoice</h2>
          <FormModal onAddData={onAddData} datas={datas}/>
          <button style={{width :"100%", backgroundColor:"#7d5cf9", color:"white"}} onClick={() => setOpenModal(false)}>X</button>
        </div>
      </div>
    </>
  );
}
