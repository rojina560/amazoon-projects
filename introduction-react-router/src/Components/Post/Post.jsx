/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
 const userStyle = {
   border: "2px solid yellow",
   padding: "10px",
   borderRedius: "20px",
   margin: "40px",
  };
  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  }
    return (
      <div style={userStyle}>
        <h2> id:{id}</h2>
            <p>title:{title}</p>
        <Link to={`/post/${id}`}>post details</Link>
        <button onClick={handleShowDetail}> click here</button>
            
      </div>
    );
};

export default Post;