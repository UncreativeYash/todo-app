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

<li>Lorem ipsum dolor sit.<img class="delete" src="./images/delete.svg" alt="" srcset="" ></li>
<li>Lorem ipsum dolor sit.<img class="delete" src="./images/delete.svg" alt="" srcset="" ></li>
<li>Lorem ipsum dolor sit.<img class="delete" src="./images/delete.svg" alt="" srcset="" ></li>
<li>Lorem ipsum dolor sit.<img class="delete" src="./images/delete.svg" alt="" srcset="" ></li>

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

inputTodo.onkeyup = () => {
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
};
