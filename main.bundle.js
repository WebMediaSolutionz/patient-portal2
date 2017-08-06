webpackJsonp([1,5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_display_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var WebService = (function () {
    function WebService(http, errorDisplayService, authService) {
        this.http = http;
        this.errorDisplayService = errorDisplayService;
        this.authService = authService;
        this.API_URL = 'http://159.203.16.23:443/api';
        this.configUrl = './assets/data/config.json';
    }
    WebService.prototype.getPasswordRules = function () {
        this.dest = this.API_URL + '/password-rules';
        return this.http.get(this.dest, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.savePasswordRules = function (passwordRules) {
        this._confirmationMsg();
        this.dest = this.API_URL + '/password-rules';
        return this.http.post(this.dest, passwordRules, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.getClients = function () {
        this.dest = this.API_URL + '/clients';
        return this.http.get(this.dest, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.saveClient = function (client) {
        this._confirmationMsg("Client Modifications been saved");
        this.dest = this.API_URL + '/saveclient';
        return this.http.post(this.dest, client, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.getUser = function () {
        this.dest = this.API_URL + '/users/me';
        return this.http.get(this.dest, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.saveUser = function (userData) {
        this._confirmationMsg();
        this.dest = this.API_URL + '/users/me';
        return this.http.post(this.dest, userData, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.getConfig = function () {
        return this.http.get(this.configUrl)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.addUpdate = function (urlAction, data) {
        this._confirmationMsg();
        this.dest = this.API_URL + urlAction;
        return this.http.post(this.dest, data, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype.getOne = function (urlAction, idValue) {
        this._confirmationMsg("Trying to update " + urlAction);
        this._confirmationMsg('url: ' + this.API_URL + urlAction + '/' + idValue);
        return this.http.get(this.API_URL + urlAction + '/' + idValue, this.authService.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    WebService.prototype._confirmationMsg = function (msg) {
        if (msg === void 0) { msg = "modifications have been saved"; }
        this.errorDisplayService.display(msg);
    };
    return WebService;
}());
WebService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__error_display_service__["a" /* ErrorDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__error_display_service__["a" /* ErrorDisplayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], WebService);

var _a, _b, _c;
//# sourceMappingURL=web.service.js.map

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_display_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, errorDisplayService, router) {
        this.http = http;
        this.errorDisplayService = errorDisplayService;
        this.router = router;
        this.API_URL = 'http://159.203.16.23:443/auth';
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        set: function (value) {
            // empty method for the purposes of testing
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "tokenHeader", {
        get: function () {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: header });
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (loginData) {
        var _this = this;
        this.http.post(this.API_URL + '/login', loginData).subscribe(function (res) {
            _this._authenticate(res);
        }, function (error) {
            _this.errorDisplayService.display('500 - server error');
        });
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        delete user.confirmPassword;
        this.http.post(this.API_URL + '/register', user).subscribe(function (res) {
            _this._authenticate(res);
        }, function (error) {
            _this.errorDisplayService.display('500 - server error');
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
        this.router.navigate(['/login']);
    };
    AuthService.prototype._authenticate = function (res) {
        var authResponse = res.json();
        if (!authResponse.token) {
            this.errorDisplayService.display(authResponse.message);
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstname);
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__error_display_service__["a" /* ErrorDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__error_display_service__["a" /* ErrorDisplayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDisplayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorDisplayService = (function () {
    function ErrorDisplayService() {
    }
    ErrorDisplayService.prototype.display = function (error) {
        if (error === void 0) { error = 'some error'; }
        console.error(error);
    };
    ErrorDisplayService.prototype.getErrorCount = function (form, strictValidation) {
        if (strictValidation === void 0) { strictValidation = false; }
        var nbrOfErrors = 0;
        for (var key in form.controls) {
            if (form.controls[key].invalid) {
                if (strictValidation || form.controls[key].touched) {
                    nbrOfErrors++;
                }
            }
        }
        return nbrOfErrors;
    };
    return ErrorDisplayService;
}());
ErrorDisplayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ErrorDisplayService);

//# sourceMappingURL=error-display.service.js.map

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Services

var ConfigService = (function () {
    function ConfigService(webService, location, router) {
        var _this = this;
        this.webService = webService;
        this.location = location;
        this.router = router;
        this.accessLevel = 'admin'; // TODO: remove hardcoded part
        this.router.events.subscribe(function (val) {
            _this.activeLink = _this.location.path().substr(1);
        });
    }
    ConfigService.prototype.getConfig = function () {
        return this.webService.getConfig();
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ConfigService);

var _a, _b, _c;
//# sourceMappingURL=config.service.js.map

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var ClientsComponent = (function () {
    function ClientsComponent(webService) {
        this.webService = webService;
        this.title = 'practices and roles';
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webService.getClients().subscribe(function (res) {
            _this.clients = res;
        });
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'ss2-practices-and-roles',
        template: __webpack_require__(210),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */]) === "function" && _a || Object])
], ClientsComponent);

var _a;
//# sourceMappingURL=clients.component.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicBrandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var ClinicBrandingComponent = (function () {
    function ClinicBrandingComponent(webService) {
        this.webService = webService;
        this.formTitle = 'CLINIC INFO';
        this.formTitle2 = 'LOGO';
        this.clinicBranding = {};
    }
    ClinicBrandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webService.getOne('/client', '5e429dd5-6c38-4a32-a287-0a767b2a0ab8')
            .subscribe(function (res) {
            _this.clinicBranding = res;
        });
    };
    ClinicBrandingComponent.prototype.addUpdate = function () {
        this.webService.addUpdate('/saveclient', this.clinicBranding).subscribe();
    };
    return ClinicBrandingComponent;
}());
ClinicBrandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-clinic-branding',
        template: __webpack_require__(211),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */]) === "function" && _a || Object])
], ClinicBrandingComponent);

var _a;
//# sourceMappingURL=clinic-branding.component.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GeneralSettingsComponent = (function () {
    function GeneralSettingsComponent() {
    }
    return GeneralSettingsComponent;
}());
GeneralSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-general-settings',
        template: __webpack_require__(212),
        styles: [__webpack_require__(190)]
    })
], GeneralSettingsComponent);

