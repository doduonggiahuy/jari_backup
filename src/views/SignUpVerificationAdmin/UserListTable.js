import React, { useState } from "react";
import moment from "moment";
import { Button } from "@assets/Button";
import UserCard from "./UserCard";
import locked from "@assets/image/locked.png";
import notlocked from "@assets/image/notlocked.png";
import Notification from "@views/SignUpVerificationAdmin/Notification";

export default function UserListTable({ userList, members, actions }) {
  const [showNoti, setShowNoti] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleChangeStatusClick = (user) => {
    setSelectedUser(user);
    setShowNoti(true);
  };

  const handleNotiConfirm = () => {
    actions(selectedUser.username);
    setShowNoti(false);
  };

  const notiText = selectedUser?.status !== 1 ? "UNLOCKED" : "LOCKED";

  return (
    <div className="d-flex flex-column">
      <div
        className="d-flex justify-content-around me-3"
        style={{
          borderBottom: "1px solid black",
          fontSize: "20px",
          color: "rgba(10, 72, 116, 1)",
        }}
      >
        <div className="col-3">
          <strong>User</strong>
        </div>
        <div className="col-2" style={members ? { textAlign: "center" } : {}}>
          <strong>Date</strong>
        </div>
        {members ? (
          <>
            <div className="col-2 text-center">
              <strong>Admin</strong>
            </div>
            <div className="col-2"></div>
          </>
        ) : (
          <div className="col-2"></div>
        )}
      </div>
      {userList?.length === 0 ? (
        ""
      ) : (
        <div style={{ height: "60vh", overflowY: "auto" }}>
          {userList?.map((user) => (
            <div
              className="d-flex justify-content-around align-items-center mt-5"
              key={user?.username || "unknown"}
            >
              <UserCard
                username={user?.username}
                email={user?.email}
                image={user?.image}
              />
              <div
                className="col-2"
                style={members ? { textAlign: "center" } : {}}
              >
                {moment(user.createdAt).format("MMM DD")}
              </div>
              {members ? (
                <>
                  <div className="col-2 text-center">{user.admin}</div>
                  <div
                    className="col-2 text-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChangeStatusClick(user)}
                  >
                    <img
                      src={user?.status !== 1 ? locked : notlocked}
                      alt="locked"
                    />
                  </div>
                </>
              ) : (
                <div className="col-2 d-flex flex-row">
                  <Button
                    style={{
                      background: "none",
                      borderRight: "1px solid rgba(10, 72, 116, 1)",
                    }}
                    onClick={() => {
                      actions.handleAllow({ username: user.username });
                    }}
                  >
                    Allow
                  </Button>
                  <Button
                    style={{
                      background: "none",
                    }}
                    onClick={() => {
                      actions.handleDeny({ username: user.username });
                    }}
                  >
                    Deny
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {showNoti && (
        <Notification text={notiText} onSubmit={handleNotiConfirm} />
      )}
    </div>
  );
}
