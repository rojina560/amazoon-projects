/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({ user }) => {
    const {id, phone, email, name } = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRedius: '20px',
        margin: '40px'
  }
  const handleShowDetail = () => {
    
  }
    return (
      <div style={userStyle}>
        <h2>name:{name}</h2>
        <h2>phone:{phone}</h2>
        <p>email{email}</p>
        <Link to={`/user/${id}`}>show details</Link>
        <Link to={`/user/${id}`}></Link>
       
      </div>
    );
};

export default User;