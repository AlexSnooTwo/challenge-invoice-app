import React from "react";

const newData = () => ({
        serial: "test",
        date: "test",
        name: "test",
        price: 0,
        status: "test"
  })

function FormModal({datas = {...newData()}, onAddData}) {
    const [formDatas, setFormDatas] = React.useState(datas)
    
    console.log(formDatas)
    const handleRefChange = (e) => {
        setFormDatas({...formDatas, serial:e.target.value})
    }
    const handlePriceChange = (e) => {
        setFormDatas({...formDatas, price: e.target.value})
    }
    const handleNameChange = (e) => {
        setFormDatas({...formDatas, name: e.target.value})
    }
    const handleDateChange = e => {
        setFormDatas({...formDatas, date : e.target.value})
    }
    const handleStatusChange = e => {
        setFormDatas({...formDatas, status : e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(formDatas)
        // onAddData(formDatas)
    }

  return (
    <div >
      {/* Ajouter onSubmit = {}*/}
      <form onSubmit={handleOnSubmit} style={{height:"90%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
        <legend>Bill form</legend>
        <label htmlFor="invoiceRef">Bill serial number : </label>
        <input
          //disabled={disabled}
          id="invoiceRef"
          type="text"
          //value={tracker.name}
          placeholder="Format : AAXXXX"
          //onChange={handleTrackerRef}
          onChange={handleRefChange}
        ></input>
        <label htmlFor="trackerStartTime">Payment terms : </label>
        <input
          //disabled={disabled}
          id="trackerStartTime"
          type="datetime-local"
          onChange={handleDateChange}
          //value={tracker.starttime}
          //onChange={handleTrackerStartTime}
          step="2"
        ></input>
        <label htmlFor="trackerName">Individual concerned : </label>
        <input
          //disabled={disabled}
          id="trackerName"
          type="text"
          placeholder="Surname Name"
          //value={tracker.endtime}
          onChange={handleNameChange}
          step="2"
        ></input>
        <label>Price :</label>
        <input onChange={handlePriceChange} type="number"></input>
        <label>
          Payment status :
          <select
          //disabled={disabled}
          //value={tracker.category}
          //onChange={handleTrackerCategory}
          onChange={handleStatusChange}
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Draft">Draft</option>
          </select>
        </label>
      </form>
      <input value="Ajouter" type="submit" style={{width :"100%", backgroundColor:"#7d5cf9", color:"white"}}></input>
    </div>
  );
}

export { FormModal };
