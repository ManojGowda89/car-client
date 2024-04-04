import Layout from "../Components/Layout/Layout";
import {Link} from "react-router-dom"
import "./css/Contact.css"


export  default function Contact(){

    return(

        <Layout title="Contact - BestCars">
        <div className="container">
        <div> 
        <img className="img-con" src="https://media.istockphoto.com/id/488725795/photo/indian-man-working-in-a-call-centre.jpg?s=612x612&w=0&k=20&c=JbIdz9tlWK_q895biGICET_hBMxX2boHu6qvCjV6qMs="></img> 
        </div>
        <br/>
      <div className="div2">
      <br/>
      <Link to="/" className="contatbutt space">Contact Us</Link><br/><br/>
      <p className="space">
      Any questions or queries containing us<br/>
      Mail : contact@gmail.com <br/>
      Phone : 8955285998850<br/>    
      </p>
      
      
      </div>
        </div>
        </Layout>
    )
}