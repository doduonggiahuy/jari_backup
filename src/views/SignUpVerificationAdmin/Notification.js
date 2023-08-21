import React from "react";
import { Body, Header, Button, Title } from "@assets/StyleSignOut";

export default function SignOutConfirm({ text, onSubmit, ...props }) {
  return (
    <div
      className="position-fixed"
      style={{
        background: "#BBC0C399",
        zIndex: "1",
        width: "100vw",
        height: "100vh",
        top: "0",
        right: "0",
      }}
    >
      <Body
        className="row justify-items-center text-center"
        style={{
          width: "20rem",
          boxShadow: "2px 4px rgba(0, 0, 0, 0.25)",
          top: "50%",
          left: "50%",
          color: "#0A4874",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
        }}
      >
        <Header className="col-12">
          <Title>
            <strong>NOTIFICATION</strong>
          </Title>
        </Header>
        <div className="text-center my-3">
          <p className="my-0">
            The account has been <strong>{text}</strong>
          </p>
        </div>
        <div className="col-12 mb-2 mx-0">
          <Button
            style={{
              color: "white",
              background: "rgba(10, 72, 116, 1)",
              padding: "0 20px",
              fontSize: "1.1rem",
            }}
            onClick={onSubmit}
          >
            <strong>OK</strong>
          </Button>
        </div>
      </Body>
    </div>
  );
}
