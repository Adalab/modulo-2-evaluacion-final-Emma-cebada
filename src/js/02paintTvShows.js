"use strict";

// paint tv shows
const paintTvShows = function () {
  let codeHTML = "";
  let imgTvShow;
  for (let i = 0; i < shows.length; i++) {
    let classFav;
    if (resultFav[shows[i].id] != null) {
      classFav = "tvShowItemFav";
    } else {
      classFav = "";
    }
    codeHTML += `<li class="js-tvShowItem ${classFav}" id="${shows[i].id}">`;
    codeHTML += `<h2 class="tvShowName js-tvShowName ${classFav}">${shows[i].name}</h2>`;
    codeHTML += `<div class="tvShowContainer js-tvShowContainer ${classFav}">`;
    codeHTML += `<div class="tvShowContainerItem ${classFav}">`;
    if (shows[i].image === null) {
      imgTvShow = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV`;
    } else {
      imgTvShow = shows[i].image.medium;
    }
    codeHTML += `<img class="tvShowImg js-tvShowImg" src="${imgTvShow}" alt="Imagen de ${shows[i].name}" title="Imagen de ${shows[i].name}"/>`;
    codeHTML += `</div>`;
    codeHTML += `</div>`;
    codeHTML += `</li>`;
  }
  const eachTvShow = document.querySelector(".js-listResult");
  eachTvShow.innerHTML = codeHTML;
};

// paint tv shows favorites list
const paintTvShowsFav = function () {
  let codeHTML = `<div><h2 class="subTittle js-subTitle">Mis series favoritas:</h2>`;
  let imgTvShow;
  for (let i = 0; i < resultFav.length; i++) {
    if (resultFav[i] != null) {
      let classFav;
      const favIndex = resultFav.indexOf(resultFav[i].id);
      const favorite = favIndex !== -1;
      if (favorite === true) {
        classFav = "tvShowItemFav";
      } else {
        classFav = "";
      }
      codeHTML += `<div>`;
      codeHTML += `<li>`;
      codeHTML += `<h2>${resultFav[i].name}`;
      if (resultFav[i].image === null) {
        imgTvShow = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV`;
      } else {
        imgTvShow = resultFav[i].image.medium;
      }
      codeHTML += `<img class="tvShowImgFav js-tvShowImg" src="${imgTvShow}" alt="Imagen de ${resultFav[i].name}" title="Imagen de ${resultFav[i].name}"/>`;
      codeHTML += `<button class="delete-btn js-delete-btn" id="${resultFav[i].id}">X</button>`;
      codeHTML += `</li>`;
      codeHTML += `</div>`;
    }
  }
  const eachTvShow = document.querySelector(".js-favoriteList");
  eachTvShow.innerHTML = codeHTML;
  listenDeleteBtn();
  listenResetBtn();
}


