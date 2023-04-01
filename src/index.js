import "./assets/styles/styles.scss";

//import tabJoursEnOrdre from './Utilitaire/gestionTemps.js';

// console.log("DEPUIS MAIN JS:" + tabJoursEnOrdre);

const CLEFAPI = '8e9391f167c17b3253b145b2a036ffd4';
let resultatsAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const joursDiv = document.querySelectorAll('.jour-prevision-nom');
const tempJoursDiv = document.querySelectorAll('.jour-prevision-temp');
const imgIcone = document.querySelector('.logo-meteo');
const chargementContainer = document.querySelector('.overlay-icone-chargement');

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        // console.log(position);
        let long = '46.474431';
        let lat = '0.614835';
        AppelAPI(long,lat);

    }, () => {
      
    })
}

function AppelAPI(long, lat) {

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=46.474431&lon=0.614835&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        // console.log(data);

        resultatsAPI = data;

        temps.innerText = resultatsAPI.current.weather[0].description;
        temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°`
        localisation.innerText = resultatsAPI.timezone;


        // les heures, par tranche de trois, avec leur temperature.

        let heureActuelle = new Date().getHours();

        for(let i = 0; i < heure.length; i++) {

            let heureIncr = heureActuelle + i * 3;

            if(heureIncr > 24) {
                heure[i].innerText = `${heureIncr - 24} h`;
            } else if(heureIncr === 24) {
                heure[i].innerText = "00 h"
            } else {
                heure[i].innerText = `${heureIncr} h`;
            }

        }

        // temp pour 3h
        for(let j = 0; j < tempPourH.length; j++) {
            tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°C`
        }


        // trois premieres lettres des jours 

        for(let k = 0; k < tabJoursEnOrdre.length; k++) {
            joursDiv[k].innerText = tabJoursEnOrdre[k].slice(0,3);
        }


        // Temps par jour
        for(let m = 0; m < 7; m++){
            tempJoursDiv[m].innerText = `${Math.trunc(resultatsAPI.daily[m + 1].temp.day)}°C`
        }

        // Icone dynamique 
         if(heureActuelle >= 6 && heureActuelle < 21) {
             imgIcone.src = `assets/images/${resultatsAPI.current.weather[0].icon}.svg`
         } else  {
            imgIcone.src = `assets/images/${resultatsAPI.current.weather[0].icon}.svg`
         }


         chargementContainer.classList.add('disparition');

    })

}