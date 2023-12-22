const config = {
  baseUrl: "https://nomoreparties.co/v1/cohort-magistr-2/",
  headers: {
    authorization: "cca73c48-fb4b-49db-a910-6180cac819ea",
    "Content-Type": "application/json",
  },
};
const getResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserData = () => {
  return fetch(`${config.baseUrl}users/me`, {
    headers: config.headers,
  })
    .then((res) => {
      return getResult(res);
    })
    
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}cards`, {
    headers: config.headers,
  })
    .then((res) => {
      return getResult(res);
    })
    
};
export const patchProfileData = (profileName, profileAbout) => {
  return fetch(`${config.baseUrl}users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: profileName,
      about: profileAbout,
    }),
  })
    .then((res) => {
      return getResult(res);
    })
    
};

export const postNewCard = (dataCard) => {
  return fetch(`${config.baseUrl}cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: dataCard.name,
      link: dataCard.link,
    }),
  })
    .then((res) => {
      return getResult(res);
    })
    
};

export const apiDeleteCard = (cardId) => {
  return fetch(`${config.baseUrl}cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
    body: JSON.stringify({
      _id: cardId,
    }),
  })
    .then((res) => {
      return getResult(res);
    })
    
};

export const apiAddLike = (cardId) => {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  })
    .then((res) => {
      return getResult(res);
    })
    
};

export const apiDeleteLike = (cardId) => {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((res) => {
      return getResult(res);
    })
    
};
export const apiUpdateAvatar = (avatar) => {
  return fetch(`${config.baseUrl}users/me/avatar `, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  })
    .then((res) => {
      return getResult(res);
    })
    
};
