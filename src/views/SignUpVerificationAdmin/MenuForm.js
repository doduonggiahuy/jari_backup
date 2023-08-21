import React from "react";
import { Navbar } from "@assets/Navbar";
import { Button } from "@assets/Button";

export default function MenuForm({ text }) {
  const Address = (props) => {
    return props.text;
  };

  return (
    <Navbar>
      <a
        href="#"
        className="d-flex my-0"
        style={{ color: "rgba(10, 72, 116, 1)" }}
      >
        <i>
          Admin/ <Address text={text}></Address>
        </i>
      </a>
      <Button className="text-uppercase d-flex justify-content-center align-items-center">
        <strong>
          <Address text={text}></Address>
          <i
            className="fa-solid fa-greater-than position-absolute"
            style={{ right: "0.5rem", marginTop: "0.32rem" }}
          ></i>
        </strong>
      </Button>
    </Navbar>
  );
}
