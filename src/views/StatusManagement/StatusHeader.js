import React from "react";

import styled from "styled-components";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import logoJari from "@src/assets/image/lgJari.png";
import notiImage from "@src/assets/image/notification.png";
import helpImage from "@src/assets/image/question.png";
import settingImage from "@src/assets/image/setting.png";
import profileImage from "@src/assets/image/profile.png";

const customNavbar = {
  height: "10%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const Logo = styled.img`
  width: 25%;
  height: 20%;
  margin: 10%;
`;

const styleInput = {
  width: "40%",
  height: "10%",
  margin: "0 0 0 60%",
  border: "1px solid #0A4874CC",
  color: "#0A4874CC",
  fontSize: "1.2rem",
};

const buttonData = [
  { imageSrc: notiImage, altText: "Button 1" },
  { imageSrc: helpImage, altText: "Button 2" },
  { imageSrc: settingImage, altText: "Button 3" },
  { imageSrc: profileImage, altText: "Button 4" },
];

const buttonStyle = {
  width: "20%",
  height: "25%",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
};

const ButtonImage = ({ imageSrc, altText }) => (
  <button type="button" style={buttonStyle}>
    <img src={imageSrc} alt={altText} style={{ width: "40%" }} />
  </button>
);

const IssueHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-light sticky-top d-flex justify-content-between align-items-center"
      style={customNavbar}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 d-flex align-items-center">
            <a className="navbar-brand" href="/jari/app/issueTicket">
              <Logo src={logoJari} alt="Avatar Logo" />
            </a>
          </div>

          <div className="col-9 d-flex justify-content-end align-items-center">
            <div className="col-5 d-flex align-items-center justify-content-start">
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search"
                style={styleInput}
              />
            </div>

            <div className="col-4 d-md-flex justify-content-center">
              {buttonData.map((button, index) => (
                <ButtonImage
                  key={index}
                  imageSrc={button.imageSrc}
                  altText={button.altText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IssueHeader;
