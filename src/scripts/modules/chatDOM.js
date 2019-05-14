/*
    Author: Addam Joor
    Name: chatDOM.js
    Purpose: Handles the rendering of chat messages to the DOM.
*/
const chatDisplay = document.querySelector("#chatDisplayDiv");

export function renderChatEntries() {
    fetch("http://localhost:8088/messages")
        .then(results => results.json()).then(messages => {
            messages.forEach(message => {
                buildChatDOM(message);
            });
        });
};

function editChatEntry(message) {
    var messagePrompt = prompt(`Edit entry ${message.id}, Originally posted ${message.timestamp}:`, `${message.content}`);
    if (messagePrompt == null || messagePrompt == "") {
        alert("cancelled edit");
    }
    else {
        let newMessageObj = {
            userId: message.userId,
            timestamp: message.timestamp,
            content: messagePrompt,
            user_name: message.user_name
        }
        fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessageObj)
        }).then(response => response.json())
            .then(() => fetch("http://localhost:8088/messages")
                .then(results => results.json()))
            .then(messages => {
                chatDisplay.innerHTML = "";
                messages.forEach(message => buildChatDOM(message));
            });
    }
};

document.querySelector("#submitChatMessage").addEventListener("click", () => {
    let chatContainer = document.querySelector("#chatDisplayDiv");
    let chatInput = document.querySelector("#statusInput");
    let today = new Date();
    let formatTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());
    let formattedTime = formatTime.toLocaleString("en-US", { hour12: true });
    const newChatObj = {
        userId: parseInt(sessionStorage.getItem("user_id")),
        timestamp: formattedTime,
        content: chatInput.value,
        user_name: sessionStorage.getItem("user_name")
    };
    fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newChatObj)
    }).then(response => response.json())
        .then(() => fetch("http://localhost:8088/messages")
            .then(results => results.json()))
        .then(messages => {
            chatContainer.innerHTML = "";
            chatInput.value = "";
            console.log("new messages array", messages);
            messages.forEach(message => {
                buildChatDOM(message);
            });
        });
});

export function buildChatDOM(message) {
    let chatContainer = document.querySelector("#chatDisplayDiv");
    // build chat card container
    let chatCard = document.createElement("section");
    chatCard.setAttribute("id", `message-${message.id}`);
    chatCard.setAttribute("class", "message_card");
    // build event details
    let chatDetails = document.createElement("div");
    chatDetails.addEventListener("click", () => {
        if (message.user_name !== sessionStorage.getItem("user_name")) {
            console.log(`Add ${message.user_name} as a friend?`)
        }
    })
    chatDetails.innerHTML = `<h3><span class="chat_name">${message.user_name}</span>: ${message.content}</h3>
                            <p>${message.timestamp}</p>`;
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-outline-primary btn-sm");
    editBtn.setAttribute("id", "chatEdit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        console.log("Edit this Message");
        editChatEntry(message);
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-outline-danger btn-sm");
    deleteBtn.setAttribute("id", "chatDelete");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        let result = confirm(`Are you sure you want to delete Message ${message.id}?`);
        if (result) {
            console.log(`Deleted message ${message.id}`);
            fetch(`http://localhost:8088/messages/${message.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(() => {
                    chatContainer.innerHTML = "";
                    renderChatEntries();
                });
        }
    });
    chatCard.appendChild(chatDetails);
    if (message.user_name == sessionStorage.getItem("user_name")) {
        chatCard.appendChild(editBtn);
        chatCard.appendChild(deleteBtn);
    }
    chatContainer.appendChild(chatCard);
};