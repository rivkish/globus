export default class CountryCardClass {
    constructor(_parent, _item,_getCountryByName) {
        this.getCountryByName=_getCountryByName
      this.parent = _parent;
      this.name = _item.name.common;
      this.flag = _item.flags.png;
    } 
    render() {
      let myDiv = document.createElement("div");
      myDiv.className = "d-flex col-md-6 col-lg-4 justify-content-center my-3 text-center";
      document.querySelector(this.parent).append(myDiv);
      myDiv.innerHTML += `
      <div class="card h-100"  data-aos="zoom-in-up" data-aos-duration="1000" style="width:400px;cursor: pointer;">
      <img src="${this.flag}" class="card-img-top  shadow" width="100%" alt="${this.name}" style="height:250px">
      <div class="card-body" >
      <p class=" card-text Mcard-text m-0 p-3">Name: ${this.name} </p>
      </div>
      </div>
      `;
      myDiv.querySelector(".card").addEventListener("click", () => {
        document.querySelector("#id_parent").innerHTML = "";
        this.getCountryByName(this.name)
      });
  
  
    }
  }
  