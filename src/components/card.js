const сardTemplate = document.querySelector("#card-template").content;

export default function createCard(
  dataCard,
  addLike,
  openPopupDeleteCard,
  openPopupCard,
  userId
) {
  const cardElement = сardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikes = cardElement.querySelector(".card__likes");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  if (userId !== dataCard.owner._id) {
    deleteButton.remove();
  }
  dataCard.likes.forEach((arrayLike) => {
    if (arrayLike._id === userId) {
      likeButton.classList.add("card__like-button_is-active");
    }
  });

  cardElement.setAttribute("id", dataCard._id);
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardTitle.textContent = dataCard.name;
  cardLikes.textContent = dataCard.likes.length;

  deleteButton.addEventListener("click", openPopupDeleteCard);
  likeButton.addEventListener("click", addLike);
  cardImage.addEventListener("click", function () {
    openPopupCard(dataCard);
  });

  return cardElement;
}
