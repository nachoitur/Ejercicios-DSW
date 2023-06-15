import { Property } from "./property.mjs";

export class Garage extends Property {
  constructor(id, address, m2, parkingSpaces){
    super(id, address, m2);
    this.parkingSpaces = parkingSpaces;
  }
  getPrice(pPrice){
    let sum = 0;
    sum += this.m2 * pPrice.getPricePerSqrMeter();
    sum += this.parkingSpaces * pPrice.getParkingSpaceAdditional();
    return sum;
  }
}