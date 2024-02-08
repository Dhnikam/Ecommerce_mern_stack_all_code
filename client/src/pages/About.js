import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our Ecommerce app! We are dedicated to providing you with a seamless shopping experience, offering a wide range of products from various categories.

            Whether you're looking for the latest fashion trends, electronic gadgets, home decor, or anything else, we've got you covered. Our user-friendly interface makes it easy to browse and purchase your favorite items.

            At Ecommerce, customer satisfaction is our top priority. We strive to deliver quality products and exceptional service. If you have any questions or need assistance, feel free to contact our support team.

            Thank you for choosing us for your online shopping needs. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
