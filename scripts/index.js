const сardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(dataCard, removeCard) {
  const cardElement = сardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardTitle.textContent = dataCard.name;
  deleteButton.addEventListener("click", removeCard);

  return cardElement;
}

// @todo: Функция удаления карточки

function handleDeleteCard(evt) {
  evt.target.closest(".card").remove();
}

// @todo: функция вставки карточки на страницу

function renderCard(dataCard) {
  const card = createCard(dataCard, handleDeleteCard);
  placesList.append(card);
}

// @todo: Вывести карточки на страницу, используем цикл forEach

initialCards.forEach((card) => {
  renderCard(card);
});
