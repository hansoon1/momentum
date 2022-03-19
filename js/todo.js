const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handelToDoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function deleteToDo(event) {
  //   console.log(event.target.parentElement);
  const li = event.target.parentElement;
  // console.log(li.id);

  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}

function paintToDo(newTodoObj) {
  //   console.log("I will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "🗑️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  //   console.log(li);
  toDoList.append(li);
}

toDoForm.addEventListener("submit", handelToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  //   console.log(savedToDos);
  const parsedToDos = JSON.parse(savedToDos);
  //   console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintToDo(item));
}
