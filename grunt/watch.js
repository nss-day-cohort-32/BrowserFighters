const path = require("path");

module.exports = {
  scripts: {
    files: ["src/scripts/**/*.js"],
    tasks: ["eslint", "browserify"],
    options: {
      spawn: false,
      debounceDelay: 500,
      livereload: true
    }
  },
  styles: {
    files: ["src/styles/**/*.css"],
    options: {
      livereload: true
    }
  },
  html: {
    options: {
      livereload: true
    },
    files: ["**/*.html"]
  }
};