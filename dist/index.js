"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".incrementerContainer{align-items:center;display:flex;flex-direction:row;justify-content:center;overflow:hidden;position:relative;transition:all .3s}.incrementerContainer .numbers{width:100px}.incrementerContainer .numbers .number{left:0;position:absolute}.incrementerContainer .buttons{display:flex;flex-direction:column;justify-content:center;position:absolute;right:0;transition:all .3s}.incrementerContainer .buttons .button svg{transition:all .2s}");exports.Incrementer=function(t){var o=t.value,i=t.setValue,l=t.minValue,a=void 0===l?1:l,u=t.maxValue,s=void 0===u?100:u,c=t.fontSize,m=void 0===c?70:c,d=t.fontColor,f=void 0===d?"white":d,y=t.buttonsSize,v=void 0===y?16:y,h=t.buttonsColor,p=void 0===h?"white":h,b=t.buttonsHoverColor,g=void 0===b?"#87FF65":b,x=t.buttonsOffset,S=void 0===x?10:x,C=t.buttonsMargin,E=void 0===C?-4:C,w=t.animationTime,T=void 0===w?300:w,N=t.componentMargin,A=void 0===N?10:N,M=r(e.useState(!1),2),q=M[0],j=M[1],z=r(e.useState(!1),2),B=z[0],I=z[1],O=r(e.useState(m),2),H=O[0],V=O[1],W=r(e.useState(m),2),k=W[0],F=W[1],L=r(e.useState(m),2),_=L[0],P=L[1];e.useEffect((function(){V(document.querySelector(".number").offsetWidth+v+S);var e=document.querySelector(".number").offsetHeight,t=document.querySelector(".buttons").offsetHeight;F(e>t?e:t),P(e)}),[v,S]);var U=function(){var e=document.querySelector(".numbers"),t=document.querySelectorAll(".number"),n=t[t.length-1],r=document.createElement("div");r.className="number",r.style.fontSize=m+"px",r.innerText=o+1,r.style.marginTop=k+"px",r.style.color=f,r.style.transition=T+"ms all",e.appendChild(r),V(r.offsetWidth+v+S),n.style.marginTop=-k+"px",r.style.marginTop=0,setTimeout((function(){e.removeChild(n)}),T),i(o+1)},$=function(){var e=document.querySelector(".numbers"),t=document.querySelectorAll(".number"),n=t[t.length-1],r=document.createElement("div");r.className="number",r.style.fontSize=m+"px",r.innerText=o-1,r.style.marginTop=-k+"px",r.style.color=f,r.style.transition=T+"ms all",e.appendChild(r),V(r.offsetWidth+v+S),n.style.marginTop=k+"px",r.style.marginTop=0,setTimeout((function(){e.removeChild(n)}),T),i(o-1)};return n.default.createElement("div",{className:"incrementerContainer",style:{height:k,width:H,margin:A}},n.default.createElement("div",{className:"numbers",style:{height:_}},n.default.createElement("div",{className:"number",style:{fontSize:m,color:f,transition:"".concat(T,"ms all")}},o)),n.default.createElement("div",{className:"buttons"},n.default.createElement("div",{className:"button up",onClick:function(){o<s&&U()},onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)}},n.default.createElement("svg",{style:{margin:"".concat(E,"px 0")},width:v,height:v,fill:q?g:p,viewBox:"0 0 16 16"},n.default.createElement("path",{d:"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}))),n.default.createElement("div",{className:"button down",onClick:function(){o>a&&$()},onMouseEnter:function(){return I(!0)},onMouseLeave:function(){return I(!1)}},n.default.createElement("svg",{style:{margin:"".concat(E,"px 0")},width:v,height:v,fill:B?g:p,viewBox:"0 0 16 16"},n.default.createElement("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})))))};
