export class Property {
  constructor(id, address, m2) {
    if(this.constructor == Property){
      throw new Error ("Abstract classes can't be instantiated.")
    } else {
      this.id = id;
      this.address = address;
      this.m2 = m2;
      }
    }
  getPrice(){
  }
  getCommision(pPrice){
    return(this.getPrice(pPrice) * pPrice.getCommision());
  }
}