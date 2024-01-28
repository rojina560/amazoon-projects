import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {
  const users = useLoaderData();

    return (
      <div>
        <div>
          <h1> our user:{users.length}</h1>
          <h2> this user component for testening</h2>
          <div className="user-container">
            {users.map((user) => (
              <User key={user.id} user={user}></User>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Users;