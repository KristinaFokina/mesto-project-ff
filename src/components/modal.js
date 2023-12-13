import { popups } from "../index";

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEsc);
}

export function closePopup() {
  popups.forEach((popup) => {
    popup.classList.remove("popup_is-opened");

    document.removeEventListener("keydown", closeByEsc);
  });
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}
