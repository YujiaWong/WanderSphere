import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(); //创建了一个“数据存储库”，专门用来存放你需要共享的数据（比如用户信息、登录状态等）,为了使得AuthContextProvider这个新建组件包裹下的组件都能获得用户信息

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const login = () => {
    setCurrentUser({
      id: 1,
      userName: "Xiaochuan Sun",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVEHIRD6Xn_KNaud4rPrVUT397HohLueaOQ&s",
    });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    //返回标签时要提供全局的数据
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
