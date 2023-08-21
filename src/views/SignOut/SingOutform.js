import React, { useState } from "react";
import { Body, Title } from "@assets/StyleSignOut";
import { styled } from "styled-components";
import SignOutConfirm from "./SignOutConfirm";

const Mail = styled.p`
  margin: 0px;
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
export default function SignOutForm() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirm(true);
  };
  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <Body
      style={{ width: "15rem", height: "8rem", right: "1rem", top: "4rem" }}
    >
      <div className="col-12" style={{ margin: "0.5rem 1rem" }}>
        <Title>
          <strong>Account</strong>
        </Title>
      </div>
      <div className="col-12 d-flex " style={{ marginLeft: "1rem" }}>
        <div class="col-3">
          <img
            src="#"
            class="rounded-circle"
            width="50rem"
            height="50rem"
            border="1px solid black"
          />
        </div>
        <div className="col-8">
          <Title style={{ marginBottom: "0" }}>
            <strong>Admin</strong>
          </Title>
          <Mail>...@gmail.com</Mail>
        </div>
      </div>

      <div
        className="col-12"
        style={{ borderTop: "1px solid rgba(223, 223, 223, 1)" }}
      >
        <Title>
          <button
            style={{
              border: "none",
              background: "none",
              color: "rgba(10, 72, 116, 1)",
              marginLeft: "0.6rem",
            }}
            onClick={handleLogoutClick}
          >
            <strong>Log out</strong>
          </button>
        </Title>
      </div>
      {showConfirm && (
        <CenteredContainer>
          <SignOutConfirm onClose={handleCloseConfirm} />
        </CenteredContainer>
      )}
    </Body>
  );
}
