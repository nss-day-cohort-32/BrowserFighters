/*
    Author: Addam Joor
    Name: loginPage.js
    Purpose: Handles login and registration.
*/

import { API } from "./apiCalls";
import { registerUser } from "./registerUser";
import { buildEventDOM } from "./eventDOM";
import { renderChatEntries } from "./chatDOM";

let article = document.querySelector("#article");
let navbar = document.querySelector("nav ul");
let newUserBtn = document.querySelector("#registrationBtn");
let loginBtn = document.querySelector("#login_btn");
let justifyDiv = document.querySelector("#justifyDiv");
let logoutBtn = document.querySelector("#logout_btn");

let hiddenEmail = document.querySelector("#email");
let hiddenEmailInput = document.querySelector("#emailInput");

let hiddenUsername = document.querySelector("#confirmUsername");
let usernameInput = document.querySelector("#usernameInput");
let hiddenUsernameInput = document.querySelector("#confirmUsernameInput");

let hiddenPass = document.querySelector("#confirmPass");
let passwordInput = document.querySelector("#passwordInput");
let hiddenPassInput = document.querySelector("#confirmPasswordInput");

function isUser(user) {
    if (user.user_name === usernameInput.value && user.password === passwordInput.value) {
        return user;
    }
};


export const login = loginBtn.addEventListener("click", function () {
    if (hiddenEmailInput.value === "") {
        API.getUsers().then(users => {
            let current = users.find(user => isUser(user));
            if (current == null) {
                alert("Invalid username or password.");
                usernameInput.value = "";
                passwordInput.value = "";
                usernameInput.focus();
                return;
            };
            navbar.classList.remove("hide");
            article.classList.add("hide");
            justifyDiv.classList.remove("hide");
            logoutBtn.classList.remove("hide");
            usernameInput.value = "";
            passwordInput.value = "";
            sessionStorage.setItem("user_id", `${current.id}`);
            sessionStorage.setItem("user_name", `${current.user_name}`);
            console.log(`You've logged in as ${current.user_name}`);
            renderChatEntries();
            fetch("http://localhost:8088/events").then(results => results.json()).then(events => {
                events.forEach(event => buildEventDOM(event));
            });
        });
    }
    else if (hiddenEmailInput.value !== "" && hiddenUsernameInput.value === usernameInput.value && hiddenPassInput.value === passwordInput.value) {
        registerUser();
    }
});
