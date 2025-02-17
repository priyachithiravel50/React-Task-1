import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        address: "",
        age: "",
        bloodGroup: "",
        gender: "",
      },
      dataList: [],
      editIndex: -1,
    };
  }

      // Handle Change
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          formData: {
            ...this.state.formData,
            [name]: value,
          },
        });
      };

    // Form submission
    handleSubmit = (e) => {
      e.preventDefault();
      const currentDate = new Date().toLocaleDateString();

      if (this.state.editIndex !== -1) {
        const updatedList = this.state.dataList.map((item, index) =>
          index === this.state.editIndex ? { ...this.state.formData, date: currentDate } : item
        );
        this.setState({ dataList: updatedList, editIndex: -1 });
      } else {
        this.setState({
          dataList: [...this.state.dataList, { ...this.state.formData, date: currentDate }],
        });
      }

          // Reset form
          this.setState({
            formData: { name: "", address: "", age: "", bloodGroup: "", gender: "" },
          });
        };

      // Handle Edit
      handleEdit = (index) => {
        const item = this.state.dataList[index];
        this.setState({
          formData: {
            name: item.name,
            address: item.address,
            age: item.age,
            bloodGroup: item.bloodGroup,
            gender: item.gender,
          },
          editIndex: index,
        });
      };

        // Handle Delete
        handleDelete = (index) => {
          const filteredList = this.state.dataList.filter((_, i) => i !== index);
          this.setState({ dataList: filteredList });
        };

        // Cancel form 
        handleCancel = () => {
          this.setState({
            formData: { name: "", address: "", age: "", bloodGroup: "", gender: "" },
            editIndex: -1,
          });
        };

  render() {
    return (
      <>
        <div className="form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <h2>Form Page</h2>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="require" placeholder="Enter your name" value={this.state.formData.name} onChange={this.handleChange} required />

            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" className="require" placeholder="Enter your address" value={this.state.formData.address} onChange={this.handleChange} required ></textarea>

            <label htmlFor="age">Age:</label>
            <input type="number" id="age"  name="age"  className="require"  placeholder="Enter your age"  value={this.state.formData.age}  onChange={this.handleChange}  required />

            <label htmlFor="bloodGroup">Blood Group:</label>
            <select id="bloodGroup" name="bloodGroup" value={this.state.formData.bloodGroup} onChange={this.handleChange} required>
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

            <label id="classname" style={{  fontSize: '16px' }}>Gender:</label>
            <div className="box4" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <label style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                <input  type="radio"   name="gender"  id="gender-male"  value="Male"   checked={this.state.formData.gender === "Male"}   onChange={this.handleChange} /> {" "} Male
              </label>
              <label style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                <input type="radio" name="gender" id="gender-female" value="Female" checked={this.state.formData.gender === "Female"} onChange={this.handleChange} /> {" "} Female
              </label>
              <label style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                <input  type="radio" name="gender"  id="gender-others"  value="Others"   checked={this.state.formData.gender === "Others"}  onChange={this.handleChange} />  {" "} Others
              </label>
            </div>
            <div className="div">
              <button type="submit" id="add">
                {this.state.editIndex !== -1 ? "Update" : "Add"}
              </button>
              <button type="button" id="cancel" onClick={this.handleCancel}> Cancel </button>
            </div>
          </form>
        </div>
        <br />
        <table className="table table-bordered container" style={{ border: "1px solid black", width: "100%" }} >
          <thead className="table-dark">
            <tr>
              <th>S/No</th>
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
            {this.state.dataList.map((data, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.age}</td>
                <td>{data.bloodGroup}</td>
                <td>{data.gender}</td>
                <td>{data.date}</td>
                <td>
                 <button className="edit-btn" onClick={() => this.handleEdit(index)}>Edit</button>
                 <button className="delete-btn" onClick={() => this.handleDelete(index)}>Delete</button>
               </td>

              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Profile;