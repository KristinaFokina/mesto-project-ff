// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cloneCardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function removeCard(evt) {
  evt.target.parentElement.remove();
}

function addInitialCards() {
  initialCards.forEach((card) => {
    const cardBlock = cloneCardTemplate.cloneNode(true);
    const cardImage = cardBlock.querySelector(".card__image");
    const cardTitle = cardBlock.querySelector(".card__title");
    const deleteButton = cardBlock.querySelector(".card__delete-button");

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    deleteButton.addEventListener("click", removeCard);

    placesList.append(cardBlock);
  });
}
addInitialCards();
