(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{7218:function(e,t,r){"use strict";r.d(t,{ZP:function(){return i}});var n=r(7294);const o=({color:e="currentColor",direction:t="left",distance:r="md",duration:o=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:l,lines:u=3,onToggle:s,render:c,rounded:f=!1,size:d=32,toggle:p,toggled:v})=>{const[h,y]=(0,n.useState)(!1),g=Math.max(12,Math.min(48,d)),m=Math.round((48-g)/2),b=g/12,w=Math.round(b),x=g/(u*(("lg"===r?.25:"sm"===r?.75:.5)+(3===u?1:1.25))),E=Math.round(x),O=w*u+E*(u-1),$=Math.round((48-O)/2),L=parseFloat((g/(3===u?"lg"===r?4.0425:"sm"===r?5.1625:4.6325:"lg"===r?6.7875:"sm"===r?8.4875:7.6675)-(b-w+(x-E))/(3===u?1:2)/(4/3)).toFixed(2)),M=Math.max(0,o),k={cursor:"pointer",height:"48px",position:"relative",transition:`${M}s ${a}`,userSelect:"none",width:"48px"},C={background:e,height:`${w}px`,left:`${m}px`,position:"absolute"};i&&(k.outline="none"),f&&(C.borderRadius="9em");const S=p||y,I=void 0!==v?v:h;return c({barHeight:w,barStyles:C,burgerStyles:k,easing:a,handler:()=>{S(!I),"function"===typeof s&&s(!I)},isLeft:"left"===t,isToggled:I,label:l,margin:E,move:L,time:M,topOffset:$,width:g})};function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=e=>n.createElement(o,a({},e,{render:e=>n.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))}))},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),l=r(387),u=r(7190);var s={};function c(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var t=n(i.resolveHref(o,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=n(u.useIntersection({rootMargin:"200px"}),2),x=w[0],E=w[1],O=a.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);a.default.useEffect((function(){var e=E&&r&&i.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,n=s[d+"%"+p+(t?"%"+t:"")];e&&!n&&c(o,d,p,{locale:t})}),[p,d,E,m,r,o]);var $={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:l}))}(e,o,d,p,h,y,g,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&c(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof m?m:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);$.href=M||i.addBasePath(i.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(t,$)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,u=o.useRef(),s=n(o.useState(!1),2),c=s[0],f=s[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||c||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,c]);return o.useEffect((function(){if(!i&&!c){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[c]),[d,c]};var o=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return n.createElement(c,i({attr:i({},e.attr)},t),u(e.child))}}function c(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,s=l(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},7884:function(e,t,r){"use strict";t.default=u;var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8122),i=r(9035);var l=o.default.useInsertionEffect||o.default.useLayoutEffect;function u(e){var t=(0,a.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(l((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}u.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,i.computeId)(t,r)})).join(" ")}},5988:function(e,t,r){e.exports=r(7884)}}]);