import {test} from "./modules/test";
import {API} from "./modules/apiCalls";

test();

API.getUsers().then(entries => console.log("entries and stuff", entries));
API.getOneUser(1).then(entry => console.log("one entry", entry));