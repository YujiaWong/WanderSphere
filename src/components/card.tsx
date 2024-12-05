import React from "react";
import { IoLocationOutline } from "react-icons/io5";
export default function Card() {
  return (
    <div
      className="cardShadow border p-2 mb-5 rounded-4 m-3 "
      style={{ transition: "box-shadow 0.5s ease", width: "300px" }}
    >
      <a href="#/tour">
        <img
          src="pictures/scene1.jpg"
          className="card-img-top"
          style={{
            objectFit: "cover",
            height: "200px",
            width: "100%",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
          alt="..."
        />
      </a>
      <div
        className="card-body"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h6 className="card-title">
            <b>&nbsp;Karangan Beach</b>
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
            Labuan Bajo, Indonesia
          </p>
        </div>
        <button className="btn btn-outline-warning btn-sm rounded-4">
          <b>Go Now!</b>
        </button>
      </div>
    </div>
  );
}
