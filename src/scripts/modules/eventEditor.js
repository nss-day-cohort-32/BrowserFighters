import {buildEventDOM} from "./eventDOM";

const eventContainer = document.querySelector("#eventsCards");

export function createEventEdit(event) {
    eventContainer.innerHTML = "";

    let eventForm = document.createElement("fieldset");
    eventForm.setAttribute("id", "eventForm");

    let eventFormTitle = document.createElement("h1");
    eventFormTitle.innerHTML = "Edit Event Form";

    let eventInputs = document.createElement("input");
    eventInputs.setAttribute("class", "addEventFormInput");
    eventInputs.value = event.name;

    let eventInputsDate = document.createElement("input");
    eventInputsDate.setAttribute("class", "addEventFormInput");
    eventInputsDate.setAttribute("type", "date");
    eventInputsDate.value = event.date;

    let eventInputsLocation = document.createElement("input");
    eventInputsLocation.setAttribute("class", "addEventFormInput");
    eventInputsLocation.value = event.location;

    let addEventBtn = document.createElement("button");
    addEventBtn.innerHTML = "Edit Event";
    addEventBtn.setAttribute("id", "addEventButton");
    addEventBtn.addEventListener("click", function () {
        const newEventObj = {
            userId: event.userId,
            name: eventInputs.value,
            date: eventInputsDate.value,
            location: eventInputsLocation.value
        };
        fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
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
    })
    eventContainer.appendChild(eventFormTitle);
    eventForm.appendChild(eventInputs);
    eventForm.appendChild(eventInputsDate);
    eventForm.appendChild(eventInputsLocation);
    eventForm.appendChild(addEventBtn);
    eventContainer.appendChild(eventForm);
};