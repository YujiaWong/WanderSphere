import React, { useState } from "react"; // ✅ 1. 添加 useState，用于分页管理
import "./index.css";
import Header from "../home/components/header";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import * as db from "../database";

export default function Tour() {
  const destinations = db.Desinations;
  const navigate = useNavigate();
  // 分页
  const [currentPage, setCurrentPage] = useState(1); // 当前页
  const itemsPerPage = 20; // 每页显示20条数据

  const totalPages = Math.ceil(destinations.length / itemsPerPage); // 总页数
  const startIndex = (currentPage - 1) * itemsPerPage; // 当前页起始索引
  const paginatedDestinations = destinations.slice(
    startIndex,
    startIndex + itemsPerPage
  ); // 当前页数据

  const toDestinationPage = (destinationName: any) => {
    navigate(`/tour/${destinationName}`);
  };
  return (
    <div>
      <Header />
      <div id="tourContainer">
        <div
          style={{
            color: "rgb(249, 151, 104)",
            fontSize: "1.5rem",
            textWrap: "nowrap",
          }}
        >
          Explore Iconic Locations!
          <img src="pictures/travelIcon.jpg" alt="icon" width={"70px"} />
        </div>
        <p
          style={{
            paddingLeft: "10vw",
            paddingRight: "10vw",
            color: "gray",
            textAlign: "center",
          }}
        >
          Embark on a journey to explore the world’s most breathtaking
          landscapes and iconic landmarks. From majestic mountains to serene
          beaches, uncover hidden gems and unforgettable adventures. Your next
          destination awaits!
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4" id="cards">
          {paginatedDestinations.map(
            (
              d // 替换 destinations 为 paginatedDestinations
            ) => (
              <div
                key={d.title} // 添加 key，确保每个卡片唯一
                className="cardShadow border p-2 mb-4 rounded-4 m-3"
                style={{ transition: "box-shadow 0.5s ease", width: "300px" }}
              >
                <Link to={`/tour/${d.title}`}>
                  <img
                    src={d.image[0]}
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      width: "100%",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                    alt={d.title}
                  />
                </Link>
                <div
                  className="card-body"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h6 className="card-title">
                      <b>&nbsp;{d.title}</b>
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
                      {d.location}
                    </p>
                  </div>
                  <button
                    className="btn btn-outline-warning btn-sm rounded-4"
                    onClick={() => toDestinationPage(d.title)}
                  >
                    <b>Go Now!</b>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        {/* 分页按钮 */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {Array.from(
            { length: totalPages },
            (
              _,
              i // 根据总页数生成按钮
            ) => (
              <button
                key={i}
                className={`btn btn-sm ${
                  currentPage === i + 1 ? "btn-warning" : "btn-outline-warning" // 高亮当前页按钮
                }`}
                style={{ margin: "0 5px" }}
                onClick={() => setCurrentPage(i + 1)} // 切换页码
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
      {/* ----------------------footer --------------------------- */}
      <div id="footer">
        <div>
          Email: group8@northeastern.edu <br />
          Phone: +1 (408) 382-1234 <br />
          1234 Happy Street, San Jose,CA, USA
          <br />
          <br />
          © 2024 WanderSphere Lot.d. Designed by Group8. <br />
        </div>
        <h5>
          Exploration&nbsp; &nbsp;&nbsp;Culture&nbsp;&nbsp;&nbsp; Adventure
        </h5>
      </div>

      {/* <Routes>
        <Route path="/" element={<Navigate to="/tour" />}></Route>
        <Route path="/tour/:destinationName" element={<Destination />}></Route>
      </Routes> */}
    </div>
  );
}
