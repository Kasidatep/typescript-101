"use strict";
class Pet {
    constructor(name, type, owner, birthYear) {
        this.name = name;
        this.type = type;
        this.owner = owner;
        this.birthYear = birthYear;
    }
    getAge() {
        return (new Date().getFullYear()) - this.birthYear;
    }
    getProfile() {
        return `Name: ${this.name} Type: ${this.type} Owner: ${this.owner} Age: ${this.getAge()}`;
    }
    getOwner() {
        return this.owner;
    }
    setOwner(owner) {
        this.owner = owner;
    }
}
let myPet = new Pet("Su ki", "Dog", "Kasidate", 2015);
console.log(myPet.getProfile()); // Name: Su ki Type: Dog Owner: Kasidate Age: 9
myPet.setOwner("Somchai");
console.log(myPet.getProfile()); // Name: Su ki Type: Dog Owner: Somchai Age: 9
// access modifier ** default is public
// public => can access everywhere
// private => can access only inside class
// protected => can access only inside class and subclass
class Animal {
    constructor(name, type, owner) {
        this.name = name;
        this.type = type;
        this.owner = owner;
    }
    getProfile() {
        return `Name: ${this.name} Type: ${this.type} Owner: ${this.owner}`;
    }
}
let myAnimal = new Animal("Su ki", "Dog", "Kasidate");
console.log(myAnimal.name); // Su ki
// console.log(myAnimal.type); // error because type is private can access only inside class
// console.log(myAnimal.owner); // error because owner is protected can access only inside class and subclass
