import { Link } from "react-router-dom";
import { useState } from "react"; 
import "../css/navbar.css";

// eslint-disable-next-line react/prop-types
export default function Navbar({logo}) {
  const [collapsed, setCollapsed] = useState(true); // State to manage collapse

  // Function to toggle collapse state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <nav  className="navbar navbar-expand-lg navbar-light bg-light p-3 ">
        <Link to="/" className="navbar-brand active">
          {logo}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse} // Call toggleCollapse function on click
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Conditional rendering for collapse */}
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only"></span>
              </Link>
            </li>
          
          
            <li className="nav-item active">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item active">
            
            </li>
          </ul>
        </div>
      </nav>
    </>
  );


  
}



