"use strict";

//pintar las series
console.log(shows.name);
const paintTvShows = function () {
  let codeHTML = "";
  let imgTvShow;
  for (let i = 0; i < shows.length; i++) {
    codeHTML += `<li class="js-tvShowItem" id="${i}>`;
    codeHTML += `<h2 class="js-tvShowName">${shows[i].name}</h2>`;
    codeHTML += `<div class="js-tvShowContainer">`;
    if (shows[i].image === null) {
      imgTvShow = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV`;
    } else {
      imgTvShow = shows[i].image.medium;
    }
    codeHTML += `<img class="js-tvShowImg" src="${imgTvShow}" alt="Imagen de ${shows[i].name}"/>`;
    codeHTML += `</div>`;
    codeHTML += `</li>`;
  }
  const eachTvShow = document.querySelector(".js-listResult");
  eachTvShow.innerHTML = codeHTML;
};

