import React from "react";

const newData = () => ({
  serial: "",
  date: "",
  name: "",
  price: 0,
  status: "",
});

function FormModal({ datas = { ...newData() }, onAddData }) {
  const [formDatas, setFormDatas] = React.useState(datas);

  console.log(formDatas);
  const handleRefChange = (e) => {
    setFormDatas({...formDatas, serial: e.target.value})
    // setFormDatas({ ...formDatas, serial: e.target.value });
  };
  const handlePriceChange = (e) => {
    setFormDatas({ ...formDatas, price: e.target.value });
  };
  const handleNameChange = (e) => {
    setFormDatas({ ...formDatas, name: e.target.value });
  };
  const handleDateChange = (e) => {
    setFormDatas({ ...formDatas, date: e.target.value });
  };
  const handleStatusChange = (e) => {
    setFormDatas({ ...formDatas, status: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAddData(formDatas);
  };

  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        style={{
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <label htmlFor="invoiceRef">Bill serial number : </label>
        <input
          id="invoiceRef"
          type="text"
          placeholder="Format : AAXXXX"
          value={formDatas.serial}
          onChange={handleRefChange}
        ></input>
        <label htmlFor="trackerStartTime">Payment terms : </label>
        <input
          id="trackerStartTime"
          type="datetime-local"
          onChange={handleDateChange}
          value={formDatas.date}
          step="2"
        ></input>
        <label htmlFor="trackerName">Individual concerned : </label>
        <input
          id="trackerName"
          type="text"
          placeholder="Surname Name"
          value={formDatas.name}
          onChange={handleNameChange}
          step="2"
        ></input>
        <label>Price :</label>
        <input
          value={formDatas.price}
          onChange={handlePriceChange}
          type="number"
        ></input>
        <label>
          Payment status :
          <select onChange={handleStatusChange} value={formDatas.status}>
            <option></option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Draft">Draft</option>
          </select>
        </label>
        <input
          value="Ajouter"
          type="submit"
          style={{ width: "100%", backgroundColor: "#7d5cf9", color: "white" }}
        ></input>
      </form>
    </div>
  );
}

export { FormModal };
