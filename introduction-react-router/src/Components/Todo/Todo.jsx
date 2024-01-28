/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
    const { id, title, complate } = todo;
    const userStyle = {
      border: "2px solid yellow",
      padding: "10px",
      borderRedius: "20px",
      margin: "40px",
    };
    return (
        <div style={userStyle}>
            <h2> Id:{id}</h2>
            <h2>title:{title}</h2>
            <h3>complate{complate}</h3>
            <Link to={`/todo/${id}`}> <button> click here</button></Link>
        </div>
    );
};

export default Todo;