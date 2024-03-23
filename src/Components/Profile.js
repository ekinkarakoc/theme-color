import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { userName, id, bio } = useContext(UserContext);
  return (
    <>
      <div>{userName}</div>
      <div>{id}</div>
      <div>{bio}</div>
    </>
  );
}

export default Profile;
