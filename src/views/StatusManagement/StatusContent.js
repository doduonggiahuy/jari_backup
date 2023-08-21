import { Input, Button, Dropdown, Menu } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import IssueBoardTicket from "./StatusMainBoard";

const StyledIssueContent = styled.div`
  .row {
    display: flex;
    align-items: center;
  }
`;

const StyledRow = styled.div`
  margin: 0;
  height: 8%;
  align-items: center;
  p {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: #0a4874;
  }
  Button {
    border: none;
    background-color: #ebf1f3;
    color: #0a4874;
  }
`;

const StyleInput = styled(Input)`
  width: 10%;
  border: 1px solid #0a4874cc;
`;

const stylePara = {
  fontSize: "1.2rem",
  marginRight: "4px",
  fontWeight: "300",
  color: "#000",
};

const CustomDropdown = styled(Button)`
  border: none;
  background: transparent;
  color: #0a4874;
  padding: 0;
  width: 8%;
  box-shadow: none;
`;

const styleRow2 = { height: "8%", marginLeft: "0.7%" };

const IssueContent = () => {
  // Sample data for checklist items
  const checklistData = [
    { id: 1, title: "Checklist Item 1" },
    { id: 2, title: "Checklist Item 2" },
    { id: 3, title: "Checklist Item 3" },
  ];

  // Function to render checklist items
  const renderChecklist = (data) => {
    return (
      <Menu>
        {data.map((item) => (
          <Menu.Item key={item.id}>{item.title}</Menu.Item>
        ))}
      </Menu>
    );
  };

  return (
    <StyledIssueContent className="col-lg-10 col-sm-9">
      <StyledRow className="row d-flex justify-content-between">
        <p className="col-lg-3 col-sm-2">JARI - SPRINT -1</p>
        <p className="col-lg-4 col-sm-6 text-center text-danger">
          SOMETHING WENT WRONG!!!
        </p>
        <div className="col-lg-3 col-sm-2 d-flex align-items-center">
          <p style={stylePara}>n days remaining</p>
          <Button className="rounded-button">COMPLETE SPRINT</Button>
        </div>
      </StyledRow>

      <div className="row d-flex align-content-center" style={styleRow2}>
        <StyleInput
          suffix={<SearchOutlined style={{ color: "#0A4874CC" }} />}
        />
        <Dropdown
          overlay={renderChecklist(checklistData)}
          placement="bottomLeft"
          trigger={["click"]}
        >
          <CustomDropdown>
            Type
            <DownOutlined />
          </CustomDropdown>
        </Dropdown>

        <Dropdown
          overlay={renderChecklist(checklistData)}
          placement="bottomLeft"
          trigger={["click"]}
        >
          <CustomDropdown>
            Asignee
            <DownOutlined />
          </CustomDropdown>
        </Dropdown>
      </div>
      <IssueBoardTicket></IssueBoardTicket>
    </StyledIssueContent>
  );
};

export default IssueContent;
