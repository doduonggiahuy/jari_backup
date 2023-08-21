import { Avatar } from "@assets/Avatar";
import avatar from "@assets/image/avatar.png";

export default function UserCard({ username, image, email, ...props }) {
  return (
    <div
      className="col-3 d-flex"
      style={{ fontSize: "20px", color: "rgba(10, 72, 116, 1)" }}
    >
      <Avatar className="col-3" src={image || avatar} alt="Avatar" />
      <div className="col-8 ">
        <p className="col-12 my-0 ">
          <strong>{username}</strong>
        </p>
        <p className="col-12 my-0 " style={{ color: "rgba(187, 192, 195, 1)" }}>
          {email}
        </p>
      </div>
    </div>
  );
}
