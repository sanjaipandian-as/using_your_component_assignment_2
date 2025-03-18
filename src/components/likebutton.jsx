import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <img src={post.profileImage} alt="Profile" style={styles.profilePic} />
      <div style={styles.content}>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton initialLiked={post.isLiked} />
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
  },
  profilePic: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  content: {
    flex: 1,
  },
};

export default PostCard;