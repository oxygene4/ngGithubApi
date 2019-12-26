(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\" class=\"toolbar\">\n  <div class=\"container\">\n    <div class=\"account\">\n      <div><p>{{ user.name }} {{ user.email }}</p></div>\n    </div>\n    <button mat-raised-button (click)=\"logout()\">Logout</button>\n  </div>\n</div>\n\n<div *ngIf=\"user\" class=\"container game\">\n  <pre class=\"statistics\">{{ user.statistics | json }}</pre>\n\n  <div *ngIf=\"!isPlaying\" class=\"select-player\">\n    <p>Select a player</p>\n    <div>\n      <div class=\"select-player__player\" (click)=\"choosePlayer(X_MARK)\">X</div>\n      <div class=\"select-player__player\" (click)=\"choosePlayer(O_MARK)\">O</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"isPlaying\"\n       class=\"field\"\n       [class.isLoading]=\"isLoading\"\n       [class.isGameOver]=\"isGameOver\"\n       [class.row1]=\"winnerLine === 'row1'\"\n       [class.row2]=\"winnerLine === 'row2'\"\n       [class.row3]=\"winnerLine === 'row3'\"\n       [class.col1]=\"winnerLine === 'col1'\"\n       [class.col2]=\"winnerLine === 'col2'\"\n       [class.col3]=\"winnerLine === 'col3'\"\n       [class.dia1]=\"winnerLine === 'dia1'\"\n       [class.dia2]=\"winnerLine === 'dia2'\">\n    <div *ngFor=\"let cell of gameModel; let i = index\"\n         class=\"cell\"\n         (click)=\"userStepHandler(i)\">\n      {{cell}}\n    </div>\n  </div>\n\n  <div *ngIf=\"isResultShown\">\n    <button class=\"new-game\"\n            mat-raised-button\n            (click)=\"resetGame()\">\n      New game\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container--flex\">\n  <h2>Welcome to my app</h2>\n\n  <mat-card-content>\n    <mat-card class=\"auth-form\">\n      <mat-card-header>\n        <mat-card-title>{{isLoginMode ? 'Login' : 'Register'}}</mat-card-title>\n      </mat-card-header>\n\n      <mat-card-content>\n        <form [formGroup]=\"authForm\">\n          <mat-form-field *ngIf=\"!isLoginMode\">\n            <input matInput placeholder=\"Name\" formControlName=\"name\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Email address\" formControlName=\"email\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n          </mat-form-field>\n\n          <div class=\"submit\">\n            <div class=\"error\">{{errorMessage}}</div>\n            <button mat-raised-button (click)=\"tryAuth(authForm.value)\">{{isLoginMode ? 'Login' : 'Register'}}</button>\n          </div>\n        </form>\n      </mat-card-content>\n\n      <mat-card-actions>\n        <p *ngIf=\"!isLoginMode\">Already have an account?\n          <button mat-button (click)=\"changeAuthMode()\">Login</button>\n        </p>\n\n        <p *ngIf=\"isLoginMode\">No account yet?\n          <button mat-button (click)=\"changeAuthMode()\">Create an account</button>\n        </p>\n      </mat-card-actions>\n    </mat-card>\n  </mat-card-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, routingComponents, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _core_user_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/user.resolver */ "./src/app/core/user.resolver.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







const routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        pathMatch: 'full',
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
        resolve: { data: _core_user_resolver__WEBPACK_IMPORTED_MODULE_4__["UserResolver"] }
    },
    {
        path: '**',
        redirectTo: 'landing'
    }
];
const routingComponents = [
    _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
    _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  max-width: 640px;\n  margin: 32px auto;\n  padding: 0 32px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V1Z2VuLmhvdm9ydW4vRG9jdW1lbnRzL2dvdm9ydW4tcHJvamVjdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgcGFkZGluZzogMCAzMnB4IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJtYWluIHtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAzMnB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMzJweCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_step_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/step-interceptor.service */ "./src/app/core/step-interceptor.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _materialComponents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./materialComponents */ "./src/app/materialComponents.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _core_user_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/user.resolver */ "./src/app/core/user.resolver.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ..._materialComponents__WEBPACK_IMPORTED_MODULE_12__["default"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _services_game_service__WEBPACK_IMPORTED_MODULE_17__["GameService"], _core_user_resolver__WEBPACK_IMPORTED_MODULE_18__["UserResolver"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _core_step_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["StepInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        return new Promise(resolve => {
            this.userService.getCurrentUser()
                .then(() => {
                this.router.navigate(['/game']).catch(console.warn);
                return resolve(false);
            }, () => resolve(true));
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/core/step-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/step-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: StepInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepInterceptor", function() { return StepInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let StepInterceptor = class StepInterceptor {
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(event => this.handleResponse(req, event)));
    }
    handleResponse(req, event) {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] && req.url.includes('tic-tac-toe')) {
            return event.clone({
                body: event.body.recommendation
            });
        }
        return event;
    }
};
StepInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], StepInterceptor);



