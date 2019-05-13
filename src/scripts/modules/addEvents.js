/*
    Author: Addam Joor
    Name: addEvents.js
    Purpose: Handles add event form creation.
*/

import {buildEventDOM} from "./eventDOM";

const eventContainer = document.querySelector("#eventsCards");

export const addEventForm = document.querySelector("#addEventBtn").addEventListener("click", function () {
    console.log("Current Session Id", parseInt(sessionStorage.getItem("user_id")));
    eventContainer.innerHTML = "";

    let eventForm = document.createElement("fieldset");
    eventForm.setAttribute("id", "eventForm");

    let eventFormTitle = document.createElement("h1");
    eventFormTitle.innerHTML = "Add Event Form";

    let eventInputs = document.createElement("input");
    eventInputs.setAttribute("class", "addEventFormInput");
    eventInputs.setAttribute("placeholder", "Event Name");

    let eventInputsDate = document.createElement("input");
    eventInputsDate.setAttribute("class", "addEventFormInput");
    eventInputsDate.setAttribute("type", "date");

    let eventInputsLocation = document.createElement("input");
    eventInputsLocation.setAttribute("class", "addEventFormInput");
    eventInputsLocation.setAttribute("placeholder", "Event Location");

    let addEventBtn = document.createElement("button");
    addEventBtn.innerHTML = "Add Event";
    addEventBtn.setAttribute("id", "addEventButton");
    addEventBtn.addEventListener("click", function () {
        console.log("Added a new Event");
        const newEventObj = {
            userId: parseInt(sessionStorage.getItem("user_id")),
            name: eventInputs.value,
            date: eventInputsDate.value,
            location: eventInputsLocation.value
        };
        fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEventObj)
        }).then(response => response.json())
            .then(() => fetch("http://localhost:8088/events")
            .then(results => results.json()))
            .then(events => {
                eventContainer.innerHTML = "";
                console.log("new events array", events);
                events.forEach(event => buildEventDOM(event));
            });
    });
    eventContainer.appendChild(eventFormTitle);
    eventForm.appendChild(eventInputs);
    eventForm.appendChild(eventInputsDate);
    eventForm.appendChild(eventInputsLocation);
    eventForm.appendChild(addEventBtn);
    eventContainer.appendChild(eventForm);
});