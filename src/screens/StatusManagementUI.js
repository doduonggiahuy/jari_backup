import IssueContent from "@views/StatusManagement/StatusContent";
import IssueHeader from "@views/StatusManagement/StatusHeader";
import IssueSider from "@views/StatusManagement/StatusSider";
import React from "react";
import styled from "styled-components";

const CustomHtml = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  font-size: 1.2rem;
  padding: 0;
`;

const CustomRow = styled.div`
  height: 100%;
  padding: 0;
  margin-right: 0;
`;

export default function IssueTicketUI() {
  return (
    <CustomHtml>
      <IssueHeader />
      <CustomRow className="row">
        <IssueSider></IssueSider>
        <IssueContent></IssueContent>
      </CustomRow>
    </CustomHtml>
  );
}
