import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./css/home.css";
import axios from "axios";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import { toast } from "react-toastify";

export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

 async function handleSubmit(e) {
    e.preventDefault();

   await axios.post("https://car-server-obpu.onrender.com/api/login", formData).then((result) => {
      if (result.data.success) {
        const key = crypto.randomUUID();
        setfkey(key)
       
        sessionStorage.setItem("email", result.data.email);
        sessionStorage.setItem("name", result.data.name);
      
        navigate("/dashboard");
      }

     

      toast.error(result.data.message)
    }
    
    );
  }
  function setfkey(keyy){
    sessionStorage.setItem("user", keyy);
    axios.put("https://car-server-obpu.onrender.com/api/verifi",{email:formData.email,key:keyy}).catch((error) => {console.log(error)});
  }
  return (
    <>
        <Navbar logo ="Best Cars"/>
        <ToastContainer/>
        <div className="home_continer">
          <div className="home_logo">
            <h1>Best Cars</h1>
            <p>
              Unlock the road to exceptional journeys with Best Cars
              <br /> where every ride is a seamless blend of luxury and
              reliability.
            </p>
          </div>
          <form className="form_home" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <Footer/>

    </>
  );
}
