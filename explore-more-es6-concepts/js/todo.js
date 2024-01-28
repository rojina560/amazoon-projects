function todosLoad() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => displayTodos(data));
}

function displayTodos(todos) {
    for (const todo of todos) {
        console.log(todo.id)
        const todoContainer = document.getElementById("todo-caontainer");
        const todoDiv = document.createElement('div')
       todoDiv.classList.add('todos')
        todoDiv.innerHTML = `
        <h2> title:${todo.title}</h2>
        <p> user-Id: ${todo.userId}</p>
        <p> complated:${
          todo.completed === true ? "completed" : "not-completed"
        } </p>
        

        `;
        todoContainer.appendChild(todoDiv)
        
}
    
}
todosLoad()