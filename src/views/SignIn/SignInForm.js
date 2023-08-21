import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { loginApi } from "../../service/UserService";

import * as COMMON from "@constants/common";

import CustomInput from "@components/Input/Input";
import { InputCustom, ParaCustom } from "@assets/StyleInputSignIn";
import logoJari from "@src/assets/image/logoJari.png";

export default function SignInForm() {
  const [formData, setFormData] = useState({});
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    let loginData = {};
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (emailRegex.test(formData.name)) {
      loginData = { email: formData.name, password: formData.password };
    } else {
      loginData = { username: formData.name, password: formData.password };
    }

    const currentToken = localStorage.getItem("token");
    const localToken = currentToken !== null ? currentToken : null;

    if (!formData.name) {
      setErr(COMMON.LOGIN_ENTER_EMAIL);
    } else if (formData.name.includes(" ")) {
      setErr(COMMON.LOGIN_USER_INVALID);
    } else if (!formData.password) {
      setErr(COMMON.LOGIN_PASSWORD_NOT_EXIST);
    } else if (formData.password.length < 8) {
      setErr(COMMON.LOGIN_PASSWORD_NOT_ATLEAST);
    } else {
      loginApi(loginData, localToken).then((res) => {
        console.log(` DEBUG--> [Status code], [${res?.status}]`);
        if ([200, 201].includes(res?.status)) {
          localStorage.setItem("user", res?.status);
          navigate("/issueTicket");
        } else if ([404].includes(res?.status)) {
          setErr(COMMON.LOGIN_WRONG_PASSWORD);
        } else if ([422].includes(res?.status)) {
          setErr(COMMON.LOGIN_USER_NOT_EXIST);
        } else if ([500].includes(res?.status)) {
        }
      });
    }
  };

  const signInFormConst = [
    {
      className: "user",
      label: "Work email",
      suffix: <EditOutlined style={{ color: "rgba(0,0,0,.45)" }} />,
      value: formData?.name || "",
      onChange: (e) => onChange("name", e.target.value),
      inputProps: {
        className: "input",
        style: { fontSize: "1.5rem", padding: "0.7rem" },
      },
      required: true,
    },
    {
      className: "password",
      type: "password",
      label: "Password",
      value: formData?.password || "",
      onChange: (e) => onChange("password", e.target.value),
      inputProps: {
        className: "input",
        style: { fontSize: "1.5rem", padding: "0.7rem" },
      },
      required: true,
    },
  ];

  return (
    <div className="container">
      <img
        className="rounded mx-auto d-block w-50"
        src={logoJari}
        alt=""
        style={{ margin: "10% auto -5% auto" }}
      />
      <div className="container">
        <div className="container" style={{ width: "100%" }}>
          {signInFormConst.map((conf, id) => (
            <div
              className={conf?.className}
              key={id}
              style={{ width: "100%", height: "100%" }}
            >
              <CustomInput
                className="row"
                LabelComponent={ParaCustom}
                InputComponent={InputCustom}
                noCheck
                style={{
                  width: "80%",
                  height: "150%",
                }}
                label={conf.label}
                type={conf?.type}
                suffix={conf?.suffix}
                value={conf.value}
                onChange={conf.onChange}
                inputProps={conf?.inputProps || {}}
              />
            </div>
          ))}

          <Button
            type="button"
            className="submit-button mx-auto btn-lg"
            onClick={handleSignIn}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#0A4874",
              margin: "6% auto 0 auto",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.2rem",
              alignItems: "center",
              padding: "4% 10%",
            }}
          >
            {COMMON.LOGIN_BUTTON_TEXT}
          </Button>
          {err && (
            <p
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              {err}
            </p>
          )}
        </div>
        <Link
          to="/signUp"
          style={{
            color: "#0A4874",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "12px auto 0 auto",
          }}
        >
          {COMMON.LOGIN_LINK_TO_SIGNUP}
        </Link>
      </div>
    </div>
  );
}
