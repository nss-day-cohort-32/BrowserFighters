// let editButton =  document.querySelector(`#taskEdit-${task.id}`);
// editButton.addEventListener("click", ()=> {
//     console.log("edit button click");} );

// import {buildTasksDOM} from "./tasksDOM";

function getTasks() {
    return fetch("http://localhost:8088/tasks")
    .then(response => response.json())
    .then(myParsedTaskData => {
        myParsedTaskData.forEach(task => {
            // console.log(task);
            taskStorage.innerHTML += `
            <div class="allTasks" >    
            <div id="allTask-${task.id}">              
                <center><h3>Task:</h3></center>
                <center> <h3> ${task.task}</h3></center>
                 <center><h3>Complete By:</h3></center>
                 <center><h3>${task.completeDate}</h3></center> 
                 <center><button id="taskEdit-${task.id}">Edit Task</button></center>
                 <center><input type="checkbox" id="${task.id}">Completed</input></center> 
               </div> 
               </div>
                `;
                });
                let checkboxes = taskStorage.querySelectorAll("input");
                checkboxes.forEach(checkbox => {
                    checkbox.addEventListener("click", function(){
                        hideCheckbox(event.target.id);
                    });
                });

            });
    };



export const addTask = document.getElementById("addTaskBtn").addEventListener("click", function () {
    console.log("working");
    const taskButton = document.querySelector("#taskForm");

    taskButton.classList.remove("hide");
});
// lines 1-5 button nav


// lines 7-30 get all tasks

const taskStorage = document.getElementById("tasksCards");

/* gets data already in database */

getTasks();

// lines 7-30 get all tasks


const addTaskButton = document.getElementById("taskEntry");
console.log(addTaskButton);

console.log("add task btn", addTaskButton);
addTaskButton.addEventListener("click", function () {                 /* starts  function on click */

    console.log("working 2");
    const newTaskInput = document.getElementById("taskInputBox").value;
    console.log(newTaskInput);
    //  newTaskInput.createTextNode = "";

    const addDate = document.getElementById("datebutton").value;
    console.log(addDate);
    //  making object to be posted to database
    var task = {
        userId: 3,
        task: newTaskInput,
        completeDate: addDate,
        completed: false
    };

    taskStorage.innerHTML = " ";

    return fetch("http://localhost:8088/tasks", {
        method: "POST",                                     /* post new data to database */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    }).then(res => {
        let tasksStorage = document.querySelector("#tasksCards");
        tasksStorage.innerhtml = "";
        getTasks();});



    });




    function hideCheckbox(task){
        // let currentBox = document.getElementById(task);
        let currentTask = document.getElementById(`allTask-${task}`);
        currentTask.classList.add("hide");
    }

