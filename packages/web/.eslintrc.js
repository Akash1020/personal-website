module.exports = {
  "extends": [
    "wesbos"
  ],
  "rules": {
    "semi": [2, "never"],
    "react/prop-types": [1]
  },
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "plugins": [
    "html"
  ],
  "settings": {
    "html/html-extensions": [".html"]
  }
}
