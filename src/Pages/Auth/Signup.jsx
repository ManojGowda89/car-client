import { useEffect, useState } from "react";

import "../css/signup.css";
import axios from "axios"
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import Footer from "../../Components/Layout/Footer";
import Navbar from "../../Components/Layout/Navbar";
export default function About() {
  const [show, setShow] = useState(false);
  const [condition, setconditions] = useState(true);
   const[name,setname] = useState("")
   const[email,setEmail]=useState("")
   const[phone,setPhoneNumber]=useState("")
  const [password, setpassword] = useState("");
  const[confirmPassword,setConfirmPassword]=useState("z")

   const [address,setaddress] = useState("z")

 
   async function  handelsignup(e){
    e.preventDefault()
    const key = crypto.randomUUID();
    try {
     const result= await axios.post("https://car-server-obpu.onrender.com/api/register",{name,email,password,phone,address,key})
     if (result.data.success){
       toast.success(result.data.message)
       setShow(false)
      
     }
     else{
      toast.error(result.data.message)
      setShow(false)
     }
     if(result.data.statuscode == 200){
      toast.success(result.data.message)
      setShow(false)
     }
    } catch (error) {
      toast.error(error)
      setShow(false)
    }
   }

  useEffect(()=>{

    function handelconpass() {
     
        
      if (confirmPassword == password) {
        setconditions(false);
      }
       else {
        setconditions(true);
      }
    }

    handelconpass()

  },[password,confirmPassword])
  

  return (
    <div>
    <ToastContainer />
   <Navbar logo="Best cars" />
      <div className="signup_continer">
        {!show ? (
          <>
            <h1>SIGN UP</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShow(true);
              }}
            >
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  aria-describedby="emailHelp"
                 
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPhone"
                  placeholder="09xxxxxxxxx"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  aria-describedby="emailHelp"
                  required
                />
              </div>

              <button type="submit"  className="btn btn-primary">
                Next
              </button>
            </form>
          </>
        ) : (
          <div>
            <form onSubmit={handelsignup}>
              <div className="mb-3">
                <label htmlFor="exampleInputAdd" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="form-control"
                  id="exampleInputAdd"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setaddress(e.target.value)}
                 
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="*****************"
                  onChange={(e) => setpassword(e.target.value)}
                
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm your password"
                  id="exampleInputPassword2"
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  required
                />
                <div id="emailHelp" className="form-text">{  condition ? "Match the Password" :"Password Matched" }</div>
                
              </div>
              
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label className="htmlForm-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                disabled={address =="" || condition}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        </div>
        <Footer/>
        </div>

  );
}
