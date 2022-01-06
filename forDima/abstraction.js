//realisation without abstraction

const check = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no'
  console.log(result)
}

//realisation with abstraction

const isEven = (number) => number % 2 === 0 //this is abstraction
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no'
  console.log(result)
}
