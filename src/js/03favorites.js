"use strict";

// escuhar un click sobre una serie
// des/marcarla como favorita

const favoritesTvShows = function (ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = resultFav.indexOf(clicked);
  const isFav = indexFav !== -1;
  if (isFav === false) {
    for (let i = 0; i < shows.length; i++) {
      if (clicked === shows[i].id) {
        resultFav[clicked] = shows[i];
      }
    }
  }
  setLocalStorageReFav();
  paintTvShows();
  paintTvShowsFav();
  listenTvShows();
}

function listenTvShows() {
  const tvShowItems = document.querySelectorAll(".js-tvShowItem");
  for (const tvShowItem of tvShowItems) {
    tvShowItem.addEventListener("click", favoritesTvShows);
  }
}

const favoritesDeleteTvShows = function (ev) {
  const clicked = parseInt(ev.currentTarget.id);
  for (let i = 0; i < resultFav.length; i++) {
    if (resultFav[i] != null && clicked === resultFav[i].id) {
      resultFav[clicked] = null;
    }
  }
  setLocalStorageReFav();
  paintTvShowsFav();
}

function listenDeleteBtn() {
  const btnDeleteItems = document.querySelectorAll(".js-delete-btn");
  for (const btnDeleteItem of btnDeleteItems) {
    btnDeleteItem.addEventListener("click", favoritesDeleteTvShows);
  }
}

// reset de la lista de favoritos

const favoritesResetTvShows = function (ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = resultFav.indexOf(clicked);
  const isFav = indexFav !== -1;
  if (isFav === false) {
    resultFav.length = 0;
  }
  setLocalStorageReFav();
  paintTvShowsFav();
}

function listenResetBtn() {
  const btnReset = document.querySelector(".js-resetBtn");
  btnReset.addEventListener("click", favoritesResetTvShows);
}
