import "./styles/index.css";
import { initialCards } from "./cards.js";
import avatar from "./images/avatar.jpg";
import card_1 from "./images/card_1.jpg";
import card_2 from "./images/card_2.jpg";
import card_3 from "./images/card_3.jpg";
import logo from "./images/logo.svg";
import createCard from "./components/card";
import { openPopup, closePopup } from "./components/modal";

const whoIsTheGoat = [
  { name: "avatar", link: avatar },
  { name: "card_1", link: card_1 },
  { name: "card_2", link: card_2 },
  { name: "card_3", link: card_3 },
  { name: "logo", link: logo },
];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formElementEditProfile = document.forms["edit-profile"];
const formElementAddCard = document.forms["new-place"];
const placesList = document.querySelector(".places__list");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddNewCard = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddNewCard = document.querySelector(".popup_type_new-card");
const buttonsClosePopup = document.querySelectorAll(".popup__close");
const popupImage = document.querySelector(".popup_type_image");
const popupEditName = popupEditProfile.querySelector(".popup__input_type_name");
const popupEditDescription = popupEditProfile.querySelector(
  ".popup__input_type_description"
);
export const popups = document.querySelectorAll(".popup");

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = formElementEditProfile.name.value;
  profileDescription.textContent = formElementEditProfile.description.value;
  closePopup();
}
function handleDeleteCard(evt) {
  evt.target.closest(".card").remove();
}
function handelAddLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
function handleOpenPopupCard(dataCard) {
  const imgInPopup = popupImage.querySelector(".popup__image");
  const popupCaption = popupImage.querySelector(".popup__caption");
  imgInPopup.src = dataCard.link;
  imgInPopup.alt = dataCard.name;
  popupCaption.textContent = dataCard.name;
  openPopup(popupImage);
}

function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  const dataCard = {
    name: formElementAddCard["place-name"].value,
    link: formElementAddCard["link"].value,
  };
  placesList.prepend(
    createCard(dataCard, handelAddLike, handleDeleteCard, handleOpenPopupCard)
  );
  closePopup();
  formElementAddCard.reset();
}

function renderCard(dataCard) {
  const card = createCard(
    dataCard,
    handelAddLike,
    handleDeleteCard,
    handleOpenPopupCard
  );
  placesList.append(card);
}

initialCards.forEach((card) => {
  renderCard(card);
});

formElementEditProfile.addEventListener("submit", handleFormSubmitEditProfile);
formElementAddCard.addEventListener("submit", handleFormSubmitAddCard);

buttonEditProfile.addEventListener("click", function () {
  popupEditName.value = profileTitle.textContent;
  popupEditDescription.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});
buttonAddNewCard.addEventListener("click", function () {
  openPopup(popupAddNewCard);
});

buttonsClosePopup.forEach((buttonClosePopup) => {
  buttonClosePopup.addEventListener("click", function () {
    closePopup();
  });
});
popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  });
});
