import { Link,useNavigate } from "react-router-dom";
import { useState } from "react"; 
import "../css/navbar.css";

// eslint-disable-next-line react/prop-types
export default function Mnavbar({logo}) {
  const [collapsed, setCollapsed] = useState(true); // State to manage collapse
  const   navigat  = useNavigate();
  // Function to toggle collapse state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (

    
    <>
      <nav  className="navbar navbar-expand-lg navbar-light bg-light p-3 ">
        <Link to="/dashboard" className="navbar-brand active">
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
              <Link to="/dashboard" className="nav-link">
                Home <span className="sr-only"></span>
              </Link>
            </li>
          
          <li className="nav-item active">
            <Link to="/bookings" className="nav-link">
              Your Bookings <span className="sr-only"></span>
            </Link>
          </li>
      
          
            <li className="nav-item active">
              <Link onClick={(e)=>{
                e.preventDefault();
                sessionStorage.clear()
                navigat("/")


              }} className="nav-link">
                Logout
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



