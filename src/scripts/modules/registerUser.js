/*
    Author: Addam Joor
    Name: registerUser.js
    Purpose: Registration form reveal and register new user function.
*/
import {API} from "./apiCalls";

let newUserBtn = document.querySelector("#registrationBtn");

let hiddenEmail = document.querySelector("#email");
let hiddenEmailInput = document.querySelector("#emailInput");
let hiddenUsername = document.querySelector("#confirmUsername");
let hiddenUsernameInput = document.querySelector("#confirmUsernameInput");
let hiddenPass = document.querySelector("#confirmPass");
let hiddenPassInput = document.querySelector("#confirmPasswordInput");
let loginBtn = document.querySelector("#login_btn");

export const regBtn = newUserBtn.addEventListener("click", function(){
    console.log("New User huh?");
    hiddenEmail.classList.remove("hide");
    hiddenUsername.classList.remove("hide");
    hiddenPass.classList.remove("hide");
    newUserBtn.classList.add("hide");
    loginBtn.innerHTML = "Register";
});

export const registerUser = () => {
    console.log("you've registered a new user");
        const newUser = {
            email_address: hiddenEmailInput.value,
            user_name: usernameInput.value,
            password: passwordInput.value
        };
        hiddenEmailInput.value = "";
        hiddenUsernameInput.value = "";
        hiddenPassInput.value = "";

        hiddenEmail.classList.add("hide");
        hiddenUsername.classList.add("hide");
        hiddenPass.classList.add("hide");
        newUserBtn.classList.remove("hide");
        loginBtn.innerHTML = "Login";

        API.registerNewUser(newUser).then(() => API.getUsers().then(users => console.log("new users list", users)));
};