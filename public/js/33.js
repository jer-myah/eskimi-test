"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33],{33:(t,e,r)=>{r.r(e),r.d(e,{default:()=>i});var s=r(629);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const l={name:"Welcome",mounted:function(){this.getAllUsers()},computed:o({},(0,s.Se)("auth",["getUsers"])),methods:o({},(0,s.nv)("auth",["getAllUsers"]))};const i=(0,r(900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"jumbotron-fluid"},[r("h1",{staticClass:"display-4"},[t._v("Welcome")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("Eskimi Test")]),t._v(" "),r("hr",{staticClass:"my-4"}),t._v(" "),r("p",{staticClass:"lead"},[r("router-link",{staticClass:"btn btn-primary btn-lg ml-5",attrs:{to:"login",role:"button"}},[t._v("Login")]),t._v(" "),r("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"register",role:"button"}},[t._v("Register")])],1)]),t._v(" "),r("div",[r("div",{staticClass:"mt-5 mb-5"},[t._v('\n            You may use any of the emails in the table below to login or proceed to register. Password is "password".\n        ')]),t._v(" "),r("table",{staticClass:"table"},[t._m(0),t._v(" "),r("tbody",t._l(t.getUsers,(function(e,s){return r("tr",{key:s},[r("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),r("td",[t._v(t._s(e.email))])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Sn")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Email")])])])}],!1,null,null,null).exports}}]);