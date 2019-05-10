import {test} from "./modules/test";
import {API} from "./modules/apiCalls";
import {login} from "./modules/loginPage";
import {tasksButton} from "./modules/tasks.js";

tasksButton;
login;
test();

API.getUsers().then(entries => console.log("entries and stuff", entries));
API.getOneUser(1).then(entry => console.log("one entry", entry));
