import React from "react";
import { useSelector } from "react-redux";

// useSelector is used to access the state variables

function Profile() {
  const user = useSelector((state) => state.user.value);
	const themeColor = useSelector((state) => state.theme.value);
	return (
    <div style={{color:themeColor}} >
      <h1>Profile page</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <button>Login</button>
    </div>
  );
}

export default Profile;
