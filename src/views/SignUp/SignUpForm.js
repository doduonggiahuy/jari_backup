import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { signUpApi } from "../../service/UserService";
import CustomInput from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { Pconten } from "@assets/StyleLabelSignUp";
export default function SignUpForm() {
  const [formData, setFormData] = useState({});
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const formValidation = () => {
    if (!formData?.name || !formData?.password) {
      return false;
    }
    return true;
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    let data = {
      name: formData.name,
      mail: formData.mail,
      password: formData.password,
      fullname: formData.fullname,
      position: formData.position,
      unit: formData.unit,
      organization: formData.organ,
      phone: formData.phone,
    };
    signUpApi(data).then((res) => {
      console.log(res);
      if ([200, 201].includes(res?.status)) {
        navigate("/main");
      }
      setErr(res?.message);
    });
  };
  const signUpFormConst = [
    {
      className: "col-12 ",
      label: "Username",
      suffix: <EditOutlined style={{ color: "rgba(0,0,0,.45)" }} />,
      value: formData?.name || "",
      onChange: (e) => onChange("name", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
      required: true,
    },
    {
      className: "col-12 ",
      label: "Workmail",
      suffix: <EditOutlined style={{ color: "rgba(0,0,0,.45)" }} />,
      value: formData?.mail || "",
      onChange: (e) => onChange("mail", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
    },
    {
      className: "col-12 ",
      type: "password",
      label: "Password",
      value: formData?.password || "",
      onChange: (e) => onChange("password", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
      required: true,
    },
    {
      className: "col-12 ",
      label: "Full name",
      suffix: <EditOutlined style={{ color: "rgba(0,0,0,.45)" }} />,
      value: formData?.fullname || "",
      onChange: (e) => onChange("fullname", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
    },
    {
      className: "position col-md-6",
      label: "Position",
      value: formData?.position || "",
      onChange: (e) => onChange("position", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
    },
    {
      className: "unit col-md-6 ",
      label: "Unit",
      value: formData?.unit || "",
      onChange: (e) => onChange("unit", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
    },
    {
      className: "organization col-md-6",
      label: "Organization",
      value: formData?.organ || "",
      onChange: (e) => onChange("organization", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
    },
    {
      className: "phone col-md-6",
      label: "Phone",
      type: "number",
      value: formData?.phone || "",
      onChange: (e) => onChange("phone", e.target.value),
      inputProps: {
        className: "input",
        size: "large",
      },
    },
  ];
  return (
    <div
      className="row gy-2 p-5 pb-0 "
      style={{ color: "rgba(10, 72, 116, 1)", fontSize: "20px" }}
    >
      {signUpFormConst.map((conf, id) => (
        <div className={conf?.className} key={id}>
          <Pconten>
            <CustomInput
              label={conf.label}
              type={conf?.type}
              suffix={conf?.suffix}
              value={conf.value}
              onChange={conf.onChange}
              inputProps={conf?.inputProps || {}}
            />
          </Pconten>
        </div>
      ))}
      <div className="col-12 d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary fw-bold mb-1"
          style={{
            backgroundColor: "rgba(10, 72, 116, 1)",
            marginTop: "20px",
            width: "30%",
          }}
          onClick={handleSignUp}
          disabled={!formValidation()}
        >
          SIGN UP
        </button>
      </div>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </div>
  );
}
