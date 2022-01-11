//Dependency Inversion -  high-level module shoud not depend on low-level modules
//                     -  instead of high-level modules depending on low-level modules, both will depend on abstractions

class Cook {
  constructor(tool) {
    this.tool = tool
  }

  cook() {
    return `I am cooking with help of ${this.tool.getTool()}`
  }
}

class KnifeFromTheFirstPlaceOfWork {
  constructor() {
    this.knife = new FirstPlace()
  }

  getTool() {
    return this.knife.get()
  }
}



class FirstPlace {
  get() {
    return `knife from first place of work`
  }
}

const cook = new Cook(new KnifeFromTheFirstPlaceOfWork())
console.log(cook.cook())
