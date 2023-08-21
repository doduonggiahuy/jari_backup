import React from "react";

const MainTest = () => {
  localStorage.setItem("token", 123456789);
  return (
    <div>
      <h2>Đây là trang main</h2>
      <p>Token hiện tại là: {localStorage.getItem("token")}</p>
    </div>
  );
};

export default MainTest;
