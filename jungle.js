class Animal {
    #name;
    #species;
    #energy;

    static remainingAnimals = 0

    constructor(name, species, energy){
        Animal.remainingAnimals ++
        this.#name = name;
        this.#species = species; 
        this.#energy = energy;
    }

    get name(){
        return this.#name
    }
    set name(value){
        this.#name = value 
    }

    get species(){
        return this.#species
    }
    set species(value){
        this.#species = value 
    }

    get energy(){
        return this.#energy
    }
    set energy(value){
        this.#energy = value 
    }

    attack(target, damage, attackWord){
        if(target.energy === 0){
            console.log(`${target.name} was out of energy already.`)
        }else{
            console.log(`${this.#name} ${attackWord}attack ${target.name}!`)
            this.#energy -= damage
            target.energy -= damage
            console.log(`${this.#name}'s energy: ${this.#energy}`)
            console.log(`${target.name}'s energy: ${target.energy}`)
            if(target.energy <= 0 && this.#energy <= 0){
                console.log(`${this.#name} and ${target.name} lost!`)
                Animal.remainingAnimals -= 2
            }else if(target.energy <= 0){
                console.log(`${this.#name} wins! ${target.name} is out of energy!`)
                Animal.remainingAnimals --
            }else if(this.#energy <= 0){
                console.log(`${target.name} wins! ${this.#name} is out of energy!`)
                Animal.remainingAnimals --
            }
        }
    }

    eat(regain){
        this.#energy += regain
        console.log(`${this.#name} eats and gains energy! ${this.#name}'s energy: ${this.#energy}`)
    }
}

class Bird extends Animal {
    #canFly;
    constructor(name, species, canFly){
        super(name, species, 100)
        this.#canFly = canFly
    }

    get canFly(){
        return this.#canFly
    }
    set canFly(value){
        this.#canFly = value 
    }
    attack(target){
        super.attack(target, 20, "swoops in to ")
    }

    eat(){
        super.eat(10)
    }

    fly(){
        return `${super.name} ${this.#canFly ? "can" : "can't"} fly!`
    }
}

class Mammal extends Animal {
    #furColor;
    constructor(name, species, furColor){
        super(name, species, 200)
        this.#furColor = furColor
    }

    get furColor(){
        return this.#furColor
    }
    set furColor(value){
        this.#furColor = value 
    }

    attack(target){
        super.attack(target, 50, "lunges to ")
    }

    eat(){
        super.eat(20)
    }

    furColor(){
        return `${super.name}'s furColor is ${this.#furColor}!`
    }
}

class Reptile extends Animal {
    #coldBlooded;
    constructor(name, species, coldBlooded){
        super(name, species, 100)
        this.#coldBlooded = coldBlooded
    }

    get coldBlooded(){
        return this.#coldBlooded
    }
    set coldBlooded(value){
        this.#coldBlooded = value 
    }
    attack(target){
        super.attack(target, 30, "")
    }

    eat(){
        super.eat(15)
    }

    coldBlooded(){
        return `${super.name} ${this.#coldBlooded ? "is" : "isn't"} coldBlooded!`
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
snake.attack(eagle);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
