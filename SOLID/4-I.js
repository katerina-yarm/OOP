//Interface Segregation - larger interfaces should be split into smaller ones

class Animal {
  constructor(type) {
    this.type = type
  }
}

const swimmer = {
  swim() {
    console.log(`${this.type} can swim`)
  }
}

const flier = {
  fly() {
    console.log(`${this.type} can fly`)
  }
}

const walker = {
  walk() {
    console.log(`${this.type} can walk`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Dog')
const eagle = new Eagle('Eagle')
const whale = new Whale('Whale')

dog.swim()
dog.walk()

eagle.fly()
eagle.walk()

whale.swim()
