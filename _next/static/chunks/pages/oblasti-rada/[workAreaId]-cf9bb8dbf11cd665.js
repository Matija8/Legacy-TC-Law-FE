(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{7218:function(e,t,r){"use strict";r.d(t,{ZP:function(){return o}});var n=r(7294);const a=({color:e="currentColor",direction:t="left",distance:r="md",duration:a=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:s,lines:l=3,onToggle:c,render:d,rounded:u=!1,size:f=32,toggle:h,toggled:p})=>{const[m,g]=(0,n.useState)(!1),x=Math.max(12,Math.min(48,f)),w=Math.round((48-x)/2),v=x/12,b=Math.round(v),y=x/(l*(("lg"===r?.25:"sm"===r?.75:.5)+(3===l?1:1.25))),j=Math.round(y),k=b*l+j*(l-1),_=Math.round((48-k)/2),O=parseFloat((x/(3===l?"lg"===r?4.0425:"sm"===r?5.1625:4.6325:"lg"===r?6.7875:"sm"===r?8.4875:7.6675)-(v-b+(y-j))/(3===l?1:2)/(4/3)).toFixed(2)),$=Math.max(0,a),N={cursor:"pointer",height:"48px",position:"relative",transition:`${$}s ${i}`,userSelect:"none",width:"48px"},E={background:e,height:`${b}px`,left:`${w}px`,position:"absolute"};o&&(N.outline="none"),u&&(E.borderRadius="9em");const S=h||g,C=void 0!==p?p:m;return d({barHeight:b,barStyles:E,burgerStyles:N,easing:i,handler:()=>{S(!C),"function"===typeof c&&c(!C)},isLeft:"left"===t,isToggled:C,label:s,margin:j,move:O,time:$,topOffset:_,width:x})};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=e=>n.createElement(a,i({},e,{render:e=>n.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))}))},8585:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oblasti-rada/[workAreaId]",function(){return r(920)}])},18:function(e,t,r){"use strict";r.d(t,{s:function(){return f}});var n=r(5893),a=r(1664),i=r(9583),o=r(2444),s=r.n(o);function l(e){var t=e.href,r=e.children;return(0,n.jsxs)("div",{className:s()["work-area-card"],children:[r,(0,n.jsx)("div",{className:s()["work-area-bottom"],children:(0,n.jsx)(a.default,{href:t,children:(0,n.jsx)("a",{className:s()["work-area-right-arrow"],children:(0,n.jsx)(i.jS6,{size:30})})})})]})}var c=r(4811),d=r(6398),u=r.n(d);function f(e){var t=e.slice,r=t?c.G.slice(0,t):c.G;return(0,n.jsx)("section",{className:u()["work-areas-grid"],children:r.map((function(e){return(0,n.jsxs)(l,{href:"/oblasti-rada/".concat(e.id),children:[e.icon({size:35}),(0,n.jsx)("h3",{className:"pre-wrap",children:e.title}),(0,n.jsxs)("p",{children:[h(e.text),".."]})]},e.title)}))})}function h(e,t){var r=void 0===t?120:t,n=e.substring(0,r),a=(null!==n&&void 0!==n?n:"").split(" ");return a.pop(),a.join(" ")}},920:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d}});var n=r(5893),a=r(6673),i=r(1952),o=r(6425),s=r(18),l=r(6440),c=r.n(l),d=!0;t.default=function(e){var t=e.workArea;return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsx)(o.x,{title:"Oblasti rada"}),(0,n.jsx)(i.h,{}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsx)("h2",{className:"heading-underlined",children:"Oblasti rada"}),(0,n.jsxs)("section",{style:{margin:"40px 0 70px"},children:[(0,n.jsx)("h3",{className:"pre-wrap",children:t.title}),t.text.split("\n").map((function(e){return e.trim()})).filter(Boolean).map((function(e,t){return(0,n.jsx)("p",{children:e},t)}))]}),(0,n.jsx)(s.s,{slice:8})]}),(0,n.jsx)(a.$,{})]})}},2444:function(e){e.exports={"work-area-card":"work-area-card_work-area-card__tJdd0","work-area-right-arrow":"work-area-card_work-area-right-arrow__HMrGD","work-area-bottom":"work-area-card_work-area-bottom__7X0uZ"}},6398:function(e){e.exports={"work-areas-grid":"work-area-grid_work-areas-grid__drJW6"}},9008:function(e,t,r){e.exports=r(5443)},1163:function(e,t,r){e.exports=r(387)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return n.createElement(d,o({attr:o({},e.attr)},t),l(e.child))}}function d(e){var t=function(t){var r,a=e.attr,i=e.size,l=e.title,c=s(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[13,609,445,698,774,888,179],(function(){return t=8585,e(e.s=t);var t}));var t=e.O();_N_E=t}]);