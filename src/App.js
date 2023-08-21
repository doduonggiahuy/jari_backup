import React, { useState, useEffect } from "react";

import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { Spin } from "antd";

import * as COMMON from "@constants/common";

import AppContent from "@screens/AppContent";
import Login from "@screens/Login";
import boot from "./boot";

function App() {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = await boot();
      setIsAuth(true);
      setIsAuthChecked(true);
    };

    checkAuthStatus();
  }, []);

  if (!isAuthChecked) {
    return (
      <div
        style={{
          color: "black",
          fontSize: "1.2rem",
          textAlign: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
        }}
      >
        <Spin style={{ paddingRight: "8px" }} />
        {COMMON.BOOT_LOADING}
      </div>
    );
  }

  return (
    <div className="App">
      <ErrorBoundary>{isAuth ? <AppContent /> : <Login />}</ErrorBoundary>
    </div>
  );
}

export default App;
