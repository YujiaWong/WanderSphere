import React from "react";
import "./index.css";
import Header from "../home/components/header";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router";
import * as db from "../database";

export default function Destination() {
  const { destinationName } = useParams();
  const destinations = db.Desinations;
  const target = destinations.find((d: any) => {
    return d.title === destinationName;
  });
  return (
    <div id="destinationContainer">
      <div
        id="background"
        style={{
          backgroundImage: `url(${target?.image[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
        }}
      >
        <Header />
        <div id="info">
          <div>
            <FaStar
              style={{
                color: "orange",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            />
            <span
              style={{
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              &nbsp;{target?.star}
            </span>
          </div>
          <h1>{target?.title}</h1>
          <p>{target?.location}</p>
          <p style={{ fontSize: "2vh" }}>{target?.introduction}</p>
          <div style={{ fontSize: "2vh" }}>
            <p>{target?.policy}</p>
            <p>{target?.openHour}</p>
          </div>
          <img
            src={`/${target?.image[1]}`}
            alt="pics"
            width={"300px"}
            height={"200px"}
            style={{
              border: "solid 4px orange",
              borderRadius: "20px",
              objectFit: "cover",
              marginBottom: "2vh",
            }}
          />
        </div>
      </div>
    </div>
  );
}
