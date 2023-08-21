import React from "react";
import { styled } from "styled-components";

import mobiLogo from "@src/assets/image/MobiFone_logo.svg.png";

const Navbar = styled.div`
  background: linear-gradient(to right, #dbe8ff, #f7fbff);
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding-left: 1%;
`;

const SignInHeader = () => {
  return (
    <Navbar className="navbar navbar-expand-md sticky-top h-25">
      <div className="container-fluid" style={{ padding: "auto 1% auto" }}>
        <img
          className="navbar-branch"
          style={{
            width: "20%",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
          }}
          src={mobiLogo}
          alt=""
        />
      </div>
    </Navbar>
  );
};

export default SignInHeader;
