import { useState } from "react";

const LikeButton = ({ initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {liked ? "Liked ❤" : "Like"}
    </button>
  );
};

export default LikeButton;