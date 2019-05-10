import {test} from "./modules/test";
import {API} from "./modules/apiCalls";
import {login} from "./modules/loginPage";
import {regBtn} from "./modules/registerUser";
import {friendSearch} from "./modules/friends";
import {searchAddFriend} from "./modules/friends";

regBtn;
login;
test();
friendSearch();
searchAddFriend;

API.getUsers().then(entries => console.log("allUsers", entries));
API.getOneUser(1).then(entry => console.log("one user", entry));