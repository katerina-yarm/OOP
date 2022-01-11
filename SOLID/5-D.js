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

class ProfessionalKnife {
  getTool() {
    return 'professional knife'
  }
}

class KnifeFromTheFirstPlaceOfWork {
  getTool() {
    return 'knife from first place of work'
  }
}

//const cook = new Cook(new KnifeFromTheFirstPlaceOfWork())
const cook = new Cook(new ProfessionalKnife())

console.log(cook.cook())
