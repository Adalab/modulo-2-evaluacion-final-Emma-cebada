'use strict';

const btn = document.querySelector(".js-button");
const listResult = document.querySelector(".js-listResult");
let shows = [];
let resultFav = [];

//pedir series al servidor
function getDataFromApi() {
  const inputValue = document.querySelector(".js-tvShow").value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        listResult.innerHTML = `<p class="paragraphFail">No se han encontrado coincidencias</p>`;
      } else {
        for (let i = 0; i < data.length; i++) {
          shows[i] = data[i].show;
        }
        setLocalStorageShows();
        paintTvShows();
        listenTvShows();
      }
    })
};
btn.addEventListener("click", getDataFromApi);
