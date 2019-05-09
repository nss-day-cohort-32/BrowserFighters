(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _test = require("./modules/test");

var _apiCalls = require("./modules/apiCalls");

(0, _test.test)();

_apiCalls.API.getUsers().then(entries => console.log("entries and stuff", entries));

_apiCalls.API.getOneUser(1).then(entry => console.log("one entry", entry));

},{"./modules/apiCalls":2,"./modules/test":3}],2:[function(require,module,exports){
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

module.exports.test = function () {
  console.log("Hello, this function is working modularly.");
  console.log("Working!!!");
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL21vZHVsZXMvYXBpQ2FsbHMuanMiLCIuLi9zY3JpcHRzL21vZHVsZXMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBRUE7O0FBRUEsY0FBSSxRQUFKLEdBQWUsSUFBZixDQUFvQixPQUFPLElBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxPQUFqQyxDQUEvQjs7QUFDQSxjQUFJLFVBQUosQ0FBZSxDQUFmLEVBQWtCLElBQWxCLENBQXVCLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVosRUFBeUIsS0FBekIsQ0FBaEM7Ozs7O0FDTkEsTUFBTSxPQUFPLEdBQUcsNkJBQWhCO0FBRUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxHQUFmLEdBQXFCO0FBQ2pCLEVBQUEsUUFBUSxFQUFFLFlBQVk7QUFDbEIsV0FBTyxLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsSUFBZixDQUFvQixPQUFPLElBQUksT0FBTyxDQUFDLElBQVIsRUFBL0IsQ0FBUDtBQUNILEdBSGdCO0FBSWpCLEVBQUEsVUFBVSxFQUFFLFVBQVUsRUFBVixFQUFjO0FBQ3RCLFdBQU8sS0FBSyxDQUFFLEdBQUUsT0FBUSxJQUFHLEVBQUcsRUFBbEIsRUFBcUI7QUFDN0IsTUFBQSxNQUFNLEVBQUUsS0FEcUI7QUFFN0IsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWDtBQUZvQixLQUFyQixDQUFMLENBS0osSUFMSSxDQUtDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQUxiLENBQVA7QUFNSCxHQVhnQjtBQVlqQixFQUFBLGVBQWUsRUFBRSxVQUFVLGFBQVYsRUFBeUI7QUFDdEMsV0FBTyxLQUFLLENBQUMsT0FBRCxFQUFVO0FBQ2xCLE1BQUEsTUFBTSxFQUFFLE1BRFU7QUFFbEIsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUZTO0FBS2xCLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsYUFBZjtBQUxZLEtBQVYsQ0FBTCxDQU1KLElBTkksQ0FNQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFOYixDQUFQO0FBT0gsR0FwQmdCO0FBcUJqQixFQUFBLFVBQVUsRUFBRSxVQUFVLE1BQVYsRUFBa0I7QUFDMUIsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLElBQUcsTUFBTyxFQUF0QixFQUF5QjtBQUNqQyxNQUFBLE1BQU0sRUFBRSxRQUR5QjtBQUVqQyxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYO0FBRndCLEtBQXpCLENBQUwsQ0FLSixJQUxJLENBS0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBTGIsQ0FBUDtBQU1ILEdBNUJnQjtBQTZCakIsRUFBQSxZQUFZLEVBQUUsVUFBVSxNQUFWLEVBQWtCLFVBQWxCLEVBQThCO0FBQ3hDLFdBQU8sS0FBSyxDQUFFLEdBQUUsT0FBUSxJQUFHLE1BQU8sRUFBdEIsRUFBeUI7QUFDakMsTUFBQSxNQUFNLEVBQUUsS0FEeUI7QUFFakMsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUZ3QjtBQUtqQyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLFVBQWY7QUFMMkIsS0FBekIsQ0FBTCxDQU1KLElBTkksQ0FNQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFOYixDQUFQO0FBT0g7QUFyQ2dCLENBQXJCOzs7OztBQ0ZBLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixHQUFzQixZQUFZO0FBQ2hDLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7dGVzdH0gZnJvbSBcIi4vbW9kdWxlcy90ZXN0XCI7XHJcbmltcG9ydCB7QVBJfSBmcm9tIFwiLi9tb2R1bGVzL2FwaUNhbGxzXCI7XHJcblxyXG50ZXN0KCk7XHJcblxyXG5BUEkuZ2V0VXNlcnMoKS50aGVuKGVudHJpZXMgPT4gY29uc29sZS5sb2coXCJlbnRyaWVzIGFuZCBzdHVmZlwiLCBlbnRyaWVzKSk7XHJcbkFQSS5nZXRPbmVVc2VyKDEpLnRoZW4oZW50cnkgPT4gY29uc29sZS5sb2coXCJvbmUgZW50cnlcIiwgZW50cnkpKTsiLCJjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnNcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzLkFQSSA9IHtcclxuICAgIGdldFVzZXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGJhc2VVcmwpLnRoZW4ocmVzdWx0cyA9PiByZXN1bHRzLmpzb24oKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0T25lVXNlcjogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVcmx9LyR7aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9LFxyXG4gICAgcmVnaXN0ZXJOZXdVc2VyOiBmdW5jdGlvbiAobmV3VXNlck9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChiYXNlVXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXJPYmplY3QpXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZVVzZXI6IGZ1bmN0aW9uICh1c2VySWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVybH0vJHt1c2VySWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdFVzZXJJbmZvOiBmdW5jdGlvbiAodXNlcklkLCB1c2VyT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVcmx9LyR7dXNlcklkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyT2JqZWN0KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiSGVsbG8sIHRoaXMgZnVuY3Rpb24gaXMgd29ya2luZyBtb2R1bGFybHkuXCIpO1xyXG4gIGNvbnNvbGUubG9nKFwiV29ya2luZyEhIVwiKTtcclxufTsiXX0=
