require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graphql/resolvers.js":
/*!**********************************!*\
  !*** ./src/graphql/resolvers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_courses_getCourse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/courses/getCourse */ "./src/modules/courses/getCourse.js");
/* harmony import */ var _modules_courses_updateCourse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/courses/updateCourse */ "./src/modules/courses/updateCourse.js");
// Imports:

 // GraphQL: Resolvers

const RESOLVERS = {
  Query: {
    getCourse: _modules_courses_getCourse__WEBPACK_IMPORTED_MODULE_0__["getCourse"],
    getCourses: _modules_courses_getCourse__WEBPACK_IMPORTED_MODULE_0__["getCourses"]
  },
  Mutation: {
    updateCourseTopic: _modules_courses_updateCourse__WEBPACK_IMPORTED_MODULE_1__["updateCourseTopic"]
  }
}; // Exports

/* harmony default export */ __webpack_exports__["default"] = (RESOLVERS);

/***/ }),

/***/ "./src/graphql/schema.js":
/*!*******************************!*\
  !*** ./src/graphql/schema.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./src/graphql/types.js");
/* harmony import */ var _resolvers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers.js */ "./src/graphql/resolvers.js");
// Imports: GraphQL
 // Imports: GraphQL TypeDefs & Resolvers


 // GraphQL: Schema

const SERVER = new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  typeDefs: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _resolvers_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  playground: {
    endpoint: `http://localhost:3030/graphql`,
    settings: {
      'editor.theme': 'dark'
    }
  }
}); // Exports

/* harmony default export */ __webpack_exports__["default"] = (SERVER);

/***/ }),

/***/ "./src/graphql/types.js":
/*!******************************!*\
  !*** ./src/graphql/types.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
// Imports: GraphQL
 // GraphQL: TypeDefs

const TYPEDEFS = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    type Query {
        getCourse(id: Int!): Course
        getCourses(topic: String): [Course]
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    }
`; // Exports

/* harmony default export */ __webpack_exports__["default"] = (TYPEDEFS);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/schema.js */ "./src/graphql/schema.js");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
 // Imports: GraphQL



const app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // app.use(cors());

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));
_graphql_schema_js__WEBPACK_IMPORTED_MODULE_1__["default"].applyMiddleware({
  app
});
const {
  PORT = 3030
} = process.env;
app.listen(PORT, () => console.log(`Express GraphQL Server Now Running On localhost:${PORT}/graphql`));
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/mockData/courses.js":
/*!*********************************!*\
  !*** ./src/mockData/courses.js ***!
  \*********************************/
/*! exports provided: coursesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coursesData", function() { return coursesData; });
const coursesData = [{
  id: 1,
  title: 'The Complete Node.js Developer Course',
  author: 'Andrew Mead, Rob Percival',
  description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
  topic: 'Node.js',
  url: 'https://codingthesmartway.com/courses/nodejs/'
}, {
  id: 2,
  title: 'Node.js, Express & MongoDB Dev to Deployment',
  author: 'Brad Traversy',
  description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
  topic: 'Node.js',
  url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
}, {
  id: 3,
  title: 'JavaScript: Understanding The Weird Parts',
  author: 'Anthony Alicea',
  description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
  topic: 'JavaScript',
  url: 'https://codingthesmartway.com/courses/understand-javascript/'
}];

/***/ }),

/***/ "./src/modules/courses/getCourse.js":
/*!******************************************!*\
  !*** ./src/modules/courses/getCourse.js ***!
  \******************************************/
/*! exports provided: getCourse, getCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourse", function() { return getCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourses", function() { return getCourses; });
/* harmony import */ var _mockData_courses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mockData/courses */ "./src/mockData/courses.js");

const getCourse = ({
  args
}) => {
  console.log(args);
  const id = args.id;
  return _mockData_courses__WEBPACK_IMPORTED_MODULE_0__["coursesData"].filter(course => {
    return course.id == id;
  })[0];
};
const getCourses = ({
  args
}) => {
  console.log(args);

  if (args.topic) {
    const topic = args.topic;
    return _mockData_courses__WEBPACK_IMPORTED_MODULE_0__["coursesData"].filter(course => course.topic === topic);
  } else {
    return _mockData_courses__WEBPACK_IMPORTED_MODULE_0__["coursesData"];
  }
};

/***/ }),

/***/ "./src/modules/courses/updateCourse.js":
/*!*********************************************!*\
  !*** ./src/modules/courses/updateCourse.js ***!
  \*********************************************/
/*! exports provided: updateCourseTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCourseTopic", function() { return updateCourseTopic; });
/* harmony import */ var _mockData_courses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mockData/courses */ "./src/mockData/courses.js");

const updateCourseTopic = ({
  id,
  topic
}) => {
  _mockData_courses__WEBPACK_IMPORTED_MODULE_0__["coursesData"].map(course => {
    if (course.id === id) {
      course.topic = topic;
      return course;
    }
  });
  return _mockData_courses__WEBPACK_IMPORTED_MODULE_0__["coursesData"].filter(course => course.id === id)[0];
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\projects\react-graphql\backend\src/index.js */"./src/index.js");


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })

/******/ });
//# sourceMappingURL=main.map