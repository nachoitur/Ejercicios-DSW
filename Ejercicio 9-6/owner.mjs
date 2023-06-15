export class Owner {
  constructor (id, firstName, lastName, email, properties){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.properties = [];
    properties.forEach(property => {
      this.properties.push(property);
    });
  }
};