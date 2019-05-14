/*
    Author: Addam Joor
    Name: eventDOM.js
    Purpose: Handles the rendering of events to the DOM.
*/
import {createEventEdit} from "./eventEditor";

function renderEventEntries() {
    fetch("http://localhost:8088/events")
        .then(results => results.json()).then(entries => {
            entries.forEach(event => {
                console.log("event.userID", event.userId);
                    buildEventDOM(event);
            });
        });
};

export function buildEventDOM(event) {
    if(event.userId === parseInt(sessionStorage.getItem("user_id"))){
    let formattedDate = new Date(event.date);
    const month = formattedDate.toLocaleString("en-us", { month: "long" });
    let dateFormat = event.date.split("-");
    let eventsContainer = document.querySelector("#eventsCards");
    let eventsContainerHeading = document.createElement("h1");
    eventsContainerHeading.innerHTML = "Your Events";
    // build event card container
    let eventCard = document.createElement("section");
    eventCard.setAttribute("id", `event-${event.id}`);
    eventCard.setAttribute("class", "event_card");
    // build header element
    let eventName = document.createElement("h2");
    eventName.textContent = event.name;
    // build event details
    let eventDetails = document.createElement("div");
    eventDetails.innerHTML = `
            <h2>${month} ${dateFormat[2]}, ${dateFormat[0]}</h2>
            <h2>Location: ${event.location}</h2>
          `;
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit_btn");
    editBtn.textContent = "Edit Event";
    editBtn.addEventListener("click", () => {
        console.log(`Edit this Event: Event ${event.id}`);
        createEventEdit(event);
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete_btn");
    deleteBtn.textContent = "Delete Event";
    deleteBtn.addEventListener("click", () => {
        let result = confirm(`Are you sure you want to delete Journal ${event.id}?`);
        if (result) {
            console.log(`Deleted event ${event.id}`);
            fetch(`http://localhost:8088/events/${event.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(() => {
                    eventsContainer.innerHTML = "";
                    renderEventEntries();
                });
        }
    });
    eventCard.appendChild(eventName);
    eventCard.appendChild(eventDetails);
    eventCard.appendChild(editBtn);
    eventCard.appendChild(deleteBtn);
    eventsContainer.appendChild(eventCard);
}};