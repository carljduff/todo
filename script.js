const inputBox = document.getElementById("input-todo");
const todoContainer = document.getElementById("todo-container");
const addTodoButton = document.getElementById("add-todo-button");

addTodoButton.addEventListener("click", createTodo)

function createTodo() {
    if (inputBox.value == "") return;

    let container = document.createElement("div");
    let todoText = document.createElement("p");
    todoText.innerText = inputBox.value;
    container.appendChild(todoText);
    todoContainer.append(container);

    let checkTodo = document.createElement("input");
    checkTodo.setAttribute("type", "checkbox");
    container.appendChild(checkTodo);

    let deleteTodo = document.createElement("button");
    deleteTodo.innerText = "x";
    container.appendChild(deleteTodo)

    inputBox.value = ""

}