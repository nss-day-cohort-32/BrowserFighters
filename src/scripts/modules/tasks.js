const taskButton = document.querySelector("#tasksContainer");
export const addTask = document.getElementById("addTaskBtn").addEventListener("click", function(){
    taskButton.classList.remove("hide");
});
// lines 1-5 button nav


// lines 7-30 get all tasks

const taskStorage = document.getElementById("tasksCards");



 fetch("http://localhost:8088/tasks")   /* gets data already in database */
        .then(response => response.json())
        .then(myParsedTaskData => {
            myParsedTaskData.forEach(task => {
                // console.log(task);
                taskStorage.innerHTML += `
                <div class="allTasks">              
                 <h3>Task:</h3>
                 <p> ${task.task}</p>
                 <h3>Target Completion Date:</h3>
                 <p>${task.completeDate}</p>
                 </div>
                `;
            });
        });

// lines 7-30 get all tasks


const addTaskButton = document.getElementById("taskEntry");
addTaskButton.addEventListener("click", function(){                 /* starts  function on click */
     const newTaskInput = document.getElementById("taskInputBox").value;
     console.log(newTaskInput);
    //  newTaskInput.createTextNode = "";

    const addDate = document.getElementById("datebutton").value;
    console.log(addDate);
//  making object to be posted to database
var task = {
    userId:3,
    task:newTaskInput,
    completeDate:addDate,
    completed:false
};

 taskStorage.innerHTML=" ";

    fetch("http://localhost:8088/tasks", {
    method: "POST",                                     /* post new data to database */
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
}).then(
        fetch("http://localhost:8088/tasks")      /* gets new input data */
        .then(response => response.json())
        .then(myParsedTaskData => {
            myParsedTaskData.forEach(task => {
                // console.log(task);
                taskStorage.innerHTML += `
                <div class="allTasks">           
                <h3>Task:</h3>
                <p> ${task.task}</p>
                <h3>Target Completion Date:</h3>
                <p>${task.completeDate}</p>
                </div>
                `;
            });
        })
    );
});