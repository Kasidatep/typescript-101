"use strict";
// class inheritance
// inheritance is a feature that allows us to create a new class from an existing class
// subclass is a class that inherits from another class
// superclass is a class that is inherited from another class
// extends keyword is used to inherit from a class
// super keyword is used to call the constructor of the superclass
class Car {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    getProfile() {
        return `Name: ${this.name} Brand: ${this.brand} Price: ${this.price}`;
    }
}
class SportCar extends Car {
    constructor(name, brand, price, maxSpeed) {
        super(name, brand, price);
        this.maxSpeed = maxSpeed;
    }
    getProfile() {
        return `Name: ${this.name} Brand: ${this.brand} MaxSpeed: ${this.maxSpeed}`;
        // cannot access this.price because price is private can access only inside class
        // but can access this.name and this.brand because name and brand is protected can access inside class and subclass
    }
}
let myCar = new Car("Civic", "Honda", 1000000);
console.log(myCar.getProfile()); // Name: Civic Brand: Honda Price: 1000000
let mySportCar = new SportCar("Civic", "Honda", 1000000, 200);
console.log(mySportCar.getProfile()); // Name: Civic Brand: Honda MaxSpeed: 200
// console.log(mySportCar.price); // error because price is private can access only inside class
// console.log(mySportCar.name); // error because name is protected can access only inside class and subclass can not access outside class
console.log(mySportCar.brand); //  can access everywhere
// static method and static property
// static method is a method that can be called without creating an instance of the class
// static property is a property that can be called without creating an instance of the class
// static method and static property can be called only inside class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.id++;
    }
    getId() {
        return Product.id;
    }
    static getProfile() {
        return `Id: ${Product.id} Name: ${this.name}`;
    }
    getName() {
        return this.name;
    }
    setPrice(price) {
        this.price = price;
    }
    getProduct() {
        return Product.getProfile();
    }
}
Product.id = 0; // static property is a property that can be called without creating an instance of the class
let myProduct = new Product("Book", 100);
console.log(myProduct.getName()); // Book
myProduct.setPrice(200);
console.log(myProduct);
console.log(myProduct.getId()); // 1
console.log(Product.getProfile()); // Id: 1 Name: undefined
console.log(myProduct.getProduct()); // Id: 1 Name: undefined
// abstract class
// example of abstract class 
// abstract class is a class that can not be instantiated
// abstract method is a method that must be implemented in the subclass
class Stock {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// let myStock = new Stock("Stock", 100); // error because Stock is abstract class can not be instantiated
class StockA extends Stock {
    constructor(name, price) {
        super(name, price);
    }
    getProfile() {
        return `Name: ${this.name} Price: ${this.price}`;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
let myStockA = new StockA("StockA", 100);
console.log(myStockA.getProfile()); // Name: StockA Price: 100
console.log(myStockA.getName()); // StockA
console.log(myStockA.getPrice()); // 100
