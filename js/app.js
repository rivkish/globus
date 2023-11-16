
import {createArrCountries,start} from "./functions.js"
import {declareEvents} from "./bodyEvents.js"

const init=()=>{
    doApi()
}

const doApi= async ()=>{
  let url = " https://restcountries.com/v3.1/all?fields=name,capital,flags,population,languages,latlng,cca3,borders,region";
  let resp = await fetch(url);
  let data = await resp.json();
  createArrCountries(data)
  start()
  declareEvents()
}

init()