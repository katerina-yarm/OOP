//Open for Extension, Closed for Modification
class Guitar {
  constructor(options) {
    this.type = options.type
    this.model = options.model
    this.strings = options.strings
  }
}

class RockAndRollGuitar extends Guitar {
  constructor(options) {
    super(options)
    this.color = options.color
  }
}

const guitar = new RockAndRollGuitar({
  type: 'Electric',
  model: 'Electric Guitar #8',
  strings: 8,
  color: 'Cool color'
})

console.log(guitar)
