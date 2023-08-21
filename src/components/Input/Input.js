import React from "react";

import { Input } from "antd";
import { styled } from "styled-components";

const CustomInput = ({
  inputProps,
  LabelComponent,
  InputComponent,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const InputLabelComponent = LabelComponent
    ? styled(LabelComponent)``
    : styled.p``;

  return (
    <div className={props?.className || "input-module"}>
      <InputLabelComponent>
        {props?.label || "Trường dữ liệu"}
        {props.label === "Username" ||
        props.label === "Password" ||
        props.label === "Full name"
          ? !props.hasOwnProperty("noCheck") && (
              <i style={{ color: "red" }}>*</i>
            )
          : null}
      </InputLabelComponent>
      {props?.type === "password" ? (
        <Input.Password
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          color="black"
          value={props?.value}
          onChange={props?.onChange}
          {...inputProps}
          size="large"
        />
      ) : (
        <Input
          suffix={props?.suffix}
          value={props?.value}
          onChange={props?.onChange}
          {...inputProps}
          size="large"
        />
      )}
    </div>
  );
};
export default CustomInput;
