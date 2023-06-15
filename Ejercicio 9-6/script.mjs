import { Garage } from "./garage.mjs";
import { House } from "./house.mjs";
import { Office } from "./office.mjs";
import { Owner } from "./owner.mjs";
import { PriceSpecs } from "./priceSpecs.mjs";
import { Property } from "./property.mjs";
import { Service } from "./service.mjs";

let precios = new PriceSpecs(25, 1.25, 4, 1.10);

let casa = new House(1, "Avenida Siempreviva 123", 125, 2);
// console.log(casa)
// console.log(casa.getPrice(precios));
// console.log(casa.getCommision(precios));
let garage = new Garage(2, "Avenida Siempreviva 456", 50, 10);
// console.log(garage)
// console.log(garage.getPrice(precios));
// console.log(garage.getCommision(precios));

const servicios = [];
let servicio1 = new Service(225);
let servicio2 = new Service(750);
servicios.push(servicio1);
servicios.push(servicio2);
// console.log(servicios)

let oficina = new Office(3, "Avenida Siempreviva 789", 75, servicios)
// console.log(oficina);
// console.log(oficina.getPrice(precios));
// console.log(oficina.getCommision(precios));

const propiedades = [];
propiedades.push(casa);
propiedades.push(garage);
propiedades.push(oficina);
let dueño = new Owner(1, "Pepe", "Coso", "pepecoso@gmail.com", propiedades);
// console.log(dueño)

// let clase = new Property(); para probar que no se puede instanciar la clase