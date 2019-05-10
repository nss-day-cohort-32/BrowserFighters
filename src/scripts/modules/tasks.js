 module.exports.tasks = console.log("tasks");

export function getData() {                                                     /* function*/
    const el = document.querySelector("#entryContainer");              /*queryselector targets first element that matches target*/
    el.innerHTML = "";                                              /*empty string*/
    fetch("http://localhost:3000/entries")                         /*fetch local host*/
        .then(response => response.json())
        .then(myParsedEntries => {
            myParsedEntries.forEach(entry => {


                console.log(entry.tasks);

                document.querySelector("#entryContainer").innerHTML += `
            <div class = “domEl”>
            <h2>Concepts Covered - ${entry.task}</h2>
            <h2>Date of Entry - ${entry.completeDate}</h2>
             <hr>
             </div>
            `;
            });
        });
}

 getData();


//  let tasksButton = document.getElementById("newTaskBtn");    /* works console log */

// tasksButton.addEventListener("click", function(){
//    event.preventDefault();
//    // const journalEntryContainer = document.getElementById("journalValue");
//    console.log("new task");


// });
// ----------

// function journalEntryValue(){         /* pop up form */
//    let journalInput = document.getElementById("journalValue").value
//    journalEntryContainer.innerHTML = " "
//    return journalInput

// function openForm() {
//    document.getElementById("myForm").style.display = "block";
//  }

//  function closeForm() {
//    document.getElementById("myForm").style.display = "none";
//  }


//  console.log("new task");