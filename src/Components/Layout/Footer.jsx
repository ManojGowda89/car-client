import {Link } from 'react-router-dom'
import "../css/footer.css"
export default function Footer(){
    return (
        <div  className=" bg-dark text-light p-3">
        <h4 className="text-center">All rights reserved &copy; @manoj gowda</h4>
        <br/>
    <p className="text-footer">
        <Link className="Link" to="/about">About</Link> 
        |
        <Link className="Link" to="/contact">Contact</Link>
        |
        <Link className="Link" to="/private_policy" >Private policy</Link>
    
         </p>
        
        </div>

    )
}