import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Friend() {
  const { id } = useParams();
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`friends/${id}`)
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => console.error(err.response.message));
  }, []);
  return (
    <div>
      <h1>{friend.name}</h1>
      <div>
        {friend.name}-{friend.email}
      </div>
    </div>
  );
}

export default Friend;
