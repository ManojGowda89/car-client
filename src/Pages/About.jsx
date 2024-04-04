import Layout from "../Components/Layout/Layout";

import "./css/about.css";

export default function Contact() {
  return (
    <Layout title="About-BestCars">
      <div className="continerabout ">
        <div className="about-space">
          <img
            className="img-about"
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
          />
        </div>

        <div className="about-space mobile-about">
          <h1>About </h1>
          <p>
            At Best Cars, we pride ourselves on delivering excellence in the
            automotive industry. With a commitment to quality and customer
            satisfaction, we strive to redefine the car buying experience for
            our clients. Our dedication to providing top-notch services and a
            wide selection of premium vehicles sets us apart as a leader in the
            market. Whether youre searching for luxury, performance, or
            reliability, Best Cars is your trusted partner in finding the
            perfect vehicle to match your needs and lifestyle.
          </p>
        </div>
      </div>
    </Layout>
  );
}
