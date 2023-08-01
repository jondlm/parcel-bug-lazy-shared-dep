import _ from "lodash";

const appElement = document.querySelector("#app");
appElement.innerText = "Hello from JavaScript and lodash " + _.VERSION;
