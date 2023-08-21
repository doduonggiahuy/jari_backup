import SignUpForm from "../views/SignUp/SignUpForm";
import React from "react";
import { styled } from "styled-components";
const DivContainer = styled.div`
  padding: 0px;
  height: 100vh;
  background: linear-gradient(to right, #a5c5fe, #fbfdff);
`;
const DivNav = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.6);
  padding: 10px;
  height: fit-content;
`;
const ImgLogo = styled.img`
  margin: 0px 20px;
  width: 20%;
`;
const PText = styled.p`
  color: rgba(10, 72, 116, 1);
  text-align: center;
  font-size: 24px;
  position: relative;
  top: -3rem;
`;
const A = styled.a`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  font-family: "Roboto", sans-serif;
`;
export default function SignUpUI() {
  return (
    <DivContainer className="container-fluid d-flex flex-column">
      <DivNav>
        <ImgLogo
          className="rounded d-block"
          src={process.env.REACT_APP_IMAGE_LOGO_MOBIFONE}
          alt="Not Available"
        ></ImgLogo>
      </DivNav>
      <div className="container-fluid row gx-5 flex-fill">
        <div className="col-6 d-flex flex-column p-1">
          <div>
            <img
              className="rounded mx-auto d-block"
              style={{ width: "25%", marginTop: "4rem" }}
              src={process.env.REACT_APP_IMAGE_LOGO_JARI}
              alt="Not Available"
            ></img>
          </div>

          <div style={{ height: 0 }}>
            <PText>
              “A comprehensive solution for <br></br>
              intelligent task management”
            </PText>
          </div>
          <div className="row flex-grow-1">
            <div className="col-6 ">
              <img
                style={{ width: "25vw", position: "absolute", bottom: 0 }}
                src={process.env.REACT_APP_IMAGE_LEFT}
                alt="Not Available"
              ></img>
            </div>
            <div className="col-6">
              <img
                style={{ width: "25vw", position: "absolute", bottom: 0 }}
                src={process.env.REACT_APP_IMAGE_RIGHT}
                alt="Not Available"
              ></img>
            </div>
          </div>
        </div>
        <div
          className="col-6 d-flex flex-column"
          style={{ paddingLeft: "100px", paddingRight: "0px" }}
        >
          <SignUpForm></SignUpForm>
          <A
            href="#"
            className="text-center mt-3"
            style={{ color: "rgba(0, 0, 0, 1)" }}
          >
            Already have an account? Log in
          </A>
        </div>
      </div>
    </DivContainer>
  );
}
