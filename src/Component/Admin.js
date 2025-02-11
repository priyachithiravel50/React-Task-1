import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand fs-2" to="/">Admin</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"> </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">   
                  <Link className="nav-link fs-4" to="/my-profile">My Profile</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link fs-4" to="/user">User</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      
      </>
    );
  }
}

export default Admin;
