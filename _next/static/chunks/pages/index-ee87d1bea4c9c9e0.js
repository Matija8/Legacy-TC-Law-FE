(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5920)}])},8418:function(e,n,i){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=[],t=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(i.push(o.value),!n||i.length!==n);t=!0);}catch(l){a=!0,r=l}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}return i}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,r=(a=i(7294))&&a.__esModule?a:{default:a},o=i(6273),s=i(387),l=i(7190);var c={};function d(e,n,i,t){if(e&&o.isLocalURL(n)){e.prefetch(n,i,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+i+(a?"%"+a:"")]=!0}}var u=function(e){var n,i=!1!==e.prefetch,a=s.useRouter(),u=r.default.useMemo((function(){var n=t(o.resolveHref(a,e.href,!0),2),i=n[0],r=n[1];return{href:i,as:e.as?o.resolveHref(a,e.as):r||i}}),[a,e.href,e.as]),f=u.href,p=u.as,m=e.children,h=e.replace,v=e.shallow,j=e.scroll,g=e.locale;"string"===typeof m&&(m=r.default.createElement("a",null,m));var x=(n=r.default.Children.only(m))&&"object"===typeof n&&n.ref,y=t(l.useIntersection({rootMargin:"200px"}),2),b=y[0],k=y[1],w=r.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);r.default.useEffect((function(){var e=k&&i&&o.isLocalURL(f),n="undefined"!==typeof g?g:a&&a.locale,t=c[f+"%"+p+(n?"%"+n:"")];e&&!t&&d(a,f,p,{locale:n})}),[p,f,k,g,i,a]);var _={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,i,t,a,r,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(i))&&(e.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](i,t,{shallow:r,locale:l,scroll:s}))}(e,a,f,p,h,v,j,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(f)&&d(a,f,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var z="undefined"!==typeof g?g:a&&a.locale,N=a&&a.isLocaleDomain&&o.getDomainLocale(p,z,a&&a.locales,a&&a.domainLocales);_.href=N||o.addBasePath(o.addLocale(p,z,a&&a.defaultLocale))}return r.default.cloneElement(n,_)};n.default=u},7190:function(e,n,i){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=[],t=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(i.push(o.value),!n||i.length!==n);t=!0);}catch(l){a=!0,r=l}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}return i}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,i=e.disabled||!o,l=a.useRef(),c=t(a.useState(!1),2),d=c[0],u=c[1],f=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),i||d||e&&e.tagName&&(l.current=function(e,n,i){var t=function(e){var n=e.rootMargin||"",i=s.get(n);if(i)return i;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;n&&i&&n(i)}))}),e);return s.set(n,i={id:n,observer:a,elements:t}),i}(i),a=t.id,r=t.observer,o=t.elements;return o.set(e,n),r.observe(e),function(){o.delete(e),r.unobserve(e),0===o.size&&(r.disconnect(),s.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[i,n,d]);return a.useEffect((function(){if(!o&&!d){var e=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[d]),[f,d]};var a=i(7294),r=i(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},5920:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return y}});var t=i(5893),a=i(5988),r=i(7294);const o=({color:e="currentColor",direction:n="left",distance:i="md",duration:t=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:s,lines:l=3,onToggle:c,render:d,rounded:u=!1,size:f=32,toggle:p,toggled:m})=>{const[h,v]=(0,r.useState)(!1),j=Math.max(12,Math.min(48,f)),g=Math.round((48-j)/2),x=j/12,y=Math.round(x),b=j/(l*(("lg"===i?.25:"sm"===i?.75:.5)+(3===l?1:1.25))),k=Math.round(b),w=y*l+k*(l-1),_=Math.round((48-w)/2),z=parseFloat((j/(3===l?"lg"===i?4.0425:"sm"===i?5.1625:4.6325:"lg"===i?6.7875:"sm"===i?8.4875:7.6675)-(x-y+(b-k))/(3===l?1:2)/(4/3)).toFixed(2)),N=Math.max(0,t),O={cursor:"pointer",height:"48px",position:"relative",transition:`${N}s ${a}`,userSelect:"none",width:"48px"},E={background:e,height:`${y}px`,left:`${g}px`,position:"absolute"};o&&(O.outline="none"),u&&(E.borderRadius="9em");const L=p||v,M=void 0!==m?m:h;return d({barHeight:y,barStyles:E,burgerStyles:O,easing:a,handler:()=>{L(!M),"function"===typeof c&&c(!M)},isLeft:"left"===n,isToggled:M,label:s,margin:k,move:z,time:N,topOffset:_,width:j})};function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var l=e=>r.createElement(o,s({},e,{render:e=>r.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:n=>"Enter"===n.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))})),c=i(1664),d="0.5em";function u(){var e=(0,r.useState)(!1),n=e[0],i=e[1],o=150,s=768;return(0,r.useEffect)((function(){var e=document.getElementsByTagName("BODY")[0];e&&e.classList[n?"add":"remove"]("mobile-nav-open")})),(0,t.jsxs)("header",{className:a.default.dynamic([["9e8fc73b9d928fdd",[o,o,n?"":"visibility:hidden",d,s]]]),children:[(0,t.jsx)(a.default,{id:"9e8fc73b9d928fdd",dynamic:[o,o,n?"":"visibility:hidden",d,s],children:"header.__jsx-style-dynamic-selector {height:".concat(o,"px;\nposition:-webkit-sticky;\nposition:sticky;\ntop:0;\nbackground:white;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\nnav.__jsx-style-dynamic-selector {font-size:1.5rem;\nposition:fixed;\ntop:").concat(o,"px;\nleft:0;\nz-index:1;\nbackground:white;\nheight:100%;\n").concat(n?"":"visibility:hidden",";\nwidth:100%}\nnav.__jsx-style-dynamic-selector >li.__jsx-style-dynamic-selector {padding:").concat(d,";\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}\n.burger.__jsx-style-dynamic-selector {float:right;\nz-index:2}\n@media (min-width:").concat(s,"px) {nav.__jsx-style-dynamic-selector {position:static;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\nvisibility:visible;\nheight:auto}\n.burger.__jsx-style-dynamic-selector {display:none}}")}),(0,t.jsx)("img",{src:"/logo.png",alt:"Company logo",className:a.default.dynamic([["9e8fc73b9d928fdd",[o,o,n?"":"visibility:hidden",d,s]]])}),(0,t.jsx)("div",{className:a.default.dynamic([["9e8fc73b9d928fdd",[o,o,n?"":"visibility:hidden",d,s]]])}),(0,t.jsxs)("nav",{id:"main-nav",className:a.default.dynamic([["9e8fc73b9d928fdd",[o,o,n?"":"visibility:hidden",d,s]]])+" slide-in",children:[(0,t.jsx)(f,{href:"oblasti-rada",children:"Oblasti rada"}),(0,t.jsx)(f,{href:"novosti",children:"Novosti"}),(0,t.jsx)(f,{href:"nas-tim",children:"Nas tim"}),(0,t.jsx)(f,{href:"karijera",children:"Karijera"}),(0,t.jsx)(f,{href:"kontakt",children:"Kontakt"})]}),(0,t.jsxs)("div",{className:a.default.dynamic([["9e8fc73b9d928fdd",[o,o,n?"":"visibility:hidden",d,s]]])+" right",children:[(0,t.jsx)("span",{className:a.default.dynamic([["9e8fc73b9d928fdd",[o,o,n?"":"visibility:hidden",d,s]]]),children:"Change language (TODO)"}),(0,t.jsx)("div",{className:a.default.dynamic([["9e8fc73b9d928fdd",[o,o,n?"":"visibility:hidden",d,s]]])+" burger",children:(0,t.jsx)(l,{toggled:n,onToggle:function(){i(!n)},children:"Menu"})})]})]})}function f(e){var n=e.href,i=e.children;return(0,t.jsx)("li",{style:{padding:d},children:(0,t.jsx)(c.default,{href:n,children:(0,t.jsx)("a",{children:i})})})}var p=i(9008),m=i(3750),h=i(9583),v=i(6440),j=i.n(v),g=35;function x(e){var n=e.link,i=e.children;return(0,t.jsxs)("div",{className:"work-area-card",children:[i,(0,t.jsx)("div",{className:"work-area-bottom",children:(0,t.jsx)("a",{className:"work-area-right-arrow",href:n,style:{float:"right"},children:(0,t.jsx)(h.jS6,{size:30})})})]})}var y=function(){return(0,t.jsxs)("div",{className:j().container,children:[(0,t.jsx)(u,{}),(0,t.jsxs)(p.default,{children:[(0,t.jsx)("title",{children:"Trifunovic & Co Law Office - Home page"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,t.jsx)("meta",{name:"description",content:"Members of TC law team have been assisting international and national clients from various industries to establish, build and operate their business in Serbia."})]}),(0,t.jsxs)("main",{className:j().main,children:[(0,t.jsxs)("section",{style:{width:"100%"},children:[(0,t.jsx)("h2",{style:{fontWeight:700},children:"OBLASTI RADA"}),(0,t.jsx)("p",{children:"Od 1998. pru\u017eamo podr\u0161ku internacionalnim i doma\u0107im klijentima iz razli\u010ditih privrednih oblasti u osnivanju, izgradnji i razvoju njihovih investicija u Srbiji. Negovanjem individualnog pristupa, s klijentom gradimo odnos uzajamnog poverenja i saradnje usmerene na rezultate. Va\u017eno nam je da razumemo poslovnu filozofiju, ciljeve i interese klijenta kako bismo mu pru\u017eili personalizovanu pravnu uslugu koja odgovara njegovim potrebama. Znamo da su stru\u010dnost, fleksibilnost i kreativnost nu\u017eni za prevazila\u017eenje izazova u dinami\u010dnom poslovnom okru\u017eenju."}),(0,t.jsx)("p",{children:"Zbog toga nam je stalo da klijentu pru\u017eimo profesionalne, fokusirane, pragmati\u010dne i pouzdane pravne usluge i savete koji \u0107e mu pomo\u0107i da se spremno i odlu\u010dno nosi sa poslovnim izazovima u kompleksnom privrednom ambijentu."}),(0,t.jsx)("p",{children:"Reputaciju pouzdanog, stru\u010dnog i uspe\u0161nog pravnog savetnika stekli smo znanjem, iskustvom, savesno\u0161\u0107u i visokim standardima. Verujemo da se na\u0161 uspeh ogleda u rezultatima na\u0161ih klijenata."})]}),(0,t.jsxs)("section",{className:"work-areas-grid",children:[(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsx)("h3",{children:"Korporativno pravo/M&A"}),(0,t.jsx)("p",{children:"Savetujemo klijente u pripremnoj fazi odlu\u010divanja o investiciji, sastavljamo i pripremamo potrebna.."})]}),(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsx)("h3",{children:"Privredno pravo"}),(0,t.jsx)("p",{children:"Imamo sveobuhvatno poznavanje me\u0111unarodnog i doma\u0107eg ugovornog prava, standarda ugovaranja i poslovnih.."})]}),(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsx)("h3",{children:"Gra\u0111enje"}),(0,t.jsx)("p",{children:"Pru\u017eamo podr\u0161ku investitorima u razvoju greenfield investicija i drugih vidova ulaganja u projekte izgradnje.."})]}),(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsxs)("h3",{children:["Antimonopolsko pravo ",(0,t.jsx)("br",{}),"Pravo konkurencije"]}),(0,t.jsx)("p",{children:"Savetujemo klijente u pitanjima konkurencije u vezi sa spajanjem pripajanjem i zajedni\u010dkim ulaganjima.."})]}),(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsxs)("h3",{children:["Radno pravo ",(0,t.jsx)("br",{}),"Boravi\u0161na i radna dozvola"]}),(0,t.jsx)("p",{children:"Sastavljamo pravilnike, ugovore, re\u0161enja i druga akta iz oblasti radnih odnosa i pru\u017eamo pravnu podr\u0161ku.."})]}),(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsxs)("h3",{children:["Intelektualna svojina ",(0,t.jsx)("br",{}),"Industrija zabave/IT"]}),(0,t.jsx)("p",{children:"Pru\u017eamo usluge savetovanja i zastupanja me\u0111unarodnih i doma\u0107ih pravnih subjekata i fizi\u010dkih lica u stvarima.."})]}),(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsx)("h3",{children:"Porezi, carine i devizno poslovanje"}),(0,t.jsx)("p",{children:"Pru\u017eamo podr\u0161ku investitorima u razvoju greenfield investicija i drugih vidova ulaganja u projekte izgradnje.."})]}),(0,t.jsxs)(x,{link:"https:www.google.com",children:[(0,t.jsx)(m.Za_,{size:g}),(0,t.jsx)("h3",{children:"Za\u0161tita podataka o li\u010dnosti"}),(0,t.jsx)("p",{children:"Poma\u017eemo klijentima da obradu podataka o li\u010dnosti usklade sa GDPR i pravilima koja su na snazi u Republici Srbiji.."})]})]}),(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Novosti"})}),(0,t.jsx)("h2",{children:"Na\u0161 Tim"}),(0,t.jsx)("h2",{children:"Kontakt"}),(0,t.jsx)("h2",{children:"Trifunovic & Co"})]}),(0,t.jsx)("footer",{className:j().footer})]})}},6440:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc"}},9008:function(e,n,i){e.exports=i(5443)},1664:function(e,n,i){e.exports=i(8418)},8357:function(e,n,i){"use strict";i.d(n,{w_:function(){return c}});var t=i(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=t.createContext&&t.createContext(a),o=function(){return(o=Object.assign||function(e){for(var n,i=1,t=arguments.length;i<t;i++)for(var a in n=arguments[i])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},s=function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(i[t[a]]=e[t[a]])}return i};function l(e){return e&&e.map((function(e,n){return t.createElement(e.tag,o({key:n},e.attr),l(e.child))}))}function c(e){return function(n){return t.createElement(d,o({attr:o({},e.attr)},n),l(e.child))}}function d(e){var n=function(n){var i,a=e.attr,r=e.size,l=e.title,c=s(e,["attr","size","title"]),d=r||n.size||"1em";return n.className&&(i=n.className),e.className&&(i=(i?i+" ":"")+e.className),t.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,c,{className:i,style:o(o({color:e.color||n.color},n.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&t.createElement("title",null,l),e.children)};return void 0!==r?t.createElement(r.Consumer,null,(function(e){return n(e)})):n(a)}},7884:function(e,n,i){"use strict";n.default=l;var t,a=(t=i(7294))&&t.__esModule?t:{default:t},r=i(8122),o=i(9035);var s=a.default.useInsertionEffect||a.default.useLayoutEffect;function l(e){var n=(0,r.useStyleRegistry)();return n?"undefined"===typeof window?(n.add(e),null):(s((function(){return n.add(e),function(){n.remove(e)}}),[e.id,String(e.dynamic)]),null):null}l.dynamic=function(e){return e.map((function(e){var n=e[0],i=e[1];return(0,o.computeId)(n,i)})).join(" ")}},5988:function(e,n,i){e.exports=i(7884)}},function(e){e.O(0,[445,13,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);