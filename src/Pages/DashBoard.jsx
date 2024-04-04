import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
const Cars = () => {
  const [key, setKey] = useState("04cc48b8-5505-4989-ab7d-955f03c73577");

  const sskey = sessionStorage.getItem("user") || "user";
  const email = sessionStorage.getItem("email") || "email";
  const cars = [
    {
      brand: "Toyota",
      price: "₹19,62,500",
      image:
        "https://media3.giphy.com/media/S72ULxBuAIBZU6M65f/200.webp?cid=790b76113q6tt59tl4t2shke0r1ynjh70lafqfowuy8vdukp&ep=v1_gifs_search&rid=200.webp&ct=g",
    },
    {
      brand: "Honda",
      price: "₹17,25,000",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGVwbGM4aHh0NXN0dmQzaW51YXNuZGFtYjFhbjAxOXl4dXF5a3MzbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L0w505Leys3ozLw4Ac/200.webp",
    },
    {
      brand: "Ford",
      price: "₹27,65,000",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExemxrcHZjOTR5ZmFjeXF0ZnV3ZHMwbDhxNnR2ZXk3YWo2cHVhcXc4ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f94kIweSs7wFho5mHh/200.webp",
    },
    {
      brand: "BMW",
      price: "₹32,37,000",
      image:
        "https://media3.giphy.com/media/U5VQptRzGmQKmMetOI/200.webp?cid=790b7611x37yt5cxn8a69clt1b25ktmu7nvjqesker04jzll&ep=v1_gifs_search&rid=200.webp&ct=g",
    },

    {
      brand: "Tata",
      price: "₹15,00,000",
      image:
        "https://media3.giphy.com/media/j4w8HIQnwL7uX1Dvxe/200.webp?cid=790b7611iaizcze5y8is45xiejlgz4vf6mlhq9iho4dpatjk&ep=v1_gifs_search&rid=200.webp&ct=g",
    },
    {
      brand: "Mahindra",
      price: "₹16,00,000",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXNzcDd3MnR2MmFqMzRsZDByMjdpejk0OHNvMzRucTBxcDFudDN0dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LrRb8VMyGKh8MK4ukH/200.webp",
    },

    {
      brand: "Kia",
      price: "₹18,00,000",
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWlvamNkNDBmZzE4NDN4MGNpMTYwaWxlZGt1d2E3cnJvYW1ybjhmYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MCLvFqv4nHlt2219Ak/200.webp",
    },
  ];

  useEffect(() => {
    axios
      .post("https://car-server-obpu.onrender.com/api/token", { email })
      .then((result) => setKey(result.data.key))
      .catch((err) => console.log(err));
  });

  
  if (sskey === key) {
    return (
      <Layout title="Dashboard Best cars">
        <div className="container-fluid mt-5">
          <h2 className="text-center mb-4">Brands</h2>
          <div className="row">
            {cars.map((car, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={car.image} />
                  <Card.Body>
                    <Card.Title>{car.brand} </Card.Title>
                    <Card.Text>Price: {car.price}</Card.Text>
                    <Link
                      className="btn btn-primary"
                      to={`/brands/${car.brand}`}
                    >
                      Choose a Brands
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

export default Cars;
