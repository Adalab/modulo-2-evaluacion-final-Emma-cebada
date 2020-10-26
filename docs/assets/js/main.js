"use strict";const btn=document.querySelector(".js-button"),listResult=document.querySelector(".js-listResult");let shows=[],resultFav=[];function getDataFromApi(){const t=document.querySelector(".js-tvShow").value;fetch("http://api.tvmaze.com/search/shows?q="+t).then(t=>t.json()).then(t=>{if(0===t.length)listResult.innerHTML='<p class="paragraphFail">No se han encontrado coincidencias</p>';else{for(let e=0;e<t.length;e++)shows[e]=t[e].show;setLocalStorageShows(),paintTvShows(),listenTvShows()}})}btn.addEventListener("click",getDataFromApi);const paintTvShows=function(){let t,e="";for(let s=0;s<shows.length;s++){let o;o=null!=resultFav[shows[s].id]?"tvShowItemFav":"",e+=`<li class="js-tvShowItem ${o}" id="${shows[s].id}">`,e+=`<h2 class="tvShowName js-tvShowName ${o}">${shows[s].name}</h2>`,e+=`<div class="tvShowContainer js-tvShowContainer ${o}">`,e+=`<div class="tvShowContainerItem ${o}">`,t=null===shows[s].image?"https://via.placeholder.com/210x295/ffffff/666666/?text=TV":shows[s].image.medium,e+=`<img class="tvShowImg js-tvShowImg" src="${t}" alt="Imagen de ${shows[s].name}" title="Imagen de ${shows[s].name}"/>`,e+="</div>",e+="</div>",e+="</li>"}document.querySelector(".js-listResult").innerHTML=e},paintTvShowsFav=function(){let t,e='<div><h2 class="subTittle js-subTitle">Mis series favoritas:</h2>';for(let s=0;s<resultFav.length;s++)if(null!=resultFav[s]){let o;o=!0===(-1!==resultFav.indexOf(resultFav[s].id))?"tvShowItemFav":"",e+="<div>",e+="<li>",e+="<h2>"+resultFav[s].name,t=null===resultFav[s].image?"https://via.placeholder.com/210x295/ffffff/666666/?text=TV":resultFav[s].image.medium,e+=`<img class="tvShowImgFav js-tvShowImg" src="${t}" alt="Imagen de ${resultFav[s].name}" title="Imagen de ${resultFav[s].name}"/>`,e+=`<button class="delete-btn js-delete-btn" id="${resultFav[s].id}">X</button>`,e+="</li>",e+="</div>"}document.querySelector(".js-favoriteList").innerHTML=e,listenDeleteBtn(),listenResetBtn()},favoritesTvShows=function(t){const e=parseInt(t.currentTarget.id);if(!1===(-1!==resultFav.indexOf(e))){for(let t=0;t<shows.length;t++)e===shows[t].id&&(resultFav[e]=shows[t]);setLocalStorageReFav(),paintTvShows(),paintTvShowsFav(),listenTvShows()}};function listenTvShows(){const t=document.querySelectorAll(".js-tvShowItem");for(const e of t)e.addEventListener("click",favoritesTvShows)}const favoritesDeleteTvShows=function(t){const e=parseInt(t.currentTarget.id);for(let t=0;t<resultFav.length;t++)null!=resultFav[t]&&e===resultFav[t].id&&(resultFav[e]=null);setLocalStorageReFav(),paintTvShowsFav()};function listenDeleteBtn(){const t=document.querySelectorAll(".js-delete-btn");for(const e of t)e.addEventListener("click",favoritesDeleteTvShows)}const favoritesResetTvShows=function(t){const e=parseInt(t.currentTarget.id);!1===(-1!==resultFav.indexOf(e))&&(resultFav.length=0),setLocalStorageReFav(),paintTvShowsFav()};function listenResetBtn(){document.querySelector(".js-resetBtn").addEventListener("click",favoritesResetTvShows)}function setLocalStorageShows(){localStorage.setItem("shows",JSON.stringify(shows))}function setLocalStorageReFav(){localStorage.setItem("resultFav",JSON.stringify(resultFav))}function getLocalStorage(){const t=localStorage.getItem("shows"),e=JSON.parse(t),s=localStorage.getItem("resultFav"),o=JSON.parse(s);null!=o&&(resultFav=o),null===e?getDataFromApi():(paintTvShowsFav(),listenTvShows())}getLocalStorage("shows",shows),getLocalStorage("resultFav",resultFav);