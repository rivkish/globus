import CountryCardClass from "./countryCardClass.js"
import CountryClass from "./countryClass.js"

let allCountries = []

let countriesFirst = [
    "United States",
    "Israel",
    "United Kingdom",
    "France",
    "Thailand"
]

export const getCountryByName = async (_name) => {
    document.querySelector("#id_parent").innerHTML = ""
    let obgCountry = allCountries.filter(item => item.name.common.toLowerCase() == _name.toLowerCase())
    let country = new CountryClass("#id_parent", obgCountry[0],initMap,getCountryByCode,getCountryByName)
    country.render()
}
export const getAllCountryByName = async (_name) => {
    document.querySelector("#id_parent").innerHTML = ""
    let arrCounties = allCountries.filter(item => item.name.common.toLowerCase().includes(_name.toLowerCase()))
    if(arrCounties.length>0)
    arrCounties.forEach(_item => {
        let country = new CountryCardClass("#id_parent", _item, getCountryByName)
        country.render()
    })
    else
    document.querySelector("#id_parent").innerHTML = `<h2 class="text-white text-center">No country found named ${_name}</h2>`
}
export const getCountryByCode=(_code)=>{
    let s=allCountries.filter(item=>item.cca3==_code)[0].name.common
  return s
}


export const start = () => {
    document.getElementById("spinner").style.display="none"
    let startCountries = []
    let optionArr=[]
    startCountries = allCountries.filter(item => {
          optionArr.push(item.name.common)  
        return countriesFirst.includes(item.name.common)
    })
    startCountries.forEach(_item => {
        let country = new CountryCardClass("#id_parent", _item, getCountryByName)
        country.render()
    })
    optionArr = _.sortBy(optionArr)
optionArr.forEach(item=>{
    document.querySelector("#floatingSelect").innerHTML +=
    `<option value="${item}">${item}</option>`
})
}

export const createArrCountries = (_data) => {
    allCountries = _data
    allCountries=_.sortBy(allCountries,"name.common")
}

export async function initMap(_lat,_lng) {
    const position = { lat: _lat, lng: _lng};
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    let map = new Map(document.getElementById("map"), {
    
      zoom: 6,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
  
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }



