import { popups } from "../index";

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  });
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup();
    }
  });
}
export function closePopup() {
  popups.forEach((popup) => {
    popup.classList.remove("popup_is-opened");
    popup.removeEventListener("click", function (evt) {
      if (evt.target === evt.currentTarget) {
        closePopup();
      }
    });
    document.removeEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        closePopup();
      }
    });
  });
}
