"use strict";var _=Object.defineProperty;var f=(r,e,o)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var i=(r,e,o)=>f(r,typeof e!="symbol"?e+"":e,o);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react");var c={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=a,x=Symbol.for("react.element"),v=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,y=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,o){var t,s={},l=null,u=null;o!==void 0&&(l=""+o),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(u=e.ref);for(t in e)h.call(e,t)&&!j.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:x,type:r,key:l,ref:u,props:s,_owner:y.current}}d.Fragment=v;d.jsx=p;d.jsxs=p;c.exports=d;var n=c.exports;const w=a.createContext(void 0),g=({value:r,children:e})=>n.jsx(w.Provider,{value:r,children:n.jsx("div",{children:e})});class O{constructor(e){i(this,"id");i(this,"properties");i(this,"template");this.id=e.props.power_widgetsid,this.properties=e.props,this.template=e.template,this.init()}async init(){}render(){return n.jsx(g,{value:{id:this.id},children:n.jsxs("div",{className:"w-full h-full my-background",children:[n.jsx("span",{children:"Welcome to PowerDashboards!"}),n.jsx("span",{children:"You can create your own Widget!"}),n.jsx("span",{children:"Read Documentation: "})]})})}}const R=r=>new O(r).render();exports.default=R;
