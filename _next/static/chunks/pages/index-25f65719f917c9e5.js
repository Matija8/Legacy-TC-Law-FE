(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6580)}])},229:function(e,t,n){"use strict";n.d(t,{J:function(){return v}});var r=n(6042),i=n(9396),o=n(5893),a=n(8820),s=n(1664),u=n.n(s),c=n(977),l=n(6839),d=n(3530),f=n(8711),h=n.n(f);function v(e){var t=e.hide,n=e.employee,s=n.title,f=n.pagePath,v=n.email,m=l.X.getPageHref(n),p=(0,r.Z)({},!f&&{pointerEvents:"none"});return(0,o.jsxs)("article",{className:h()["lawyer-info"],style:(0,r.Z)({},t&&{display:"none"}),children:[(0,o.jsx)(d.L,{employee:n}),(0,o.jsxs)("div",{className:h()["member-details"],children:[(0,o.jsxs)("div",{className:h()["member-details-row-1"],children:[(0,o.jsx)(u(),{href:m,children:(0,o.jsx)("a",{style:(0,i.Z)((0,r.Z)({},p),{fontSize:16}),children:l.X.getNameSurname(n)})}),v&&(0,o.jsx)("a",{href:"mailto:".concat(v),children:(0,o.jsx)(a.b,{size:30,color:c.Q.red1})})]}),(0,o.jsx)("p",{children:s})]})]})}},3530:function(e,t,n){"use strict";n.d(t,{L:function(){return h},R:function(){return f}});var r=n(6042),i=n(5893),o=n(6534),a=n(4749),s=n(1664),u=n.n(s),c=n(6839),l=n(8711),d=n.n(l);function f(e){var t=e.employee,n=t.name,r=t.surname,s=t.title,u=t.memberPhotoId;return(0,i.jsx)(o.Y,{className:d().photo,src:"".concat(a.rg.BASE_PATH,"/team/").concat(u,".jpg"),alt:"".concat(n," ").concat(r," ").concat(s," photo")})}function h(e){var t=e.employee,n=t.pagePath,o=c.X.getPageHref(t),a=(0,r.Z)({cursor:n?"pointer":"no-drop"},!n&&{pointerEvents:"none"});return(0,i.jsx)(u(),{href:o,children:(0,i.jsx)("a",{style:a,children:(0,i.jsx)(f,{employee:t})})})}},7481:function(e,t,n){"use strict";n.d(t,{E:function(){return b}});var r=n(7568),i=n(6042),o=n(9396),a=n(4051),s=n.n(a),u=n(5893),c=n(7764),l=n(1189),d=n(8143),f=n(4749),h=n(2580),v=n(4302),m=n(9196),p=n(1121),g={nameSurname:"",email:"",message:"",readPrivacy:!1};function x(e){return(0,u.jsx)(h.J9,{initialValues:g,onSubmit:v.V.FormikOnSubmitWrapper(function(){var e=(0,r.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.resetForm,e.next=3,(0,m.K)("mail/contactForm",{nameSurname:t.nameSurname,email:t.email,message:t.message,useTestMail:f.cs});case 3:r({values:(0,o.Z)((0,i.Z)({},t),{message:""})});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),e),validate:function(e){var t={};return e.nameSurname||(t.nameSurname=f.iK),e.email?f.s5.email.test(e.email)||(t.email="*Nevalidan e-mail"):t.email=f.iK,e.message||(t.message=f.iK),e.readPrivacy||(t.readPrivacy=f.al),t},children:function(e){var t=e.errors,n=e.handleBlur,r=e.handleChange,i=e.handleSubmit,o=e.isSubmitting,a=e.touched,s=e.values;return(0,u.jsxs)("form",{style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:i,children:[(0,u.jsx)(c.Z,{label:"Ime i prezime",name:"nameSurname",variant:"outlined",value:s.nameSurname,error:Boolean(a.nameSurname&&t.nameSurname),helperText:t.nameSurname||f.iK,onChange:r,onBlur:n}),(0,u.jsx)(c.Z,{label:"E-mail",name:"email",variant:"outlined",type:"email",value:s.email,error:Boolean(a.email&&t.email),helperText:a.email&&t.email||f.iK,onChange:r,onBlur:n}),(0,u.jsx)(c.Z,{multiline:!0,rows:6,label:"Poruka",name:"message",variant:"outlined",value:s.message,error:Boolean(a.message&&t.message),helperText:t.message||f.iK,onChange:r,onBlur:n}),(0,u.jsx)(l.k,{name:"readPrivacy",value:s.readPrivacy,onChange:r,onBlur:n}),(0,u.jsx)(p.o,{isSubmitting:o,disabled:!v.V.isSubmitBtnEnabled(a,t)})]})}})}function b(){var e=(0,d.Ds)();return(0,u.jsx)(x,{onSubmitSuccess:function(){return e("Slanje poruke uspe\u0161no izvr\u0161eno!")},onSubmitError:function(){return e("Gre\u0161ka pri slanju poruke kroz kontakt formu!")}})}},2337:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(5893),i=n(4749);function o(){return(0,r.jsx)("div",{style:{minHeight:"25rem"},children:(0,r.jsx)("iframe",{style:{border:0},height:"100%",width:"100%",src:i.lp.maps})})}},8506:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var r=n(6042),i=n(9534),o=n(5893),a=n(5999),s=n(4551),u=n(3622);function c(e){var t=e.children;return(0,o.jsx)(a.D,{remarkPlugins:[u.Z],rehypePlugins:[s.Z],components:{u:function(e){e.node;var t=(0,i.Z)(e,["node"]);return(0,o.jsx)("u",(0,r.Z)({style:{textDecoration:"underline"}},t))}},children:t})}},18:function(e,t,n){"use strict";n.d(t,{s:function(){return h}});var r=n(5893),i=n(1664),o=n.n(i),a=n(9583),s=n(9139),u=n.n(s);function c(e){var t=e.href,n=e.children;return(0,r.jsxs)("div",{className:u()["work-area-card"],children:[n,(0,r.jsx)("div",{className:u()["work-area-bottom"],children:(0,r.jsx)(o(),{href:t,children:(0,r.jsx)("a",{className:u()["work-area-right-arrow"],children:(0,r.jsx)(a.jS6,{size:30})})})})]})}var l=n(4811),d=n(3443),f=n.n(d);function h(){var e=l.G;return(0,r.jsx)("section",{className:f()["work-areas-grid"],children:e.map((function(e){return(0,r.jsxs)(c,{href:"/oblasti-rada/".concat(e.id),children:[e.icon({size:35}),(0,r.jsx)("h3",{className:"pre-wrap",children:e.title}),(0,r.jsxs)("p",{children:[v(e.text),".."]})]},e.title)}))})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120,n=e.substring(0,t),r=(null!==n&&void 0!==n?n:"").split(" ");r.pop();var i=r.join(" ");return i}},2942:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var r=n(6042),i=n(9396),o=[{name:"Jasna",surname:"Trifunovi\u0107",email:"jasna.trifunovic@tclaw.rs",title:"advokat",longTitle:"Advokat i ovla\u0161\u0107eni zastupnik za pravo intelektualne svojine",pagePath:"jasna-trifunovic",memberPhotoId:"Jasna",workAreas:["Korporativno pravo & korporativno upravljanje, M&A, strane investicije i podsticajna sredstva, privredno pravo, gra\u0111enje, pravo intelektualne svojine i medijsko pravo, radno pravo, neprofitne organizacije","U\u010destvovala je u radnim grupama na izradi zakona koji reguli\u0161u osnivanje i rad nevladinih organizacija i njihov poreski tretman, kao i u telima za izmene propisa u oblastima dr\u017eavne uprave i ljudskih prava."],education:["Pravni fakultet Univerziteta u Beogradu.","Dr\u017eavni ispit za ovla\u0161\u0107enog zastupnika za prava intelektualne svojine.","Advokat je od 1998.","Ovla\u0161\u0107eni zastupnik za prava intelektualne svojine pri Zavodu za intelektualnu svojinu od 2004."]},{name:"Lana",surname:"Tamind\u017ei\u0107",title:"advokat",email:"lana.tamindzic@tclaw.rs",pagePath:"lana-tamindzic",memberPhotoId:"Lana",workAreas:["Kompanijsko, privredno, antimonopolsko i pravo konkurencije, usagla\u0161enost sa propisima, za\u0161tita \u017eivotne sredine, radno i upravno pravo, neprofitne organizacije"],education:["Pravni fakultet Univerziteta u Beogradu.","Advokat je od 2014."]},{name:"Katarina",surname:"Savi\u0107",title:"advokatski pripravnik",pagePath:"katarina-savic",memberPhotoId:"Katarina",education:["Pravni fakultet Univerziteta u Beogradu."],test:!0},{name:"Marko",surname:"Ili\u0107",title:"advokatski pripravnik",memberPhotoId:"Marko",education:["Pravni fakultet Univerziteta u Beogradu."],test:!0},{name:"Matija",surname:"Test",title:"programer",pagePath:"matija-test",memberPhotoId:"debug",test:!0}].map((function(e){return(0,i.Z)((0,r.Z)({},e),{key:e.pagePath||"".concat(e.name,"-").concat(e.surname),languages:e.languages||"engleski i srpski"})})).filter((function(e){return!e.test}))},6580:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Re},default:function(){return Ce}});var r,i=n(5893),o=n(4924),a=n(603),s=n(7294),u=[],c="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var l,d=function(e){return Object.freeze(e)},f=function(e,t){this.inlineSize=e,this.blockSize=t,d(this)},h=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,d(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),v=function(e){return e instanceof SVGElement&&"getBBox"in e},m=function(e){if(v(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||e.getClientRects().length)},p=function(e){var t,n;if(e instanceof Element)return!0;var r=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},g="undefined"!==typeof window?window:{},x=new WeakMap,b=/auto|scroll/,j=/^tb|vertical/,w=/msie|trident/i.test(g.navigator&&g.navigator.userAgent),k=function(e){return parseFloat(e||"0")},y=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new f((n?t:e)||0,(n?e:t)||0)},z=d({devicePixelContentBoxSize:y(),borderBoxSize:y(),contentBoxSize:y(),contentRect:new h(0,0,0,0)}),S=function(e,t){if(void 0===t&&(t=!1),x.has(e)&&!t)return x.get(e);if(m(e))return x.set(e,z),z;var n=getComputedStyle(e),r=v(e)&&e.ownerSVGElement&&e.getBBox(),i=!w&&"border-box"===n.boxSizing,o=j.test(n.writingMode||""),a=!r&&b.test(n.overflowY||""),s=!r&&b.test(n.overflowX||""),u=r?0:k(n.paddingTop),c=r?0:k(n.paddingRight),l=r?0:k(n.paddingBottom),f=r?0:k(n.paddingLeft),p=r?0:k(n.borderTopWidth),g=r?0:k(n.borderRightWidth),S=r?0:k(n.borderBottomWidth),E=f+c,_=u+l,T=(r?0:k(n.borderLeftWidth))+g,B=p+S,P=s?e.offsetHeight-B-e.clientHeight:0,I=a?e.offsetWidth-T-e.clientWidth:0,N=i?E+T:0,R=i?_+B:0,C=r?r.width:k(n.width)-N-I,O=r?r.height:k(n.height)-R-P,A=C+E+I+T,M=O+_+P+B,Z=d({devicePixelContentBoxSize:y(Math.round(C*devicePixelRatio),Math.round(O*devicePixelRatio),o),borderBoxSize:y(A,M,o),contentBoxSize:y(C,O,o),contentRect:new h(f,u,C,O)});return x.set(e,Z),Z},E=function(e,t,n){var i=S(e,n),o=i.borderBoxSize,a=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return s;case r.BORDER_BOX:return o;default:return a}},_=function(e){var t=S(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=d([t.borderBoxSize]),this.contentBoxSize=d([t.contentBoxSize]),this.devicePixelContentBoxSize=d([t.devicePixelContentBoxSize])},T=function(e){if(m(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},B=function(){var e=1/0,t=[];u.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new _(t.target),i=T(t.target);r.push(n),t.lastReportedSize=E(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},P=function(e){u.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(T(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},I=function(){var e=0;for(P(e);u.some((function(e){return e.activeTargets.length>0}));)e=B(),P(e);return u.some((function(e){return e.skippedTargets.length>0}))&&function(){var e;"function"===typeof ErrorEvent?e=new ErrorEvent("error",{message:c}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=c),window.dispatchEvent(e)}(),e>0},N=[],R=function(e){if(!l){var t=0,n=document.createTextNode("");new MutationObserver((function(){return N.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),l=function(){n.textContent=""+(t?t--:t++)}}N.push(e),l()},C=0,O={attributes:!0,characterData:!0,childList:!0,subtree:!0},A=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],M=function(e){return void 0===e&&(e=0),Date.now()+e},Z=!1,F=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!Z){Z=!0;var n,r=M(e);n=function(){var n=!1;try{n=I()}finally{if(Z=!1,e=r-M(),!C)return;n?t.run(1e3):e>0?t.run(e):t.start()}},R((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,O)};document.body?t():g.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),A.forEach((function(t){return g.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),A.forEach((function(t){return g.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),W=function(e){!C&&e>0&&F.start(),!(C+=e)&&F.stop()},D=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=E(this.target,this.observedBox,!0);return e=this.target,v(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),L=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},H=new WeakMap,X=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},U=function(){function e(){}return e.connect=function(e,t){var n=new L(e,t);H.set(e,n)},e.observe=function(e,t,n){var r=H.get(e),i=0===r.observationTargets.length;X(r.observationTargets,t)<0&&(i&&u.push(r),r.observationTargets.push(new D(t,n&&n.box)),W(1),F.schedule())},e.unobserve=function(e,t){var n=H.get(e),r=X(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&u.splice(u.indexOf(n),1),n.observationTargets.splice(r,1),W(-1))},e.disconnect=function(e){var t=this,n=H.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),K=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");U.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");U.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");U.unobserve(this,e)},e.prototype.disconnect=function(){U.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();var V=s["undefined"!==typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var G=e=>{const t=s.useRef(e);return s.useEffect((()=>{t.current=e})),t},J=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t=i,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r};const q="undefined"!==typeof window&&"ResizeObserver"in window?window.ResizeObserver:K;function Q(){}let Y;const $=()=>Y||(Y=function(){const e=new Map,t=new q(J(((t,n)=>{for(let r=0;r<t.length;r++){const i=e.get(t[r].target);null===i||void 0===i||i.forEach((e=>e(t[r],n)))}})));return{observer:t,subscribe(n,r){var i;t.observe(n);const o=null!==(i=e.get(n))&&void 0!==i?i:[];o.push(r),e.set(n,o)},unsubscribe(n,r){var i;const o=null!==(i=e.get(n))&&void 0!==i?i:[];if(1===o.length)return t.unobserve(n),void e.delete(n);const a=o.indexOf(r);-1!==a&&o.splice(a,1),e.set(n,o)}}}());var ee=function(e,t){const n=$(),r=G(t);return V((()=>{let t=!1;const i=e&&"current"in e?e.current:e;if(!i)return Q;function o(e,n){t||r.current(e,n)}return n.subscribe(i,o),()=>{t=!0,n.unsubscribe(i,o)}}),[e,n,r]),n.observer};var te=(e,t)=>{const[n,r]=s.useState((()=>{var n,r;const i=e&&"current"in e?e.current:e;return i?[i.offsetWidth,i.offsetHeight]:[null!==(n=null===t||void 0===t?void 0:t.initialWidth)&&void 0!==n?n:0,null!==(r=null===t||void 0===t?void 0:t.initialHeight)&&void 0!==r?r:0]}));return V((()=>{const t=e&&"current"in e?e.current:e;t&&r([t.offsetWidth,t.offsetHeight])}),[e]),ee(e,(e=>{const t=e.target;r([t.offsetWidth,t.offsetHeight])})),n},ne=n(4184),re=n.n(ne),ie=n(2942),oe=n(8238),ae=n.n(oe),se=n(3750),ue={Left:se.pjk,Right:se.fmn,Down:se.IAR},ce=n(229);function le(e,t,n){return Math.max(e,Math.min(t,n))}var de=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fstItemShownIdx=n,this.itemCount=t.length,this.take=function(){var e=Math.min(3,i.itemCount);return le(1,Math.floor((r-20)/250),e)}()}var t=e.prototype;return t.isShowNextPossible=function(){return this.fstItemShownIdx<this.maxFstIndexPossible()},t.prevFstItemIndex=function(){return Math.max(0,this.fstItemShownIdx-1)},t.nextFstItemIndex=function(){return Math.min(this.maxFstIndexPossible(),this.fstItemShownIdx+1)},t.shouldHideItem=function(e){return e<this.fstItemShownIdx||e>this.lastItemShownIndex()},t.shouldRenderLRButtons=function(){return this.take<this.itemCount},t.lastItemShownIndex=function(){return this.fstItemShownIdx+this.take-1},t.maxFstIndexPossible=function(){return this.itemCount-this.take},e}();function fe(){var e=(0,s.useRef)(null),t=(0,a.Z)(te(e),1)[0],n=(0,s.useState)(0),r=n[0],o=n[1],u=new de(ie.q,r,t),c=u.shouldRenderLRButtons();return(0,i.jsxs)("section",{className:ae().outer,ref:e,children:[c&&(0,i.jsx)(he,{disabled:r<1,onClick:function(){return o(u.prevFstItemIndex())}}),(0,i.jsx)("div",{className:ae().carousel,children:ie.q.map((function(e,t){return(0,i.jsx)(ce.J,{employee:e,hide:u.shouldHideItem(t)},e.key)}))}),c&&(0,i.jsx)(ve,{disabled:!u.isShowNextPossible(),onClick:function(){return o(u.nextFstItemIndex())}})]})}function he(e){var t=e.disabled,n=e.onClick;return(0,i.jsx)(me,{disabled:t,onClick:n,isRight:!1})}function ve(e){var t=e.disabled,n=e.onClick;return(0,i.jsx)(me,{disabled:t,onClick:n,isRight:!0})}function me(e){var t=e.disabled,n=e.onClick,r=e.isRight;return(0,i.jsx)("div",{className:ae()["lr-arrow-container"],children:(0,i.jsx)("button",{"aria-label":r?"Go to next carousel image":"Go to previous carousel image","aria-disabled":t,className:re()(ae()["lr-arrow"],(0,o.Z)({},ae().disabled,t)),disabled:t,onClick:n,children:r?(0,i.jsx)(ue.Right,{size:30}):(0,i.jsx)(ue.Left,{size:30})})})}var pe=n(7481),ge=n(6042),xe=n(536),be=n.n(xe);function je(){try{return{windowWidth:window.innerWidth,windowHeight:window.innerHeight}}catch(e){}return{windowWidth:300,windowHeight:300}}var we=n(2080),ke=n(977),ye=n(6427),ze=n(8506);function Se(e){var t=e.newsArticles,n=function(){var e=(0,s.useState)(je()),t=e[0],n=e[1];return(0,s.useEffect)((function(){var e=function(){n(je())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}().windowWidth,r=(0,s.useState)(0),o=r[0],a=r[1];return(0,s.useEffect)((function(){var e=(n-200)/400;e=le(0,3,e),a(e)}),[n]),t=t.slice(0,o),(0,i.jsxs)("section",{className:"jsx-25e1241c6d7f3f3e root",children:[(0,i.jsx)(be(),{id:"25e1241c6d7f3f3e",children:".root.jsx-25e1241c6d7f3f3e>div.jsx-25e1241c6d7f3f3e{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.root.jsx-25e1241c6d7f3f3e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:3rem;margin-top:3rem;margin-bottom:5rem}"}),(0,i.jsxs)("div",{className:"jsx-25e1241c6d7f3f3e",children:[(0,i.jsx)(Ee,{children:"Stru\u010dnost."}),(0,i.jsx)(Ee,{isRed:!0,children:"Efikasnost."}),(0,i.jsx)(Ee,{children:"Pouzdanost."})]}),t.map((function(e){return(0,i.jsx)(_e,{article:e},e.id)}))]})}function Ee(e){var t=e.isRed,n=e.children;return(0,i.jsx)("h1",{style:(0,ge.Z)({fontSize:"2.5rem",marginTop:0},t&&{color:ke.Q.red1}),children:n})}function _e(e){var t=e.article,n=ye.t.getArticlePreview(t),r=n.title,o=n.body;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{style:{marginTop:0},children:r}),(0,i.jsx)(ze.U,{children:o}),(0,i.jsx)(we.ReadMoreLink,{article:t})]})}var Te=n(2337),Be=n(18),Pe=n(2046),Ie=n(4037),Ne=n.n(Ie),Re=!0,Ce=function(e){var t=e.newsArticles;return(0,i.jsxs)(Pe.Q,{title:"",children:[(0,i.jsx)(Se,{newsArticles:t}),(0,i.jsxs)("section",{id:"oblasti-rada",style:{width:"100%",marginBottom:"3rem"},children:[(0,i.jsx)("h2",{className:"heading-underlined",children:"Oblasti Rada"}),(0,i.jsx)("p",{children:"Od 1998. pru\u017eamo podr\u0161ku internacionalnim i doma\u0107im klijentima iz razli\u010ditih privrednih oblasti u osnivanju, izgradnji i razvoju njihovih investicija u Srbiji. Negovanjem individualnog pristupa, s klijentom gradimo odnos uzajamnog poverenja i saradnje usmerene na rezultate. Va\u017eno nam je da razumemo poslovnu filozofiju, ciljeve i interese klijenta kako bismo mu pru\u017eili personalizovanu pravnu uslugu koja odgovara njegovim potrebama. Znamo da su stru\u010dnost, fleksibilnost i kreativnost nu\u017eni za prevazila\u017eenje izazova u dinami\u010dnom poslovnom okru\u017eenju."}),(0,i.jsx)("p",{children:"Zbog toga nam je stalo da klijentu pru\u017eimo profesionalne, fokusirane, pragmati\u010dne i pouzdane pravne usluge i savete koji \u0107e mu pomo\u0107i da se spremno i odlu\u010dno nosi sa poslovnim izazovima u kompleksnom privrednom ambijentu."}),(0,i.jsx)("p",{children:"Reputaciju pouzdanog, stru\u010dnog i uspe\u0161nog pravnog savetnika stekli smo znanjem, iskustvom, savesno\u0161\u0107u i visokim standardima. Verujemo da se na\u0161 uspeh ogleda u rezultatima na\u0161ih klijenata."})]}),(0,i.jsx)(Be.s,{}),(0,i.jsxs)("section",{id:"nas-tim",children:[(0,i.jsx)("h2",{className:"heading-underlined",children:"Na\u0161 Tim"}),(0,i.jsx)(fe,{})]}),(0,i.jsxs)("section",{id:"kontakt",children:[(0,i.jsx)("h2",{className:"heading-underlined",children:"Kontakt"}),(0,i.jsxs)("div",{className:Ne().contact,children:[(0,i.jsx)(pe.E,{}),(0,i.jsx)(Te.b,{})]})]})]})}},2080:function(e,t,n){"use strict";n.r(t),n.d(t,{ReadMoreLink:function(){return b},__N_SSG:function(){return x},default:function(){return w}});var r,i=n(5893),o=n(6242),a=n(2023),s=n(4267),u=n(8506),c=n(6730),l=n(2046),d=n(1664),f=n.n(d),h=n(7294),v=n(6427),m=n(4811),p=new Map(m.G.map((function(e){return[e.id,e]})));!function(e){var t=function(e){if(!e)throw Error();var t=p.get(e);if(!t)throw Error();return t};e.findWorkDomainById=function(e){return e?t(e):null},e.getShortTitle=function(e){return e.shortTitle||e.title}}(r||(r={}));function g(e){var t=e.article,n=v.t.getArticlePreview(t),c=n.title,l=n.body,d=r.findWorkDomainById(t.domain);return(0,i.jsxs)(o.Z,{elevation:2,style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{children:[!!d&&(0,i.jsx)(j,{wd:d}),(0,i.jsx)("h3",{children:c}),(0,i.jsx)(u.U,{children:l})]})}),(0,i.jsx)(a.Z,{style:{marginTop:"auto",padding:"0 1rem 1rem 1rem"},children:(0,i.jsx)(b,{article:t})})]})}var x=!0;function b(e){var t=e.article;return(0,i.jsx)(f(),{href:"/novosti/".concat(t.id),children:(0,i.jsx)("a",{children:"\u010citaj dalje..."})})}function j(e){var t=e.wd;return(0,i.jsx)("p",{style:{textAlign:"initial",margin:0,color:"grey"},className:"article-work-domain",children:r.getShortTitle(t)},t.title)}var w=function(e){var t=e.newsArticles,n=(0,h.useState)(2),r=n[0],o=n[1],a=t.length<=3*r;return(0,i.jsxs)(l.Q,{title:"Novosti",children:[(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(330px, 1fr))",gap:"2rem"},children:t.slice(0,3*r).map((function(e,t){return(0,i.jsx)(g,{article:e},"article ".concat(e.id))}))}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"2rem"},children:(0,i.jsx)(c.W,{disabled:a,onClick:function(){return!a&&o(r+2)},children:a?"Nema vi\u0161e novosti":"U\u010ditaj jo\u0161 novosti"})})]})}},6839:function(e,t,n){"use strict";var r;n.d(t,{X:function(){return r}}),function(e){e.getPageHref=function(e){var t=e.pagePath;return t?"/nas-tim/".concat(t):"#"},e.getNameSurname=function(e){var t=e.name,n=e.surname;return"".concat(t," ").concat(n)},e.getLongTitle=function(e){return e.longTitle||e.title}}(r||(r={}))},6427:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});n(9177);var r,i=n(1864),o=n.n(i);!function(e){e.removeFootnotes=function(e){return e.replaceAll(/\[\^[^\]]*]/g,"")}}(r||(r={}));var a,s=n(4155);!function(e){var t=function(e){return""===e.trim()},n=function(){return o().join(s.cwd(),"public","news-articles")},i=function(e){var t=a(e),n=t.title,i=t.body;return i=c(i,150)+"...",{title:n,body:i=r.removeFootnotes(i)}},a=function(e){var t=e.split("\n\n").map((function(e){return e.trim()})).filter(Boolean);if(t.length<1)throw Error();return{title:u(t[0]),body:t.slice(1).join("\n\n")}},u=function(e){e=e.trimStart();var t=function(){for(var t=0;"#"===e[t];)t++;return t}();return e.slice(t).trim()},c=function(e,n){if(e.length<=n)return e;var r=function(){for(var r=e.slice(0,n),i=n-1;i>0;i--){var o=r[i];if(t(o))return i}throw Error()}();return e.slice(0,r)};e.getArticlePreview=function(e){return i(e.md)},e.isWhitespace=t,e.getNewsArticlesDirPath=n,e.getFullFsMdPathFromId=function(e){return o().join(n(),e+".md")}}(a||(a={}))},8238:function(e){e.exports={outer:"carousel_outer__qrifu",carousel:"carousel_carousel__N6P5W","lr-arrow-container":"carousel_lr-arrow-container__3W5gu","lr-arrow":"carousel_lr-arrow__UMb7f",disabled:"carousel_disabled__Jf0m7"}},8711:function(e){e.exports={"lawyer-info":"employee_lawyer-info__qe1JC",photo:"employee_photo__xMFhU","member-details":"employee_member-details__RTwsQ","member-details-row-1":"employee_member-details-row-1__REvIk"}},9139:function(e){e.exports={"work-area-card":"work-area-card_work-area-card__tJdd0","work-area-right-arrow":"work-area-card_work-area-right-arrow__HMrGD","work-area-bottom":"work-area-card_work-area-bottom__7X0uZ"}},3443:function(e){e.exports={"work-areas-grid":"work-area-grid_work-areas-grid__drJW6"}},4037:function(e){e.exports={contact:"kontakt_contact__nPn8t"}},603:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}},function(e){e.O(0,[228,445,937,13,260,617,866,609,876,662,107,910,313,46,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);