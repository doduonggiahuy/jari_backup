import React from "react";
import { Body, Header, Button, Title } from "@assets/StyleSignOut";
import signOut from "@components/SignOut";

export default function SignOutConfirm({ onClose }) {
  const handleLogout = () => {
    signOut();
  };
  const handleCancel = () => {
    onClose();
  };
  return (
    <Body
      className="row"
      style={{
        width: "20rem",
        boxShadow: "2px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Header className="col-12">
        <Title>
          <strong>Log out of your JARI account</strong>
        </Title>
      </Header>
      <div className="col-12 d-flex" style={{ margin: "1rem 1.5rem" }}>
        <div className="col-6">
          <Button
            style={{ color: "white", background: "rgba(10, 72, 116, 1)" }}
            onClick={handleLogout}
          >
            <strong>LOG OUT</strong>
          </Button>
        </div>
        <div className="col-6">
          <Button
            style={{
              color: "rgba(10, 72, 116, 1)",
              background: "rgba(235, 241, 243, 1)",
            }}
            onClick={handleCancel}
          >
            <strong>CANCEL</strong>
          </Button>
        </div>
      </div>
    </Body>
  );
}
