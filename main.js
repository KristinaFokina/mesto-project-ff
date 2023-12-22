(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,r,o,c){var a=e.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__title"),l=a.querySelector(".card__likes"),s=a.querySelector(".card__delete-button"),d=a.querySelector(".card__like-button");return console.log(c),console.log(t.owner._id),c!==t.owner._id&&s.remove(),t.likes.forEach((function(e){e._id===c&&d.classList.add("card__like-button_is-active")})),a.setAttribute("id",t._id),i.src=t.link,i.alt=t.name,u.textContent=t.name,l.textContent=t.likes.length,s.addEventListener("click",r),d.addEventListener("click",n),i.addEventListener("click",(function(){o(t)})),a}var n=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.classList.remove(r),o.textContent=""},r=function(e){return e.some((function(e){return!e.validity.valid}))},o=function(e,t){var r=e.querySelectorAll(t.inputSelector),o=e.querySelector(t.submitButtonSelector);r.forEach((function(r){n(e,r,t.inputErrorClass,t.errorClass)})),o.disabled=!0,o.classList.add(t.inactiveButtonClass)};function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}var u={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2/",headers:{authorization:"cca73c48-fb4b-49db-a910-6180cac819ea","Content-Type":"application/json"}},l=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d,p,f,_,y,m,v,h="",b="",S="",g="",q=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),C=document.querySelector(".profile__image"),E=document.forms["edit-profile"],L=E.querySelector(".popup__button"),x=document.forms["new-place"],A=x.querySelector(".popup__button"),w=document.querySelector(".places__list"),U=document.querySelector(".profile__edit-button"),O=document.querySelector(".profile__add-button"),T=document.querySelector(".popup_type_edit"),j=document.querySelector(".popup_type_new-card"),B=document.querySelectorAll(".popup__close"),D=document.querySelector(".popup_type_image"),P=T.querySelector(".popup__input_type_name"),N=T.querySelector(".popup__input_type_description"),J=(document.querySelector(".popup_type_delete_card"),document.querySelector(".popup_type_update-avatar")),M=J.querySelector(".form__update-avatar"),I=D.querySelector(".popup__image"),H=D.querySelector(".popup__caption"),V=(x.querySelectorAll(".popup__input"),M.querySelector(".popup__input")),z=M.querySelector(".popup__button"),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-no-active",inputErrorClass:"popup__input-error",errorClass:"popup__text-error-active"};function F(e){var t;e.preventDefault(),(t=e.target.closest(".card").id,fetch("".concat(u.baseUrl,"cards/").concat(t),{method:"DELETE",headers:u.headers,body:JSON.stringify({_id:t})}).then((function(e){return l(e)}))).then((function(){e.target.closest(".card").remove()})).catch((function(e){console.log(e)})).finally((function(){}))}function G(e){var t,n=e.target.closest(".card"),r=n.querySelector(".card__likes");e.target.closest(".card__like-button_is-active")?(t=n.id,fetch("".concat(u.baseUrl,"cards/likes/").concat(t),{method:"DELETE",headers:u.headers}).then((function(e){return l(e)}))).then((function(t){r.textContent=t.likes.length,console.log("like удален"),e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})).finally((function(){})):function(e){return fetch("".concat(u.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:u.headers}).then((function(e){return l(e)}))}(n.id).then((function(t){r.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active"),console.log(t)})).catch((function(e){console.log(e)})).finally((function(){}))}function K(e){I.src=e.link,I.alt=e.name,H.textContent=e.name,c(D)}E.addEventListener("submit",(function(e){var t,n;e.preventDefault(),L.textContent="Сохранение...",(t=E.name.value,n=E.description.value,fetch("".concat(u.baseUrl,"users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return l(e)}))).then((function(){q.textContent=E.name.value,k.textContent=E.description.value,a(T)})).catch((function(e){console.log(e)})).finally((function(){L.textContent="Сохранить"}))})),x.addEventListener("submit",(function(e){e.preventDefault(),A.textContent="Сохранение...";var n={name:x["place-name"].value,link:x.link.value,likes:[]};n.owner={_id:h},function(e){return fetch("".concat(u.baseUrl,"cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return l(e)}))}(n).then((function(e){w.prepend(t(e,G,F,K,h)),a(j),x.reset()})).catch((function(e){console.log(e)})).finally((function(){A.textContent="Сохранить"}))})),U.addEventListener("click",(function(){P.value=q.textContent,N.value=k.textContent,o(E,$),c(T)})),O.addEventListener("click",(function(){o(x,$),x.reset(),c(j)})),C.addEventListener("click",(function(){o(M,$),V.value="",c(J)})),M.addEventListener("submit",(function(e){var t;e.preventDefault(),z.textContent="Сохранение...",(t=M.avatar.value,fetch("".concat(u.baseUrl,"users/me/avatar "),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:t})}).then((function(e){return l(e)}))).then((function(e){C.removeAttribute("style"),C.setAttribute("style","background-image:url(".concat(e.avatar,")")),a(J)})).catch((function(e){console.log(e)})).finally((function(){z.textContent="Сохранить"}))})),B.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return a(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(e){e.target===e.currentTarget&&a(e.target)}))})),p=(d=$).formSelector,f=d.inputSelector,_=d.submitButtonSelector,y=d.inactiveButtonClass,m=d.inputErrorClass,v=d.errorClass,Array.from(document.querySelectorAll(p)).forEach((function(e){!function(e,t,o,c,a,i){var u=Array.from(e.querySelectorAll(t)),l=e.querySelector(o);u.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,r,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?n(e,t,r,o):function(e,t,n,r,o){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),c.textContent=n,c.classList.add(o)}(e,t,t.validationMessage,r,o)}(e,t,a,i),function(e,t,n){r(e)?(t.disabled=!0,t.classList.add(n)):(t.disabled=!1,t.classList.remove(n))}(u,l,c)}))}))}(e,f,_,y,m,v)})),Promise.all([fetch("".concat(u.baseUrl,"users/me"),{headers:u.headers}).then((function(e){return l(e)})),fetch("".concat(u.baseUrl,"cards"),{headers:u.headers}).then((function(e){return l(e)}))]).then((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];h=c._id,b=c.name,S=c.about,g=c.avatar,q.textContent=b,k.textContent=S,C.setAttribute("style","background-image:url(".concat(g,")")),a.forEach((function(e){!function(e){var n=t(e,G,F,K,h);w.append(n)}(e)}))})).catch((function(e){console.log(e)})).finally((function(){}))})();