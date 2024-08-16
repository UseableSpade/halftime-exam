function fizzBuzz(num1, num2) {
  let numbers = []

  // ENSURE THE NUMBERS ARE ASCENDING BY FINDING THE LOWER AND HIGHER VALUES FROM NUM1 AND NUM 2

  let startingNumber = Math.min(num1, num2) 
  let endingNumber = Math.max(num1, num2)

  //LOGIC TO MAKE THE ARRAY

  for (let i = startingNumber; i <= endingNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push("fizzbuzz")
    } else if (i % 3 === 0) {
      numbers.push("fizz")
    } else if (i % 5 === 0) {
      numbers.push("buzz")
    } else numbers.push(i)
  }

  return numbers
}

module.exports = fizzBuzz