/*
    Author: Addam Joor
    Name: loginPage.js
    Purpose: Handles login and registration.
*/

import {API} from "./apiCalls";
import {registerUser} from "./registerUser";

let article = document.querySelector("#article");
let navbar = document.querySelector("nav ul");
let newUserBtn = document.querySelector("#registrationBtn");
let loginBtn = document.querySelector("#login_btn");

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
            usernameInput.value = "";
            passwordInput.value = "";
            sessionStorage.setItem(`${current.user_name}`, `${current.id}`);
            console.log(`You've logged in as ${current.user_name}`);
        });
    }
    else if (hiddenEmailInput.value !== "" && hiddenUsernameInput.value === usernameInput.value && hiddenPassInput.value === passwordInput.value) {
        registerUser();
    }
});
