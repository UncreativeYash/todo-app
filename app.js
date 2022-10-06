// todo: first html section then js

// HTML Section

let div = document.createElement("div");
div.id = "container";
div.innerHTML = `
<h1 class="heading"> Todo APP </h1>

<div class="input-area">
<input type="text" placeholder="Add Your Todo Item" class="input-todo" />
<button class="plus"> + </button>

<ul class="list">


</ul>
</div>



<div class="outputResult"> 
    <span>You have <span class="pendingTaskCount">0</span> Pending Tasks</span>
    <button> Clear All </button>
</div>
`;
document.body.appendChild(div);

// JavaScript Section

let inputTodo = document.querySelector(".input-todo");
let plusBtn = document.querySelector(".plus");
let todoList = document.querySelector(".list");
let clearAll = document.querySelector(".outputResult button");
let deleteBtn = document.querySelector(".delete");
let pendingTaskCount = document.querySelector(".pendingTaskCount");

inputTodo.addEventListener("keyup", () => {
  let activePointer = `
    opacity: 1;
    pointer-events: auto;
    `;
  let removePointer = `
    opacity: 0.5;
    pointer-events: none;
    `;

  if (inputTodo.value.trim() != 0) {
    plusBtn.style.cssText = activePointer;
  } else {
    plusBtn.style.cssText = removePointer;
  }
});

// on click add tasks to todo list

plusBtn.addEventListener("click", () => {
  let getLS = localStorage.getItem("New Todo");
  if (getLS === null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLS);
  }

  listArr.push(inputTodo.value);
  localStorage.setItem("New Todo", JSON.stringify(listArr));

  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <img class="delete" onclick ="deleteTask(${index})" src="./images/delete.svg" ></li>`;
  });

  todoList.innerHTML = newLiTag;

  //   input filed empty ater adding tasks
  inputTodo.value = "";
  pendingTaskCount.textContent = listArr.length
});

// Delete individual tasks

function deleteTask(index) {
  let getLS = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLS);
  listArr.splice(index, 1);

  localStorage.setItem("New Todo", JSON.stringify(listArr));

  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <img class="delete" onclick ="deleteTask(${index})" src="./images/delete.svg" ></li>`;
  });

  todoList.innerHTML = newLiTag;

  //   input filed empty ater adding tasks
  inputTodo.value = "";
  pendingTaskCount.textContent = listArr.length
}



// Clear Button

clearAll.addEventListener('click', ()=>{
  listArr = []
  localStorage.setItem("New Todo", JSON.stringify(listArr));

  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <img class="delete" onclick ="deleteTask(${index})" src="./images/delete.svg" ></li>`;
  });

  todoList.innerHTML = newLiTag;

  //   input filed empty ater adding tasks
  inputTodo.value = "";
  pendingTaskCount.textContent = listArr.length
})

