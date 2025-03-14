import React from "react";
import "./index.css";
import Header from "./components/header";
import { TbRoadSign } from "react-icons/tb";
import { RiCommunityFill } from "react-icons/ri";
import { PiAirplaneInFlightBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io5";
import { FaInfinity } from "react-icons/fa";
import { MdMusicOff } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa";
import { GiPear } from "react-icons/gi";
import * as db from "../database";
import { Link, useNavigate } from "react-router";
import AIChatBot from '../../components/aiChatBot';

export default function Home() {
  const sixCards = db.Desinations.slice(0, 6);
  const navigate = useNavigate();
  const toTour = () => {
    navigate("/tour");
  };
  const toContact = () => {
    navigate("/Contact");
  };
  return (
    <div>
      <Header />
      {/* ------------------------bigAds------------------------- */}
      <div id="bigAds">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: "4vw",
              fontWeight: "700",
              textAlign: "left",
            }}
          >
            Explore the world,
            <br />
            <span style={{ color: "rgb(229, 151, 104)" }}> Share</span> <br />
            The adventure
          </p>
          <p className="d-none d-md-block" style={{ width: "35vw" }}>
            Whether you're seeking breathtaking destinations or hidden gems, we
            make exploration easy and exciting. Share your adventures at the
            blog and turn every trip into a story worth telling —start your
            journey with us today!
          </p>
          <button
            type="button"
            className="btn  rounded-3 btn-sm"
            onClick={toTour}
            style={{
              padding: "10px",
              width: "10vw",
              backgroundColor: "rgb(229, 151, 104)",
              color: "white",
              fontWeight: "700",
              fontSize: "1vw",
            }}
          >
            Explore Now!
          </button>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
            }}
          >
            <li>
              <Link to="/tour">
                <img
                  src="pictures/scene2.jpg"
                  alt="scene1"
                  style={{ borderRadius: "1vw", width: "18vw" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/tour">
                <img
                  src="pictures/scene3.jpg"
                  alt="scene2"
                  style={{
                    borderRadius: "1vw",
                    width: "12vw",
                    position: "relative",
                    left: "5vw",
                    top: "-3vw",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link to="/tour">
                <img
                  src="pictures/scene1.jpg"
                  alt="scene3"
                  style={{
                    borderRadius: "1vw",
                    width: "12vw",
                    position: "relative",
                    bottom: "-20vw",
                    right: "-3vw",
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* -------------------------bigAds END--------------------- */}
      <AIChatBot/>
      <div id="paddingFramework">
        {/* ------------------recommendation START------------------ */}
        <div id="recommendation">
          <div className="row">
            <img
              src="pictures/picofthree.png"
              alt="threePics"
              //width={"40%"}
              //height={"40%"}
              className="col-sm-12 col-md-5 "
              style={{ marginTop: "10vh" }}
            />
            <div
              className="col-sm-12 col-md-6 "
              style={{
                marginLeft: "2rem",
                marginTop: "10vh",
                display: "flex",
                flexDirection: "column",
                //width: "60%",
              }}
            >
              <p>
                <span
                  style={{
                    color: "rgb(229, 151, 104)",
                    fontSize: "2vh",
                    fontWeight: "700",
                  }}
                >
                  About ——{" "}
                </span>
                <br />
                <b
                  style={{
                    fontSize: "2vh",
                  }}
                >
                  We Recommend
                </b>
                <br />
                <span
                  style={{
                    fontSize: "2vh",
                  }}
                >
                  Beautidul Destinations
                  <br /> Every Month
                </span>
              </p>
              <p>
                Let's chose your dream destinations here we provide many
                destinations and we offer the most convienient way for you to
                check.
              </p>
              <div id="threeCards" style={{ marginTop: "5vh" }}>
                <div className="card text-bg-light p-2">
                  <div className="card-body">
                    <b>2000+ </b>
                    <br />
                    Our Explores
                  </div>
                </div>
                <div className="card text-bg-light p-2">
                  <div className="card-body">
                    <b>100+</b> <br /> Destinations
                  </div>
                </div>
                <div className="card text-bg-light p-2">
                  <div className="card-body ">
                    <b>20+</b> <br /> Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------recommendation END--------------- */}
        {/* -----------------------features START------------------- */}
        <div id="Features" className="row">
          <div
            style={{
              paddingTop: "100px",
              marginLeft: "2rem",
              paddingRight: "5rem",
            }}
            className="col-sm-12 col-md-3"
          >
            <p>
              <span
                style={{
                  color: "rgb(229, 151, 104)",
                  fontSize: "2vh",
                  fontWeight: "700",
                }}
              >
                What We Offer ——{" "}
              </span>
              <br />
              <b
                style={{
                  fontSize: "2vh",
                }}
              >
                Best Features
              </b>
              <br />
              <span
                style={{
                  fontSize: "2vh",
                }}
              >
                For You
              </span>
            </p>
            <p>
              we will provide the best features for those of you who want to
              travel comfortably with your family.
            </p>
          </div>
          <div
            className="col-sm-12 col-md-8"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "80px",
            }}
          >
            <div
              className="cardShadow border p-3 mb-5 rounded m-3 "
              style={{ transition: "box-shadow 0.5s ease" }}
            >
              <TbRoadSign
                style={{ color: "rgb(229, 151, 104)", fontSize: "3vw" }}
              />
              <br />
              <b style={{ fontSize: "1.5vw" }}>Lots of Choices </b>
              <br />
              We offer a wide selection of travel destinations to help you
              explore the most captivating places on Earth
            </div>

            <div
              className="cardShadow border p-3 mb-5 m-3 rounded"
              style={{ transition: "box-shadow 0.5s ease" }}
            >
              <PiAirplaneInFlightBold
                style={{ color: "rgb(229, 151, 104)", fontSize: "3vw" }}
              />
              <br />
              <b style={{ fontSize: "1.5vw" }}>Best Tour Guide </b>
              <br />
              Let us assist in creating a personalized travel itinerary tailored
              to your interests
            </div>
            <div
              className="cardShadow border p-3 mb-5 m-3 rounded"
              style={{ transition: "box-shadow 0.5s ease" }}
            >
              <RiCommunityFill
                style={{ color: "rgb(229, 151, 104)", fontSize: "3vw" }}
              />
              <br />
              <b style={{ fontSize: "1.5vw" }}>Travelers' Home </b>
              <br />
              Join our travel community to connect with fellow travelers from
              around the world.
            </div>
          </div>
        </div>
        {/* -------------------------Features END--------------------- */}
        {/* -----------------------sixCards Start--------------------- */}
        <div id="sixCards">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
            {sixCards.map((card: any) => (
              <div
                key={card.destinationId}
                className="cardShadow border p-2 mb-5 rounded-4 m-3 "
                style={{ transition: "box-shadow 0.5s ease", width: "400px" }}
              >
                <a href="#/tour">
                  <img
                    src={card.image[0]}
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      width: "100%",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                    alt={card.title}
                  />
                </a>
                <div
                  className="card-body"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h6 className="card-title">
                      <b>&nbsp;{card.title}</b>
                    </h6>
                    <p
                      className="card-text"
                      style={{
                        fontSize: "14px",
                        color: "gray",
                        marginTop: "5px",
                      }}
                    >
                      <IoLocationOutline
                        style={{
                          color: "rgb(229, 151, 104)",
                          fontSize: "16px",
                          fontWeight: "700",
                        }}
                      />
                      {card.location}
                    </p>
                  </div>
                  <button
                    className="btn  btn-sm rounded-4"
                    style={{
                      borderColor: "rgb(229, 151, 104)",
                      color: "rgb(229, 151, 104)",
                    }}
                  >
                    <b>Go Now!</b>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="button"
              className="btn"
              onClick={toTour}
              style={{
                backgroundColor: "rgb(229, 131, 104)",
                color: "white",
                borderRadius: "15px",
                padding: "10px",
                paddingLeft: "5vh",
                paddingRight: "5vh",
                fontSize: "1rem",
                textWrap: "nowrap",
              }}
            >
              View More
            </button>
          </div>
        </div>
        {/* ---------------------sixCards END ------------------------ */}
      </div>
      <div
        style={{
          marginTop: "8vh",
          width: "100%",
          backgroundColor: "rgb(255, 234, 204)",
          display: "flex",
        }}
      >
        <div
          className="d-none d-md-block"
          style={{ padding: "20px", paddingLeft: "5vh" }}
        >
          <img
            src="pictures/conversation.jpg"
            height={"500px"}
            width={"500px"}
            style={{
              objectFit: "cover",
              border: "10px solid black",
              borderRadius: "20px",
            }}
            alt="conversation"
          />
        </div>
        <div style={{ paddingLeft: "10vh", paddingTop: "5vh" }}>
          <p>
            <h1>
              <b>
                Looking to plan your next adventure? <br />
                We're here to help!
              </b>
            </h1>
            <br />
            Whether you're dreaming of a relaxing beach getaway, an exciting
            city tour, or a thrilling outdoor adventure, we provide expert
            advice and personalized services to make your journey seamless.
            <br />
            <br />
            <div style={{ paddingBottom: "2vh" }}>
              <IoIosCheckmarkCircle />{" "}
              <b>&nbsp;Personalized Travel Itineraries</b>
              <br />
            </div>
            <div style={{ paddingBottom: "2vh" }}>
              <IoIosCheckmarkCircle />
              <b>&nbsp; Destination Recommendations</b>
              <br />
            </div>
            <div style={{ paddingBottom: "2vh" }}>
              <IoIosCheckmarkCircle />
              <b>&nbsp; Travel Arrangements</b>
              <br />
            </div>
            <div style={{ paddingBottom: "2vh" }}>
              {" "}
              <IoIosCheckmarkCircle />
              <b>&nbsp; Local Insights and Tips</b>
              <br />
            </div>
          </p>
          <button
            onClick={toContact}
            style={{ marginTop: "2vh" }}
            className="btn btn-lg btn-dark"
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* --------------contact END--------------------------- */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5vh",
        }}
      >
        <h4 style={{ fontWeight: "700" }}>Trusted By these mega brands</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5vh",
            marginBottom: "5vh",
          }}
        >
          <div style={{ marginRight: "2vw", fontSize: "1.2rem" }}>
            <IoLogoGoogle /> Goooogle
          </div>
          <div style={{ marginRight: "2vw", fontSize: "1.2rem" }}>
            <FaInfinity /> Mata
          </div>
          <div style={{ marginRight: "2vw", fontSize: "1.2rem" }}>
            <MdMusicOff /> TokTik
          </div>
          <div style={{ marginRight: "2vw", fontSize: "1.2rem" }}>
            <FaInternetExplorer /> Ontel
          </div>
          <div style={{ marginRight: "2vw", fontSize: "1.2rem" }}>
            <GiPear /> Pear
          </div>
        </div>
      </div>
    </div>
  );
}