//# sourceMappingURL=general-settings.component.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_custom_types_classes_credentials__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

// Classes

var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.formTitle = 'login';
        this.credentials = new __WEBPACK_IMPORTED_MODULE_2__shared_custom_types_classes_credentials__["a" /* Credentials */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.credentials.account = (localStorage.getItem('account') !== null) ?
            localStorage.getItem('account') : '';
    };
    LoginComponent.prototype.login = function () {
        this.authService.login(this.credentials);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'ss2-login',
        template: __webpack_require__(213),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
        this.errorMsg = 'page not found';
        this.errorCode = 404;
        this.title = "- " + this.errorCode + " -";
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'ss2-page-not-found',
        template: __webpack_require__(214),
        styles: [__webpack_require__(192)]
    })
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientManagementComponent = (function () {
    function PatientManagementComponent() {
    }
    return PatientManagementComponent;
}());
PatientManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-patient-management',
        template: __webpack_require__(215),
        styles: [__webpack_require__(193)]
    })
], PatientManagementComponent);

//# sourceMappingURL=patient-management.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_custom_types_classes_client__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var PortalAdminComponent = (function () {
    function PortalAdminComponent(webService) {
        this.webService = webService;
        this.title = 'practices and roles';
        this.client = new __WEBPACK_IMPORTED_MODULE_2__shared_custom_types_classes_client__["a" /* Client */]();
    }
    PortalAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webService.getClients().subscribe(function (res) {
            _this.clients = res;
        });
    };
    PortalAdminComponent.prototype.edit = function (client) {
        this.client = client;
        // jQuery document ready function
        $(function () {
            $('#myModal').modal();
        });
    };
    PortalAdminComponent.prototype.saveClient = function (client) {
        this.webService.saveClient(client).subscribe(function () {
            console.info('save client:', client);
        }, function (error) {
            console.error('error');
        });
    };
    return PortalAdminComponent;
}());
PortalAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-portal-admin',
        template: __webpack_require__(216),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */]) === "function" && _a || Object])
], PortalAdminComponent);

var _a;
//# sourceMappingURL=portal-admin.component.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemplatesComponent = (function () {
    function TemplatesComponent() {
    }
    return TemplatesComponent;
}());
TemplatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-templates',
        template: __webpack_require__(217),
        styles: [__webpack_require__(195)]
    })
], TemplatesComponent);

