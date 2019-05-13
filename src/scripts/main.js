import {test} from "./modules/test";
import {API} from "./modules/apiCalls";
import {login} from "./modules/loginPage";
import {regBtn} from "./modules/registerUser";
import {friendSearch} from "./modules/friends";
import {searchAddFriend} from "./modules/friends";
import {addEventForm} from "./modules/addEvents";
import {buildEventDOM} from "./modules/eventDOM";
import {renderChatEntries} from "./modules/chatDOM";

renderChatEntries();
regBtn;
login;
test();
friendSearch();
searchAddFriend;
addEventForm;

API.getUsers().then(entries => console.log("allUsers", entries));
API.getOneUser(1).then(entry => console.log("one user", entry));