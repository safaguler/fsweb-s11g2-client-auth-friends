import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Logout() {
  const { logOut } = useContext(AuthContext);
  useEffect(() => {}, []);
  return <div>Logging out in progress...</div>;
}

export default Logout;
