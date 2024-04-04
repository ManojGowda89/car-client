// Layout.js

import Footer from "./Footer";
import Mnavbar from "./Mnavbar";

import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
export default function Layout({ children, title }) {



  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <title>{title}</title>
      </Helmet>

       <Mnavbar logo="Best Cars" />
      
      
      <ToastContainer />

      <main>{children}</main>

      
      <Footer/> 
    </div>
  );
}
