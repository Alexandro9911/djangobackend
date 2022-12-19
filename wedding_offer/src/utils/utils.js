const lettersSmall = 'qwertyuiopasdfghjklzxcvbnm'
const lettersBig = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const IDENTIFIER_LENGTH = 25

export const getRandomIdentifier = () => {
  let finalStr = ''
  for(let i = 0; i < IDENTIFIER_LENGTH; i++){
    const caseRandom = randomInteger(0,2)
    switch (caseRandom) {
      case 0: {
        const randomLetter = randomInteger(0,24)
        finalStr += lettersSmall[randomLetter]
        break;
      }
      case 1: {
        const randomLetter = randomInteger(0,24)
        finalStr += lettersBig[randomLetter]
        break;
      }
      case 2: {
        const randomInt = randomInteger(0,8)
        finalStr += randomInt
        break;
      }
    }
  }
  return finalStr
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const parseList = (data) => {
  if(data.length > 0){
    return data.map((item) => {
      return {
        id: item.id,
        identifier: item.identifier,
        name: item.name,
        active: item.active,
        multiple: item.multiple,
        title: item.question_text,
        answers: JSON.parse(item.answer_variants)
      }
    })
  } else {
    return []
  }
}