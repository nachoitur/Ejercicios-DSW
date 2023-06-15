export class PriceSpecs {
  constructor(pricePerSqrMeter, roomPriceMultiplier, parkingSpaceAdditional, commission) {
    this.pricePerSqrMeter = pricePerSqrMeter;
    this.roomPriceMultiplier = roomPriceMultiplier;
    this.parkingSpaceAdditional = parkingSpaceAdditional;
    this.commission = commission;
  }
  getPricePerSqrMeter(){
    return this.pricePerSqrMeter;
  }
  getRoomPriceMultiplier(){
    return this.roomPriceMultiplier;
  }
  getParkingSpaceAdditional(){
    return this.parkingSpaceAdditional;
  }
  getCommision() {
    return this.commission;
  }
}