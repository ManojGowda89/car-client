import Layout from "../Components/Layout/Layout";
import {Link} from "react-router-dom"
import "./css/pagenotfound.css"
export default function Pagenotfound(){

    return(

        
        <Layout title="404- Ecommerce">
        <div className="page1"> 
        <h1 className="title">404</h1>
        <h1>Oops! Page Not Found</h1><br/>
         <Link to='/' className="button"> Go_back </Link>  
         </div>
        </Layout>
    )
}