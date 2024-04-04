import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Bookings() {
  const [key, setKey] = useState("04cc48b8-5505-4989-ab7d-955f03c73577");
  const sskey = sessionStorage.getItem("user") || "user";
  const email = sessionStorage.getItem("email") || "email";

  useEffect(() => {
    axios
      .post("https://car-server-obpu.onrender.com/api/token", { email })
      .then((result) => setKey(result.data.key))
      .catch((err) => console.log(err));
  });

  const [cars, setCars] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://car-server-obpu.onrender.com/api/getbookings/${email}`)
      .then((response) => {
        if(response){

          setCars(response.data.booking)
          sessionStorage.setItem("img","https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg")
        }
      })
      .catch((error) => console.log(error));
  }, [email]);

  function deletebooking(e, id) {
    e.preventDefault();
    axios
      .delete(`https://car-server-obpu.onrender.com/api/delete/${id}`)
      .then((response) => {
        if (response) {
          setTimeout(() => {
            Navigate("/dashboard");
            localStorage.clear();
            sessionStorage.removeItem("img");
          }, 2000);
        }

        toast.error(response.data.message);
      })
      .catch((err) => toast.error(err));
  }

  if (sskey === key) {
    return (
      <Layout>
        <div className="container-fluid mt-5" style={{ height: "500px" }}>
          <h2 className="text-center mb-4">
            Your Bookings Under {sessionStorage.getItem("name")}
          </h2>

          <center>
            <div
              className="col-md-4 mb-3"
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "300px",
              }}
            >
              {cars ? (
                <>
                  <Card style={{ alignItems: "start" }}>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={sessionStorage.getItem("img")}
                      />
                      <Card.Title>Brand: {cars.brand}</Card.Title>
                      <Card.Title>Model: {cars.model}</Card.Title>
                      <Card.Title>Price: {cars.price}</Card.Title>
                      <center>
                        {" "}
                        <Link
                          onClick={(e) => deletebooking(e, cars._id)}
                          className="btn btn-primary"
                        >
                          {" "}
                          Cancel Booking
                        </Link>
                      </center>
                    </Card.Body>
                  </Card>
                </>
              ) : (
                <h1>No Bookings</h1>
              )}
            </div>
          </center>
        </div>
      </Layout>
    );
  } else {
    return (
      <>
        <Layout>
          <div style={{ height: "600px" }}></div>
        </Layout>
      </>
    );
  }
}
