import { useLoaderData } from "react-router-dom";
 import Todo from "../Todo/Todo";

const Todos = () => {
    const todos = useLoaderData();
    return (
      <div>
        <h2>Total todos:{todos.length}</h2>
        <div className="user-container">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}></Todo>
          ))}
        </div>
       </div>
    );
};

export default Todos; 