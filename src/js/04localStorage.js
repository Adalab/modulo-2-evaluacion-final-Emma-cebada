"use strict";

//guardar y coger datos en el localStorage

function setLocalStorageShows() {
  localStorage.setItem("shows", JSON.stringify(shows)); //Esto es para convertir en json el array
}
function setLocalStorageReFav() {
  localStorage.setItem("resultFav", JSON.stringify(resultFav));
}
function getLocalStorage() {
  const localShows = localStorage.getItem("shows");
  const localShowsJson = JSON.parse(localShows); //Esto parsea un json en un objeto
  const localFav = localStorage.getItem("resultFav");
  const localFavJson = JSON.parse(localFav);
  if (localFavJson != null) {
    resultFav = localFavJson;
  }
  if (localShowsJson === null) {
    getDataFromApi();
  } else {
    shows = localShowsJson;
    paintTvShows();
    paintTvShowsFav();
    listenTvShows();
  }
}


// start app
getLocalStorage("shows", shows);
getLocalStorage("resultFav", resultFav);