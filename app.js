// todo: first html section then js

// HTML Section

let div = document.createElement("div")
div.id = "container"
div.innerHTML = `
<h1 class="heading"> Todo APP </h1>

<div class="input-area">
<input type="text" placeholder="Add Your Todo Item" class="input-todo" />
<button class="plus"> + </button>

<ul class="list">
<ul>
</div>



<div class="outputResult"> 
    <p>You have <span class="pendingTaskCount">0</span> Pending Tasks</p>
</div>
`
document.body.appendChild(div)