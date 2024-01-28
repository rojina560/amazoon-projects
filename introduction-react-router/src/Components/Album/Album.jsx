/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const Album = ({ album }) => {
  const { id, title } = album;
  const navigate = useNavigate();
    const userStyle = {
      border: "2px solid yellow",
      padding: "10px",
      borderRedius: "20px",
      margin: "40px",
  };
  
    return (
      <div>
        <div style={userStyle}>
          <h1> ID{id}</h1>
          <h2>title:{title}</h2>
          <Link to={`/album/${id}`}>
         
            <button>click Here</button>
          </Link>
        </div>
      </div>
    );
};

export default Album;