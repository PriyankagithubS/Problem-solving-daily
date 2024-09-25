function Car(make, model) {
    this.make = make;
    this.model = model;
}
const myCar = new Car("Toyota", "Corolla");
const cars=new Car("Honda","City")
console.log(myCar.model); 
console.log(`make:${cars.make}  model:${cars.model}`); 
