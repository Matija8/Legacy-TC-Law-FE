(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{2046:function(a,e,i){"use strict";i.d(e,{Q:function(){return ra}});var n=i(5893),o=i(536),r=i.n(o),t=i(1664),s=i.n(t),u=i(7294),l=768,d=i(977),m=i(6730),c="cookie_notice_accepted";function p(a){var e=a.alwaysShow,i=void 0!==e&&e,o=(0,u.useState)(!0),t=o[0],p=o[1];return(0,u.useEffect)((function(){p(Boolean(localStorage.getItem(c)))}),[]),t&&!i?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("footer",{className:r().dynamic([["f14340f71cadbbdf",[d.Q.red1,l]]]),children:[(0,n.jsx)(r(),{id:"f14340f71cadbbdf",dynamic:[d.Q.red1,l],children:"footer.__jsx-style-dynamic-selector{position:fixed;inset:auto 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;opacity:.95;background-color:grey;padding:.5rem 2rem .5rem;gap:.5rem}p.__jsx-style-dynamic-selector{color:white;text-align:center;margin:0}button.__jsx-style-dynamic-selector{color:white;background-color:".concat(d.Q.red1,";border:none}@media(min-width:").concat(l,"px){footer.__jsx-style-dynamic-selector{padding:.5rem 5rem .5rem}}")}),(0,n.jsxs)("p",{className:r().dynamic([["f14340f71cadbbdf",[d.Q.red1,l]]]),children:["Ovaj veb-sajt koristi kola\u010di\u0107e kako bi vam pru\u017eio bolje iskustvo pretra\u017eivanja, obezbedio funkcionalnost dru\u0161tvenih medija i radi analize saobra\u0107aja. Vi\u0161e o tome kako koristimo kola\u010di\u0107e, i kako mo\u017eete ograni\u010diti njihovo kori\u0161\u0107enje i promeniti pode\u0161avanja pro\u010ditajte"," ",(0,n.jsx)(s(),{href:"/politika-privatnosti",children:(0,n.jsx)("a",{className:r().dynamic([["f14340f71cadbbdf",[d.Q.red1,l]]]),children:"ovde"})})]}),(0,n.jsx)(m.W,{hoverEffects:!1,translate:!1,onClick:function(){localStorage.setItem(c,"true"),p(!0)},children:"OK"})]})}var v=i(3812),j=i.n(v),k=i(4749),h=i(3750),b=i(151),g=i(8820);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{id:"33b38d6819353ab2",children:".icon-flex-row.jsx-33b38d6819353ab2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:.5em}"}),(0,n.jsx)("h4",{className:"jsx-33b38d6819353ab2",children:"Advokatska kancelarija"}),(0,n.jsx)(b.E$,{}),(0,n.jsxs)("p",{className:"jsx-33b38d6819353ab2",children:["E-mail: ",(0,n.jsx)("a",{href:k.lp.email,className:"jsx-33b38d6819353ab2",children:k.re.officeEmail})]}),(0,n.jsxs)("div",{className:"jsx-33b38d6819353ab2 icon-flex-row",children:[(0,n.jsx)("a",{href:k.lp.linkedin,"aria-label":"linkedin",className:"jsx-33b38d6819353ab2",children:(0,n.jsx)(h.NQh,{size:28,color:d.Q.red1})}),(0,n.jsx)("a",{href:k.lp.email,"aria-label":"email",className:"jsx-33b38d6819353ab2",children:(0,n.jsx)(g.b,{size:28})})]})]})}var x=i(6534),z=i(7568),y=i(4051),_=i.n(y),w=i(7764),N=i(1189),P=i(8143),S=i(2580),E=i(4302),C=i(9196),T=i(1121),A={nameSurname:"",email:"",readPrivacy:!1},I="standard";function Q(a){return(0,n.jsx)(S.J9,{initialValues:A,validate:function(a){var e={};return a.nameSurname||(e.nameSurname=k.iK),a.email?k.s5.email.test(a.email)||(e.email="*Nevalidan e-mail"):e.email=k.iK,a.readPrivacy||(e.readPrivacy="Morate biti saglasni sa politikom privatnosti da bi ste se prijavili na novosti"),e},onSubmit:E.V.FormikOnSubmitWrapper(function(){var a=(0,z.Z)(_().mark((function a(e,i){var n;return _().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=i.resetForm,a.next=3,(0,C.K)("mail/newsletterForm",{nameSurname:e.nameSurname,email:e.email,useTestMail:k.cs});case 3:n();case 4:case"end":return a.stop()}}),a)})));return function(e,i){return a.apply(this,arguments)}}(),a),children:function(a){var e=a.errors,i=a.handleBlur,o=a.handleChange,r=a.handleSubmit,t=a.isSubmitting,s=a.touched,u=a.values;return(0,n.jsxs)("form",{onSubmit:r,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,n.jsxs)("div",{style:{width:"100%"},children:[(0,n.jsx)(w.Z,{style:{width:"100%"},label:"Ime i prezime",name:"nameSurname",variant:I,value:u.nameSurname,error:Boolean(s.nameSurname&&e.nameSurname),helperText:e.nameSurname||k.iK,onChange:o,onBlur:i}),(0,n.jsx)(w.Z,{style:{width:"100%"},label:"E-mail",name:"email",variant:I,type:"email",value:u.email,error:Boolean(s.email&&e.email),helperText:s.email&&e.email||k.iK,onChange:o,onBlur:i})]}),(0,n.jsx)(N.k,{value:u.readPrivacy,onChange:o}),(0,n.jsx)(T.o,{isSubmitting:t,text:"Prijavite se",disabled:!E.V.isSubmitBtnEnabled(s,e)})]})}})}function Z(){return(0,n.jsxs)("footer",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]])+" "+(j().footer||""),children:[(0,n.jsx)(r(),{id:"6189784e9ec98e0d",dynamic:[d.Q.red1,l],children:"p.__jsx-style-dynamic-selector{color:rgb(51,51,51)}.banner-img.__jsx-style-dynamic-selector{height:2.5rem}.footer-bottom-3.__jsx-style-dynamic-selector{display:grid;place-items:start;grid-template-columns:repeat(1,1fr)}.footer-mid.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:1em;margin-top:1em}a.__jsx-style-dynamic-selector{color:".concat(d.Q.red1,"}.footer-left.__jsx-style-dynamic-selector{width:100%}@media(min-width:").concat(l,"px){.footer-bottom-3.__jsx-style-dynamic-selector{grid-template-columns:repeat(3,1fr);place-items:start center}}")}),(0,n.jsx)(x.Y,{className:"banner-img",src:"".concat(k.rg.BASE_PATH,"/banner.png"),alt:"TC-law company banner",height:"50px"}),(0,n.jsx)("hr",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]])+" red-horizontal-ruler"}),(0,n.jsxs)("section",{style:{marginBottom:"1rem"},className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]])+" footer-bottom-3",children:[(0,n.jsx)("section",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]])+" footer-left",children:(0,n.jsx)(f,{})}),(0,n.jsxs)("section",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]])+" footer-mid",children:[(0,n.jsx)(s(),{href:"/oblasti-rada",children:(0,n.jsx)("a",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Oblasti rada"})}),(0,n.jsx)(s(),{href:"/novosti",children:(0,n.jsx)("a",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Novosti"})}),(0,n.jsx)(s(),{href:"/nas-tim",children:(0,n.jsx)("a",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Na\u0161 tim"})}),(0,n.jsx)(s(),{href:"/karijera",children:(0,n.jsx)("a",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Karijera"})}),(0,n.jsx)(s(),{href:"/kontakt",children:(0,n.jsx)("a",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Kontakt"})})]}),(0,n.jsxs)("section",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]])+" footer-right",children:[(0,n.jsx)("h4",{style:{margin:"1rem 0 0.3rem"},className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Prijavite se na novosti"}),(0,n.jsx)(Q,{})]})]}),(0,n.jsxs)("section",{style:{alignItems:"baseline"},className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]])+" footer-bottom-3",children:[(0,n.jsxs)("div",{style:{display:"flex",gap:"3px"},className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:[(0,n.jsx)(s(),{href:"/politika-privatnosti",children:(0,n.jsx)("a",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Politika privatnosti"})}),(0,n.jsx)("span",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"|"}),(0,n.jsx)(s(),{href:"/uslovi-koriscenja",children:(0,n.jsx)("a",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"Uslovi kori\u0161\u0107enja"})})]}),(0,n.jsx)("p",{className:r().dynamic([["6189784e9ec98e0d",[d.Q.red1,l]]]),children:"@Trifunovic&Co"})]})]})}var M=i(4924),B=i(4184),R=i.n(B),K=i(4811),H=i(7218),U=i(1163),L=i(2603),O=i.n(L),W="10px";function V(){var a,e,i=(0,u.useState)(!1),o=i[0],r=i[1],t=(0,u.useRef)(null);(0,u.useEffect)((function(){var a=document.getElementsByTagName("BODY")[0];a&&a.classList[o?"add":"remove"]("mobile-nav-open")}));var l,d=null!==(e=null===(a=t.current)||void 0===a?void 0:a.clientHeight)&&void 0!==e?e:150,c=function(){return r(!1)};return(0,n.jsxs)("header",{ref:t,className:O().header,children:[(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)(x.Y,{src:"".concat(k.rg.BASE_PATH,"/logo.png"),style:{maxHeight:"95px",height:"10vw",minHeight:"60px",paddingRight:"3rem"},alt:"Company logo"})})}),(0,n.jsxs)("div",{className:O()["header-main"],children:[(0,n.jsxs)("div",{className:O()["header-top"],children:[(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)(x.Y,{src:"".concat(k.rg.BASE_PATH,"/banner.png"),height:"50px",alt:"Company banner"})})}),(0,n.jsx)(b.E$,{className:"".concat(O()["hide-narrow-desktop"]," ").concat(O()["header-top-address"])})]}),(0,n.jsx)("hr",{className:"red-horizontal-ruler ".concat(O()["hide-mobile"])}),(0,n.jsxs)("div",{className:O()["header-bottom"],children:[(0,n.jsxs)("nav",{className:R()((l={},(0,M.Z)(l,O()["header-nav"],!0),(0,M.Z)(l,O()["header-nav-closed"],!o),l)),style:{top:d},children:[(0,n.jsx)(D,{closeMainMenu:c}),(0,n.jsx)(Y,{closeMenu:c,href:"/novosti",className:"UPPER",children:"Novosti"}),(0,n.jsx)(Y,{closeMenu:c,href:"/nas-tim",className:"UPPER",children:"Na\u0161 tim"}),(0,n.jsx)(Y,{closeMenu:c,href:"/karijera",className:"UPPER",children:"Karijera"}),(0,n.jsx)(Y,{closeMenu:c,href:"/kontakt",className:"UPPER",children:"Kontakt"})]}),(0,n.jsxs)("div",{className:O()["header-bottom-right"],children:[(0,n.jsx)("div",{className:O()["hide-desktop"],children:(0,n.jsx)(H.ZP,{label:"menu",toggled:o,onToggle:function(){r(!o)}})}),(0,n.jsx)("div",{className:O()["hide-narrow-desktop"],children:(0,n.jsx)(m.W,{children:(0,n.jsx)("a",{href:k.lp.email,style:{color:"white"},children:k.re.officeEmail})})})]})]})]})]})}function D(a){var e=a.closeMainMenu,i=(0,u.useState)(!1),o=i[0],r=i[1];return(0,n.jsxs)("div",{className:O()["submenu-holding-li"],children:[(0,n.jsx)(Y,{closeMenu:e,href:"/oblasti-rada",toggleSubList:function(){return r(!o)},className:"UPPER",children:"Oblasti rada"}),(0,n.jsx)("ul",{className:R()(O().submenu,(0,M.Z)({},O()["submenu-sub-list-closed"],!o)),children:K.G.map((function(a){var i=a.title,o=a.id;return(0,n.jsx)(Y,{className:"normal-text-size",closeMenu:e,href:"/oblasti-rada/".concat(o),children:(0,n.jsxs)("span",{className:"pre-wrap",children:[i," "]})},i)}))})]})}function Y(a){var e=a.href,i=a.children,o=a.closeMenu,t=a.toggleSubList,u=a.className,m=void 0===u?"":u,c=(0,U.useRouter)().asPath===e;return(0,n.jsxs)("li",{className:r().dynamic([["bbf1c6cd2d22f54d",[W,c?"color: ".concat(d.Q.red1):"",l]]])+" "+(m||""),children:[(0,n.jsx)(r(),{id:"bbf1c6cd2d22f54d",dynamic:[W,c?"color: ".concat(d.Q.red1):"",l],children:"li.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0}li.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{width:-webkit-max-content;width:-moz-max-content;width:max-content}.navItem.__jsx-style-dynamic-selector{color:rgb(50,50,50);padding:".concat(W,";display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;").concat(c?"color: ".concat(d.Q.red1):"",";}.UPPER.__jsx-style-dynamic-selector{text-transform:uppercase}.navItem.__jsx-style-dynamic-selector:hover{color:black;background:rgba(50,50,50,.04);-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}.normal-text-size.__jsx-style-dynamic-selector{font-size:1rem}@media(min-width:").concat(l,"px){.navItem.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}}")}),(0,n.jsx)(s(),{href:e,children:(0,n.jsxs)("a",{onClick:function(){c&&o()},className:r().dynamic([["bbf1c6cd2d22f54d",[W,c?"color: ".concat(d.Q.red1):"",l]]])+" navItem",children:[i,t&&(0,n.jsx)("div",{onClick:function(a){a.stopPropagation(),a.preventDefault(),t()},className:r().dynamic([["bbf1c6cd2d22f54d",[W,c?"color: ".concat(d.Q.red1):"",l]]])+" "+"".concat(O()["submenu-toggle"]," ").concat(O()["hide-desktop"]),children:(0,n.jsx)(h.IAR,{size:15})})]})})]})}var F=i(9008),G=i.n(F);function q(a){var e=a.title;return(0,n.jsxs)(G(),{children:[(0,n.jsx)("title",{children:e?"".concat(e," - TCL"):"TCL"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(k.rg.BASE_PATH,"/favicon.png")}),(0,n.jsx)("meta",{name:"description",content:"Members of TC law team have been assisting international and national clients from various industries to establish, build and operate their business in Serbia."})]})}var J=i(1673),$=i.n(J),X=i(6042),aa=i(3946),ea=i(6798),ia=i(1649);function na(a){var e=a.onClose;return(0,n.jsx)(aa.Z,{size:"small","aria-label":"close",color:"inherit",onClick:e,children:(0,n.jsx)(ia.QAE,{})})}function oa(a){var e=a.onClose;return(0,n.jsx)(ea.Z,(0,X.Z)({autoHideDuration:5e3,action:(0,n.jsx)(na,{onClose:e})},a))}function ra(a){var e=a.children,i=a.title,o=(0,u.useState)(""),r=o[0],t=o[1];return(0,n.jsxs)("div",{className:$()["root-container"],children:[(0,n.jsx)(q,{title:i}),(0,n.jsx)(V,{}),(0,n.jsxs)(P.Tq,{value:t,children:[(0,n.jsx)("main",{className:$().main,children:e}),(0,n.jsx)(Z,{})]}),(0,n.jsx)(oa,{open:!!r,message:r,onClose:function(){return t("")}}),(0,n.jsx)(p,{},"Cookies banner")]})}},151:function(a,e,i){"use strict";i.d(e,{E$:function(){return t},qw:function(){return o}});var n=i(5893);function o(a){var e=a.style,i=void 0===e?{color:"grey"}:e;return(0,n.jsx)("a",{style:i,href:"tel:+381113345544",children:"(+381 11) 334-55-44"})}function r(a){var e=a.pStyle,i=void 0===e?{color:"grey"}:e;return(0,n.jsxs)("p",{style:i,children:["Tel/Fax: ",(0,n.jsx)(o,{}),"; 334-52-52; 334-55-44"]})}function t(a){var e=a.className;return(0,n.jsx)("address",{className:null!==e&&void 0!==e?e:"",style:{fontStyle:"initial"},children:(0,n.jsx)(s,{})})}function s(a){var e=a.aStyle,i=void 0===e?{color:"grey"}:e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{style:i,href:"https://www.google.com/maps/place/Trifunovic%26Co+Law+Office/@44.8098279,20.4600349,15z/data=!4m5!3m4!1s0x475a7aa8ab86039f:0x184d5a50bfafe45d!8m2!3d44.8086604!4d20.4636218",children:"Kneza Milo\u0161a 10, 11000 Beograd, Srbija"}),(0,n.jsx)(r,{})]})}},1189:function(a,e,i){"use strict";i.d(e,{k:function(){return u}});var n=i(5893),o=i(5071),r=i(4750),t=i(1664),s=i.n(t);function u(a){var e=a.value,i=a.onChange;return(0,n.jsx)(r.Z,{control:(0,n.jsx)(o.Z,{value:e,onChange:i,required:!0}),name:"readPrivacy",label:(0,n.jsxs)("p",{style:{margin:0},children:["Potvr\u0111ujem da sam pro\u010ditao i da sam saglasan sa"," ",(0,n.jsx)(s(),{href:"/politika-privatnosti",children:(0,n.jsx)("a",{style:l,children:"Politikom privatnosti"})})]})})}var l={}},6534:function(a,e,i){"use strict";i.d(e,{Y:function(){return t}});var n=i(6042),o=i(9396),r=i(5893),t=function(a){return(0,r.jsx)("img",(0,o.Z)((0,n.Z)({},a),{alt:a.alt}))}},8820:function(a,e,i){"use strict";i.d(e,{b:function(){return t}});var n=i(5893),o=i(3990),r=i(977);function t(a){var e=a.size,i=a.color;return(0,n.jsx)(o.w4O,{size:e,color:null!==i&&void 0!==i?i:r.Q.red1})}},6730:function(a,e,i){"use strict";i.d(e,{W:function(){return l}});var n=i(4924),o=i(5893),r=i(4184),t=i.n(r),s=i(8976),u=i.n(s);function l(a){var e,i=a.disabled,r=void 0!==i&&i,s=a.className,l=void 0===s?"":s,d=a.children,m=a.translate,c=void 0===m||m,p=a.hoverEffects,v=void 0===p||p,j=a.onClick,k=a.style,h=a.type,b=void 0===h?"button":h;return(0,o.jsx)("button",{className:t()(u()["round-btn"],l,(e={},(0,n.Z)(e,u()["round-btn-disabled"],r),(0,n.Z)(e,u()["animated-btn"],!r&&c),(0,n.Z)(e,u()["hover-opacity-btn"],!r&&v),e)),disabled:r,onClick:function(){return!r&&(null===j||void 0===j?void 0:j())},style:k,type:b,children:d})}},1121:function(a,e,i){"use strict";i.d(e,{o:function(){return t}});var n=i(5893),o=i(8456),r=i(6730);function t(a){var e=a.isSubmitting,i=a.disabled,t=void 0!==i&&i,s=a.text,u=void 0===s?"Po\u0161aljite":s;return(0,n.jsx)(r.W,{type:"submit",disabled:t||e,style:{height:40},children:e?(0,n.jsx)(o.Z,{size:20,style:{color:"white"}}):u})}},8143:function(a,e,i){"use strict";i.d(e,{Ds:function(){return t},Tq:function(){return r}});var n=i(7294),o=(0,n.createContext)((function(a){console.error("WARNING: Using default SnackbarContext!")})),r=o.Provider;function t(){return(0,n.useContext)(o)}},4749:function(a,e,i){"use strict";i.d(e,{BZ:function(){return c},al:function(){return l},cs:function(){return m},iK:function(){return u},lp:function(){return r},pY:function(){return p},re:function(){return d},rg:function(){return t},s5:function(){return s}});var n,o=i(4155),r={email:"mailto:office@tclaw.rs",linkedin:"https://www.linkedin.com/company/tc-law",maps:"https://maps.google.com/maps?q=Kneza%20Milo%C5%A1a%2010&t=m&z=14&output=embed&iwloc=near"},t={BASE_PATH:"/TC-law",NODE_ENV:"production",RECAPTCHA_CLIENT_SITE_KEY:o.env.RECAPTCHA_CLIENT_SITE_KEY,API_BASE:null!==(n="https://matija-subd-1.dev.tclaw.rs/api/")?n:""};if(!t.API_BASE)throw Error("Invalid API_BASE: ".concat(t.API_BASE));var s={email:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i},u="*neophodno polje",l="*neophodno je \u0161tiklirati ovu ku\u0107icu",d={officeEmail:"office@tclaw.rs"},m="development"===t.NODE_ENV?"true":"",c={email:{maxLength:320},motivationalLetter:{maxLength:4e3}},p=function(){var a="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";return{clientSiteTestKey:a,clientSiteKey:t.RECAPTCHA_CLIENT_SITE_KEY||a}}()},4811:function(a,e,i){"use strict";i.d(e,{G:function(){return c}});var n=i(6042),o=i(9396),r=i(3750),t=i(8193),s=i(9352),u=i(5434),l=i(9583),d=i(155),m=i(4578),c=[{id:"Korporativno-pravo-M&A",title:"Korporativno pravo/M&A",text:"\n    Savetujemo klijente u pripremnoj fazi odlu\u010divanja o investiciji, sastavljamo i pripremamo potrebna dokumenta za osnivanje privrednih dru\u0161tava i ogranaka stranih privrednih dru\u0161tava, i pru\u017eamo usluge zastupanja u postupku njihove registracije i zapo\u010dinjanja poslovanja. Posebnu va\u017enost pridajemo uspostavljanju mehanizama upravljanja koji najbolje odgovaraju ekonomskom i poslovnom kontekstu u kojem posluju, i efikasnog odgovora na probleme izazvane organizacijskom strukturom poslovanja i promenom regulatornog okvira.\n\n    Pru\u017eamo podr\u0161ku klijentima u transakcijama vezanim za statusne promene privrednih dru\u0161tava, pravno dubinsko ispitivanje, pratimo ih u pregovorima i zaklju\u010denju ugovora, obezbe\u0111enju njihovih investicija i drugim poslovima u vezi sa njihovim poslovanjem. Poma\u017eemo u istra\u017eivanju alternativnih na\u010dina za odgovor na razli\u010dite poslovne izazove i probleme i izboru onog koji najbolje odgovara njihovom poslovanju.\n\n    Posebnu pa\u017enju posve\u0107ujemo vrednosti poslovnih informacija, podataka i tehnologija na\u0161ih klijenata, pru\u017eamo im savete i sastavljamo dokumenta za za\u0161titu podataka i poslovnih tajni na\u0161ih klijenata od nelojalne konkurencije.",icon:r.Za_},{id:"Privredno-pravo",title:"Privredno pravo",text:"\n    Imamo sveobuhvatno poznavanje me\u0111unarodnog i doma\u0107eg ugovornog prava, standarda ugovaranja i poslovnih uzansi u ve\u0107ini privrednih sektora. Pru\u017eamo savete na\u0161im klijentima, radimo analize i dajemo pravna mi\u0161ljenja, pratimo ih u pregovorima, sastavljamo ugovore, op\u0161te uslove poslovanja i drugu poslovnu dokumentaciju i brinemo o usagla\u0161enosti poslovanja klijenata sa doma\u0107im propisima.\n\n    Sastavljamo ugovore o proizvodnji i kupovini, me\u0111unarodnoj prodaji robe, ugovore o zajmu, uslugama, distribuciji, zastupanju, posredovanju, fran\u0161izi, zajedni\u010dkom ulaganju, prevozu i druge.\n\n    Pru\u017eamo savete klijentima u poslovanju u skladu sa carinskim propisima, propisima u oblastima deviznog poslovanja i platnih usluga.",icon:t.VSC},{id:"Gradjenje",title:"Gra\u0111enje",text:"\n    Pru\u017eamo podr\u0161ku investitorima u razvoju greenfield investicija i drugih vidova ulaganja u projekte izgradnje, savetovanjem u svim aspektima investiranja, uklju\u010duju\u0107i prethodno ispitivanje uslova investiranja, kupovinu, zoniranje, projektno finansiranje i izgradnju objekata. Imamo bogato iskustvo u pregovorima o uslovima investiranja na velikim gra\u0111evinskim projektima na lokalnom i nacionalnom nivou, kao i sa dr\u017eavnim slu\u017ebama i agencijama, bankama, gra\u0111evinskim preduze\u0107ima, izvo\u0111a\u010dima, prodavcima i kupcima.\n\n    Sastavljamo ugovore i druga dokumenta u vezi sa investicijama u oblasti gra\u0111enja, zakupom, finansiranjem, zoniranjem, izgradnjom i obezbe\u0111enjem investicija. Pru\u017eamo pomo\u0107 u postupcima pred nadle\u017enim organima radi dobijanja neophodnih dozvola i saglasnosti, kao i svu drugu pravnu pomo\u0107 u toku izgradnje objekata.\n\n    Imamo dugogodi\u0161nju saradnju sa vrhunskim stru\u010dnjacima iz oblasti urbanizma i prostornog planiranja.",icon:s.Wvb},{id:"Antimonopolsko-pravo-Pravo-konkurencije",title:"Antimonopolsko pravo\nPravo konkurencije",text:"\n    Savetujemo klijente u pitanjima konkurencije u vezi sa spajanjem, pripajanjem i zajedni\u010dkim ulaganjima i pru\u017eamo im asistenciju u pripremi i podno\u0161enju dokumentacije potrebne za dobijanje dozvole pred nadle\u017enim regulatornim telima za za\u0161titu konkurencije.\n\n    Prilikom zaklju\u010denja ugovora o kooperaciji i drugih komercijalnih poslova, pru\u017eamo savete klijentima sa aspekta va\u017ee\u0107ih pravila, antimonopolskih propisa i propisa o konkurenciji.\n\n    Zastupamo klijente u postupcima u vezi sa zloupotrebom dominantnog polo\u017eaja na tr\u017ei\u0161tu i antimonopolskim sporovima, i pru\u017eamo im podr\u0161ku uklju\u010duju\u0107i i razvoj odbrambenih strategija i ostvarivanje naknade \u0161tete.",icon:u.njj},{id:"Radno-pravo-Boravisna-i-radna-dozvola",title:"Radno pravo\nBoravi\u0161na i radna dozvola",text:"\n    Sastavljamo pravilnike, ugovore, re\u0161enja i druga akta iz oblasti radnih odnosa i pru\u017eamo pravnu podr\u0161ku klijentima u cilju organizovanja rada u skladu sa va\u017ee\u0107im propisima. Savetujemo klijente po svim pitanjima u vezi rada, prava i obaveza iz i van radnog odnosa, za\u0161tite i bezbednosti na radu, obavezama poslodavca u vezi sa radom i drugo.\n\n    Pru\u017eamo savete u vezi uspostavljanja pravila pona\u0161anja kod poslodavca i primene mera za spre\u010davanje diskriminacije i drugih nepo\u017eeljnih pojava i unapre\u0111enje radnog okru\u017eenja. Organizujemo edukativne treninge na teme prevencije i za\u0161tite od zlostavljanja na radu, bezbednosti na radu, obaveza i prava uzbunjiva\u010da u slu\u010daju unutra\u0161njeg uzbunjivanja.\n\n    Pru\u017eamo savete i podr\u0161ku pri upu\u0107ivanju zaposlenih na rad u inostranstvo (deta\u0161mani). Pru\u017eamo sveobuhvatnu podr\u0161ku stranim dr\u017eavljanima i internacionalnim kompanijama u ispunjavanju uslova za pokretanje i uspe\u0161no okon\u010danje postupaka dobijanja boravi\u0161ne dozvole i obezbe\u0111enje uslova za dobijanje radne dozvole.\n\n    Pru\u017eamo pravnu pomo\u0107 i u vezi sa ispunjenjem uslova za ulazak, kretanje i boravak stranaca, uklju\u010duju\u0107i i  zastupanje u postupcima dobijanja viza za kra\u0107i i privremeni boravak u Republici Srbiji.",icon:l.W95},{id:"Intelektualna-svojina-Industrija-zabave-IT",title:"Intelektualna svojina\nIndustrija zabave/IT",text:"\n    Pru\u017eamo usluge savetovanja i zastupanja me\u0111unarodnih i doma\u0107ih pravnih subjekata i fizi\u010dkih lica u stvarima vezanim za sticanje, za\u0161titu, kori\u0161\u0107enje i povrede prava intelektualne svojine (\u017eigovi, dizajn, patent, oznake geografskog porekla, topografije poluprovodni\u010dkih proizvoda i autorska prava).\n\n    Na\u0161e usluge obuhvataju sastavljanje \u0161irokog spektra ugovora iz oblasti intelektualne svojine (prenos, licenca, fran\u0161iza, zaloga, izdava\u0161tvo kao i druge vrste ugovora autorskog prava), prethodno ispitivanje uslova za registraciju i za\u0161titu, podno\u0161enje zahteva i sprovo\u0111enje postupka registracije, druge usluge zastupanja u postupcima pred upravnim organima i sudovima. Pru\u017eamo savete i zastupamo klijente u sudskim i upravnim postupcima za\u0161tite prava intelektualne svojine, uklju\u010duju\u0107i i primenu posebnih mera (oduzimanje predmeta povrede, privremene mere, itd.) u cilju za\u0161tite prava intelektualne svojine i ostvarenja naknade \u0161tete u najboljem interesu klijenta.\n\n    Savetujemo klijente i u domenu audio-vizuelnih tehnologija i medijskog prava (TV, film, muzika, izdava\u0161tvo, advertajzing, elektronski i \u0161tampani mediji, itd.) i poma\u017eemo im u realizaciji projekata u vezi sa produkcijom, izdava\u0161tvom, emitovanjem, distribucijom i ogla\u0161avanjem. Pru\u017eamo podr\u0161ku projektima u svim fazama, uklju\u010duju\u0107i korporativni aspekt, finansiranje, prava intelektualne svojine, publicitet, privatnost i ogla\u0161avanje.\n\n    Imamo vi\u0161egodi\u0161njeg iskustva u zastupanju razli\u010ditih u\u010desnika na medijskom i telekomunikacionom tr\u017ei\u0161tu, kao i sveobuhvatno znanje i bogatu praksu u ogla\u0161avanju, pripremi i organizaciji konkursa, sponzorstava, festivala, nagradnih igara, takmi\u010denja i promotivnih doga\u0111aja.",icon:u.h0r},{id:"Porezi-carine-i-devizno-poslovanje",title:"Porezi, carine i devizno poslovanje",text:"\n    Poresko savetovanje koje pru\u017eamo na\u0161im klijentima podrazumeva celokupan spektar usluga planiranja i konsaltinga. Na\u0161 tim uklju\u010duje i spoljne poreske savetnike specijalizovane za pru\u017eanje usluga u knjigovodstvenim, ra\u010dunovodstvenim i poreskim stvarima, koji su sara\u0111ivali sa nekim od najve\u0107ih revizorskih ku\u0107a ili su bili anga\u017eovani kao interni revizori za velike kompanije i dr\u017eavne institucije.\n\n    Na\u0161 cilj je da pru\u017eimo visokoprofesionalne poreskopravne usluge razli\u010ditim oblicima organizovanja, kao \u0161to su usluge u oblasti korporativnih finansija, bankarstva, finansijskih usluga i imovine od zna\u010daja za privredne subjekte, tako i usluge poreskog savetovanja organizacijama, ustanovama i udru\u017eenjima organizovanim na neprofitnoj osnovi sa ciljem ostvarivanja delatnosti od op\u0161teg interesa.\n\n    Pru\u017eamo savete klijentima u poslovanju u skladu sa carinskim propisima, propisima u oblastima deviznog poslovanja i platnih usluga.\n\n    U pronala\u017eenju pragmati\u010dnih i prikladnih re\u0161enja, negujemo poseban pristup svakom klijentu, u potpunosti uva\u017eavaju\u0107i specifi\u010dnosti slu\u010daja, njegov ekonomski interes i poslovni ugled.",icon:u.DIS},{id:"Zastita-podataka-o-licnosti",title:"Za\u0161tita podataka o li\u010dnosti",text:"\n    Poma\u017eemo klijentima da obradu podataka o li\u010dnosti usklade sa GDPR i pravilima koja su na snazi u Republici Srbiji. Pru\u017eamo savete u vezi prikupljanja i obrade li\u010dnih podataka, utvr\u0111ivanja vrste, svrhe i osnova za obradu podataka kao i obezbe\u0111ivanja adekvatnog nivoa za\u0161tite podataka i pru\u017eamo podr\u0161ku klijentima u savla\u0111ivanju drugih izazova koje obrada i imperativ za\u0161tite li\u010dnih podataka stavljaju pred njih.\n\n    Sastavljamo ugovor o obradi podataka, interna pravila za\u0161tite podataka o li\u010dnosti i druga dokumenta koja obezbe\u0111uju zakonitu i svrsishodnu obradu li\u010dnih podataka. Svesni smo da je odnos kompanija prema li\u010dnim podacima i privatnosti od klju\u010dne va\u017enosti za njihov ugled i zakonito poslovanje, pa je za\u0161tita privatnosti va\u017ean segment svih usluga koje pru\u017eamo kompanijama, bez obzira na primarnu oblast usluge.\n\n    Imamo dugogodi\u0161nju saradnju sa vrhunskim stru\u010dnjacima iz oblasti za\u0161tite podataka o li\u010dnosti i u saradnji sa njima organizujemo seminare i obuke iz ove oblasti.",icon:d.Q$f},{id:"resavanje-sporova",title:"Re\u0161avanje sporova i drugi postupci",text:"\n    Zastupamo klijente u parni\u010dnim postupcima, pri \u010demu uvek nastojimo da klijentima pomognemo da kroz pregovore i medijaciju postignu zadovoljavaju\u0107a re\u0161enja i time izbegnu eventualne sporove i tro\u0161kove postupaka. U slu\u010daju da interesi klijenata zahtevaju sudsku za\u0161titu, zastupamo i savetujemo klijente kako u gra\u0111anskim parnicama i postupcima u privredi, tako i u upravnim stvarima, ste\u010daju i likvidaciji. Zastupamo klijente i u arbitra\u017eama.\n\n    Pronalazimo najefikasnije na\u010dine za naplatu potra\u017eivanja na\u0161ih klijenata u vansudskom postupku i primenjujemo sve instrumente obezbe\u0111enja (zaloga, hipoteka, bankarska garancija, menice, jemstvo i dr.) u cilju za\u0161tite i obezbe\u0111enja potra\u017eivanja na\u0161ih klijenata i njihove naplate bez pokretanja sudskih postupaka, kad god je to mogu\u0107e.\n\n    U slu\u010dajevima kada je naplata potra\u017eivanja mogu\u0107a isklju\u010divo sudskim putem, pru\u017eamo kompletnu uslugu zastupanja u postupcima prinudnog izvr\u0161enja.",icon:u.NsK},{id:"zastita-zivotne-sredine",title:"Za\u0161tita \u017eivotne sredine",text:"\n    Kancelarija pru\u017ea savete i u vezi sa pitanjima za\u0161tite i o\u010duvanja \u017eivotne sredine, spre\u010davanja i kontrole zaga\u0111ivanja, odnosno uskla\u0111enosti poslovanja i dokumenata klijenata sa va\u017ee\u0107im propisima iz oblasti ekologije, kao i propisima iz oblasti energetike, planiranja i izgradnje, proizvodnje i upravljanja hemikalijama, otpadom i sli\u010dno.\n\n    Asistiramo na\u0161im klijentima prilikom definisanja strategije i zaklju\u010denja ugovora o upravljanju otpadom sa izabranim strate\u0161kim partnerom, postupanja u skladu sa propisima o bezbednosti hrane i organskoj proizvodnji, kao i ispunjenju uslova za dobijanje sertifikata.",icon:u.MnU},{id:"neprofitne-organizacije",title:"Neprofitne organizacije",text:"\n    Imamo dugogodi\u0161nje iskustvo u pru\u017eanju usluga savetovanja i zastupanja velikog broja doma\u0107ih i stranih nevladinih, neprofitnih organizacija. Savetujemo na\u0161e klijente iz nevladinog sektora o najpovoljnijim oblicima organizovanja, poreskom tretmanu neprofitnih organizacija, pitanjima iz oblasti rada,  za\u0161tite podataka i drugim pitanjima u vezi sa njihovim poslovanjem.\n\n    Sastavljamo akta za registraciju i rad fondacija, zadu\u017ebina i udru\u017eenja kao i predstavni\u0161tava stranih neprofitnih organizacija i zastupamo ih u postupcima pred dr\u017eavnim organima. Pregovaramo i sastavljamo \u0161irok spektar ugovora specifi\u010dnih za neprofitne organizacije, pru\u017eamo savete i usluge u oblasti radnih odnosa, boravi\u0161nih i radnih dozvola i pru\u017eamo im podr\u0161ku u toku realizacije njihovih projekata, kao i pri prestanku rada po ostvarenju ciljeva.\n\n    Advokat Jasna Trifunovi\u0107 u\u010destvovala je u procesu kreiranja va\u017ee\u0107ih normativnih re\u0161enja u neprofitnom sektoru.",icon:m.IrL},{id:"usluge-fizickim-licima",title:"Usluge fizi\u010dkim licima",text:"\n    Pru\u017eamo \u0161irok spektar pravnih usluga pojedincima u vezi sa ostvarivanjem i za\u0161titom njihovih prava.\n\n    Sastavljamo punomo\u0107ja, izjave i druge jednostrane izjave volje i sve vrste ugovora, kao \u0161to su ugovori o prometu nepokretnosti, kupoprodaji pokretnih stvari, ugovori o zajmu, zakupu, zalozi, jemstvu, posluzi i drugi.\n\n    Pru\u017eamo savete, sastavljamo ugovore i zastupamo autore i nosioce srodnih prava u ostvarivanju i za\u0161titi njihovih prava.\n\n    Savetujemo klijente i u oblasti porodi\u010dnog prava, sastavljamo predbra\u010dne i bra\u010dne ugovore, zastupamo u postupcima razvoda, starateljstva, alimentacije i podele imovine, i pru\u017eamo druge vrste saveta i usluga u oblasti porodi\u010dnog i bra\u010dnog prava.\n\n    Pru\u017eamo sve vidove pravnih usluga u vezi naslednopravnih pitanja, kao \u0161to su sastavljanje zave\u0161tanja i naslednopravnih ugovora, zastupanje u postupcima raspravljanja zaostav\u0161tine i drugim postupcima u vezi sa nasle\u0111ivanjem i savetujemo klijente u vezi sa naslednopravnim pitanjima.\n\n    Pru\u017eamo savetodavne usluge biv\u0161im sopstvenicima, odnosno njihovim pravnim sledbenicima u postupku restitucije oduzete imovine i naknade. Pru\u017eamo pomo\u0107 klijentima i zastupamo ih u postupcima pred nadle\u017enim organima usmerenim na ostvarivanje prava na restituciju i naknadu.\n\n    Pru\u017eamo usluge u vezi rehabilitacije fizi\u010dkih lica koji su neosnovano li\u0161eni politi\u010dkih, svojinskih i drugih prava za vreme komunisti\u010dkog re\u017eima.\n\n    Savetujemo i zastupamo fizi\u010dka lica u razli\u010ditim gra\u0111anskim sporovima, upravnim  i drugim postupcima u cilju ostvarivanja i za\u0161tite njihovih prava i interesa.",icon:u.J8I}];c=c.map((function(a){return(0,o.Z)((0,n.Z)({},a),{shortTitle:a.title.split("\n")[0]})}))},977:function(a,e,i){"use strict";i.d(e,{Q:function(){return n}});var n={red1:"#a12027"}},4302:function(a,e,i){"use strict";i.d(e,{V:function(){return n}});var n,o=i(7568),r=i(4051),t=i.n(r);!function(a){function e(){return(e=(0,o.Z)(t().mark((function a(e){return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a){return setTimeout(a,e)})));case 1:case"end":return a.stop()}}),a)})))).apply(this,arguments)}a.isSubmitBtnEnabled=function(a,e){var i=Object.keys(e);return 0===i.length||!i.find((function(e){return e in a}))},a.sleep=function(a){return e.apply(this,arguments)},a.FormikOnSubmitWrapper=function(a,e){var i=e.onSubmitSuccess,n=e.onSubmitError;return function(){var e=(0,o.Z)(t().mark((function e(o,r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(o,r);case 3:null===i||void 0===i||i(),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("FormikOnSubmitWrapper Error"),console.error(e.t0),null===n||void 0===n||n(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,i){return e.apply(this,arguments)}}()}}(n||(n={}))},9196:function(a,e,i){"use strict";i.d(e,{K:function(){return u}});var n=i(7568),o=i(4051),r=i.n(o),t=i(4749),s=t.rg.API_BASE;function u(a,e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(r().mark((function a(e,i){return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:new URLSearchParams(i)});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function d(a,e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(r().mark((function a(e,i){var n,o;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=new URL(e.startsWith("/")?e.slice(1):e,s),!1,t.rg.NODE_ENV,a.next=5;break;case 5:return a.next=7,fetch(String(n),i);case 7:if((o=a.sent).ok){a.next=11;break}throw"HTTP error",Error("HTTP error");case 11:return a.abrupt("return",o);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}console.assert(s.endsWith("/"))},3812:function(a){a.exports={"root-container":"footer_root-container__Gdkvn",main:"footer_main__MCQB_",italic:"footer_italic__z6Syp",footer:"footer_footer__WCChH"}},2603:function(a){a.exports={"root-container":"header_root-container__sPts0",main:"header_main__ETUBU",italic:"header_italic__YRkq5",header:"header_header__pKEQL","header-main":"header_header-main__YhvvA","header-top":"header_header-top__Se9B3","header-top-address":"header_header-top-address__aWu7e","header-bottom":"header_header-bottom__Ex_Nc","header-bottom-right":"header_header-bottom-right__S8u8L","header-nav":"header_header-nav__HOMMv","header-nav-closed":"header_header-nav-closed__2OsII","submenu-holding-li":"header_submenu-holding-li__XaBSU",submenu:"header_submenu__RaMoM","submenu-sub-list-closed":"header_submenu-sub-list-closed__c3hgs","submenu-toggle":"header_submenu-toggle__iuyq7","hide-narrow-desktop":"header_hide-narrow-desktop__IMUnH","hide-mobile":"header_hide-mobile__HuzMc","hide-desktop":"header_hide-desktop__0eH0_"}},8976:function(a){a.exports={"round-btn":"round-btn_round-btn__ZwG_R","round-btn-disabled":"round-btn_round-btn-disabled__lTMXa","animated-btn":"round-btn_animated-btn__b6b50","hover-opacity-btn":"round-btn_hover-opacity-btn__RDnJ7"}},1673:function(a){a.exports={"root-container":"Home_root-container__diart",main:"Home_main__OVLM4",italic:"Home_italic__HTWU5"}}}]);