"use strict";

// listen event
// un/check a favorite tv show
const favoritesTvShows = function (ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = resultFav.indexOf(clicked);
  const isFav = indexFav !== -1;
  if (isFav === false) {
    for (let i = 0; i < shows.length; i++) {
      if (clicked === shows[i].id) {
        resultFav.push(shows[i]);
      }
    }
    setLocalStorageReFav();
    paintTvShows();
    paintTvShowsFav();
    listenTvShows();
  }
}


function listenTvShows() {
  const tvShowItems = document.querySelectorAll(".js-tvShowItem");
  for (const tvShowItem of tvShowItems) {
    tvShowItem.addEventListener("click", favoritesTvShows);
  }
}

// listen click on every single button
// erase tv show from the favorite list
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

// listen click on reset button
// reset favorites list
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

function consoleLog() {
  for (let i = 0; i < resultFav.length; i++) {
    console.log(resultFav[i].name);

  }
}

function listenLogBtn() {
  const btnLog = document.querySelector(".js-BtnLog");
  btnLog.addEventListener("click", consoleLog);
}
