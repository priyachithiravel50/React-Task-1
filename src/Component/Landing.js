import React, { Component } from 'react';
// import './Navbar.css';  // Import CSS for styling

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand text-light">My Website</div>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div style={{width:'100px',backgroundColor:'blue'}}>
          <p>dfghjk</p>
          <p>sdfghjk</p>
          <p>sdfghjkl</p>
        </div>

        {/* Cards Section */}
        <div className="cards-container">
          <div className="card">
            <h3>Card 1</h3>
          </div>
          <div className="card">
            <h3>Card 2</h3>  
          </div>
          <div className="card">
            <h3>Card 3</h3>  
          </div>
          <div className="card">
            <h3>Card 4</h3>  
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
