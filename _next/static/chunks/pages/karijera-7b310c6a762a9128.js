(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{5628:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/karijera",function(){return i(4981)}])},4981:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return _}});var a=i(5893),r=i(7568),t=i(4051),o=i.n(t),l=i(9273),u=i(1189),s=i(4749),c=i(7294),m=i(4853),d=(0,c.forwardRef)((function(e,n){var i=e.sitekey;return(0,a.jsx)(m.Z,{sitekey:i||s.pY.clientSiteKey,size:"invisible",ref:n})}));function v(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function e(n){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:if(i=e.sent){e.next=5;break}throw Error("Error: ReCaptcha token is falsy!?");case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function e(n){var i,a,r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===n||void 0===n?void 0:n.current)&&(null===n||void 0===n||null===(i=n.current)||void 0===i?void 0:i.executeAsync)){e.next=4;break}return console.error('Recaptcha ref has an invalid "current" field?!'),e.abrupt("return",null);case 4:return e.next=6,null===(r=(a=n.current).executeAsync)||void 0===r?void 0:r.call(a);case 6:if(!("string"!==typeof(t=e.sent)||(null===t||void 0===t?void 0:t.length)<5)){e.next=10;break}return console.error("Recaptcha executeAsync returned an invalid token?!\n"+"Token: ".concat(t)),e.abrupt("return",null);case 10:return n.current.reset(),e.abrupt("return",t);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.displayName="ReCaptcha";var j=i(6730),x=i(8143),k=i(2580),b=i(2670);var g=i(6893),y=i(4302),z=i(9196),S=i(1121),w={nameSurname:"",email:"",motivationalLetter:"",readPrivacy:!1};function C(e){var n,i,t=(0,c.useState)(void 0),m=t[0],p=t[1],f=(n=function(e){return p(e)},i=E,{onOpen:function(){var e=document.createElement("input");e.type="file",e.onchange=function(e){var a,r;if((0,b.Z)(e.target,HTMLInputElement)){var t=null===(a=e.target)||void 0===a||null===(r=a.files)||void 0===r?void 0:r[0];t?!i||i(t)?n(t):console.warn("File validation failed!"):console.warn("File missing!")}},e.click()}}).onOpen,h=(0,c.useRef)(null);return(0,a.jsx)(k.J9,{initialValues:w,validate:function(e){var n={};return e.nameSurname||(n.nameSurname=s.iK),e.email?s.s5.email.test(e.email)||(n.email="*Nevalidan e-mail"):n.email=s.iK,e.motivationalLetter||(n.motivationalLetter=s.iK),e.readPrivacy||(n.readPrivacy=s.al),n},onSubmit:y.V.FormikOnSubmitWrapper(function(){var e=(0,r.Z)(o().mark((function e(n,i){var a,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.resetForm,e.next=3,v(h);case 3:return r=e.sent,console.log("*$",{recaptchaToken:r}),e.next=7,(0,z.K)("mail/careerForm",{nameSurname:n.nameSurname,email:n.email,motivationalLetter:n.motivationalLetter,useTestMail:s.cs,recaptchaToken:r});case 7:a();case 8:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),e),children:function(e){var n=e.errors,i=e.handleBlur,r=e.handleChange,t=e.handleSubmit,o=e.isSubmitting,c=e.touched,v=e.values;return(0,a.jsxs)("form",{onSubmit:t,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"70%"},children:[(0,a.jsx)(l.Z,{label:"Ime i prezime",name:"nameSurname",variant:"outlined",value:v.nameSurname,error:Boolean(c.nameSurname&&n.nameSurname),helperText:n.nameSurname||s.iK,onChange:r,onBlur:i}),(0,a.jsx)(l.Z,{label:"E-mail",name:"email",variant:"outlined",type:"email",value:v.email,error:Boolean(c.email&&n.email),helperText:c.email&&n.email||s.iK,onChange:r,onBlur:i,inputProps:{maxLength:s.BZ.email.maxLength}}),(0,a.jsx)(l.Z,{multiline:!0,rows:6,label:"Poruka",name:"motivationalLetter",variant:"outlined",value:v.motivationalLetter,error:Boolean(c.motivationalLetter&&n.motivationalLetter),helperText:n.motivationalLetter||s.iK,onChange:r,onBlur:i,inputProps:{maxLength:s.BZ.motivationalLetter.maxLength}}),(0,a.jsx)(u.k,{value:v.readPrivacy,onChange:r}),m?(0,a.jsxs)("section",{children:[(0,a.jsxs)("p",{children:["U\u010ditan CV: ",m.name]}),(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)(j.W,{onClick:f,children:"Promenite CV"}),(0,a.jsxs)(j.W,{onClick:function(){return p(void 0)},children:[(0,a.jsx)(g.We9,{})," Uklonite CV"]})]})]}):(0,a.jsx)("section",{children:(0,a.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[(0,a.jsx)(j.W,{onClick:f,children:"Dodajte CV"}),(0,a.jsx)("span",{style:{marginLeft:"0.5rem"},children:"(format .pdf, .docx ili .jpg veli\u010dine do 3 Mb)"})]})}),(0,a.jsx)(S.o,{isSubmitting:o,disabled:!y.V.isSubmitBtnEnabled(c,n)}),(0,a.jsx)(d,{ref:h})]})}})}function L(){var e=(0,x.Ds)();return(0,a.jsx)(C,{onSubmitSuccess:function(){return e("Prijava uspe\u0161no podneta!")},onSubmitError:function(){return e("Gre\u0161ka pri prijavi!")}})}function E(e){return i=2,"number"!==typeof(null===(n=e)||void 0===n?void 0:n.size)?(console.warn("File size missing!",n),!1):(null===n||void 0===n?void 0:n.size)/1024/1024<i;var n,i}var P=i(2046),_=function(){return(0,a.jsxs)(P.Q,{title:"Karijera",children:[(0,a.jsx)("h2",{className:"heading-underlined",children:"Karijera"}),(0,a.jsx)("p",{children:"Tra\u017eimo saradnike iz razli\u010ditih pravnih disciplina i sa razli\u010ditim iskustvima. Profesionalni i eti\u010dki standardi se podrazumevaju, a s obzirom na na\u0161e polje rada, zahtevamo i odli\u010dno poznavanje govornog i pisanog engleskog jezika. Negujemo timski rad i podr\u017eavamo razvoj ve\u0161tina komunikacije i sposobnosti za postizanje izvrsnih rezultata pod pritiskom."}),(0,a.jsx)("p",{children:"Novi saradnici su dobrodo\u0161li u na\u0161 tim, bilo da imaju iskustva ili tek po\u010dinju karijeru, a pod uslovom da imaju \u017eelju za poslom ispunjenim izazovima, da dobro poznaju pravo, poznaju i pona\u0161aju se u skladu sa kodeksom profesionalne etike advokata, kao i da imaju sposobnost da rade u razli\u010ditim pravnim oblastima."}),(0,a.jsx)("p",{children:"Ako sebe vidite u takvoj sredini, slobodno nam po\u0161aljite Va\u0161 CV i kratko motivaciono pismo."}),(0,a.jsx)(L,{})]})}}},function(e){e.O(0,[228,445,937,13,260,617,866,609,876,363,413,46,774,888,179],(function(){return n=5628,e(e.s=n);var n}));var n=e.O();_N_E=n}]);