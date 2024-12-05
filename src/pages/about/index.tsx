import React from "react";
import "./index.css";
import Header from "../home/components/header";

export default function About() {
  return (
    <div>
      <Header />
      <div id="containerAbout">
        <h1 style={{ color: "rgb(249, 151, 104)" }}>
          Your Journey, Your Story
        </h1>
        <h4 style={{ color: "gray", marginBottom: "5vh" }}>
          Explore, Connect, Inspire.
        </h4>
        <img
          src="/pictures/team.jpg"
          alt="team"
          style={{ width: "85vw", borderRadius: "20px" }}
        />
        <div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-6"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "85vw",
            marginTop: "5vh",
          }}
        >
          <div
            className="col"
            style={{ textAlign: "center", marginBottom: "5vh" }}
          >
            <h3>
              <b>2018</b>
            </h3>
            Founded
          </div>
          <div
            className="col"
            style={{ textAlign: "center", marginBottom: "5vhx" }}
          >
            <h3>
              <b>1.2M+</b>
            </h3>
            Travel stories
          </div>
          <div
            className="col"
            style={{ textAlign: "center", marginBottom: "5vh" }}
          >
            <h3>
              <b>50+</b>
            </h3>
            Employees
          </div>
          <div
            className="col"
            style={{ textAlign: "center", marginBottom: "5vh" }}
          >
            <h3>
              <b>50,000+</b>
            </h3>
            Active users
          </div>
          <div
            className="col"
            style={{ textAlign: "center", marginBottom: "5vh" }}
          >
            <h3>
              <b>2,000+</b>
            </h3>
            Destinations
          </div>
          <div
            className="col"
            style={{ textAlign: "center", marginBottom: "5vh" }}
          >
            <h3>
              <b>50+</b>
            </h3>
            Partners
          </div>
        </div>
        <div
          style={{
            paddingTop: "5vh",
            display: "flex",
            width: "85vw",
            fontSize: "2vh",
          }}
        >
          <div>
            <p>
              Our travel app, WanderSphere, is a vibrant online community
              designed to bring travel enthusiasts together from all corners of
              the world. Whether you’re a seasoned traveler or just starting to
              explore, our platform provides a space to share your stories,
              connect with like-minded individuals, and discover new
              destinations. <br />
              <br />
              Founded in 2018, WanderSphere began with a simple mission: to
              inspire and empower people to explore the world. Over the years,
              we’ve grown into a passionate team of 50+ dedicated members,
              including travel experts, developers, and community managers, all
              working together to create an engaging and user-friendly
              experience for our global audience.
              <br />
              <br />
              At WanderSphere, we believe that every journey has a story worth
              sharing. From breathtaking photos to practical travel tips, our
              users have contributed over 1.2 million posts, covering 10,000+
              destinations worldwide. Our platform also provides up-to-date
              travel information, personalized recommendations, and direct
              access to our team of 24/7 travel consultants, ensuring you have
              all the support you need to plan your perfect adventure.
              <br />
              <br />
              Join our growing community of 500,000+ active users and let
              WanderSphere be your go-to travel companion. Together, let’s
              explore, connect, and inspire!
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "rgb(249, 151, 104)", margin: "5vh" }}>
            Meet Our Team
          </h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
            <div
              className="card col"
              style={{
                margin: "1vh",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1vw",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                style={{
                  margin: "2vh",
                  width: "10vw",
                  height: "10vw",
                  borderRadius: "5vw",
                  objectFit: "cover",
                }}
                src="pictures/avatar1.jpg"
                className="card-img-top"
                alt="profile"
              />
              <div className="card-body">
                <h5 className="card-text" style={{ fontSize: "2vh" }}>
                  Emily Carter
                </h5>
                <p style={{ color: "gray", fontSize: "1vh" }}>
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <div
              className="card col"
              style={{
                margin: "1vh",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1vw",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                style={{
                  margin: "2vh",
                  width: "10vw",
                  height: "10vw",
                  borderRadius: "5vw",
                  objectFit: "cover",
                }}
                src="pictures/avatar2.jpg"
                className="card-img-top"
                alt="profile"
              />
              <div className="card-body">
                <h5 className="card-text" style={{ fontSize: "2vh" }}>
                  Daniel Hayes
                </h5>
                <p style={{ color: "gray", fontSize: "1vh" }}>
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <div
              className="card col"
              style={{
                margin: "1vh",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1vw",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                style={{
                  margin: "2vh",
                  width: "10vw",
                  height: "10vw",
                  borderRadius: "5vw",
                  objectFit: "cover",
                }}
                src="pictures/avatar3.jpg"
                className="card-img-top"
                alt="profile"
              />
              <div className="card-body">
                <h5 className="card-text" style={{ fontSize: "2vh" }}>
                  Kayla Holley
                </h5>
                <p style={{ color: "gray", fontSize: "1vh" }}>
                  Chief Marketing Officer
                </p>
              </div>
            </div>
            <div
              className="card col"
              style={{
                margin: "1vh",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1vw",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                style={{
                  margin: "2vh",
                  width: "10vw",
                  height: "10vw",
                  borderRadius: "5vw",
                  objectFit: "cover",
                }}
                src="pictures/avatar4.jpg"
                className="card-img-top"
                alt="profile"
              />
              <div className="card-body">
                <h5 className="card-text" style={{ fontSize: "2vh" }}>
                  Michael Thompson
                </h5>
                <p style={{ color: "gray", fontSize: "1vh" }}>
                  Chief Operating Officer
                </p>
              </div>
            </div>
            <div
              className="card col"
              style={{
                margin: "1vh",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1vw",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                style={{
                  margin: "2vh",
                  width: "10vw",
                  height: "10vw",
                  borderRadius: "5vw",
                  objectFit: "cover",
                }}
                src="pictures/avatar5.jpg"
                className="card-img-top"
                alt="profile"
              />
              <div className="card-body">
                <h5 className="card-text" style={{ fontSize: "2vh" }}>
                  Bo Liu
                </h5>
                <p style={{ color: "gray", fontSize: "1vh" }}>
                  Chief Financial Officer
                </p>
              </div>
            </div>
            <div
              className="card col"
              style={{
                margin: "1vh",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1vw",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                style={{
                  margin: "2vh",
                  width: "10vw",
                  height: "10vw",
                  borderRadius: "5vw",
                  objectFit: "cover",
                }}
                src="pictures/avatar6.jpg"
                className="card-img-top"
                alt="profile"
              />
              <div className="card-body">
                <h5 className="card-text" style={{ fontSize: "2vh" }}>
                  Xiaochuan Sun
                </h5>
                <p style={{ color: "gray", fontSize: "1vh" }}>
                  Head of Community Engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div>
          Email: wang.yujia5@northeastern.edu <br />
          Phone: +1 (408) 382-9900 <br />
          1234 Happy Street, San Jose,CA, USA
          <br />
          <br />
          © 2024 WanderSphere Lot.d. Designed by Yujia Wang. <br />
        </div>
        <h5>
          Exploration&nbsp; &nbsp;&nbsp;Culture&nbsp;&nbsp;&nbsp; Adventure
        </h5>
      </div>
    </div>
  );
}
