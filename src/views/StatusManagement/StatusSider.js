import { Breadcrumb } from "antd";
import React from "react";
import { styled } from "styled-components";
import checkIcon from "@src/assets/image/Checklist.png";
import rubikIcon from "@src/assets/image/RubikCube.png";

const SiderContainer = styled.div`
  background-color: #f8fbfc;
  height: 100%;
  padding: 0;
`;

const SiderLink = styled(Breadcrumb)`
  &.ant-breadcrumb {
    font-size: 1rem;
    color: #0a4874;
    font-style: italic;

    a {
      color: #0a4874;
      text-decoration: none;
    }
  }
`;

const SiderSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;

  div {
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;

const SiderSelection = styled.div`
  display: flex;
  flex-direction: column;
  height: 84%;
  padding-left: 1.5rem;

  p {
    display: flex;
    align-items: center;
    height: 8%;
    margin-bottom: 0;
  }

  div {
    display: flex;
    align-items: center;
    height: 8%;

    &:hover {
      /* Để hover tạm thời sau này làm logic sẽ sửa lại thành event OnClick */
      background-color: #ebf1f3;
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;

const IssueSider = () => {
  return (
    <SiderContainer className="col-lg-2 col-sm-3">
      <SiderSection
        style={{
          height: "8%",
          borderBottom: "1px solid #ccc",
        }}
      >
        <SiderLink
          items={[
            {
              title: <a href="/#">User</a>,
            },
            {
              title: <a href="/#">List Project</a>,
            },
            {
              title: <a href="/#">Project Name</a>,
            },
          ]}
        />
      </SiderSection>
      <SiderSection
        style={{
          height: "8%",
          backgroundColor: "#ebf1f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: "0", color: "#0A4874CC" }}>
          Project - 1
        </p>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            marginRight: "1rem",
            color: "#0A4874CC",
            fontSize: "2rem",
          }}
        >
          &gt;
        </button>
      </SiderSection>
      <SiderSelection>
        <p>PLANNING</p>
        <div>
          <img src={checkIcon} alt="checklist" />
          Backlog
        </div>
        <div>
          <img src={rubikIcon} alt="board" />
          Board
        </div>
      </SiderSelection>
    </SiderContainer>
  );
};

export default IssueSider;