//# sourceMappingURL=templates.component.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_custom_types_classes_user__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

// Classes

var UserComponent = (function () {
    function UserComponent(webService) {
        this.webService = webService;
        this.formTitle = 'edit info';
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_custom_types_classes_user__["a" /* User */]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webService.getUser().subscribe(function (res) {
            _this.user = res;
        });
    };
    UserComponent.prototype.post = function () {
        this.webService.saveUser(this.user).subscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'ss2-user',
        template: __webpack_require__(218),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_web_service__["a" /* WebService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AuthManager = (function () {
    function AuthManager(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthManager.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthManager;
}());
AuthManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthManager);

var _a, _b;
//# sourceMappingURL=auth.manager.js.map

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 104;


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(131);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var AppComponent = (function () {
    function AppComponent(configService, authService) {
        this.configService = configService;
        this.authService = authService;
        this.loaded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService
            .getConfig()
            .subscribe(function (data) {
            _this.configs = data;
            localStorage.setItem('product', _this.configs.product);
            localStorage.setItem('account', _this.configs.account);
            localStorage.setItem('errorDuration', _this.configs.errorDuration);
        }, function (err) {
            console.info(err);
        }, function () {
            _this.loaded = true;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(209),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_web_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_auth_manager__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_validation_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_password_rules_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_error_display_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_pipes_capitalize_pipe__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_components_nav_nav_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_user_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_not_found_page_not_found_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_clients_clients_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_components_header_header_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_components_field_field_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_clinic_branding_clinic_branding_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_general_settings_general_settings_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_patient_management_patient_management_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_templates_templates_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_portal_admin_portal_admin_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_components_client_modal_client_modal_component__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// Routing

// Services







// Pipes

// Components














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_pipes_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_21__shared_components_field_field_component__["a" /* FieldComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__shared_components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_clinic_branding_clinic_branding_component__["a" /* ClinicBrandingComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_general_settings_general_settings_component__["a" /* GeneralSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_patient_management_patient_management_component__["a" /* PatientManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_templates_templates_component__["a" /* TemplatesComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_portal_admin_portal_admin_component__["a" /* PortalAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_27__shared_components_client_modal_client_modal_component__["a" /* ClientModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__shared_services_web_service__["a" /* WebService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_auth_manager__["a" /* AuthManager */],
            __WEBPACK_IMPORTED_MODULE_10__shared_services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_password_rules_service__["a" /* PasswordRulesService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_services_error_display_service__["a" /* ErrorDisplayService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_user_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_page_not_found_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_clinic_branding_clinic_branding_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_general_settings_general_settings_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_patient_management_patient_management_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_templates_templates_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_portal_admin_portal_admin_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_clients_clients_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

// Services

// Components









var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'portal-admin',
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_3__components_user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    },
    {
        path: 'clinic-branding',
        component: __WEBPACK_IMPORTED_MODULE_5__components_clinic_branding_clinic_branding_component__["a" /* ClinicBrandingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    },
    {
        path: 'general-settings',
        component: __WEBPACK_IMPORTED_MODULE_6__components_general_settings_general_settings_component__["a" /* GeneralSettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    },
    {
        path: 'patient-management',
        component: __WEBPACK_IMPORTED_MODULE_7__components_patient_management_patient_management_component__["a" /* PatientManagementComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    },
    {
        path: 'templates',
        component: __WEBPACK_IMPORTED_MODULE_8__components_templates_templates_component__["a" /* TemplatesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    },
    {
        path: 'portal-admin',
        component: __WEBPACK_IMPORTED_MODULE_9__components_portal_admin_portal_admin_component__["a" /* PortalAdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    },
    {
        path: 'clients',
        component: __WEBPACK_IMPORTED_MODULE_10__components_clients_clients_component__["a" /* ClientsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_manager__["a" /* AuthManager */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_types_classes_client__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientModalComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Components

// Services

// Classes

var ClientModalComponent = (function (_super) {
    __extends(ClientModalComponent, _super);
    function ClientModalComponent(webService) {
        var _this = _super.call(this) || this;
        _this.webService = webService;
        _this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        _this.client = new __WEBPACK_IMPORTED_MODULE_3__custom_types_classes_client__["a" /* Client */]();
        return _this;
    }
    ClientModalComponent.prototype.saveItem = function () {
        this.save.emit(this.client);
    };
    return ClientModalComponent;
}(__WEBPACK_IMPORTED_MODULE_1__modal_modal_component__["a" /* ModalComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], ClientModalComponent.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__custom_types_classes_client__["a" /* Client */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__custom_types_classes_client__["a" /* Client */]) === "function" && _b || Object)
], ClientModalComponent.prototype, "client", void 0);
ClientModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-client-modal',
        template: __webpack_require__(219),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_service__["a" /* WebService */]) === "function" && _c || Object])
], ClientModalComponent);

