const сardTemplate = document.querySelector("#card-template").content;
const popupImage = document.querySelector(".popup_type_image");
import { openPopup } from "./modal";

export default function createCard(dataCard) {
  const cardElement = сardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const imgInPopup = popupImage.querySelector(".popup__image");
  const popupCaption = popupImage.querySelector(".popup__caption");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardTitle.textContent = dataCard.name;
  deleteButton.addEventListener("click", handleDeleteCard);
  likeButton.addEventListener("click", addLike);

  cardImage.addEventListener("click", function () {
    imgInPopup.src = dataCard.link;
    imgInPopup.alt = dataCard.name;
    popupCaption.textContent = dataCard.name;
    openPopup(popupImage);
  });

  return cardElement;
}
function handleDeleteCard(evt) {
  evt.target.closest(".card").remove();
}
function addLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
