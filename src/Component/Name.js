import React, { useState } from "react";

function Name() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    bloodGroup: "",
    gender: "",
  });

  const [dataList, setDataList] = useState([]);

  const [editIndex, setEditIndex] = useState(-1);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();

    if (editIndex !== -1) {
      // Edit existing data
      const updatedList = dataList.map((item, index) =>
        index === editIndex ? { ...formData, date: currentDate } : item
      );
      setDataList(updatedList);
      setEditIndex(-1);
    } else {
      // Add new data
      setDataList([...dataList, { ...formData, date: currentDate }]);
    }

    setFormData({ name: "", address: "", age: "", bloodGroup: "", gender: "" });
  };

  // Handle Edit
  const handleEdit = (index) => {
    const item = dataList[index];
    setFormData({
      name: item.name,
      address: item.address,
      age: item.age,
      bloodGroup: item.bloodGroup,
      gender: item.gender,
    });
    setEditIndex(index);
  };

  // Handle Delete
  const handleDelete = (index) => {
    const filteredList = dataList.filter((_, i) => i !== index);
    setDataList(filteredList);
  };

  // Cancel form action
  const handleCancel = () => {
    setFormData({ name: "", address: "", age: "", bloodGroup: "", gender: "" });
    setEditIndex(-1);
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Form Page</h2>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="require" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" className="require" placeholder="Enter your address" value={formData.address} onChange={handleChange} required></textarea>

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" className="require" placeholder="Enter your age" value={formData.age} onChange={handleChange} required/>

          <label htmlFor="bloodGroup">Blood Group:</label>
          <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
            <option value="">Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label>Gender:</label>
          <div className="box4">
            <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />{" "}
            Male
            <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange}/>{" "}
            Female
            <input type="radio" name="gender" value="Others" checked={formData.gender === "Others"} onChange={handleChange} />{" "} Others</div>

          <div className="div">
            <button type="submit" id="add">
              {editIndex !== -1 ? "Update" : "Add"}
            </button>
            <button type="button" id="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-bordered table-striped" style={{border: "1px solid black", width: "100%"}}>
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.age}</td>
              <td>{data.bloodGroup}</td>
              <td>{data.gender}</td>
              <td>{data.date}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Name;


