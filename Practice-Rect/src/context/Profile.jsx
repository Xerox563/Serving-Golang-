import React, { useContext } from "react";
import UserContext from "./userContext";

const Profile = () => {
  const { user, loading } = useContext(UserContext);
  return (
    <>
      <div style={{ padding: "40px" }}>
        <h1>Profile</h1>
        <p>Name:{user.name}</p>
        <p>Loading:{loading}</p>
      </div>
    </>
  );
};

export default Profile;
