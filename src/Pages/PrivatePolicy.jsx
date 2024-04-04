import Layout from "../Components/Layout/Layout";

import "./css/about.css";

export default function PrivatePolicy() {
  return (
    <Layout title="PrivatePolicy-BestCars">
      <div className="continerabout ">
        <div className="about-space">
          <img
            className="img-about"
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
          />
        </div>

        <div className="about-space mobile-about">
          <h1>PrivatePolicy</h1>
          <p>
            At Best Cars, we understand the importance of protecting your
            privacy and personal information. Our Privacy Policy outlines our
            commitment to safeguarding the data we collect from our customers.
            We prioritize transparency and security in handling your
            information, ensuring that it is used only for the purposes outlined
            in our policy. We employ industry-standard measures to protect your
            data from unauthorized access, disclosure, or misuse. By using our
            services, you agree to abide by our Privacy Policy, which governs
            the collection, use, and retention of your information. If you have
            any questions or concerns regarding your privacy, please dont
            hesitate to contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
}
