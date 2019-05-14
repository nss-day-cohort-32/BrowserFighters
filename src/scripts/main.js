import {test} from "./modules/test";
import {login} from "./modules/loginPage";
import {regBtn} from "./modules/registerUser";
import {addTask} from "./modules/tasks.js";
import {tasksButton} from "./modules/tasks.js";
// import {createNewTask} from "./modules/tasks.js";
import {friendSearch} from "./modules/friends";
import {searchAddFriend} from "./modules/friends";
import {addEventForm} from "./modules/addEvents";
import {logout} from "./modules/logout";



regBtn;
tasksButton;
login;
addEventForm;
// createNewTask;
addTask;
test();
friendSearch();
searchAddFriend;
addEventForm;

API.getUsers().then(entries => console.log("allUsers", entries));
API.getOneUser(1).then(entry => console.log("one user", entry));
logout;
