export default class CountryClass {
    constructor(_parent, _item,_initMap,_getCountryByCode,_getCountryByName) {
      this.parent = _parent;
      this.name = _item.name.common;
      this.population = _item.population.toLocaleString();
      this.capital = _item.capital ? _item.capital : "none";
      this.languages = _item.languages ?  Object.keys(_item.languages) : "none";
      this.flag = _item.flags.png;
      this.lat = _item.latlng[0];
      this.lon = _item.latlng[1];
      this.code = _item.cca3;
      this.borders = _item.borders;
      this.region=_item.region
      this.initMap=_initMap
      this.getCountryByCode=_getCountryByCode;
      this.getCountryByName=_getCountryByName;
    }
    render() {
      this.initMap(this.lat,this.lon)
      let myDiv = document.createElement("div");
      myDiv.className = "";
      document.querySelector(this.parent).append(myDiv);
      document.querySelector(this.parent).className = "row";
      myDiv.innerHTML = `
      <div class="card my-5 countryCard" data-aos="zoom-in-up" data-aos-duration="1000" >
      <div id="map"></div>
      <div class="d-flex flex-wrap g-0">
          <div class="box">
            <img src=${this.flag} class="img-fluid" alt=${this.name}  style="height:400px; width: 100%;">
          </div>
          <div class="box1">
            <div class="card-body">
              <h5 class="card-title display-6">${this.name}</h5>
              <p class="card-text"><b>Region: </b> ${this.region}</p>
              <p class="card-text"><b>Capital: </b>${this.capital}</p>
              <p class="card-text"><b>Population: </b>${this.population}</p>
              <p class="card-text"><b>languages: </b>${this.languages}</p>
              <div id="btnBorder">
              <p class="card-text" id="border"></p>
               
              </div>
            </div>
          </div>
        </div>
    </div>
        `;
  
      if (this.borders) {
        if(this.borders.length>0){
        document.querySelector("#border").innerHTML=`<b>borders: </b>`
        this.borders.forEach(element => {
          let btn = document.createElement("button");
          btn.className = "btn"
          btn.innerHTML = this.getCountryByCode(element);
          document.querySelector("#btnBorder").append(btn);
          btn.addEventListener("click", () => {
            this.getCountryByName(this.getCountryByCode(element));
          });         
        });}
      } 
  
      
 
    }
  }
  