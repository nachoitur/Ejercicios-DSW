import { Property } from "./property.mjs";
import { Service } from "./service.mjs";

export class Office extends Property {
  constructor(id, address, m2, services){
    super(id, address, m2);
    this.services = [];
    services.forEach(service => {
      this.services.push(service)
    });
  }
  getPrice(pPrice){
    let sum = 0;
    this.services.forEach(service =>{
      sum += service.getServicePrice();
    })
    sum += this.m2 * pPrice.getPricePerSqrMeter();
    return sum;
  }
}