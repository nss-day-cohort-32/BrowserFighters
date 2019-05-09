const path = require("path");

module.exports = {
  scripts: {
    files: ["./../scripts/**/*.js"],
    tasks: ["eslint", "browserify"],
    options: {
      spawn: false,
      debounceDelay: 500,
      livereload: true
    }
  },
  styles: {
    files: ["../../public/styles/*.css"],
    options: {
      livereload: true
    }
  },
  html: {
    options: {
      livereload: true
    },
    files: ["../../public/*.html"]
  }
};