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
      <label className='filterLabelFull' style={{ fontWeight: 600 }}>Filter by status</label>
      <label className='filterLabelShort' style={{ fontWeight: 600 }}>Filter</label>
      <select className="selectFilter" ref={refSelect} onChange={handleStatus}>
        <option></option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="draft">Draft</option>
      </select>
    </div>
  );
}



