import React, { useState, useEffect } from "react";
import { BodyForm } from "@assets/BodyForm";
import HeaderForm from "@views/SignUpVerificationAdmin/HeaderForm";
import MenuForm from "@views/SignUpVerificationAdmin/MenuForm";
import * as COMMON from "@constants/common";
import FormSearch from "@views/SignUpVerificationAdmin/FormSearch";
import { Button } from "@assets/Button";
import UserListTable from "@views/SignUpVerificationAdmin/UserListTable";
import {
  allAcceptUserAPI,
  allowAccessUserAPI,
  denyAccessUserAPI,
  getUnapprovedUserAPI,
  searchUserAPI,
} from "@src/service/UserService";
export default function AccountManegamnet() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  //---------------Helper------------------//

  const fetchUserData = () => {
    getUnapprovedUserAPI()
      .then((res) => {
        if (res?.status === 200 || res?.status === 201) {
          setUsers(res.data);
        } else {
          setUsers([]);
          setErr(res?.message);
        }
      })
      .catch((err) => {
        console.log("DEBUG --> get user list", err);
        setUsers([]);
      });
  };
  const handleAllow = (username) => {
    allowAccessUserAPI(username)
      .then((res) => {
        if ([200, 201].includes(res?.status)) {
          fetchUserData(setUsers);
        }
      })
      .catch((err) => {
        console.log("DEBUG --> handle allow", err);
      });
  };

  const handleDeny = (username) => {
    denyAccessUserAPI(username)
      .then((res) => {
        if ([200, 201].includes(res?.status)) {
          fetchUserData(setUsers);
        }
      })
      .catch((err) => {
        console.log("DEBUG --> handle deny", err);
      });
  };

  const handleAllAccept = () => {
    allAcceptUserAPI()
      .then((res) => {
        if ([200, 201].includes(res?.status)) {
          fetchUserData(setUsers);
        }
      })
      .catch((err) => {
        console.log("DEBUG --> handle allow", err);
      });
  };

  const handleSearch = (value) => {
    searchUserAPI(value)
      .then((res) => {
        if ([200, 201].includes(res?.status)) {
          setUsers(res.data);
        } else {
          setUsers([]);
          setErr("No Result Found");
        }
      })
      .catch((err) => {
        console.log("DEBUG --> handle search", err);
        setUsers([]);
      });
  };

  //---------------Effect------------------//
  useEffect(() => {
    fetchUserData();
  }, []);

  //---------------Return jsx------------------//

  return (
    <>
      <HeaderForm></HeaderForm>
      <MenuForm text="Access request"></MenuForm>
      <BodyForm>
        <p
          className="row mb-0 mx-0 mt-4"
          style={{ fontSize: "22px", paddingLeft: "8rem" }}
        >
          {COMMON.CONTENT_ACCESSREQUEST}
        </p>
        <div className="row d-flex mx-0 align-items-center justify-content-around">
          <FormSearch
            className="col-8"
            text="Enter username or email address"
            onSubmit={handleSearch}
          ></FormSearch>
          <Button
            className="col-2"
            style={{
              width: "7rem",
              border: "none",
              fontSize: "1rem",
              borderRadius: "10px",
            }}
            onClick={handleAllAccept}
          >
            <strong>ACCEPT ALL</strong>
          </Button>
        </div>

        <UserListTable
          userList={users}
          actions={{ handleAllow, handleDeny }}
          style={{ color: "blue" }}
        ></UserListTable>
        {err && (
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              marginTop: "13rem",
            }}
          >
            {err}
          </p>
        )}
      </BodyForm>
    </>
  );
}
