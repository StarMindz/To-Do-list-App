/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst list = document.getElementById('to-do-list');\r\n\r\n// Create array of tasks objects\r\nconst toDoList = [\r\n  {\r\n    description: 'Go to Work',\r\n    completed: false,\r\n    index: '1',\r\n  },\r\n  {\r\n    description: 'Visit the Gym',\r\n    completed: false,\r\n    index: '2',\r\n  },\r\n  {\r\n    description: 'Call my Parents',\r\n    completed: false,\r\n    index: '3',\r\n  },\r\n  {\r\n    description: 'Go to the Library',\r\n    completed: false,\r\n    index: '4',\r\n  },\r\n  {\r\n    description: 'Go shopping',\r\n    completed: false,\r\n    index: '5',\r\n  },\r\n];\r\n\r\n// Save to local storage\r\nlocalStorage.setItem('data', JSON.stringify(toDoList));\r\n\r\n// innerHtml\r\nlet innerText = '';\r\n\r\n// Loop through array of object adding it to the toDoList innerHtml\r\ntoDoList.forEach((task) => {\r\n    let html = `\r\n <li class = 'list-item' id = '${task.index}>${task.description}<li>\r\n `;\r\n    innerText += html;\r\n});\r\n\r\n// Add innerHTML\r\nlist.innerHTML = innerText;\n\n//# sourceURL=webpack://To-Do-list-App/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;