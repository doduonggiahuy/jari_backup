import { Navigate, Route, Routes } from "react-router";

import SignInUI from "./SignInUI";
import SignUpUI from "./SignUpUI";

export default function Login() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/signIn" />} />
      <Route path="/signIn" element={<SignInUI />} />
      <Route path="/signUp" element={<SignUpUI />} />
      <Route path="/*" element={<Navigate replace to="/signIn" />} />
    </Routes>
  );
}
