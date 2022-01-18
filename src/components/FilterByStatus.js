import * as React from "react";

//On a utilisé setStatus en prop drilling
//Faire un useContext plutôt


export function FilterByStatus({ setStatus }) {
 const handleStatus = ()=>{
    setStatus(refSelect.current.value)
 }
 const refSelect = React.useRef()
  return (
    <div className="statusButton">
      <label style={{ fontWeight: 600 }}>Filter by status</label>
      <select className="selectFilter" ref={refSelect} onChange={handleStatus}>
        <option></option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="draft">Draft</option>
      </select>
    </div>
  );
}



