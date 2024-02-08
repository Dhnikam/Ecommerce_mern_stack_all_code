import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At Our Company, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you use our services. Please take a moment to read through it
            and understand our practices.
          </p>
          <p>
            Information we collect may include your name, email address,
            shipping address, and more, depending on the services you use. We
            use this information to provide you with a better shopping
            experience and to fulfill your orders.
          </p>
          <p>
            Your privacy is important to us, and we do not share your personal
            information with third parties without your consent.
          </p>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at privacy@ourcompany.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