var _a, _b, _c;
//# sourceMappingURL=client-modal.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_types_classes_attributes__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Classes

var FieldComponent = (function () {
    function FieldComponent() {
        this.attributes = new __WEBPACK_IMPORTED_MODULE_2__custom_types_classes_attributes__["a" /* Attributes */]();
    }
    return FieldComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) === "function" && _a || Object)
], FieldComponent.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__custom_types_classes_attributes__["a" /* Attributes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_types_classes_attributes__["a" /* Attributes */]) === "function" && _b || Object)
], FieldComponent.prototype, "attributes", void 0);
FieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'ss2-field',
        template: __webpack_require__(220),
        styles: [__webpack_require__(198)]
    })
], FieldComponent);

var _a, _b;
//# sourceMappingURL=field.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-header',
        template: __webpack_require__(221),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    ModalComponent.prototype.saveItem = function () {
        this.save.emit();
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], ModalComponent.prototype, "save", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-modal',
        template: __webpack_require__(222),
        styles: [__webpack_require__(200)]
    })
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_config_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services


var NavComponent = (function () {
    function NavComponent(authService, configService, location, router) {
        this.authService = authService;
        this.configService = configService;
        this.location = location;
        this.router = router;
    }
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pp-nav',
        template: __webpack_require__(223),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], NavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nav.component.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attributes; });
var Attributes = (function () {
    function Attributes() {
        this.type = '';
        this.name = '';
        this.placeholder = '';
        this.value = '';
        this.disabled = false;
    }
    return Attributes;
}());

//# sourceMappingURL=attributes.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credentials; });
var Credentials = (function () {
    function Credentials() {
        this.account = '';
        this.username = '';
        this.password = '';
    }
    return Credentials;
}());

//# sourceMappingURL=credentials.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.account = 'qb1486';
        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.password = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.toLowerCase()
                .replace(/\b./g, function (a) { return a.toUpperCase(); });
        }
        return null;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'myCapitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_display_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRulesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var PasswordRulesService = (function () {
    function PasswordRulesService(errorDisplayService, webService) {
        this.errorDisplayService = errorDisplayService;
        this.webService = webService;
    }
    PasswordRulesService.prototype.getRules = function () {
        return this.webService.getPasswordRules();
    };
    PasswordRulesService.prototype.saveRules = function (passwordRule) {
        return this.webService.savePasswordRules(passwordRule);
    };
    return PasswordRulesService;
}());
PasswordRulesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__error_display_service__["a" /* ErrorDisplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__error_display_service__["a" /* ErrorDisplayService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__web_service__["a" /* WebService */]) === "function" && _b || Object])
], PasswordRulesService);

