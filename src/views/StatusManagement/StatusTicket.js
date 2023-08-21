import React from "react";
import styled from "styled-components";
import bugIcon from "@assets/image/bugIcon.png";
import storyIcon from "@assets/image/storyIcon.png";
import taskIcon from "@assets/image/taskIcon.png";

const TicketContainer = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  height: 15vh;
`;

const iconStatus = {
  width: "10%",
  height: "10%",
  cursor: "pointer",
};

const buttonEdit = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "1.5rem",
  paddingTop: "100%",
};

const IdPara = styled.p`
  font-size: 1.2rem;
  padding-left: 2%;
  padding-bottom: 1%;
`;

const IssueTicket = ({ task }) => {
  return (
    <TicketContainer className="container">
      <div className="row">
        <div className="col-lg-9 col-sm-10">
          <p class="h5">{task?.ticketName}</p>
          <p style={{ fontSize: "1rem" }}>{task.sprint}</p>
          <div className="d-flex">
            <img
              style={iconStatus}
              src={
                task.type === "Bug"
                  ? bugIcon
                  : task.type === "Story"
                  ? storyIcon
                  : task.type === "Task"
                  ? taskIcon
                  : ""
              }
              alt=""
            />
            <IdPara class="fs-6">{task.id}</IdPara>
          </div>
        </div>
        <div className="col-lg-3 col-sm-2 d-flex flex-column justify-content-center align-items-center">
          <img src={task.avatar} alt="" />
          <div>
            <button style={buttonEdit}>...</button>
          </div>
        </div>
      </div>
    </TicketContainer>
  );
};

export default IssueTicket;
