import { useNavigate } from "react-router-dom";

function signOut() {
  const navigate = useNavigate;
  localStorage.removeItem("token");
  navigate("/login");
}
export default signOut;
