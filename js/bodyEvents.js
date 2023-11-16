import { getCountryByName, getAllCountryByName } from "./functions.js"


export const declareEvents = () => {
    let liCountry = document.querySelectorAll(".a")
    let id_search = document.querySelector("#form-search")
    let input_search = document.querySelector("#id_search")
    let select = document.querySelector("#floatingSelect")

    id_search.addEventListener("submit", (e) => {
        e.preventDefault()
        getAllCountryByName(input_search.value)
        input_search.value=""
    })

    select.addEventListener("change",()=>{
        getCountryByName(select.value)
    })

    liCountry.forEach((item) => {
        item.addEventListener("click", () => {
            let _name = item.innerHTML
            if (_name == "UK")
                _name = "United Kingdom"
            else if (_name == "USA")
                _name = "United States"
            getCountryByName(_name)
        })
    })

}