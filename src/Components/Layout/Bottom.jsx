import {Link} from "react-router-dom"
import "../css/bottom.css"
export default function Bottom(){



    
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust this threshold as needed
//     };

//     handleResize(); // Call initially to set the state
//     window.addEventListener("resize", handleResize); // Add event listener for resize

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup on component unmount
//     };
//   }, []);

//   useEffect(() => {
//     navigator.onLine ? console.log("You're online") : toast.error("You're offline")
//   },[]);
    return (
       <>
       <nav className="nav_bootm">
       
       <div className="container_bottom">
       <Link className="bottom_link"> Home</Link>
       <Link className="bottom_link">Signup</Link>
       <Link className="bottom_link">Login</Link>
       <Link className="bottom_link">Cart(0)</Link>
       
       </div>
       
       
       </nav>
       
       </>
  

    )
}