class Task{
    constructor(elements){
        this.elements = elements;
        this.completed = false;
    }
}

function onTaskButtonMouseClick(task){
    const p = task.elements.querySelectorAll(".taskText")[0];
    if (p.value == "")
        return;

    task.completed = !task.completed;
    checkTaskCompletion(task);
}

function checkTaskCompletion(task){
    const p = task.elements.querySelectorAll(".taskText")[0];
    const button = task.elements.querySelectorAll(".taskButton")[0];

    if (task.completed){
        tasksParent.insertBefore(task.elements, tasksParent.lastChild);

        p.style.textDecoration = "line-through";
        button.innerHTML = "X";
    }else{
        p.style.textDecoration = "none";
        button.innerHTML = "";
    }
}

function onTaskTextChanged(task){
    task.completed = false;
    checkTaskCompletion(task);
}

function createTaskElements(){
    const newTask = document.createElement("li");
    newTask.classList.add("taskContainer");

    const inp = document.createElement("input");
    inp.classList.add("taskText");
    inp.type = "text";
    inp.placeholder = "new task...";
    newTask.appendChild(inp);

    const button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("taskButton");
    button.title = "Complete task";
    newTask.appendChild(button);

    return newTask;
}

function createNewTask(){
    const taskElements = createTaskElements();
    const task = new Task(taskElements);

    let button = taskElements.querySelectorAll(".taskButton")[0];
    button.onmousedown = function() {onTaskButtonMouseClick(task)};

    let p = taskElements.querySelectorAll(".taskText")[0];
    p.onchange = function() {onTaskTextChanged(task)};

    tasks.push(task);
    tasksParent.insertBefore(taskElements, tasksParent.firstChild);

    taskElements.style.opacity = 100;
}

const tasksParent = document.getElementById("tasksParent");

var tasks = [];