var _a, _b;
//# sourceMappingURL=password-rules.service.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = (function () {
    function ValidationService() {
        var _this = this;
        this.isInteger = function (control) {
            var nbr = control.value;
            var errorObj = { isInteger: true };
            if (nbr.length === 0) {
                return null;
            }
            return Number.isInteger(parseInt(nbr, 10)) ? null : errorObj;
        };
        this.isPositiveInteger = function (control) {
            var errorObj = { isPositiveInteger: true };
            return (_this.isInteger(control) === null && control.value >= 0) ?
                null : errorObj;
        };
        this.specialCharValidator = function (control) {
            var errorObj = { specialCharValidator: true };
            if (control.value) {
                return (!control.value.match(/[-!$%^&*()_+|~=`{}\[\]:";#@'<>?,.\/]/)) ?
                    null : errorObj;
            }
        };
    }
    return ValidationService;
}());
ValidationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ValidationService);

//# sourceMappingURL=validation.service.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".content {\n  margin-top: 200px;\n  width: 750px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 50px 0; }\n  .content .family-clinic {\n    height: 150px;\n    margin: 20px 0 0 90px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "table {\n  width: 100%; }\n  table thead {\n    background-color: #F0EFEF; }\n  table th,\n  table td {\n    border: thin solid gray;\n    text-align: center;\n    padding: 20px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "header .row {\n  margin: 15px 0; }\n  header .row .brand {\n    height: 80px; }\n  header .row .product-info {\n    border-left: thin solid #000;\n    padding-left: 30px; }\n    header .row .product-info h2 {\n      margin-top: 0 !important; }\n  header .row .logout {\n    color: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".navbar-default {\n  font-weight: bold;\n  background-color: #0088d4; }\n  .navbar-default .navbar-nav > li > a {\n    padding-top: 17px;\n    padding-bottom: 18px;\n    color: #FFF; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a.active {\n      background-color: #0069a3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */
/***/ (function(module, exports) {

module.exports = "<!-- page header -->\r\n<pp-header *ngIf=\"authService.isAuthenticated\"></pp-header>\r\n\r\n<!-- page main content -->\r\n<div class=\"container\">\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"inner-card large\">\r\n\r\n    <div>\r\n      <h1>{{title | myCapitalize}}</h1>\r\n    </div>\r\n\r\n    <div>\r\n\r\n    <div cols=\"3\" rowHeight=\"75px\">\r\n\r\n      <div>\r\n        <h3>Practices</h3>\r\n      </div>\r\n\r\n      <div>\r\n        <h3>Roles at this practice</h3>\r\n      </div>\r\n\r\n      <div>\r\n        <h3>Locations</h3>\r\n      </div>\r\n\r\n    </div>\r\n      \r\n      <div *ngFor=\"let client of clients\" class=\"gap\">\r\n\r\n        <div cols=\"3\" rowHeight=\"2:1\">\r\n\r\n          <div>{{client.clientname}}</div>\r\n\r\n          <div>\r\n            \r\n            <ul>\r\n\r\n              <li *ngFor=\"let role of client.roles\">\r\n\r\n                {{role.name}}\r\n\r\n              </li>\r\n\r\n            </ul>\r\n\r\n          </div>\r\n\r\n          <div>\r\n\r\n            <ul>\r\n\r\n              <li *ngFor=\"let location of client.locations\">\r\n\r\n                {{location.name}}\r\n\r\n              </li>\r\n\r\n            </ul>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"row justify-content-md-center\">\r\n\r\n    <div class=\"card inner-card\">\r\n\r\n      <div class=\"card-block\">\r\n\r\n        <h2 class=\"card-title\">{{formTitle | myCapitalize}}</h2>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"firstname\">NAME</label>\r\n          <input [(ngModel)]=\"clinicBranding.name\" type=\"text\" id=\"firstname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">ADDRESS 1</label>\r\n          <input [(ngModel)]=\"clinicBranding.address1\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">ADDRESS 2</label>\r\n          <input [(ngModel)]=\"clinicBranding.address2\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"firstname\">CITY</label>\r\n          <input [(ngModel)]=\"clinicBranding.city\" type=\"text\" id=\"firstname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">STATE</label>\r\n          <input [(ngModel)]=\"clinicBranding.state\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">ZIP CODE</label>\r\n          <input [(ngModel)]=\"clinicBranding.zipcode\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">PHONE 1</label>\r\n          <input [(ngModel)]=\"clinicBranding.phone1\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">PHONE 2</label>\r\n          <input [(ngModel)]=\"clinicBranding.phone2\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">URL PREFIX</label>\r\n          <input [(ngModel)]=\"clinicBranding.urlprefix\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" (click)=\"addUpdate()\">SAVE</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  \r\n  <p>general-settings works!</p>\r\n\r\n</div>\r\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content row\">\r\n\r\n  <div class=\"col-xs-6\">\r\n    <img class=\"family-clinic\" src=\"assets/images/family_clinic.jpg\">\r\n  </div>\r\n\r\n  <div class=\"col-xs-6\">\r\n        \r\n    <div class=\"form-group hidden\">\r\n      <label for=\"account\">ACCOUNT</label>\r\n      <input [(ngModel)]=\"credentials.account\" id=\"account\" type=\"text\" class=\"form-control\" disabled>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">EMAIL ADDRESS</label>\r\n      <input [(ngModel)]=\"credentials.username\" id=\"username\" type=\"text\" class=\"form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">PASSWORD</label>\r\n      <input [(ngModel)]=\"credentials.password\" id=\"password\" type=\"password\" class=\"form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <button class=\"btn btn-primary\" (click)=\"login()\">SIGN IN</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"row justify-content-md-center\">\r\n\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-block\">\r\n\r\n        <p>{{errorMsg | myCapitalize}}</p>        \r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <p>patient-management works!</p>\r\n\r\n</div>\r\n"

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\t<table>\r\n\r\n\t\t<thead>\r\n\t\t<tr>\r\n\r\n\t\t<th></th>\r\n\r\n\t\t<th>CLIENT NAME</th>\r\n\r\n\t\t<th>CLIENT NUMBER</th>\r\n\r\n\t\t<th>IP ADDRESS</th>\r\n\r\n\t\t<th></th>\r\n\r\n\t\t</tr>\r\n\t\t</thead>\r\n\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let client of clients\">\r\n\r\n\t\t\t\t<td><button class=\"btn btn-primary\">SELECT</button></td>\r\n\r\n\t\t\t\t<td>{{client.clientname}}<br />{{client.clientid}}</td>\r\n\r\n\t\t\t\t<td>\r\n\r\n\t\t\t\t\t{{client.clientno}}\r\n\r\n\t\t\t\t</td>\r\n\r\n\t\t\t\t<td>\r\n\r\n\t\t\t\t\t{{client.ipaddress}}\r\n\r\n\t\t\t\t</td>\r\n\r\n\t\t\t\t<td>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-primary\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> INVITE ADMIN</button>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-primary\">CLINIC ADMINS</button>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"edit(client)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> EDIT</button>\r\n\r\n\t\t\t\t</td>\r\n\r\n\t\t\t</tr>\r\n\r\n\t\t</tbody>\r\n\r\n\t</table>\r\n\r\n\t<pp-client-modal [client]=\"client\" (save)=\"saveClient(client)\"></pp-client-modal>\r\n\r\n</div>\r\n"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <p>templates works!</p>\r\n\r\n</div>\r\n"

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"row justify-content-md-center\">\r\n\r\n    <div class=\"card inner-card\">\r\n\r\n      <div class=\"card-block\">\r\n\r\n        <h2 class=\"card-title\">{{formTitle | myCapitalize}}</h2>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"firstname\">FIRST NAME</label>\r\n          <input [(ngModel)]=\"user.firstname\" type=\"text\" id=\"firstname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">LAST NAME</label>\r\n          <input [(ngModel)]=\"user.lastname\" type=\"text\" id=\"lastname\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" (click)=\"post()\">SAVE</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header\">\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n\r\n        <h2 class=\"modal-title center_text\" id=\"exampleModalLabel\">{{client.clientname | myCapitalize }}</h2>\r\n\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        \r\n        <div class=\"form-group\">\r\n            <label for=\"clientname\">CLIENT NAME</label>\r\n            <input [(ngModel)]=\"client.clientname\" id=\"clientname\" class=\"form-control\" type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"clientno\">CLIENT NUMBER</label>\r\n            <input [(ngModel)]=\"client.clientno\" id=\"clientno\" class=\"form-control\" type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"ipaddress\">CLIENT IP ADDRESS</label>\r\n            <input [(ngModel)]=\"client.ipaddress\" id=\"ipaddress\" class=\"form-control\" type=\"text\">\r\n          </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"saveItem()\">Save changes</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" [formGroup]=\"group\">\r\n  <label [for]=\"attributes.name\">{{attributes.placeholder}}</label>\r\n  \r\n  <input\r\n    [id]=\"attributes.name\"\r\n    class=\"form-control\"\r\n    [type]=\"attributes.type\"\r\n    [name]=\"attributes.name\"\r\n    [placeholder]=\"attributes.placeholder | myCapitalize\"\r\n    [value]=\"attributes.value\"\r\n    [formControlName]=\"attributes.name\">\r\n</div>"

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = "<header>\r\n\r\n  <div class=\"container\">\r\n    \r\n    <div class=\"row no-padding\">\r\n\r\n      <div class=\"col-xs-2\">\r\n        <img class=\"brand\" src=\"assets/images/image.jpg\">\r\n      </div>\r\n\r\n      <div class=\"col-xs-4\">\r\n        <div class=\"product-info\">\r\n          <h2>PulseInc Patient Portal</h2>\r\n          <span>3020 N Cypress, Wichita, KS-67266</span><br>\r\n          <span>800-444-0882</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-2 col-xs-offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"authService.logout()\">\r\n          <span><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</span>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</header>\r\n\r\n<!-- top navigation -->\r\n<pp-nav></pp-nav>"

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        ...\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"container\">\r\n\r\n    <nav class=\"navbar navbar-default\">\r\n      <div class=\"container-fluid\">\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li>\r\n              <a [class.active]=\"configService.activeLink === 'clinic-branding'\" routerLink=\"/clinic-branding\">Clinic Branding</a>\r\n            </li>\r\n\r\n            <li>\r\n              <a [class.active]=\"configService.activeLink === 'general-settings'\" routerLink=\"/general-settings\">General Settings</a>\r\n            </li>\r\n\r\n            <li>\r\n              <a [class.active]=\"configService.activeLink === 'patient-management'\" routerLink=\"/patient-management\">Patient Management</a>\r\n            </li>\r\n\r\n            <li>\r\n              <a [class.active]=\"configService.activeLink === 'templates'\" routerLink=\"/templates\">Templates</a>\r\n            </li>\r\n\r\n            <li>\r\n              <a [class.active]=\"configService.activeLink === 'portal-admin'\" routerLink=\"/portal-admin\">Portal Admin</a>\r\n            </li>\r\n\r\n            <li>\r\n              <a [class.active]=\"configService.activeLink === 'user'\" routerLink=\"/user\">Edit Profile</a>\r\n            </li>\r\n          </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n      </div><!-- /.container-fluid -->\r\n    </nav>\r\n\r\n    <!-- *** -->\r\n\r\n    <!--<button\r\n      [class.active]=\"configService.activeLink === 'dashboard'\"\r\n      routerLink=\"/dashboard\"\r\n      *ngIf=\"authService.isAuthenticated\">\r\n      <span><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Dashboard</span>\r\n    </button>\r\n\r\n    <span class=\"spacer\"></span>\r\n\r\n    <button\r\n      [class.active]=\"configService.activeLink === 'user'\"\r\n      routerLink=\"/user\"\r\n      *ngIf=\"authService.isAuthenticated\">\r\n      <span>Welcome {{authService.name | myCapitalize}}</span>\r\n    </button>\r\n\r\n    <button\r\n      [class.active]=\"configService.activeLink === 'login'\"\r\n      routerLink=\"/login\"\r\n      *ngIf=\"!authService.isAuthenticated\">\r\n      <span><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login</span>\r\n    </button>\r\n\r\n    <button\r\n      [class.active]=\"configService.activeLink === 'signup'\"\r\n      routerLink=\"/signup\"\r\n      *ngIf=\"!authService.isAuthenticated\">\r\n      <span><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Sign Up</span>\r\n    </button>\r\n\r\n\r\n    <button\r\n      *ngIf=\"authService.isAuthenticated\">\r\n      <span><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></span>\r\n    </button>\r\n\r\n    <div class=\"dropdown\">\r\n\r\n      <button\r\n        [class.active]=\"configService.activeLink === 'user'\"\r\n        routerLink=\"/user\">\r\n        <span><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Profile</span>\r\n      </button>\r\n\r\n      <button\r\n        [class.active]=\"configService.activeLink === 'settings'\"\r\n        routerLink=\"/settings\">\r\n        <span><i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Settings</span>\r\n      </button>\r\n\r\n      <button\r\n        *ngIf=\"configService.accessLevel === 'admin'\"\r\n        [class.active]=\"configService.activeLink === 'pulse-component-lib'\"\r\n        routerLink=\"/pulse-component-lib\">\r\n        <span><i class=\"fa fa-cog\" aria-hidden=\"true\"></i> pulse component library</span>\r\n      </button>\r\n\r\n      <button\r\n        (click)=\"authService.logout()\">\r\n        <span><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</span>\r\n      </button>\r\n\r\n    </div>-->\r\n\r\n  </div>\r\n  \r\n</div>"

/***/ }),
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ })
],[261]);
//# sourceMappingURL=main.bundle.js.map