/***/ }),

/***/ "./src/app/core/user.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/core/user.resolver.ts ***!
  \***************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let UserResolver = class UserResolver {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    resolve(route) {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(res => resolve(res), err => {
                console.dir(err);
                this.router.navigate(['/landing']);
                return reject(err);
            });
        });
    }
};
UserResolver.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserResolver);



/***/ }),

/***/ "./src/app/game/game.component.scss":
/*!******************************************!*\
  !*** ./src/app/game/game.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  padding: 16px;\n  background-color: #f5f5f5;\n}\n.toolbar .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.game.container {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.statistics {\n  margin-bottom: 32px;\n}\n.select-player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 24px;\n}\n.select-player__player {\n  display: inline-block;\n  padding: 16px;\n  outline: 1px dashed #ccc;\n  cursor: pointer;\n}\n.field {\n  position: relative;\n  width: 288px;\n  height: 288px;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n}\n.field:after {\n  position: absolute;\n  display: none;\n  content: \"\";\n  background-color: #ccc;\n}\n.field[class*=row]:after {\n  display: block;\n  width: 100%;\n  height: 3px;\n}\n.field.row1:after {\n  transform: translateY(48px);\n}\n.field.row2:after {\n  transform: translateY(144px);\n}\n.field.row3:after {\n  transform: translateY(240px);\n}\n.field[class*=col]:after {\n  display: block;\n  height: 100%;\n  width: 3px;\n}\n.field.col1:after {\n  transform: translateX(48px);\n}\n.field.col2:after {\n  transform: translateX(144px);\n}\n.field.col3:after {\n  transform: translateX(240px);\n}\n.field[class*=dia]:after {\n  display: block;\n  top: 0;\n  height: 3px;\n  width: 141%;\n  transform-origin: 0 0;\n}\n.field.dia1:after {\n  transform: rotate(45deg);\n}\n.field.dia2:after {\n  transform: translateY(288px) rotate(-45deg);\n}\n.field.isGameOver .cell {\n  cursor: not-allowed;\n}\n.field.isLoading .cell {\n  cursor: progress;\n}\n.field .cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(100% / 3);\n  height: calc(100% / 3);\n  box-sizing: border-box;\n  outline: 1px dashed #ccc;\n  cursor: pointer;\n}\n.new-game {\n  margin: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V1Z2VuLmhvdm9ydW4vRG9jdW1lbnRzL2dvdm9ydW4tcHJvamVjdC9zcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0RGO0FESUE7RUFDRSxtQkFBQTtBQ0RGO0FES0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGRjtBRElFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDRko7QURNQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDSEY7QURLRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNKSjtBRE9FO0VBQ0UsMkJBQUE7QUNMSjtBRFFFO0VBQ0UsNEJBQUE7QUNOSjtBRFNFO0VBQ0UsNEJBQUE7QUNQSjtBRFVFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUko7QURXRTtFQUNFLDJCQUFBO0FDVEo7QURZRTtFQUNFLDRCQUFBO0FDVko7QURhRTtFQUNFLDRCQUFBO0FDWEo7QURjRTtFQUNFLGNBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1pKO0FEZUU7RUFDRSx3QkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsMkNBQUE7QUNkSjtBRGtCSTtFQUNFLG1CQUFBO0FDaEJOO0FEcUJJO0VBQ0UsZ0JBQUE7QUNuQk47QUR1QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ3JCSjtBRHlCQTtFQUNFLFlBQUE7QUN0QkYiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB9XG59XG5cbi5nYW1lLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGF0aXN0aWNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuXG4uc2VsZWN0LXBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcblxuICAmX19wbGF5ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgI2NjYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjg4cHg7XG4gIGhlaWdodDogMjg4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB9XG5cbiAgJltjbGFzcyo9J3JvdyddOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgfVxuXG4gICYucm93MTphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ4cHgpO1xuICB9XG5cbiAgJi5yb3cyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTQ0cHgpO1xuICB9XG5cbiAgJi5yb3czOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjQwcHgpO1xuICB9XG5cbiAgJltjbGFzcyo9J2NvbCddOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDNweDtcbiAgfVxuXG4gICYuY29sMTphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ4cHgpO1xuICB9XG5cbiAgJi5jb2wyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTQ0cHgpO1xuICB9XG5cbiAgJi5jb2wzOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjQwcHgpO1xuICB9XG5cbiAgJltjbGFzcyo9J2RpYSddOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDE0MSU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB9XG5cbiAgJi5kaWExOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuICAmLmRpYTI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyODhweCkgcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICAmLmlzR2FtZU92ZXIge1xuICAgIC5jZWxsIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgJi5pc0xvYWRpbmcge1xuICAgIC5jZWxsIHtcbiAgICAgIGN1cnNvcjogcHJvZ3Jlc3M7XG4gICAgfVxuICB9XG5cbiAgLmNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgI2NjYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm5ldy1nYW1lIHtcbiAgbWFyZ2luOiAzMnB4O1xufVxuIiwiLnRvb2xiYXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLnRvb2xiYXIgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0YXRpc3RpY3Mge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4uc2VsZWN0LXBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5zZWxlY3QtcGxheWVyX19wbGF5ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG91dGxpbmU6IDFweCBkYXNoZWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyODhweDtcbiAgaGVpZ2h0OiAyODhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZpZWxkOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuLmZpZWxkW2NsYXNzKj1yb3ddOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbn1cbi5maWVsZC5yb3cxOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ4cHgpO1xufVxuLmZpZWxkLnJvdzI6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTQ0cHgpO1xufVxuLmZpZWxkLnJvdzM6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjQwcHgpO1xufVxuLmZpZWxkW2NsYXNzKj1jb2xdOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDNweDtcbn1cbi5maWVsZC5jb2wxOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ4cHgpO1xufVxuLmZpZWxkLmNvbDI6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTQ0cHgpO1xufVxuLmZpZWxkLmNvbDM6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjQwcHgpO1xufVxuLmZpZWxkW2NsYXNzKj1kaWFdOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxNDElO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG59XG4uZmllbGQuZGlhMTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5maWVsZC5kaWEyOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI4OHB4KSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5maWVsZC5pc0dhbWVPdmVyIC5jZWxsIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5maWVsZC5pc0xvYWRpbmcgLmNlbGwge1xuICBjdXJzb3I6IHByb2dyZXNzO1xufVxuLmZpZWxkIC5jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogMXB4IGRhc2hlZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctZ2FtZSB7XG4gIG1hcmdpbjogMzJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let GameComponent = class GameComponent {
    constructor(authService, route, location, game, http) {
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.game = game;
        this.http = http;
        this.isPlaying = false;
        this.isLoading = false;
        this.isGameOver = false;
        this.isResultShown = false;
        this.X_MARK = 'X';
        this.O_MARK = 'O';
        this.gameModel = ['', '', '', '', '', '', '', '', ''];
        this.userMark = this.X_MARK;
        this.currentPlayerMark = this.X_MARK;
    }
    ngOnInit() {
        this.route.data.subscribe(routeData => {
            const user = routeData.data;
            if (user) {
                this.http.get(user.displayName)
                    .toPromise()
                    .then((userJson) => {
                    const { played, won, lost, drawn, unfinished } = userJson.statistics;
                    const correctStat = played - won - lost - drawn === unfinished;
                    this.user = userJson;
                    this.user.displayName = user.displayName;
                    if (!correctStat) {
                        this.updateStatistics('all');
                    }
                });
            }
        });
    }
    get gameModelForApi() {
        return this.gameModel.map((mark) => mark || '-').join('');
    }
    get opponentMark() {
        return this.userMark === this.X_MARK ? this.O_MARK : this.X_MARK;
    }
    get gameModelObject() {
        return {
            row1: [this.gameModel[0], this.gameModel[1], this.gameModel[2]],
            row2: [this.gameModel[3], this.gameModel[4], this.gameModel[5]],
            row3: [this.gameModel[6], this.gameModel[7], this.gameModel[8]],
            col1: [this.gameModel[0], this.gameModel[3], this.gameModel[6]],
            col2: [this.gameModel[1], this.gameModel[4], this.gameModel[7]],
            col3: [this.gameModel[2], this.gameModel[5], this.gameModel[8]],
            dia1: [this.gameModel[0], this.gameModel[4], this.gameModel[8]],
            dia2: [this.gameModel[2], this.gameModel[4], this.gameModel[6]]
        };
    }
    choosePlayer(chosenMark) {
        this.userMark = chosenMark;
        if (chosenMark !== this.X_MARK) {
            this.makeStep();
        }
        this.isPlaying = true;
        this.updateStatistics('played');
    }
    userStepHandler(cellIndex) {
        if (this.gameModel[cellIndex] || this.isLoading || this.isGameOver) {
            return;
        }
        this.gameModel[cellIndex] = this.userMark;
        this.checkState();
        if (!this.isGameOver) {
            this.makeStep();
        }
    }
    makeStep() {
        this.isLoading = true;
        this.game.getNextStep({ player: this.opponentMark, game: this.gameModelForApi })
            .then((recommendation) => {
            this.gameModel[recommendation] = this.opponentMark;
            this.checkState();
            this.isLoading = false;
        });
    }
    toggleCurrentPlayer() {
        this.currentPlayerMark = this.currentPlayerMark === this.X_MARK ? this.O_MARK : this.X_MARK;
    }
    checkState() {
        const finished = this.gameModel.every(Boolean);
        const filledLines = Object.entries(this.gameModelObject).filter(([_, cells]) => cells.every(Boolean));
        const hasWinnerLine = filledLines.find(([_, cells]) => {
            return cells.every((mark, index, self) => mark === self[0]);
        });
        this.winnerLine = hasWinnerLine ? hasWinnerLine[0] : '';
        this.isGameOver = finished || !!this.winnerLine;
        if (finished && !this.winnerLine) {
            this.isGameOver = true;
            this.isResultShown = true;
            this.updateStatistics('drawn');
        }
        else if (this.winnerLine) {
            const userWon = this.userMark === this.currentPlayerMark;
            this.isGameOver = true;
            this.isResultShown = true;
            this.updateStatistics(userWon ? 'won' : 'lost');
        }
        else {
            this.toggleCurrentPlayer();
        }
    }
    resetGame() {
        this.gameModel = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayerMark = this.X_MARK;
        this.isGameOver = false;
        this.isResultShown = false;
        this.winnerLine = '';
        this.isPlaying = false;
    }
    updateStatistics(key) {
        if (key === 'all') {
            const { played, won, lost, drawn } = this.user.statistics;
            this.user.statistics.unfinished = played - won - lost - drawn;
        }
        else {
            this.user.statistics[key]++;
        }
        this.game.sendStatToServer(this.user)
            .then((user) => {
            this.user.statistics = user.statistics;
        });
    }
    logout() {
        this.authService.doLogout()
            .then(() => this.location.back());
    }
};
GameComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card.auth-form {\n  padding: 32px;\n}\n.mat-card.auth-form .mat-card-header {\n  display: block;\n}\n.mat-card.auth-form .mat-card-title {\n  text-align: center;\n}\n.mat-card.auth-form .mat-form-field {\n  width: 100%;\n}\n.mat-card.auth-form .submit {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto 16px;\n  padding-top: 40px;\n}\n.mat-card.auth-form .submit .error {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #f44336;\n}\n.mat-card.auth-form .mat-card-actions {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.mat-card.auth-form .mat-card-actions .mat-mini-fab + .mat-mini-fab {\n  margin-left: 16px;\n}\n.mat-card.auth-form .mat-card-actions .mat-raised-button {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V1Z2VuLmhvdm9ydW4vRG9jdW1lbnRzL2dvdm9ydW4tcHJvamVjdC9zcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURDRTtFQUNFLFdBQUE7QUNDSjtBREVFO0VBT0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTko7QURKSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FDTU47QURHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNFLGlCQUFBO0FDQU47QURFSTtFQUNFLFdBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC5hdXRoLWZvcm0ge1xuICBwYWRkaW5nOiAzMnB4O1xuICAubWF0LWNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3VibWl0IHtcbiAgICAuZXJyb3Ige1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGNvbG9yOiAjZjQ0MzM2O1xuICAgIH1cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0byAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG5cbiAgLm1hdC1jYXJkLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5tYXQtbWluaS1mYWIgKyAubWF0LW1pbmktZmFiIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgICAgbWFyZ2luOiA4cHg7XG4gICAgfVxuICB9XG59XG4iLCIubWF0LWNhcmQuYXV0aC1mb3JtIHtcbiAgcGFkZGluZzogMzJweDtcbn1cbi5tYXQtY2FyZC5hdXRoLWZvcm0gLm1hdC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1hdC1jYXJkLmF1dGgtZm9ybSAubWF0LWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWF0LWNhcmQuYXV0aC1mb3JtIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1jYXJkLmF1dGgtZm9ybSAuc3VibWl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4ubWF0LWNhcmQuYXV0aC1mb3JtIC5zdWJtaXQgLmVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1jYXJkLmF1dGgtZm9ybSAubWF0LWNhcmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWF0LWNhcmQuYXV0aC1mb3JtIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtbWluaS1mYWIgKyAubWF0LW1pbmktZmFiIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4ubWF0LWNhcmQuYXV0aC1mb3JtIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LandingComponent = class LandingComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.isLoginMode = true;
        this.createForm();
    }
    changeAuthMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    createForm() {
        this.authForm = this.formBuilder.group({ name: '', email: '', password: '' });
    }
    tryAuth(value) {
        const action = this.isLoginMode ? 'doLogin' : 'doRegister';
        this.authService[action](value)
            .then(() => {
            this.router.navigate(['/game']);
        }, err => {
            this.errorMessage = err.message;
        });
    }
};
LandingComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/materialComponents.ts":
/*!***************************************!*\
  !*** ./src/app/materialComponents.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
































/* harmony default export */ __webpack_exports__["default"] = ([
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]
]);


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






