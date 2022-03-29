import e,{useState as t,useRef as n,useEffect as r}from"react";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".incrementerContainer{align-items:center;display:flex;flex-direction:row;justify-content:center;overflow:hidden;position:relative;transition:all .3s}.incrementerContainer .numbers{width:100px}.incrementerContainer .numbers .number{left:0;position:absolute}.incrementerContainer .buttons{display:flex;flex-direction:column;justify-content:center;position:absolute;right:0;transition:all .3s}.incrementerContainer .buttons .button svg{transition:all .2s}");var l=function(i){var l=i.value,a=i.setValue,u=i.minValue,s=void 0===u?1:u,c=i.maxValue,m=void 0===c?100:c,f=i.fontSize,d=void 0===f?70:f,y=i.fontColor,h=void 0===y?"white":y,v=i.buttonsSize,p=void 0===v?16:v,b=i.buttonsColor,g=void 0===b?"white":b,x=i.buttonsHoverColor,C=void 0===x?"#87FF65":x,S=i.buttonsOffset,E=void 0===S?10:S,w=i.buttonsMargin,T=void 0===w?-4:w,N=i.animationTime,A=void 0===N?300:N,M=i.componentMargin,q=void 0===M?10:M,z=o(t(!1),2),j=z[0],B=z[1],H=o(t(!1),2),I=H[0],O=H[1],V=o(t(d),2),W=V[0],k=V[1],F=o(t(d),2),L=F[0],U=F[1],$=o(t(d),2),D=$[0],G=$[1],J=n();r((function(){k(J.current.querySelector(".number").offsetWidth+p+E);var e=J.current.querySelector(".number").offsetHeight,t=J.current.querySelector(".buttons").offsetHeight;U(e>t?e:t),G(e)}),[p,E]);var K=function(){var e=J.current.querySelector(".numbers"),t=J.current.querySelectorAll(".number"),n=t[t.length-1],r=document.createElement("div");r.className="number",r.style.fontSize=d+"px",r.innerText=l+1,r.style.marginTop=L+"px",r.style.color=h,r.style.transition=A+"ms all",e.appendChild(r),k(r.offsetWidth+p+E),n.style.marginTop=-L+"px",r.style.marginTop=0,setTimeout((function(){e.removeChild(n)}),A),a(l+1)},P=function(){var e=J.current.querySelector(".numbers"),t=J.current.querySelectorAll(".number"),n=t[t.length-1],r=document.createElement("div");r.className="number",r.style.fontSize=d+"px",r.innerText=l-1,r.style.marginTop=-L+"px",r.style.color=h,r.style.transition=A+"ms all",e.appendChild(r),k(r.offsetWidth+p+E),n.style.marginTop=L+"px",r.style.marginTop=0,setTimeout((function(){e.removeChild(n)}),A),a(l-1)};return e.createElement("div",{className:"incrementerContainer",ref:J,style:{height:L,width:W,margin:q}},e.createElement("div",{className:"numbers",style:{height:D}},e.createElement("div",{className:"number",style:{fontSize:d,color:h,transition:"".concat(A,"ms all")}},l)),e.createElement("div",{className:"buttons"},e.createElement("div",{className:"button up",onClick:function(){l<m&&K()},onMouseEnter:function(){return B(!0)},onMouseLeave:function(){return B(!1)}},e.createElement("svg",{style:{margin:"".concat(T,"px 0")},width:p,height:p,fill:j?C:g,viewBox:"0 0 16 16"},e.createElement("path",{d:"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}))),e.createElement("div",{className:"button down",onClick:function(){l>s&&P()},onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)}},e.createElement("svg",{style:{margin:"".concat(T,"px 0")},width:p,height:p,fill:I?C:g,viewBox:"0 0 16 16"},e.createElement("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})))))};export{l as Incrementer};
