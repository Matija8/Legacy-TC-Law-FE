(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{5628:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/karijera",function(){return a(4981)}])},4981:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return B}});var i=a(5893),r=a(7568),t=a(603),o=a(4051),l=a.n(o),u=a(7764),s=a(1189),c=a(4749),m=a(7294),d=a(4853),v=(0,m.forwardRef)((function(e,n){var a=e.sitekey;return(0,i.jsx)(d.Z,{sitekey:a||c.pY.clientSiteKey,size:"invisible",ref:n})}));function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(l().mark((function e(n){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:if(a=e.sent){e.next=5;break}throw Error("Error: ReCaptcha token is falsy!?");case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(l().mark((function e(n){var a,i,r,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===n||void 0===n?void 0:n.current)&&(null===n||void 0===n||null===(a=n.current)||void 0===a?void 0:a.executeAsync)){e.next=4;break}return console.error('Recaptcha ref has an invalid "current" field?!'),e.abrupt("return",null);case 4:return e.next=6,null===(r=(i=n.current).executeAsync)||void 0===r?void 0:r.call(i);case 6:if(!("string"!==typeof(t=e.sent)||(null===t||void 0===t?void 0:t.length)<5)){e.next=10;break}return console.error("Recaptcha executeAsync returned an invalid token?!\n"+"Token: ".concat(t)),e.abrupt("return",null);case 10:return n.current.reset(),e.abrupt("return",t);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v.displayName="ReCaptcha";var x=a(6730),k=a(8143),b=a(2580),g=a(2670);var y=a(6893),z=a(4302),S=a(9196),w=a(1121),C={nameSurname:"",email:"",motivationalLetter:"",readPrivacy:!1};function L(e){var n,a,o=(0,m.useState)(void 0),d=o[0],f=o[1],h=(n=function(e){return f(e)},a=P,{onOpen:function(){var e=document.createElement("input");e.type="file",e.onchange=function(e){var i,r;if((0,g.Z)(e.target,HTMLInputElement)){var t=null===(i=e.target)||void 0===i||null===(r=i.files)||void 0===r?void 0:r[0];t?!a||a(t)?n(t):console.warn("File validation failed!"):console.warn("File missing!")}},e.click()}}).onOpen,j=(0,m.useRef)(null);return(0,i.jsx)(b.J9,{initialValues:C,validate:function(e){var n={};return e.nameSurname||(n.nameSurname=c.iK),e.email?c.s5.email.test(e.email)||(n.email="*Nevalidan e-mail"):n.email=c.iK,e.motivationalLetter||(n.motivationalLetter=c.iK),e.readPrivacy||(n.readPrivacy=c.al),n},onSubmit:z.V.FormikOnSubmitWrapper(function(){var e=(0,r.Z)(l().mark((function e(n,a){var i,r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.resetForm,e.next=3,p(j);case 3:return r=e.sent,o=new FormData,Object.entries({nameSurname:n.nameSurname,email:n.email,motivationalLetter:n.motivationalLetter,cv:d,useTestMail:c.cs,recaptchaToken:r}).forEach((function(e){var n=(0,t.Z)(e,2),a=n[0],i=n[1];return i&&o.append(a,i)})),e.next=8,(0,S.j)("mail/careerForm",o);case 8:i();case 9:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),e),children:function(e){var n=e.errors,a=e.handleBlur,r=e.handleChange,t=e.handleSubmit,o=e.isSubmitting,l=e.touched,m=e.values;return(0,i.jsxs)("form",{onSubmit:t,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"70%"},children:[(0,i.jsx)(u.Z,{label:"Ime i prezime",name:"nameSurname",variant:"outlined",value:m.nameSurname,error:Boolean(l.nameSurname&&n.nameSurname),helperText:n.nameSurname||c.iK,onChange:r,onBlur:a}),(0,i.jsx)(u.Z,{label:"E-mail",name:"email",variant:"outlined",type:"email",value:m.email,error:Boolean(l.email&&n.email),helperText:l.email&&n.email||c.iK,onChange:r,onBlur:a,inputProps:{maxLength:c.BZ.email.maxLength}}),(0,i.jsx)(u.Z,{multiline:!0,rows:6,label:"Poruka",name:"motivationalLetter",variant:"outlined",value:m.motivationalLetter,error:Boolean(l.motivationalLetter&&n.motivationalLetter),helperText:n.motivationalLetter||c.iK,onChange:r,onBlur:a,inputProps:{maxLength:c.BZ.motivationalLetter.maxLength}}),(0,i.jsx)(s.k,{name:"readPrivacy",value:m.readPrivacy,onChange:r,onBlur:a}),d?(0,i.jsxs)("section",{children:[(0,i.jsxs)("p",{children:["U\u010ditan CV: ",d.name]}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(x.W,{onClick:h,children:"Promenite CV"}),(0,i.jsxs)(x.W,{onClick:function(){return f(void 0)},children:[(0,i.jsx)(y.We9,{})," Uklonite CV"]})]})]}):(0,i.jsx)("section",{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[(0,i.jsx)(x.W,{onClick:h,children:"Dodajte CV"}),(0,i.jsx)("span",{style:{marginLeft:"0.5rem"},children:"(format .pdf, .docx ili .jpg veli\u010dine do 3 Mb)"})]})}),(0,i.jsx)(w.o,{isSubmitting:o,disabled:!z.V.isSubmitBtnEnabled(l,n)}),(0,i.jsx)(v,{ref:j})]})}})}function E(){var e=(0,k.Ds)();return(0,i.jsx)(L,{onSubmitSuccess:function(){return e("Prijava uspe\u0161no podneta!")},onSubmitError:function(){return e("Gre\u0161ka pri prijavi!")}})}function P(e){return a=2,"number"!==typeof(null===(n=e)||void 0===n?void 0:n.size)?(console.warn("File size missing!",n),!1):(null===n||void 0===n?void 0:n.size)/1024/1024<a;var n,a}var _=a(2046),B=function(){return(0,i.jsxs)(_.Q,{title:"Karijera",children:[(0,i.jsx)("h2",{className:"heading-underlined",children:"Karijera"}),(0,i.jsx)("p",{children:"Tra\u017eimo saradnike iz razli\u010ditih pravnih disciplina i sa razli\u010ditim iskustvima. Profesionalni i eti\u010dki standardi se podrazumevaju, a s obzirom na na\u0161e polje rada, zahtevamo i odli\u010dno poznavanje govornog i pisanog engleskog jezika. Negujemo timski rad i podr\u017eavamo razvoj ve\u0161tina komunikacije i sposobnosti za postizanje izvrsnih rezultata pod pritiskom."}),(0,i.jsx)("p",{children:"Novi saradnici su dobrodo\u0161li u na\u0161 tim, bilo da imaju iskustva ili tek po\u010dinju karijeru, a pod uslovom da imaju \u017eelju za poslom ispunjenim izazovima, da dobro poznaju pravo, poznaju i pona\u0161aju se u skladu sa kodeksom profesionalne etike advokata, kao i da imaju sposobnost da rade u razli\u010ditim pravnim oblastima."}),(0,i.jsx)("p",{children:"Ako sebe vidite u takvoj sredini, slobodno nam po\u0161aljite Va\u0161 CV i kratko motivaciono pismo."}),(0,i.jsx)(E,{})]})}}},function(e){e.O(0,[228,445,937,13,260,617,866,609,876,107,497,46,774,888,179],(function(){return n=5628,e(e.s=n);var n}));var n=e.O();_N_E=n}]);