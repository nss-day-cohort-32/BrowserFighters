/*
    Author: Addam Joor
    Name: apiCalls.js
    Purpose: Handles calls to the users database.
*/

const baseUrl = "http://localhost:8088/users";

export const API = {
    getUsers: function () {
        return fetch(baseUrl).then(results => results.json());
    },
    getOneUser: function (id) {
        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },
    registerNewUser: function (newUserObject) {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObject)
        }).then(response => response.json());
    },
    deleteUser: function (userId) {
        return fetch(`${baseUrl}/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },
    editUserInfo: function (userId, userObject) {
        return fetch(`${baseUrl}/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        }).then(response => response.json());
    }
};
