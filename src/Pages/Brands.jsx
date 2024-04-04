import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Bmw from "./data/Bmw.jsx";
import Toyota from "./data/Toyota.jsx";
import Ford from "./data/Ford.jsx";
import Honda from "./data/Honda.jsx";
import Kia from "./data/Kia.jsx";
import Mahindra from "./data/Mahindra.jsx";

import Tata from "./data/Tata.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const Brands = () => {
  const [key, setKey] = useState("04cc48b8-5505-4989-ab7d-955f03c73577");
  const sskey = sessionStorage.getItem("user") || "user";
  const email = sessionStorage.getItem("email") || "email";
 
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .post("https://car-server-obpu.onrender.com/api/token", { email })
      .then((result) => setKey(result.data.key))
      .catch((err) => console.log(err));
  });

  const [cars, setCars] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id === "Toyota") {
      setCars(Toyota);
    } else if (id === "BMW") {
      setCars(Bmw);
    } else if (id == "Ford") {
      setCars(Ford);
    } else if (id === "Honda") {
      setCars(Honda);
    } else if (id === "Kia") {
      setCars(Kia);
    } else if (id === "Mahindra") {
      setCars(Mahindra);
    } else if (id === "Tata") {
      setCars(Tata);
    }
  }, [id]);

  function handelbooking(e, b, m, p) {
    e.preventDefault();

    axios
      .post("https://car-server-obpu.onrender.com/api/brands", {
     
       email:email,
       brand:b,
       model:m,
       price:p,
      
      

      })
      .then((result) => {
        if (result.data.success == "falsee") {
          toast.success(result.data.message);
         
         
        }
       else if (result.data.success) {
          toast.success(result.data.message);
          localStorage.setItem("data", "data");
         
          setTimeout(() => {
            Navigate("/bookings");
          }, 2000);
        }
      })
      .catch((err) => console.error(err));
  }
  if (sskey === key) {
    return (
      <Layout>
        <div className="container-fluid mt-5">
          <h2 className="text-center mb-4">{id}</h2>
          <div className="row">
            {cars &&
              cars.map((car, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <Card>
                    <Card.Img variant="top" src={car.image} />
                    <Card.Body>
                      <Card.Title>
                        {car.model} {car.type}
                      </Card.Title>
                      <Card.Text>Price: {car.price}</Card.Text>
                      <Link
                        className="btn btn-primary"
                        onClick={(e) =>
                          handelbooking(e,  car.model, car.price, car.type)
                        }
                      >
                        Book a Car
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
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
};

export default Brands;
