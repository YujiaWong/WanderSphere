import React, { useContext } from "react";
import NavBar from "../../components/navBar";
import RightBar from "../../components/rightBar";
import LeftBar from "../../components/leftBar";
import { Outlet, Route, Routes } from "react-router";
import { Navigate } from "react-router";
import BlogHome from "../blogHome";
import Profile from "../profile";
import "./index.scss";
import { AuthContext, AuthContextProvider } from "../../context/authContext";

export default function Blog() {
  const currentUser = useContext(AuthContext); //从AuthContext这个库里提取出来当前用户

  const ProtectedRoute = ({ children }: { children: any }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  return (
    <div>
      <ProtectedRoute>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 嵌套路由，,父路由包含子路由。子路由内容会渲染在 Outlet */}
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<BlogHome />} />
            <Route path="profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </ProtectedRoute>
    </div>
  );
}
