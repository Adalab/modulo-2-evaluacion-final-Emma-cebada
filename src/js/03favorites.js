"use strict";

// escuhar un click sobre una serie
// marcarla como favorita

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
  } else {
    resultFav.splice(clicked, 1);
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

// const getFilterClassName = tvShowIndex => {
//   const tvShowSerie = tvShowsSeries[tvShowIndex];
//   const name = tvShowSerie.name.toLowerCase();
//   const tvShowValue = tvShow.value.toLowerCase();
//   if (name.includes(tvShowValue)) {
//     return "";
//   } else {
//     return "tvShowItemHidden";
//   }
// };