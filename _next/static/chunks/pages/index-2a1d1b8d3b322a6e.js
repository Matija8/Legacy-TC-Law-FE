(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7218:function(e,n,t){"use strict";t.d(n,{ZP:function(){return o}});var r=t(7294);const i=({color:e="currentColor",direction:n="left",distance:t="md",duration:i=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:s,lines:l=3,onToggle:c,render:u,rounded:d=!1,size:m=32,toggle:p,toggled:f})=>{const[h,b]=(0,r.useState)(!1),j=Math.max(12,Math.min(48,m)),x=Math.round((48-j)/2),g=j/12,v=Math.round(g),y=j/(l*(("lg"===t?.25:"sm"===t?.75:.5)+(3===l?1:1.25))),k=Math.round(y),w=v*l+k*(l-1),O=Math.round((48-w)/2),N=parseFloat((j/(3===l?"lg"===t?4.0425:"sm"===t?5.1625:4.6325:"lg"===t?6.7875:"sm"===t?8.4875:7.6675)-(g-v+(y-k))/(3===l?1:2)/(4/3)).toFixed(2)),z=Math.max(0,i),_={cursor:"pointer",height:"48px",position:"relative",transition:`${z}s ${a}`,userSelect:"none",width:"48px"},P={background:e,height:`${v}px`,left:`${x}px`,position:"absolute"};o&&(_.outline="none"),d&&(P.borderRadius="9em");const $=p||b,E=void 0!==f?f:h;return u({barHeight:v,barStyles:P,burgerStyles:_,easing:a,handler:()=>{$(!E),"function"===typeof c&&c(!E)},isLeft:"left"===n,isToggled:E,label:s,margin:k,move:N,time:z,topOffset:O,width:j})};function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=e=>r.createElement(i,a({},e,{render:e=>r.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:n=>"Enter"===n.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))}))},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9640)}])},9525:function(e,n,t){"use strict";t.d(n,{m:function(){return l}});var r=t(5893),i=t(5988),a=t(6534),o=t(8820),s=t(977);function l(e){var n=e.name,t=e.surname,l=e.title,c=e.memberPhotoId,u=e.email;return(0,r.jsxs)("article",{className:"jsx-d06554dbe509c898",children:[(0,r.jsx)(i.default,{id:"d06554dbe509c898",children:"article.jsx-d06554dbe509c898 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\nwidth:300px;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ngap:1em}\n.photo.jsx-d06554dbe509c898 {object-fit:contain}\n.member-details1.jsx-d06554dbe509c898 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ngap:0.5em}\np.jsx-d06554dbe509c898 {margin:0}"}),(0,r.jsx)(a.Y,{style:{cursor:"pointer"},className:"photo",src:"".concat("/TC-law","/team/").concat(c,".jpg"),alt:"".concat(n," ").concat(t," ").concat(l," photo")}),(0,r.jsxs)("div",{className:"jsx-d06554dbe509c898 member-details1",children:[(0,r.jsxs)("p",{style:{fontSize:16},className:"jsx-d06554dbe509c898",children:[n," ",t]}),u&&(0,r.jsx)("a",{href:"mailto:".concat(u),className:"jsx-d06554dbe509c898",children:(0,r.jsx)(o.b,{size:30,color:s.Q.red1})})]}),(0,r.jsx)("p",{style:{margin:-10},className:"jsx-d06554dbe509c898",children:l})]})}},18:function(e,n,t){"use strict";t.d(n,{s:function(){return l}});var r=t(5893),i=t(1664),a=t(9583);function o(e){var n=e.href,t=e.children;return(0,r.jsxs)("div",{className:"work-area-card",children:[t,(0,r.jsx)("div",{className:"work-area-bottom",children:(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("a",{className:"work-area-right-arrow",children:(0,r.jsx)(a.jS6,{size:30})})})})]})}var s=t(4811);function l(e){var n=e.slice,t=n?s.G.slice(0,n):s.G;return(0,r.jsx)("section",{className:"work-areas-grid",children:t.map((function(e){return(0,r.jsxs)(o,{href:"/oblasti-rada/".concat(e.id),children:[e.icon({size:35}),(0,r.jsx)("h3",{className:"pre-wrap",children:e.title}),(0,r.jsxs)("p",{children:[c(e.text),".."]})]},e.title)}))})}function c(e,n){var t=void 0===n?120:n,r=e.substring(0,t),i=(null!==r&&void 0!==r?r:"").split(" ");return i.pop(),i.join(" ")}},2942:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{g:function(){return i}});var i=[{name:"Jasna",surname:"Trifunovi\u0107",email:"jasna.trifunovic@tclaw.rs",title:"advokat",memberPhotoId:"Jasna"},{name:"Lana",surname:"Tamind\u017ei\u0107",title:"advokat",email:"lana.tamindzic@tclaw.rs",memberPhotoId:"Lana"},{name:"Katarina",surname:"Savi\u0107",title:"advokatski pripravnik",memberPhotoId:"Katarina"},{name:"Marko",surname:"Ili\u0107",title:"advokatski pripravnik",memberPhotoId:"Marko"}].map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){r(e,n,t[n])}))}return e}({},e,{key:"".concat(e.name,"-").concat(e.surname)})}))},9640:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(5893),i=t(7294),a=t(1475),o=t.n(a),s=t(2942),l=t(9525),c=t(3750),u={Left:c.pjk,Right:c.fmn,Down:c.IAR};function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(){var e=(0,i.useState)(0),n=e[0],t=e[1],a=s.g;return(0,r.jsxs)("div",{className:o().outer,children:[(0,r.jsx)("button",{className:"".concat(o()["lr-arrow"]," ").concat(n<1?"disabled":""),onClick:function(){t(Math.max(0,n-1))},children:(0,r.jsx)(u.Left,{size:30})}),(0,r.jsx)("div",{className:o().carousel,children:a.slice(n,n+3).map((function(e){return(0,i.createElement)(l.m,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({},e,{key:e.key}))}))}),(0,r.jsx)("button",{className:"".concat(o()["lr-arrow"]," ").concat(n>=a.length-3?"disabled":""),onClick:function(){t(Math.min(a.length-3,n+1))},children:(0,r.jsx)(u.Right,{size:30})})]})}function p(){return(0,r.jsxs)("form",{style:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)("label",{htmlFor:"name-surname",children:"Ime i prezime"}),(0,r.jsx)("input",{type:"text",id:"name-surname",name:"name-surname"}),(0,r.jsx)("label",{htmlFor:"email",children:"E-mail"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email"}),(0,r.jsx)("label",{htmlFor:"msg",children:"Poruka"}),(0,r.jsx)("input",{type:"text",id:"msg",name:"msg"})]})}var f=t(6673),h=t(1952),b=t(6425),j=t(18),x=t(6440),g=t.n(x),v=function(){return(0,r.jsxs)("div",{className:g().container,children:[(0,r.jsx)("style",{children:".contact {\n        display: grid;\n        grid-template-columns: 50fr 60fr;\n        gap: 2rem\n      }"}),(0,r.jsx)(b.x,{title:"Home page"}),(0,r.jsx)(h.h,{}),(0,r.jsxs)("main",{className:g().main,children:[(0,r.jsxs)("section",{id:"oblasti-rada",style:{width:"100%",marginBottom:"3rem"},children:[(0,r.jsx)("h2",{className:"heading-underlined",children:"Oblasti Rada"}),(0,r.jsx)("p",{children:"Od 1998. pru\u017eamo podr\u0161ku internacionalnim i doma\u0107im klijentima iz razli\u010ditih privrednih oblasti u osnivanju, izgradnji i razvoju njihovih investicija u Srbiji. Negovanjem individualnog pristupa, s klijentom gradimo odnos uzajamnog poverenja i saradnje usmerene na rezultate. Va\u017eno nam je da razumemo poslovnu filozofiju, ciljeve i interese klijenta kako bismo mu pru\u017eili personalizovanu pravnu uslugu koja odgovara njegovim potrebama. Znamo da su stru\u010dnost, fleksibilnost i kreativnost nu\u017eni za prevazila\u017eenje izazova u dinami\u010dnom poslovnom okru\u017eenju."}),(0,r.jsx)("p",{children:"Zbog toga nam je stalo da klijentu pru\u017eimo profesionalne, fokusirane, pragmati\u010dne i pouzdane pravne usluge i savete koji \u0107e mu pomo\u0107i da se spremno i odlu\u010dno nosi sa poslovnim izazovima u kompleksnom privrednom ambijentu."}),(0,r.jsx)("p",{children:"Reputaciju pouzdanog, stru\u010dnog i uspe\u0161nog pravnog savetnika stekli smo znanjem, iskustvom, savesno\u0161\u0107u i visokim standardima. Verujemo da se na\u0161 uspeh ogleda u rezultatima na\u0161ih klijenata."})]}),(0,r.jsx)(j.s,{}),(0,r.jsx)("section",{id:"novosti",children:(0,r.jsx)("h2",{className:"heading-underlined",children:"Novosti"})}),(0,r.jsxs)("section",{id:"nas-tim",children:[(0,r.jsx)("h2",{className:"heading-underlined",children:"Na\u0161 Tim"}),(0,r.jsx)(m,{})]}),(0,r.jsxs)("section",{id:"kontakt",children:[(0,r.jsx)("h2",{className:"heading-underlined",children:"Kontakt"}),(0,r.jsxs)("div",{className:"contact",children:[(0,r.jsx)(p,{}),(0,r.jsx)("div",{style:{border:"1px solid black"},children:"TODO MAP"})]})]})]}),(0,r.jsx)(f.$,{})]})}},1475:function(e){e.exports={outer:"carousel_outer__qrifu",carousel:"carousel_carousel__N6P5W","lr-arrow":"carousel_lr-arrow__UMb7f",disabled:"carousel_disabled__Jf0m7"}},9008:function(e,n,t){e.exports=t(5443)},1163:function(e,n,t){e.exports=t(387)},8357:function(e,n,t){"use strict";t.d(n,{w_:function(){return c}});var r=t(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t};function l(e){return e&&e.map((function(e,n){return r.createElement(e.tag,o({key:n},e.attr),l(e.child))}))}function c(e){return function(n){return r.createElement(u,o({attr:o({},e.attr)},n),l(e.child))}}function u(e){var n=function(n){var t,i=e.attr,a=e.size,l=e.title,c=s(e,["attr","size","title"]),u=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,c,{className:t,style:o(o({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return n(e)})):n(i)}}},function(e){e.O(0,[13,609,445,698,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);