let AuthService = class AuthService {
    constructor(afAuth, http, userService) {
        this.afAuth = afAuth;
        this.http = http;
        this.userService = userService;
    }
    doRegister(form) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().createUserWithEmailAndPassword(form.email, form.password)
                .then(fbUserData => {
                const postData = {
                    name: form.name || 'user',
                    email: fbUserData.user.email,
                    statistics: {
                        played: 0,
                        won: 0,
                        lost: 0,
                        drawn: 0,
                        unfinished: 0
                    }
                };
                this.http.post(`https://api.myjson.com/bins`, postData)
                    .toPromise()
                    .then((bin) => {
                    this.userService.updateCurrentUser(bin.uri)
                        .then(() => resolve(fbUserData));
                });
            }, err => reject(err));
        });
    }
    doLogin(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(fbUserData => resolve(fbUserData), err => reject(err));
        });
    }
    doLogout() {
        return new Promise((resolve, reject) => {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser) {
                this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let GameService = class GameService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapidApiTicTacToe.base;
        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapidApiTicTacToe.key;
        this.apiHost = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rapidApiTicTacToe.host;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('x-rapidapi-host', this.apiHost)
                .set('x-rapidapi-key', this.apiKey)
        };
    }
    getNextStep({ game, player }) {
        return this.http.get(`${this.baseUrl}${game}/${player}`, this.httpOptions).toPromise();
    }
    sendStatToServer(user) {
        return this.http.put(user.displayName, user).toPromise();
    }
};
GameService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GameService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let UserService = class UserService {
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    getCurrentUser() {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(user => {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    }
    updateCurrentUser(uri) {
        return new Promise((resolve, reject) => {
            const user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
            user.updateProfile({ displayName: uri })
                .then(res => resolve(res), err => reject(err));
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCmw1OJanX27n9rDxR4IaA-SQqv0hYpMiQ',
        authDomain: 'govorun-project.firebaseapp.com',
        databaseURL: 'https://govorun-project.firebaseio.com',
        projectId: 'govorun-project',
        storageBucket: 'govorun-project.appspot.com',
        messagingSenderId: '709367050757',
        appId: '1:709367050757:web:1c8a553cc858e341fbe26c'
    },
    rapidApiTicTacToe: {
        key: 'PDirDBiguWmshbliGep4aPqjjBffp1bwhSSjsnPZeNff3jdd91',
        host: 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
        base: 'https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eugen.hovorun/Documents/govorun-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map