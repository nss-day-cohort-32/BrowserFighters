import {test} from "./modules/test";
import {API} from "./modules/apiCalls";
import {login} from "./modules/loginPage";
import {regBtn} from "./modules/registerUser";

regBtn;
login;
test();

API.getUsers().then(entries => console.log("allUsers", entries));
API.getOneUser(1).then(entry => console.log("one user", entry));