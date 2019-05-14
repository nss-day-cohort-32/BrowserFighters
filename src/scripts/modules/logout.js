/*
    Author: Addam Joor
    Name: logout.js
    Purpose: Handles the removal of current session storage.
*/

let logout_btn = document.querySelector("#logout_btn");

export const logout = logout_btn.addEventListener("click", () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("user_name");
    location.reload();
});