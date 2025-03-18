import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex items-center gap-4">
      <img src={post.profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <h3 className="font-bold">{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
