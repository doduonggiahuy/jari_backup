import React, { useState, useEffect } from "react";
import HeaderForm from "@views/SignUpVerificationAdmin/HeaderForm";
import MenuForm from "@views/SignUpVerificationAdmin/MenuForm";
import FormSearch from "@views/SignUpVerificationAdmin/FormSearch";
import * as COMMON from "@constants/common";
import { BodyForm } from "@assets/BodyForm";
import UserListTable from "@views/SignUpVerificationAdmin/UserListTable";
import {
  getApprovedUserAPI,
  lockUserAccount,
  unlockUserAccount,
} from "@src/service/UserService";

export default function MembersManagement() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  const fetchUserData = () => {
    getApprovedUserAPI()
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

  const handleStatusUser = async (username) => {
    const user = users.find((user) => user.username === username);

    if (user) {
      try {
        let response;
        if (user.status !== 1) {
          response = await unlockUserAccount({ username });
        } else {
          response = await lockUserAccount({ username });
        }

        if (response?.status === 200 || response?.status === 201) {
          await fetchUserData();
        }
      } catch (error) {
        console.log("DEBUG --> handle user status", error);
      }
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <HeaderForm></HeaderForm>
      <MenuForm text="Members"></MenuForm>
      <BodyForm>
        <p
          className="row mb-0 mx-0 mt-4"
          style={{ fontSize: "22px", paddingLeft: "8rem" }}
        >
          {COMMON.CONTENT_MEMBERS}
        </p>
        <div
          className="row d-flex mx-0 align-items-center justify-content-start"
          style={{ paddingLeft: "8rem", margin: "16px 0" }}
        >
          <FormSearch
            className="col-8"
            text="Enter username or email address"
          ></FormSearch>
        </div>
        <UserListTable members userList={users} actions={handleStatusUser} />
      </BodyForm>
    </>
  );
}
