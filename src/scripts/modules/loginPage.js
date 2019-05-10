import { API } from "./apiCalls";

let loginBtn = document.querySelector("#login_btn");
let usernameInput = document.querySelector("#usernameInput");
let passwordInput = document.querySelector("#passwordInput");

function isUser(user) {
    if (user.user_name === usernameInput.value && user.password === passwordInput.value) {
        return user;
    }
};

module.exports.login = loginBtn.addEventListener("click", function () {
    console.log("you clicked me");
    API.getUsers().then(users => {
        let current = users.find(isUser);
        console.log(`You've logged in as ${current.user_name}`);
    });
});

// module.exports.task = console.log("tasks");
