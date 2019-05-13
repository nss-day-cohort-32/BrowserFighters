import {test} from "./modules/test";
import {API} from "./modules/apiCalls";
import {login} from "./modules/loginPage";
import {regBtn} from "./modules/registerUser";
import {addTask} from "./modules/tasks.js";
import {tasksButton} from "./modules/tasks.js";
// import {createNewTask} from "./modules/tasks.js";
import {addEventForm} from "./modules/addEvents";
import {buildEventDOM} from "./modules/eventDOM";
import {renderChatEntries} from "./modules/chatDOM";

renderChatEntries();
regBtn;
tasksButton;
login;
test();
addEventForm;
// createNewTask;
addTask;


API.getUsers().then(entries => console.log("entries and stuff", entries));
API.getOneUser(1).then(entry => console.log("one entry", entry));



