(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,r,o){var c=e.querySelector(".places__item").cloneNode(!0),p=c.querySelector(".card__image"),a=c.querySelector(".card__title"),u=c.querySelector(".card__delete-button"),d=c.querySelector(".card__like-button");return p.src=t.link,p.alt=t.name,a.textContent=t.name,u.addEventListener("click",r),d.addEventListener("click",n),p.addEventListener("click",(function(){o(t)})),c}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)}function o(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}var c=document.querySelector(".profile__title"),p=document.querySelector(".profile__description"),a=document.forms["edit-profile"],u=document.forms["new-place"],d=document.querySelector(".places__list"),i=document.querySelector(".profile__edit-button"),l=document.querySelector(".profile__add-button"),s=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),_=document.querySelectorAll(".popup__close"),y=document.querySelector(".popup_type_image"),v=s.querySelector(".popup__input_type_name"),f=s.querySelector(".popup__input_type_description"),k=y.querySelector(".popup__image"),q=y.querySelector(".popup__caption");function S(e){e.target.closest(".card").remove()}function g(e){e.target.classList.toggle("card__like-button_is-active")}function E(e){k.src=e.link,k.alt=e.name,q.textContent=e.name,n(y)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){!function(e){var n=t(e,g,S,E);d.append(n)}(e)})),a.addEventListener("submit",(function(e){e.preventDefault(),c.textContent=a.name.value,p.textContent=a.description.value,r(s)})),u.addEventListener("submit",(function(e){e.preventDefault();var n={name:u["place-name"].value,link:u.link.value};d.prepend(t(n,g,S,E)),r(m),u.reset()})),i.addEventListener("click",(function(){v.value=c.textContent,f.value=p.textContent,n(s)})),l.addEventListener("click",(function(){n(m)})),_.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return r(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(e){e.target===e.currentTarget&&r(e.target)}))}))})();