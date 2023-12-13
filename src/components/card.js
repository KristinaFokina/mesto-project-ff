const сardTemplate = document.querySelector("#card-template").content;


export default function createCard(
  dataCard,
  addLike,
  deleteCard,
  openPopupCard
) {
  const cardElement = сardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardTitle.textContent = dataCard.name;

  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", addLike);
  cardImage.addEventListener("click", function(){
    openPopupCard(dataCard);
  });

  return cardElement;
}

