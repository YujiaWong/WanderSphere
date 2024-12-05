import React from "react";
import Header from "../home/components/header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <img
          className="d-none d-lg-block"
          src="/pictures/contact.jpg"
          alt="contact"
          style={{
            border: "solid 6px orange",
            borderRadius: "30px",
            width: "450px",
            height: "80vh",
            objectFit: "cover",
            marginLeft: "5vw",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            marginTop: "10vh",
            paddingLeft: "10vw",
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "10vh" }}>Contact</h1>
          <div
            className="row row-cols-1 row-cols-sm-2"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <div className="col pb-4">
              123 Main St, Springfield, NY <br />
              Monday to Friday: 9:00 AM - 5:00 PM <br />
              <br />
              456 Elm St, Chicago, IL <br />
              Monday to Friday: 8:00 AM - 6:00 PM <br />
              <br />
              789 Oak St, Peoria, CA <br />
              Monday to Sunday: 10:00 AM - 8:00 PM
            </div>
            <div className="col " style={{ paddingRight: "2px" }}>
              Email: wang.yujia5@northeastern.com
              <br /> Fax: +1 (408) 382-1234 <br />
              Phone: +1 (408) 382-1234
            </div>
          </div>
          <div style={{ color: "gray", marginTop: "10vh" }}>
            "We Looking forward to providing you with an exceptional service
            experience!"
          </div>
        </div>
      </div>
    </div>
  );
}
