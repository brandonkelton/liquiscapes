(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 27rem;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"liquiscapes-container\">\n  <h4>We develop individual solutions for you</h4>\n  <p>Do you have a small private project or large public one? \n    Do you want an idyllic water garden or majestic waterfalls? \n    We can make your plans come to life and your wishes come true!\n  </p>\n  <p>When developing customized solutions, we combine creativity \n    with realistic planning and due care in the implementation \n    phase. In the process, we are guided by your individual wishes, \n    needs and interests, as well as the existing vegetation, \n    topography, house architecture and the landscape's character. \n    The result is a harmonious concept.\n  </p>\n  <div class=\"card mx-auto\">\n    <div class=\"card-header\">\n      <h6 class=\"card-title\">Where We Excel</h6>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"card-text\">\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          Expert consultations\n        </div>\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          Creative ideas\n        </div>\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          Careful planning and implementation\n        </div>\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          Meticulous organization of the construction process\n        </div>\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          Individual selection of plants\n        </div>\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          High-quality designs\n        </div>\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          Reliable maintenance\n        </div>\n        <div class=\"row\">\n          <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n          Numerous prizes and awards\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"liquiscapes-container\">\n    <h5>Do you want an individual consultation?</h5>\n    <p>\n      Make an appointment for an on-site consultation without any \n      obligation by phone at 303-861-1314, or use our contact form.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 900px) {\n    .main-container {\n        width: 90%;\n        max-width: 90%;\n        margin-right: auto;\n        margin-left: auto;\n        padding-top: 20px;\n        display: block;\n    }\n}\n\n@media screen and (min-width: 900px) {\n    .main-container {\n        width: 50%;\n        max-width: 50%;\n        margin-right: auto;\n        margin-left: auto;\n        padding-top: 20px;\n        display: block;\n    }\n}\n\n.header {\n    background: rgba(255, 255, 255, 1);\n    z-index: 1000;\n}\n\n@media screen and (max-width: 900px) {\n    .header {\n        max-width: 100%;\n    }\n}\n\n@media screen and (min-width: 900px) {\n    .header {\n        width: 50%;\n    }\n}\n\n.sticky-header {\n    position: fixed;\n    top: 0;\n}\n\n.content {\n    padding-top: 100px;\n    position: relative;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"header sticky-header\">\n        <app-header></app-header>\n    </div>\n    <div class=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _presentation_box_presentation_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentation-box/presentation-box.component */ "./src/app/presentation-box/presentation-box.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-viewer/image-viewer.component */ "./src/app/image-viewer/image-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _presentation_box_presentation_box_component__WEBPACK_IMPORTED_MODULE_9__["PresentationBoxComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"],
                _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_12__["ImageViewerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gallery works!\n</p>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@media screen and (max-width: 375px) {\n    .drop-left {\n        float: left;\n    }\n}\n\n@media screen and (min-width: 376px) {\n    .drop-left {\n        float: right;\n    }\n}\n\n.phone-button {\n    padding-top: 7px; \n    margin-top: 13px;\n}\n\n.topnav {\n    background-color: rgb(243, 243, 243);\n    overflow: hidden;\n}\n\n/* Style the links inside the navigation bar */\n\n.topnav a {\n    float: left;\n    display: block;\n    color: rgb(0, 0, 0);\n    text-align: center;\n    padding: 8px 10px;\n    text-decoration: none;\n    font-size: 15px;\n}\n\n/* Change the color of links on hover */\n\n.topnav a:hover {\n    background-color: rgb(169, 203, 255);\n    color: black;\n}\n\n/* Add an active class to highlight the current page */\n\n.active {\n    background-color: rgb(221, 220, 220);\n    color: white;\n}\n\n/* Hide the link that should open and close the topnav on small screens */\n\n.topnav .icon {\n    display: none;\n}\n\n/* When the screen is less than 600 pixels wide, hide all links, except for the first one (\"Home\"). Show the link that contains should open and close the topnav (.icon) */\n\n@media screen and (max-width: 450px) {\n    .topnav a:not(:first-child) {display: none;}\n    .topnav a.icon {\n        float: right;\n        display: block;\n    }\n}\n\n/* The \"responsive\" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */\n\n@media screen and (max-width: 450px) {\n    .topnav.responsive {position: relative;}\n    .topnav.responsive a.icon {\n        position: absolute;\n        right: 0;\n        top: 0;\n    }\n    .topnav.responsive a {\n        float: none;\n        display: block;\n        text-align: left;\n    }\n}\n\n@media screen and (min-width: 350px) {\n    .pull-right-drop {\n        float: right;\n    }\n}\n\n@media screen and (max-width: 350px) {\n    .pull-right-drop { float: none; }\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pr-1 pull-right\">\n  <a class=\"btn btn-outline-primary btn-sm phone-button\" href=\"tel:303-861-1314\">\n    <span class=\"fa fa-phone pl-1 pr-1\"></span>303-861-1314\n  </a>\n</div>\n<div class=\"pl-1\">\n  <img src=\"../../assets/LiquiscapesLogo.PNG\" style=\"height: 62px;\"> \n</div>\n<div class=\"topnav\" id=\"liquiscapesTopNav\">\n  <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n  <a routerLink=\"/about\" routerLinkActive=\"active\">About Us</a>\n  <a routerLink=\"/services\" routerLinkActive=\"active\">Services</a>\n  <a routerLink=\"/gallery\" routerLinkActive=\"active\">Gallery</a>\n  <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n  <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"navBarReponsive()\">\n    <i class=\"fa fa-bars\"></i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, navBarReponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navBarReponsive", function() { return navBarReponsive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

function navBarReponsive() {
    var x = document.getElementById("liquiscapesTopNav");
    if (x.className === "topnav")
        x.className += " responsive";
    else
        x.className = "topnav";
}


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 14.2rem; \n    height: 21rem;\n    margin-bottom: 10px;\n}\n\n.card-img-top {\n    height: 10rem;\n}\n\nh6 {\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"liquiscapes-container\">\n  <app-image-viewer></app-image-viewer>\n</div>\n\n<!-- <div class=\"liquiscapes-container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\n      <div class=\"card mx-auto\">\n        <img class=\"card-img-top\" src=\"../../assets/Owner.JPG\" alt=\"Image of Owner\">\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">Why We Are Different</h6>\n          <div class=\"card-text\">\n            <div class=\"row small-font\">\n              <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n              Customer Education\n            </div>\n            <div class=\"row small-font\">\n              <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n              We're a Small Company\n            </div>\n            <div class=\"row small-font\">\n              <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n              Year-Round Trained Labor\n            </div>\n            <div class=\"row small-font\">\n              <span class=\"pl-2 pr-2 fa fa-arrow-right\"></span>\n              Owner On-Site Entire Project\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\n      <div class=\"card mx-auto\">\n        <img class=\"card-img-top\" src=\"../../assets/owner1.jpg\" alt=\"Image of Owner\">\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">Who We Are</h6>\n          <div class=\"card-text\">\n            <p class=\"small-font\">\n                You can count on our experts with many years of \n                experience, great ideas and wide-ranging expertise.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\n      <div class=\"card mx-auto\">\n        <img class=\"card-img-top\" src=\"../../assets/owner2.png\" alt=\"Image of Owner\">\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">What We Offer</h6>\n          <div class=\"card-text\">\n            <p class=\"small-font\">\n              Our scope of services is very broad including \n              residential, commercial and public work.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\n      <div class=\"card mx-auto\">\n        <img class=\"card-img-top\" src=\"../../assets/owner3.jpg\" alt=\"Image of Owner\">\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">How We Work</h6>\n          <div class=\"card-text\">\n            <p class=\"small-font\">\n              Learn more about projects and be inspired! \n              Take a look through our gallery and ask for \n              references!\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n -->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-viewer/image-viewer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes heartbeat {\n    0% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    25% {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n    }\n    50% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n    75% {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n    }\n    100% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n  @keyframes heartbeat {\n    0% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    25% {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n    }\n    50% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n    75% {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n    }\n    100% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n  body {\n    color: #FFFFFF;\n    background-color: #27292d;\n    overflow: hidden;\n  }\n  .slider-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 800px;\n    height: 600px;\n    margin: -300px 0 0 -400px;\n  }\n  .slider-container .slider-content {\n    position: relative;\n    left: 50%;\n    top: 50%;\n    width: 70%;\n    height: 60%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .slider-container .slider-content .slider-single {\n    position: absolute;\n    z-index: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    transition: z-index 0ms 250ms;\n  }\n  .slider-container .slider-content .slider-single .slider-single-image {\n    position: relative;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);\n    transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  .slider-container .slider-content .slider-single .slider-single-download {\n    position: absolute;\n    display: block;\n    right: -22px;\n    bottom: 12px;\n    padding: 15px;\n    color: #333333;\n    background-color: #fdc84b;\n    font-size: 18px;\n    font-weight: 600;\n    font-family: 'karla';\n    border-radius: 5px;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\n    transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);\n    opacity: 0;\n  }\n  .slider-container .slider-content .slider-single .slider-single-download:hover, .slider-container .slider-content .slider-single .slider-single-download:focus {\n    outline: none;\n    text-decoration: none;\n  }\n  .slider-container .slider-content .slider-single .slider-single-title {\n    display: block;\n    float: left;\n    margin: 16px 0 0 20px;\n    font-size: 20px;\n    font-family: 'karla';\n    font-weight: 400;\n    color: #ffffff;\n    transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);\n    opacity: 0;\n  }\n  .slider-container .slider-content .slider-single .slider-single-likes {\n    display: block;\n    float: right;\n    margin: 16px 20px 0 0;\n    transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);\n    opacity: 0;\n  }\n  .slider-container .slider-content .slider-single .slider-single-likes i {\n    font-size: 20px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5px;\n    color: #ff6060;\n    transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  .slider-container .slider-content .slider-single .slider-single-likes p {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0;\n    color: #ffffff;\n  }\n  .slider-container .slider-content .slider-single .slider-single-likes:hover, .slider-container .slider-content .slider-single .slider-single-likes:focus {\n    outline: none;\n    text-decoration: none;\n  }\n  .slider-container .slider-content .slider-single.preactivede .slider-single-image {\n    -webkit-transform: translateX(-50%) scale(0);\n            transform: translateX(-50%) scale(0);\n  }\n  .slider-container .slider-content .slider-single.preactive {\n    z-index: 1;\n  }\n  .slider-container .slider-content .slider-single.preactive .slider-single-image {\n    opacity: .3;\n    -webkit-transform: translateX(-25%) scale(0.8);\n            transform: translateX(-25%) scale(0.8);\n  }\n  .slider-container .slider-content .slider-single.preactive .slider-single-download {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n  }\n  .slider-container .slider-content .slider-single.preactive .slider-single-title {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n  }\n  .slider-container .slider-content .slider-single.preactive .slider-single-likes {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n  }\n  .slider-container .slider-content .slider-single.proactive {\n    z-index: 1;\n  }\n  .slider-container .slider-content .slider-single.proactive .slider-single-image {\n    opacity: .3;\n    -webkit-transform: translateX(25%) scale(0.8);\n            transform: translateX(25%) scale(0.8);\n  }\n  .slider-container .slider-content .slider-single.proactive .slider-single-download {\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n  }\n  .slider-container .slider-content .slider-single.proactive .slider-single-title {\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n  }\n  .slider-container .slider-content .slider-single.proactive .slider-single-likes {\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n  }\n  .slider-container .slider-content .slider-single.proactivede .slider-single-image {\n    -webkit-transform: translateX(50%) scale(0);\n            transform: translateX(50%) scale(0);\n  }\n  .slider-container .slider-content .slider-single.active {\n    z-index: 2;\n  }\n  .slider-container .slider-content .slider-single.active .slider-single-image {\n    opacity: 1;\n    -webkit-transform: translateX(0%) scale(1);\n            transform: translateX(0%) scale(1);\n  }\n  .slider-container .slider-content .slider-single.active .slider-single-download {\n    opacity: 1;\n    transition-delay: 100ms;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  .slider-container .slider-content .slider-single.active .slider-single-title {\n    opacity: 1;\n    transition-delay: 200ms;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  .slider-container .slider-content .slider-single.active .slider-single-likes {\n    opacity: 1;\n    transition-delay: 300ms;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  .slider-container .slider-content .slider-single.active .slider-single-likes i {\n    -webkit-animation-name: heartbeat;\n            animation-name: heartbeat;\n    -webkit-animation-duration: 500ms;\n            animation-duration: 500ms;\n    -webkit-animation-delay: 900ms;\n            animation-delay: 900ms;\n    animation-interation: 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n  .slider-container .slider-left {\n    position: absolute;\n    z-index: 3;\n    display: block;\n    right: 85%;\n    top: 50%;\n    color: #ffffff;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding: 20px 15px;\n    border-top: 2px solid #fdc84b;\n    border-right: 2px solid #fdc84b;\n    border-bottom: 2px solid #fdc84b;\n    border-left: 2px solid #fdc84b;\n    margin-right: -2px;\n  }\n  .slider-container .slider-right {\n    position: absolute;\n    z-index: 3;\n    display: block;\n    left: 85%;\n    top: 50%;\n    color: #ffffff;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding: 20px 15px;\n    border-top: 2px solid #fdc84b;\n    border-right: 2px solid #fdc84b;\n    border-bottom: 2px solid #fdc84b;\n    border-left: 2px solid #fdc84b;\n    margin-left: -2px;\n  }\n   \n   "

/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-viewer/image-viewer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-container\">\n  <div class=\"slider-content\">\n    <div *ngFor=\"let image of images\" class=\"{{image.currentClasses}}\">\n      <p>{{image.isActive}}</p>\n      <img class=\"slider-single-image\" src=\"{{image.url}}\" alt=\"{{image.title}}\"/>\n      <h1 class=\"slider-single-title\">{{image.currentClass}}</h1>\n      <a class=\"slider-single-likes\" href=\"javascript:void(0);\">\n        <i class=\"fa fa-heart\"></i>\n        <p>1234</p>\n      </a>\n    </div>\n  </div>\n  <a class=\"slider-left\" href=\"javascript:void(0);\" (click)=\"slideLeft()\"><i class=\"fa fa-arrow-left\"></i></a>\n  <a class=\"slider-right\" href=\"javascript:void(0);\" (click)=\"slideRight()\"><i class=\"fa fa-arrow-right\"></i></a>\n</div>"

/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-viewer/image-viewer.component.ts ***!
  \********************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this.images = new Array();
    }
    ImageViewerComponent.prototype.loadImages = function () {
        this.images.push({
            isActive: true,
            title: 'Title 1',
            url: '../../assets/waterscapes.jpg'
        });
        this.images.push({
            title: 'Title 2',
            url: '../../assets/owner1.jpg'
        });
        this.images.push({
            title: 'Title 3',
            url: '../../assets/owner3.jpg'
        });
    };
    Object.defineProperty(ImageViewerComponent.prototype, "imageTotal", {
        get: function () {
            return this.images.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageViewerComponent.prototype, "imagePreviousIndex", {
        get: function () {
            var imageCurrentIndex = this.imageCurrentIndex;
            if (imageCurrentIndex > 0) {
                return imageCurrentIndex - 1;
            }
            else {
                return this.imageTotal;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageViewerComponent.prototype, "imageCurrentIndex", {
        get: function () {
            var index = this.images.findIndex(function (i) { return i.isActive; });
            return index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageViewerComponent.prototype, "imageNextIndex", {
        get: function () {
            var imageCurrentIndex = this.imageCurrentIndex;
            if (imageCurrentIndex < this.imageTotal) {
                return imageCurrentIndex + 1;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    ImageViewerComponent.prototype.getImageAtIndex = function (index) {
        var image = this.images[index];
        return image;
    };
    Object.defineProperty(ImageViewerComponent.prototype, "imageCurrent", {
        get: function () {
            var image = this.images[this.imageCurrentIndex];
            return image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageViewerComponent.prototype, "imagePrevious", {
        get: function () {
            var image = this.images[this.imagePreviousIndex];
            return image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageViewerComponent.prototype, "imageNext", {
        get: function () {
            var image = this.images[this.imageNextIndex];
            return image;
        },
        enumerable: true,
        configurable: true
    });
    ImageViewerComponent.prototype.slideLeft = function () {
        console.log('Sliding Left');
        var nextImageIndex = this.imageNextIndex;
        this.clearImageSettings();
        var newCurrentImage = this.getImageAtIndex(nextImageIndex);
        newCurrentImage.wasNext = true;
        newCurrentImage.isActive = true;
        this.imagePrevious.isPrevious = true;
        this.imageNext.isNext = true;
        console.log("Current Image: " + this.imageCurrent.url);
        console.log("Current Styling: " + this.imageCurrent.currentClasses);
        console.log("isActive: " + this.imageCurrent.isActive + ", wasPrevious: " + this.imageCurrent.wasPrevious + ", wasNext: " + this.imageCurrent.wasNext);
    };
    ImageViewerComponent.prototype.slideRight = function () {
        console.log('Sliding Right');
        var previousImageIndex = this.imagePreviousIndex;
        this.clearImageSettings();
        var newCurrentImage = this.getImageAtIndex(previousImageIndex);
        newCurrentImage.wasPrevious = true;
        newCurrentImage.isActive = true;
        this.imagePrevious.isPrevious = true;
        this.imageNext.isNext = true;
        console.log("Current Image: " + this.imageCurrent.url);
        console.log("Current Styling: " + this.imageCurrent.currentClasses);
        console.log("isActive: " + this.imageCurrent.isActive + ", wasPrevious: " + this.imageCurrent.wasPrevious + ", wasNext: " + this.imageCurrent.wasNext);
    };
    ImageViewerComponent.prototype.clearImageSettings = function () {
        this.images.forEach(function (image) {
            image.isActive = false;
            image.isPrevious = false;
            image.isNext = false;
            image.wasNext = false;
            image.wasPrevious = false;
        });
    };
    ImageViewerComponent.prototype.startSlide = function () {
        var _this = this;
        this.imageCurrent.isActive = true;
        setTimeout(function () {
            _this.slideRight();
        }, 500);
    };
    ImageViewerComponent.prototype.ngOnInit = function () {
        this.loadImages();
        this.startSlide();
    };
    ImageViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-viewer',
            template: __webpack_require__(/*! ./image-viewer.component.html */ "./src/app/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer.component.css */ "./src/app/image-viewer/image-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "./src/app/presentation-box/presentation-box.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/presentation-box/presentation-box.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presentation-box/presentation-box.component.html":
/*!******************************************************************!*\
  !*** ./src/app/presentation-box/presentation-box.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  presentation-box works!\n</p>\n"

/***/ }),

/***/ "./src/app/presentation-box/presentation-box.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/presentation-box/presentation-box.component.ts ***!
  \****************************************************************/
/*! exports provided: PresentationBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationBoxComponent", function() { return PresentationBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PresentationBoxComponent = /** @class */ (function () {
    function PresentationBoxComponent() {
    }
    PresentationBoxComponent.prototype.ngOnInit = function () {
    };
    PresentationBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-presentation-box',
            template: __webpack_require__(/*! ./presentation-box.component.html */ "./src/app/presentation-box/presentation-box.component.html"),
            styles: [__webpack_require__(/*! ./presentation-box.component.css */ "./src/app/presentation-box/presentation-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PresentationBoxComponent);
    return PresentationBoxComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 20rem; \n    height: 27rem;\n    margin-bottom: 10px;\n}\n\n.card-img-top {\n    height: 10rem;\n}\n\nh6 {\n    font-weight: bold;\n}\n\n.liqui-left {\n    float: left;\n}\n\n.liqui-margin {\n    margin-right: 10px;\n}\n\n.liqui-padding {\n    padding-top: 10px;\n}\n\n.clear {\n    clear: both;\n}\n\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n.img-width {\n    width: 140px;\n    height: 100px;\n}"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"liquiscapes-container\">\n  <h4>Scope of Services: One-Stop Shopping</h4>\n  <p>\n    At Liquiscapes, you will receive professional support for \n    all phases of your project: From consultation to \n    maintenance, we will gladly take care of your concerns.\n  </p>\n  <p>\n    You can choose between a full planning or an individual \n    consultation, between the sensible integration of existing \n    elements or a completely new design. Our work always meets \n    the highest quality requirements, and also includes fresh \n    ideas.\n  </p>\n  <div class=\"liqui-border liqui-padding\">\n    <h6>Waterscapes</h6>\n    <img class=\"liqui-left liqui-margin img-width\" src=\"../../assets/waterscapes.jpg\" alt=\"Image of Owner\">\n    <p class=\"clearfix\">\n      Together with you, we will develop a harmonious \n      water feature for your garden or grounds. \n      Fountains, ponds or streams: We know our craft.\n    </p>\n  </div>\n  <div>\n    <a href=\"javascript:void(0)\" (click)=\"toggleWaterScapesExpanded()\">{{waterScapesExpansionText}}</a>\n  </div>\n  <div [@expandCollapse]=\"isWaterScapesExpanded ? 'open' : 'close'\">\n    <hr/>\n    Here is more information\n    <hr/>\n  </div>\n  <div class=\"liqui-border liqui-padding\">\n    <h6>Liquiscape Your Life</h6>\n    <img class=\"liqui-left liqui-margin img-width\" src=\"../../assets/in-your-life.jpg\" alt=\"Image of Owner\">\n    <p class=\"clearfix\">\n      Water features utilize approximately 2/3 of the \n      water requires to irrigate a lawn of similar size. \n      Liquiscapes will create an aquatic ecosystem \n      designed to fit your desires. Small or large, \n      your water feature will enhance the tranqulity \n      in your lifestyle. Check out our pictures and then \n      use our convienent contact form for answers to all \n      your questions. We look forward to meeting you!\n    </p>\n    <a href=\"javascript:void(0)\" (click)=\"toggleLiquiscapeYourLifeExpanded()\">{{liquiscapeYourLifeExpansionText}}</a>\n  </div>\n  <div [@expandCollapse]=\"isLiquiscapeYourLifeExpanded ? 'open' : 'close'\">\n    <hr/>\n    Here is more information\n    <hr/>\n  </div>\n  <br/>\n  <h4>Other Services</h4>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <h6>Maintenance</h6>\n      We can help with one time maintenance, such as drain and \n      cleans. We can be there year round for all your \n      maintenance needs, including water treatment, plant care \n      and equipment troubleshooting. Just ask , I bet we can \n      help!\n    </li>\n    <li class=\"list-group-item\">\n      <h6>Service</h6>\n      Functionality, design and budget: we take into account \n      these three aspects when planning and implementing your \n      water feature. We also offer a full range of repair and \n      upgrade services.\n    </li>\n    <li class=\"list-group-item\">\n      <h6>Care</h6>\n      Liquiscapes is an owner operated company. The owner is \n      on-site at all jobs and our small crew will remain \n      familiar to you from season to season. Liquiscapes is \n      Your aftercare Specialist. We will be available to you \n      for ongoing education and troubleshooting. Liquiscapes \n      is more than the usual \"install and run\" company.\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.expandText = 'More Information';
        this.collapseText = 'Less Information';
        this.isWaterScapesExpanded = false;
        this.isLiquiscapeYourLifeExpanded = false;
    }
    ServicesComponent.prototype.toggleWaterScapesExpanded = function () {
        this.isWaterScapesExpanded = !this.isWaterScapesExpanded;
    };
    ServicesComponent.prototype.toggleLiquiscapeYourLifeExpanded = function () {
        this.isLiquiscapeYourLifeExpanded = !this.isLiquiscapeYourLifeExpanded;
    };
    Object.defineProperty(ServicesComponent.prototype, "waterScapesExpansionText", {
        get: function () {
            return this.isWaterScapesExpanded ? this.collapseText : this.expandText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicesComponent.prototype, "liquiscapeYourLifeExpansionText", {
        get: function () {
            return this.isLiquiscapeYourLifeExpanded ? this.collapseText : this.expandText;
        },
        enumerable: true,
        configurable: true
    });
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expandCollapse', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0px',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brandon/AngularProjects/liquiscapes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map