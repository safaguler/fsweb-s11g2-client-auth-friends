import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendList() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.error(err.response.message));
  }, []);
  return (
    <div>
      <h1>FrienList</h1>
      <div>
        {friends.map((friend) => (
          <Link to={`/friends/${friend.id}`}>
            <div className="friend-item">
              {friend.name}-{friend.email}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FriendList;
