import { useState } from "react";

import { styled } from "styled-components";
import FormSearch from "./FormSearch";

import logojari from "@assets/image/lgJari.png";
import notification from "@assets/image/notification.png";
import helpImage from "@src/assets/image/question.png";
import settingImage from "@src/assets/image/setting.png";
import profileImage from "@src/assets/image/profile.png";
import SignOutForm from "@views/SignOut/SingOutform";

const Image = styled.img`
  width: ${(props) =>
    props.logojari ? "7rem" : props.icon ? "2.5rem" : "4.5rem"};
  margin-top: ${(props) =>
    props.logojari ? "-1rem" : props.icon ? "0" : "0.2rem"};
  margin-left: ${(props) =>
    props.logojari ? "0" : props.icon ? "0" : "-3rem"};
  padding: ${(props) => (props.icon ? "0 0.3rem" : "0")};
`;

export default function HeaderForm() {
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const handleProfileClick = () => {
    setShowLogoutButton(!showLogoutButton);
  };
  const handleSignOut = () => {
    setShowLogoutButton(false);
  };
  return (
    <nav
      className="navbar p-0 container-fluid"
      style={{
        borderBottom: "3px solid rgba(0, 0, 0, 0.25)",
        position: "fixed",
        background: "white",
        top: "0",
        left: "0",
        right: "0",
        height: "12vh",
        zIndex: "10",
      }}
    >
      <div className="col-3 mr-3">
        <Image logojari="true" src={logojari} alt="Logo Jari"></Image>
      </div>
      <div className="d-flex col-4 justify-content-end ">
        <FormSearch
          text="Search"
          style={{ border: "1px solid rgba(10, 72, 116, 0.8)" }}
        ></FormSearch>

        <div className="col-4 d-flex">
          <Image icon="true" src={notification}></Image>
          <Image icon="true" src={helpImage}></Image>
          <Image icon="true" src={settingImage}></Image>
          <Image
            icon="true"
            src={profileImage}
            onClick={handleProfileClick}
          ></Image>
        </div>
      </div>
      {showLogoutButton && <SignOutForm onSignOut={handleSignOut} />}
    </nav>
  );
}
