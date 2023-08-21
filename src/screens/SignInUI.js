import React from "react";

import { styled } from "styled-components";

import SignInForm from "../views/SignIn/SignInForm";
import SignInHeader from "../views/SignIn/SignInHeader";
import leftImage from "@src/assets/image/leftImage.png";
import rightImage from "@src/assets/image/rightImage.png";

const HTMLBODY = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  overflow: hidden;
  height: 100vh;
  font-size: 1.2rem;
  padding: 0;
  align-items: center;
  background: linear-gradient(to right, #a5c5fe, #fbfdff);
  font-family: "Roboto", sans-serif;
`;

const SignInUI = () => {
  return (
    <HTMLBODY className="container-fluid">
      <div className="row">
        <SignInHeader />
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-2">
          <img
            className="position-absolute bottom-0 start-0 rounded d-block w-25"
            src={leftImage}
            alt="left_image"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8 d-flex flex-column justify-content-center align-items-center">
          <SignInForm />
        </div>
        <div className="col-lg-4 col-md-3 col-sm-2">
          <img
            className="position-absolute bottom-0 end-0 rounded d-block w-25"
            src={rightImage}
            alt="right_image"
          />
        </div>
      </div>
    </HTMLBODY>
  );
};

export default SignInUI;
