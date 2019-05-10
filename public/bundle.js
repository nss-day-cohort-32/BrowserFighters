(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _test = require("./modules/test");

var _apiCalls = require("./modules/apiCalls");

var _loginPage = require("./modules/loginPage");

var _tasks = require("./modules/tasks.js");

_tasks.tasksButton;
_loginPage.login;
(0, _test.test)();

_apiCalls.API.getUsers().then(entries => console.log("entries and stuff", entries));

_apiCalls.API.getOneUser(1).then(entry => console.log("one entry", entry));

},{"./modules/apiCalls":2,"./modules/loginPage":3,"./modules/tasks.js":4,"./modules/test":5}],2:[function(require,module,exports){
"use strict";

const baseUrl = "http://localhost:8088/users";
module.exports.API = {
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

},{}],3:[function(require,module,exports){
"use strict";

var _apiCalls = require("./apiCalls");

let loginBtn = document.querySelector("#login_btn");
let usernameInput = document.querySelector("#usernameInput");
let passwordInput = document.querySelector("#passwordInput");

function isUser(user) {
  if (user.user_name === usernameInput.value && user.password === passwordInput.value) {
    return user;
  }
}

;
module.exports.login = loginBtn.addEventListener("click", function () {
  console.log("you clicked me");

  _apiCalls.API.getUsers().then(users => {
    let current = users.find(isUser);
    console.log(`You've logged in as ${current.user_name}`);
  });
}); // module.exports.task = console.log("tasks");

},{"./apiCalls":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;
module.exports.tasks = console.log("tasks");

function getData() {
  /* function*/
  const el = document.querySelector("#entryContainer");
  /*queryselector targets first element that matches target*/

  el.innerHTML = "";
  /*empty string*/

  fetch("http://localhost:3000/entries")
  /*fetch local host*/
  .then(response => response.json()).then(myParsedEntries => {
    myParsedEntries.forEach(entry => {
      console.log(entry.tasks);
      document.querySelector("#entryContainer").innerHTML += `
            <div class = “domEl”>
            <h2>Concepts Covered - ${entry.task}</h2>
            <h2>Date of Entry - ${entry.completeDate}</h2>
             <hr>
             </div>
            `;
    });
  });
}

getData(); //  let tasksButton = document.getElementById("newTaskBtn");    /* works console log */
// tasksButton.addEventListener("click", function(){
//    event.preventDefault();
//    // const journalEntryContainer = document.getElementById("journalValue");
//    console.log("new task");
// });
// ----------
// function journalEntryValue(){         /* pop up form */
//    let journalInput = document.getElementById("journalValue").value
//    journalEntryContainer.innerHTML = " "
//    return journalInput
// function openForm() {
//    document.getElementById("myForm").style.display = "block";
//  }
//  function closeForm() {
//    document.getElementById("myForm").style.display = "none";
//  }
//  console.log("new task");

},{}],5:[function(require,module,exports){
"use strict";

module.exports.test = function () {
  console.log("Hello, this function is working modularly.");
  console.log("Working!!!");
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL21vZHVsZXMvYXBpQ2FsbHMuanMiLCIuLi9zY3JpcHRzL21vZHVsZXMvbG9naW5QYWdlLmpzIiwiLi4vc2NyaXB0cy9tb2R1bGVzL3Rhc2tzLmpzIiwiLi4vc2NyaXB0cy9tb2R1bGVzL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFJLFFBQUosR0FBZSxJQUFmLENBQW9CLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLE9BQWpDLENBQS9COztBQUNBLGNBQUksVUFBSixDQUFlLENBQWYsRUFBa0IsSUFBbEIsQ0FBdUIsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixFQUF5QixLQUF6QixDQUFoQzs7Ozs7QUNWQSxNQUFNLE9BQU8sR0FBRyw2QkFBaEI7QUFFQSxNQUFNLENBQUMsT0FBUCxDQUFlLEdBQWYsR0FBcUI7QUFDakIsRUFBQSxRQUFRLEVBQUUsWUFBWTtBQUNsQixXQUFPLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxJQUFmLENBQW9CLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBUixFQUEvQixDQUFQO0FBQ0gsR0FIZ0I7QUFJakIsRUFBQSxVQUFVLEVBQUUsVUFBVSxFQUFWLEVBQWM7QUFDdEIsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLElBQUcsRUFBRyxFQUFsQixFQUFxQjtBQUM3QixNQUFBLE1BQU0sRUFBRSxLQURxQjtBQUU3QixNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYO0FBRm9CLEtBQXJCLENBQUwsQ0FLSixJQUxJLENBS0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBTGIsQ0FBUDtBQU1ILEdBWGdCO0FBWWpCLEVBQUEsZUFBZSxF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LENBQVksS0FBSyxDQUFDLEtBQWxCO0FBRUEsTUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsRUFBMEMsU0FBMUMsSUFBd0Q7O3FDQUVuQyxLQUFLLENBQUMsSUFBSztrQ0FDZCxLQUFLLENBQUMsWUFBYTs7O2FBSHJDO0FBT0gsS0FaRDtBQWFILEdBaEJMO0FBaUJIOztBQUVBLE9BQU8sRyxDQUdSO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7QUNwREEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxJQUFmLEdBQXNCLFlBQVk7QUFDaEMsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFDRCxDQUhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHt0ZXN0fSBmcm9tIFwiLi9tb2R1bGVzL3Rlc3RcIjtcbmltcG9ydCB7QVBJfSBmcm9tIFwiLi9tb2R1bGVzL2FwaUNhbGxzXCI7XG5pbXBvcnQge2xvZ2lufSBmcm9tIFwiLi9tb2R1bGVzL2xvZ2luUGFnZVwiO1xuaW1wb3J0IHt0YXNrc0J1dHRvbn0gZnJvbSBcIi4vbW9kdWxlcy90YXNrcy5qc1wiO1xuXG50YXNrc0J1dHRvbjtcbmxvZ2luO1xudGVzdCgpO1xuXG5BUEkuZ2V0VXNlcnMoKS50aGVuKGVudHJpZXMgPT4gY29uc29sZS5sb2coXCJlbnRyaWVzIGFuZCBzdHVmZlwiLCBlbnRyaWVzKSk7XG5BUEkuZ2V0T25lVXNlcigxKS50aGVuKGVudHJ5ID0+IGNvbnNvbGUubG9nKFwib25lIGVudHJ5XCIsIGVudHJ5KSk7XG4iLCJjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnNcIjtcblxubW9kdWxlLmV4cG9ydHMuQVBJID0ge1xuICAgIGdldFVzZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChiYXNlVXJsKS50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5qc29uKCkpO1xuICAgIH0sXG4gICAgZ2V0T25lVXNlcjogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHtiYXNlVXJsfS8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfSxcbiAgICByZWdpc3Rlck5ld1VzZXI6IGZ1bmN0aW9uIChuZXdVc2VyT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBmZXRjaChiYXNlVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlck9iamVjdClcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH0sXG4gICAgZGVsZXRlVXNlcjogZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVybH0vJHt1c2VySWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9LFxuICAgIGVkaXRVc2VySW5mbzogZnVuY3Rpb24gKHVzZXJJZCwgdXNlck9iamVjdCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVybH0vJHt1c2VySWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlck9iamVjdClcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4vYXBpQ2FsbHNcIjtcblxubGV0IGxvZ2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbl9idG5cIik7XG5sZXQgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVJbnB1dFwiKTtcbmxldCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZElucHV0XCIpO1xuXG5mdW5jdGlvbiBpc1VzZXIodXNlcikge1xuICAgIGlmICh1c2VyLnVzZXJfbmFtZSA9PT0gdXNlcm5hbWVJbnB1dC52YWx1ZSAmJiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmxvZ2luID0gbG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIG1lXCIpO1xuICAgIEFQSS5nZXRVc2VycygpLnRoZW4odXNlcnMgPT4ge1xuICAgICAgICBsZXQgY3VycmVudCA9IHVzZXJzLmZpbmQoaXNVc2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coYFlvdSd2ZSBsb2dnZWQgaW4gYXMgJHtjdXJyZW50LnVzZXJfbmFtZX1gKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBtb2R1bGUuZXhwb3J0cy50YXNrID0gY29uc29sZS5sb2coXCJ0YXNrc1wiKTtcbiIsIiBtb2R1bGUuZXhwb3J0cy50YXNrcyA9IGNvbnNvbGUubG9nKFwidGFza3NcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZnVuY3Rpb24qL1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRhaW5lclwiKTsgICAgICAgICAgICAgIC8qcXVlcnlzZWxlY3RvciB0YXJnZXRzIGZpcnN0IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHRhcmdldCovXG4gICAgZWwuaW5uZXJIVE1MID0gXCJcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyplbXB0eSBzdHJpbmcqL1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2VudHJpZXNcIikgICAgICAgICAgICAgICAgICAgICAgICAgLypmZXRjaCBsb2NhbCBob3N0Ki9cbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihteVBhcnNlZEVudHJpZXMgPT4ge1xuICAgICAgICAgICAgbXlQYXJzZWRFbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeS50YXNrcyk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5Q29udGFpbmVyXCIpLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0g4oCcZG9tRWzigJ0+XG4gICAgICAgICAgICA8aDI+Q29uY2VwdHMgQ292ZXJlZCAtICR7ZW50cnkudGFza308L2gyPlxuICAgICAgICAgICAgPGgyPkRhdGUgb2YgRW50cnkgLSAke2VudHJ5LmNvbXBsZXRlRGF0ZX08L2gyPlxuICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59XG5cbiBnZXREYXRhKCk7XG5cblxuLy8gIGxldCB0YXNrc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0J0blwiKTsgICAgLyogd29ya3MgY29uc29sZSBsb2cgKi9cblxuLy8gdGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgLy8gY29uc3Qgam91cm5hbEVudHJ5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb3VybmFsVmFsdWVcIik7XG4vLyAgICBjb25zb2xlLmxvZyhcIm5ldyB0YXNrXCIpO1xuXG5cbi8vIH0pO1xuLy8gLS0tLS0tLS0tLVxuXG4vLyBmdW5jdGlvbiBqb3VybmFsRW50cnlWYWx1ZSgpeyAgICAgICAgIC8qIHBvcCB1cCBmb3JtICovXG4vLyAgICBsZXQgam91cm5hbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb3VybmFsVmFsdWVcIikudmFsdWVcbi8vICAgIGpvdXJuYWxFbnRyeUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIiBcIlxuLy8gICAgcmV0dXJuIGpvdXJuYWxJbnB1dFxuXG4vLyBmdW5jdGlvbiBvcGVuRm9ybSgpIHtcbi8vICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4vLyAgfVxuXG4vLyAgZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuLy8gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gIH1cblxuXG4vLyAgY29uc29sZS5sb2coXCJuZXcgdGFza1wiKTsiLCJtb2R1bGUuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcIkhlbGxvLCB0aGlzIGZ1bmN0aW9uIGlzIHdvcmtpbmcgbW9kdWxhcmx5LlwiKTtcbiAgY29uc29sZS5sb2coXCJXb3JraW5nISEhXCIpO1xufTsiXX0=
