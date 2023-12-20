const ingEl = document.querySelector("#ing");
const uzbEl = document.querySelector("#uzb");
const submitEl = document.querySelector("form");
const yangiEL = document.querySelector(".yangiSoz");
const newTodoEL = document.querySelector(".newTodos");

let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
let son = 1;
let newTodos =  [];

submitEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const textIng = ingEl.value;
  const textUz = uzbEl.value;
  todos.push({
    id: Math.ceil(Math.random() * 10000000),
    raqam: son++,
    ing: textIng,
    uzb: textUz,
  });
  ingEl.value = "";
  uzbEl.value = "";
  reTodo();
});

function reTodo() {
  let html = "";
  todos.forEach((todo) => {
    html += `       <div class="bet relative w-[95%] mb-[32px] flex">
    <div class="flex space-x-44">
      <span>${todo.raqam}</span><span>${todo.ing}</span
      ><span>${todo.uzb}</span>
    </div>
    <div class="flex gap-2 absolute right-0">
      <img
        onclick ="(addTodo(${todo.id}))"
        class="cursor-pointer"
        src="./images/add.svg"
        alt=""
      /><img
        class="cursor-pointer"
        onclick="(delate(${todo.id}))"
        src="./images/del.svg"
        alt=""
      />
    </div>
    <div class="w-[95%] h-[1px] bg-slate-300 absolute top-[40px] left-[10px]"></div>
  </div>`;
  });
  yangiEL.innerHTML = html;
  localStorage.setItem("todos", JSON.stringify(todos));
}
reTodo();

function addTodo(id) {
  const newtodo = todos.find((todo) => todo.id === id);
  todos = todos.filter((todo) => todo == newtodo.id);
  newTodos.push(newtodo);
  reNewTodos();
  reTodo();
  console.log(newtodo);
}

function reNewTodos() {
  let htmll = "";
  newTodos.forEach((todo) => {
    htmll += ` <div class="bet relative w-[95%] mb-[32px] flex">
    <div class="flex space-x-44">
      <span>${todo.raqam}</span><span>${todo.ing}</span
      ><span>${todo.uzb}</span>
    </div>
    <div class="flex gap-2 absolute right-0">
      <img
        onclick ="leftTodo(${todo.id} )"
        class="cursor-pointer"
        src="./images/left.svg"
        alt=""
      /><img
        class="cursor-pointer"
        onclick="(delatee(${todo.id}))"
        src="./images/del.svg"
        alt=""
      />
    </div>
    <div class="w-[95%] h-[1px] bg-slate-300 absolute top-[40px] left-[10px]"></div>
  </div>`;
  });
  newTodoEL.innerHTML = htmll;
  localStorage.setItem("newTodo", JSON.stringify("newTodo"));
}

reNewTodos();

function delate(id) {
  todos = todos.filter((todo) => todo.id !== id);
  reTodo();
}

function delatee(id) {
  newTodos = newTodos.filter((todo) => todo.id !== id);
  reNewTodos();
}

function leftTodo(id) {
  const newtodo = newTodos.find((todo) => todo.id == id);
  newTodos = newTodos.filter((todo) => todo.id != id);
  todos.push(newtodo);
  reNewTodos();
  reTodo();
}
