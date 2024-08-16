function leetSpeak(text) {

  //MAKE AN ARRAY FOR EACH CHARACTER IN TEXT TURNED INTO UPPERCASE

  let characterArray = text.toUpperCase().split("")
  
  //MAP THE ARRAY AND RETURN REPLACEMENT CHARACTERS

  let leetArray = characterArray.map(character => {
    if (character === "O") return "0"
    if (character === "I" || character === "L") return "1"
    if (character === "Z") return "2"
    if (character === "E") return "3"
    if (character === "A") return "4"
    if (character === "S") return "5"
    if (character === "G") return "6"
    if (character === "T") return "7"
    if (character === "B") return "8"
    return character
  })
  
  //RETURN THE ARRAY FROM THE MAP AS A STRING

  return leetArray.join("")

}

leetSpeak("elite boy")

module.exports = leetSpeak