/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_revision__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/revision */ \"./src/modules/revision.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('21 april 2022 15:50:00')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_revision__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])([ '.portfolio-content', '.portfolio-item', '.portfolio-dots', '.dot-active'])\r\n\n\n//# sourceURL=webpack://js-lesson18/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function () {\r\n    const menu = document.querySelector('menu')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n    \r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu') || e.target.closest('ul')) {\r\n            e.preventDefault()\r\n            handleMenu()\r\n        } \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://js-lesson18/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const modalContent = document.querySelector('.popup-content')\r\n    let count = -350 \r\n    let intervalId\r\n    let open = false\r\n    modalContent.style.transform = `translateX(${count}%)`\r\n\r\n    const counter = (open) => {\r\n        if (open) {\r\n            count += 5\r\n        } else {\r\n            count -= 5\r\n        }\r\n    }\r\n\r\n    const modalOpen = (open) => {\r\n        counter(open)\r\n        modalContent.style.transform = `translateX(${count}%)`\r\n        if(count >= 0){\r\n            clearInterval(intervalId)\r\n            open = false\r\n        } else if(count <= -350){\r\n            clearInterval(intervalId)\r\n            open = false\r\n            modal.style.display = ''\r\n        }\r\n\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.popup-close') || e.target.classList.contains('popup')) {\r\n            open = !open\r\n            intervalId = setInterval(() => {\r\n                modalOpen(open)\r\n            }, 10)\r\n\r\n        } else if (e.target.closest('.popup-btn')) {\r\n            open = !open\r\n            modal.style.display = 'block'\r\n            intervalId = setInterval(() => {\r\n                modalOpen(open)\r\n            }, 10)\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://js-lesson18/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/revision.js":
/*!*********************************!*\
  !*** ./src/modules/revision.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst revision = function () {\r\n    const form2Message = document.querySelector('#form2-message')\r\n    const calcItem = document.querySelectorAll('.calc-item')\r\n    const formName = document.querySelectorAll('.form-name')\r\n    const formEmail = document.querySelectorAll('.form-email')\r\n    const formPhone = document.querySelectorAll('.form-phone')\r\n    \r\n    formPhone.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            phone(event)\r\n        })\r\n    })\r\n\r\n    formEmail.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            email(event)\r\n        })\r\n    })\r\n\r\n    formName.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            text(event)\r\n        })\r\n    })\r\n\r\n    calcItem.forEach(btn => {\r\n        btn.addEventListener('blur', function () {\r\n            calc(event)\r\n        })\r\n    })\r\n\r\n    form2Message.addEventListener('blur', function () {\r\n        text(event)\r\n    })\r\n\r\n    const phone = function (event) {\r\n        event.target.value = event.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\").replace(/^[\\-]+/g, '').replace(/[\\-]+$/g, '').replace(/\\-+/g, \"-\")\r\n    }\r\n\r\n    const email = function (event) {\r\n        event.target.value = event.target.value.replace(/[^a-zA-Z\\@\\-\\.\\!\\~\\*\\']/g, '').replace(/^[\\-]+/g, '').replace(/[\\-]+$/g, '').replace(/\\-+/g, \"-\")\r\n    }\r\n\r\n    const text = function (event) {\r\n        event.target.value = event.target.value.replace(/[^а-яА-Я\\-\\ ]/g, '').replace(/^[\\s\\-]+/g, '').replace(/[\\s\\-]+$/g, '').replace(/\\-+/g, \"-\").replace(/\\ +/g, \" \").replace(/(^|\\s)\\S/g, function (e) {return e.toUpperCase()})\r\n    }\r\n\r\n    const calc = function (event) {\r\n        event.target.value = event.target.value.replace(/[^0-9]/g, '')\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (revision);\n\n//# sourceURL=webpack://js-lesson18/./src/modules/revision.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = function () {\r\n    const menu = document.querySelector('menu')\r\n    const ul = menu.querySelector('ul')\r\n    const anchors = ul.querySelectorAll('a')\r\n    const main = document.querySelector('main')\r\n    const a = main.querySelector('a')\r\n\r\n    a.addEventListener('click', function (e) {\r\n        e.preventDefault()\r\n        \r\n        const blockID = a.getAttribute('href')\r\n        \r\n        document.querySelector(blockID).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n        })\r\n    })\r\n\r\n    for (let anchor of anchors) {\r\n        anchor.addEventListener('click', function (e) {\r\n            e.preventDefault()\r\n\r\n            const blockID = anchor.getAttribute('href')\r\n\r\n            document.querySelector(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://js-lesson18/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ([blockClass, slidesClass, dotsClass, dotAct]) => {\r\n    const sliderBlock = document.querySelector(blockClass)\r\n    const slides = document.querySelectorAll(slidesClass)\r\n    const portfolioDots = document.querySelector(dotsClass)\r\n    const dA = document.querySelector(dotAct)\r\n    if (sliderBlock == null || slides == null || portfolioDots == null) {\r\n        return\r\n    }\r\n\r\n    const timeInterval = 2000\r\n    \r\n    let currentSlide = 0  \r\n    let interval          \r\n    \r\n    slides.forEach(() => {\r\n        let li = document.createElement('li')\r\n        li.classList.add('dot')\r\n        portfolioDots.append(li)\r\n    })\r\n    const dots = document.querySelectorAll('.dot')\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault() \r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n     \r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        \r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide()\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://js-lesson18/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = function () {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://js-lesson18/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n    const getTimeRemaining = () => {\r\n\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let hours = Math.floor(timeRemaining / 60 / 60)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerHours.textContent = (\"0\" + getTime.hours).slice(-2);\r\n        timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2);\r\n        timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2);\r\n    };\r\n    if (getTimeRemaining > 0) {\r\n        updateClock();\r\n    }\r\n    setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n            clearInterval(updateClock);\r\n        }\r\n    }, 1000);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://js-lesson18/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;