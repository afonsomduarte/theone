parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
define(["react","react-dom","react-router-dom","styled-components","./app/Main"],function(n,e,t,r,o){"use strict";var i=l(n),a=l(e),d=l(o);function l(n){return n&&n.__esModule?n:{default:n}}var f,b,u=(f=["\n  html,\n  body,\n  #app,\n  .wrapper {\n    min-height: 100vh;\n    height: 100%;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 100%;\n  }\n\n  * {\n    &,\n    &::after,\n    &::before {\n      box-sizing: inherit;\n    }\n  }\n\n  body {\n     padding: 0;\n     margin: 0;\n     font: 1rem / 1.414 Roboto;\n   }\n"],b=["\n  html,\n  body,\n  #app,\n  .wrapper {\n    min-height: 100vh;\n    height: 100%;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 100%;\n  }\n\n  * {\n    &,\n    &::after,\n    &::before {\n      box-sizing: inherit;\n    }\n  }\n\n  body {\n     padding: 0;\n     margin: 0;\n     font: 1rem / 1.414 Roboto;\n   }\n"],Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(b)}})));(0,r.injectGlobal)(u);var m=document.getElementById("app");a.default.render(i.default.createElement(function(){return i.default.createElement(t.BrowserRouter,null,i.default.createElement(d.default,null))},null),m)});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.8190ca7a.map