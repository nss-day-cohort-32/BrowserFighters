(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _test = require("./modules/test");

var _apiCalls = require("./modules/apiCalls");

var _loginPage = require("./modules/loginPage");

_loginPage.task;
_loginPage.login;
(0, _test.test)();

_apiCalls.API.getUsers().then(entries => console.log("entries and stuff", entries));

_apiCalls.API.getOneUser(1).then(entry => console.log("one entry", entry));

},{"./modules/apiCalls":2,"./modules/loginPage":3,"./modules/test":4}],2:[function(require,module,exports){
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
});
module.exports.task = console.log("tasks");

},{"./apiCalls":2}],4:[function(require,module,exports){
"use strict";

module.exports.test = function () {
  console.log("Hello, this function is working modularly.");
  console.log("Working!!!");
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL21vZHVsZXMvYXBpQ2FsbHMuanMiLCIuLi9zY3JpcHRzL21vZHVsZXMvbG9naW5QYWdlLmpzIiwiLi4vc2NyaXB0cy9tb2R1bGVzL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxjQUFJLFFBQUosR0FBZSxJQUFmLENBQW9CLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLE9BQWpDLENBQS9COztBQUNBLGNBQUksVUFBSixDQUFlLENBQWYsRUFBa0IsSUFBbEIsQ0FBdUIsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixFQUF5QixLQUF6QixDQUFoQzs7Ozs7QUNWQSxNQUFNLE9BQU8sR0FBRyw2QkFBaEI7QUFFQSxNQUFNLENBQUMsT0FBUCxDQUFlLEdBQWYsR0FBcUI7QUFDakIsRUFBQSxRQUFRLEVBQUUsWUFBWTtBQUNsQixXQUFPLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxJQUFmLENBQW9CLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBUixFQUEvQixDQUFQO0FBQ0gsR0FIZ0I7QUFJakIsRUFBQSxVQUFVLEVBQUUsVUFBVSxFQUFWLEVBQWM7QUFDdEIsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLElBQUcsRUFBRyxFQUFsQixFQUFxQjtBQUM3QixNQUFBLE1BQU0sRUFBRSxLQURxQjtBQUU3QixNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYO0FBRm9CLEtBQXJCLENBQUwsQ0FLSixJQUxJLENBS0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBTGIsQ0FBUDtBQU1ILEdBWGdCO0FBWWpCLEVBQUEsZUFBZSxFQUFFLFVBQVUsYUFBVixFQUF5QjtBQUN0QyxXQUFPLEtBQUssQ0FBQyxPQUFELEVBQVU7QUFDbEIsTUFBQSxNQUFNLEVBQUUsTUFEVTtBQUVsQixNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRlM7QUFLbEIsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxhQUFmO0FBTFksS0FBVixDQUFMLENBTUosSUFOSSxDQU1DLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQU5iLENBQVA7QUFPSCxHQXBCZ0I7QUFxQmpCLEVBQUEsVUFBVSxFQUFFLFVBQVUsTUFBVixFQUFrQjtBQUMxQixXQUFPLEtBQUssQ0FBRSxHQUFFLE9BQVEsSUFBRyxNQUFPLEVBQXRCLEVBQXlCO0FBQ2pDLE1BQUEsTUFBTSxFQUFFLFFBRHlCO0FBRWpDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFg7QUFGd0IsS0FBekIsQ0FBTCxDQUtKLElBTEksQ0FLQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFMYixDQUFQO0FBTUgsR0E1QmdCO0FBNkJqQixFQUFBLFlBQVksRUFBRSxVQUFVLE1BQVYsRUFBa0IsVUFBbEIsRUFBOEI7QUFDeEMsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLElBQUcsTUFBTyxFQUF0QixFQUF5QjtBQUNqQyxNQUFBLE1BQU0sRUFBRSxLQUR5QjtBQUVqQyxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRndCO0FBS2pDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsVUFBZjtBQUwyQixLQUF6QixDQUFMLENBTUosSUFOSSxDQU1DLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQU5iLENBQVA7QUFPSDtBQXJDZ0IsQ0FBckI7Ozs7O0FDRkE7O0FBRUEsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQjtBQUNBLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQjs7QUFFQSxTQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0I7QUFDbEIsTUFBSSxJQUFJLENBQUMsU0FBTCxLQUFtQixhQUFhLENBQUMsS0FBakMsSUFBMEMsSUFBSSxDQUFDLFFBQUwsS0FBa0IsYUFBYSxDQUFDLEtBQTlFLEVBQXFGO0FBQ2pGLFdBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQUE7QUFFRCxNQUFNLENBQUMsT0FBUCxDQUFlLEtBQWYsR0FBdUIsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVk7QUFDbEUsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGdCQUFaOztBQUNBLGdCQUFJLFFBQUosR0FBZSxJQUFmLENBQW9CLEtBQUssSUFBSTtBQUN6QixRQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBZDtBQUNBLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSx1QkFBc0IsT0FBTyxDQUFDLFNBQVUsRUFBckQ7QUFDSCxHQUhEO0FBSUgsQ0FOc0IsQ0FBdkI7QUFRQSxNQUFNLENBQUMsT0FBUCxDQUFlLElBQWYsR0FBc0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLENBQXRCOzs7OztBQ3BCQSxNQUFNLENBQUMsT0FBUCxDQUFlLElBQWYsR0FBc0IsWUFBWTtBQUNoQyxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFDQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUNELENBSEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge3Rlc3R9IGZyb20gXCIuL21vZHVsZXMvdGVzdFwiO1xyXG5pbXBvcnQge0FQSX0gZnJvbSBcIi4vbW9kdWxlcy9hcGlDYWxsc1wiO1xyXG5pbXBvcnQge2xvZ2lufSBmcm9tIFwiLi9tb2R1bGVzL2xvZ2luUGFnZVwiO1xyXG5pbXBvcnQge3Rhc2t9IGZyb20gXCIuL21vZHVsZXMvbG9naW5QYWdlXCI7XHJcblxyXG50YXNrO1xyXG5sb2dpbjtcclxudGVzdCgpO1xyXG5cclxuQVBJLmdldFVzZXJzKCkudGhlbihlbnRyaWVzID0+IGNvbnNvbGUubG9nKFwiZW50cmllcyBhbmQgc3R1ZmZcIiwgZW50cmllcykpO1xyXG5BUEkuZ2V0T25lVXNlcigxKS50aGVuKGVudHJ5ID0+IGNvbnNvbGUubG9nKFwib25lIGVudHJ5XCIsIGVudHJ5KSk7IiwiY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5BUEkgPSB7XHJcbiAgICBnZXRVc2VyczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChiYXNlVXJsKS50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5qc29uKCkpO1xyXG4gICAgfSxcclxuICAgIGdldE9uZVVzZXI6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtiYXNlVXJsfS8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfSxcclxuICAgIHJlZ2lzdGVyTmV3VXNlcjogZnVuY3Rpb24gKG5ld1VzZXJPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYmFzZVVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyT2JqZWN0KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH0sXHJcbiAgICBkZWxldGVVc2VyOiBmdW5jdGlvbiAodXNlcklkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVcmx9LyR7dXNlcklkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfSxcclxuICAgIGVkaXRVc2VySW5mbzogZnVuY3Rpb24gKHVzZXJJZCwgdXNlck9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtiYXNlVXJsfS8ke3VzZXJJZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlck9iamVjdClcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4vYXBpQ2FsbHNcIjtcclxuXHJcbmxldCBsb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW5fYnRuXCIpO1xyXG5sZXQgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVJbnB1dFwiKTtcclxubGV0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkSW5wdXRcIik7XHJcblxyXG5mdW5jdGlvbiBpc1VzZXIodXNlcikge1xyXG4gICAgaWYgKHVzZXIudXNlcl9uYW1lID09PSB1c2VybmFtZUlucHV0LnZhbHVlICYmIHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkSW5wdXQudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmxvZ2luID0gbG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgbWVcIik7XHJcbiAgICBBUEkuZ2V0VXNlcnMoKS50aGVuKHVzZXJzID0+IHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHVzZXJzLmZpbmQoaXNVc2VyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgWW91J3ZlIGxvZ2dlZCBpbiBhcyAke2N1cnJlbnQudXNlcl9uYW1lfWApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMudGFzayA9IGNvbnNvbGUubG9nKFwidGFza3NcIik7XHJcbiIsIm1vZHVsZS5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc29sZS5sb2coXCJIZWxsbywgdGhpcyBmdW5jdGlvbiBpcyB3b3JraW5nIG1vZHVsYXJseS5cIik7XHJcbiAgY29uc29sZS5sb2coXCJXb3JraW5nISEhXCIpO1xyXG59OyJdfQ==
