import "./styles/index.css";
import avatar from "./images/avatar.jpg";
import card_1 from "./images/card_1.jpg";
import card_2 from "./images/card_2.jpg";
import card_3 from "./images/card_3.jpg";
import logo from "./images/logo.svg";
import createCard from "./components/card";
import { enableValidation, clearValidation } from "./components/validation";
import { openPopup, closePopup } from "./components/modal";
import {
  getUserData,
  getInitialCards,
  patchProfileData,
  postNewCard,
  apiDeleteCard,
  apiAddLike,
  apiDeleteLike,
  apiUpdateAvatar,
} from "./components/api";

const whoIsTheGoat = [
  { name: "avatar", link: avatar },
  { name: "card_1", link: card_1 },
  { name: "card_2", link: card_2 },
  { name: "card_3", link: card_3 },
  { name: "logo", link: logo },
];
let userId = "";
let userName = "";
let userAbout = "";
let userAvatar = "";
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");
const formElementEditProfile = document.forms["edit-profile"];
const buttonSubmitEditProfile =
  formElementEditProfile.querySelector(".popup__button");
const formElementAddCard = document.forms["new-place"];
const buttonSubmitAddCard = formElementAddCard.querySelector(".popup__button");
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
const formDeleteCard = document.querySelector(".popup_type_delete_card");
const popupUpdateAvatar = document.querySelector(".popup_type_update-avatar");
const formUpdateAvatar = popupUpdateAvatar.querySelector(
  ".form__update-avatar"
);
const imgInPopup = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");
const inputListAddNewCard =
  formElementAddCard.querySelectorAll(".popup__input");
const inputUpdateAvatar = formUpdateAvatar.querySelector(".popup__input");
const buttonSubmitUpdateAvatar =
  formUpdateAvatar.querySelector(".popup__button");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-no-active",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__text-error-active",
};

function initialUserData() {
  Promise.all([getUserData(), getInitialCards()])
    .then(([userData, cards]) => {
      userId = userData._id;
      userName = userData.name;
      userAbout = userData.about;
      userAvatar = userData.avatar;

      profileTitle.textContent = userName;
      profileDescription.textContent = userAbout;
      profileImage.setAttribute("style", `background-image:url(${userAvatar})`);

      cards.forEach((card) => {
        renderCard(card);
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  buttonSubmitEditProfile.textContent = "Сохранение...";
  patchProfileData(
    formElementEditProfile.name.value,
    formElementEditProfile.description.value
  )
    .then(() => {
      profileTitle.textContent = formElementEditProfile.name.value;
      profileDescription.textContent = formElementEditProfile.description.value;
      closePopup(popupEditProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitEditProfile.textContent = "Сохранить";
    });
}

function deleteCard(evt) {
  evt.preventDefault();
  apiDeleteCard(evt.target.closest(".card").id)
    .then(() => {
      evt.target.closest(".card").remove();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}

function handelAddLike(evt) {
  const card = evt.target.closest(".card");
  const likeSection = card.querySelector(".card__likes");
  if (evt.target.closest(".card__like-button_is-active")) {
    apiDeleteLike(card.id)
      .then((res) => {
        likeSection.textContent = res.likes.length;
        console.log("like удален");
        evt.target.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  } else {
    apiAddLike(card.id)
      .then((res) => {
        likeSection.textContent = res.likes.length;
        evt.target.classList.toggle("card__like-button_is-active");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }
}
function handleOpenPopupCard(dataCard) {
  imgInPopup.src = dataCard.link;
  imgInPopup.alt = dataCard.name;
  popupCaption.textContent = dataCard.name;
  openPopup(popupImage);
}

function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  buttonSubmitAddCard.textContent = "Сохранение...";
  const dataCard = {
    name: formElementAddCard["place-name"].value,
    link: formElementAddCard["link"].value,
    likes: [],
  };

  dataCard.owner = { _id: userId };
  postNewCard(dataCard)
    .then((res) => {
      placesList.prepend(
        createCard(res, handelAddLike, deleteCard, handleOpenPopupCard, userId)
      );
      closePopup(popupAddNewCard);
      formElementAddCard.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitAddCard.textContent = "Сохранить";
    });
}

function renderCard(dataCard) {
  const card = createCard(
    dataCard,
    handelAddLike,
    deleteCard,
    handleOpenPopupCard,
    userId
  );

  placesList.append(card);
}

function handleUpdateAvatar(evt) {
  evt.preventDefault();
  buttonSubmitUpdateAvatar.textContent = "Сохранение...";
  apiUpdateAvatar(formUpdateAvatar.avatar.value)
    .then((res) => {
      profileImage.removeAttribute("style");
      profileImage.setAttribute("style", `background-image:url(${res.avatar})`);
      closePopup(popupUpdateAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitUpdateAvatar.textContent = "Сохранить";
    });
}
formElementEditProfile.addEventListener("submit", handleFormSubmitEditProfile);
formElementAddCard.addEventListener("submit", handleFormSubmitAddCard);

buttonEditProfile.addEventListener("click", function () {
  popupEditName.value = profileTitle.textContent;
  popupEditDescription.value = profileDescription.textContent;
  clearValidation(formElementEditProfile, validationConfig);
  openPopup(popupEditProfile);
});

buttonAddNewCard.addEventListener("click", function () {
  clearValidation(formElementAddCard, validationConfig);
  formElementAddCard.reset();
  openPopup(popupAddNewCard);
});

profileImage.addEventListener("click", () => {
  clearValidation(formUpdateAvatar, validationConfig);
  inputUpdateAvatar.value = "";
  openPopup(popupUpdateAvatar);
});
formUpdateAvatar.addEventListener("submit", handleUpdateAvatar);

buttonsClosePopup.forEach((buttonClosePopup) => {
  const popup = buttonClosePopup.closest(".popup");
  buttonClosePopup.addEventListener("click", () => closePopup(popup));
});

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  });
});

enableValidation(validationConfig);
initialUserData();
