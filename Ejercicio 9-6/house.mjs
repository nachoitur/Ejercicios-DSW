import { Property } from "./property.mjs";

export class House extends Property {
  constructor(id, address, m2, roomQtty){
    super(id, address, m2);
    this.roomQtty = roomQtty;
  }
  getPrice(pPrice){
    return(this.m2 * pPrice.getPricePerSqrMeter() * this.roomQtty * pPrice.getRoomPriceMultiplier());
  }
}