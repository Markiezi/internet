//Первое задание
const age = document.querySelector('#inputAge')
const result = document.querySelector('#resultFirstExercise')

function getAge(age) {
    age++
    return age.toString()
}

age.addEventListener("input", () => {
    result.textContent = "Ответ: "
    result.textContent += getAge(age.value)
})

//Второе задание
const number = document.querySelector('#inputNumber')
const divider = document.querySelector('#inputDivider')
const result1 = document.querySelector('#resultSecondExercise')

function getRemainder(number, divider) {
    return number % divider.toString()
}

number.addEventListener("input", () => {
    result1.textContent = "Ответ: "
    result1.textContent += getRemainder(number.value, divider.value)
})

divider.addEventListener("input", () => {
    result1.textContent = "Ответ: "
    result1.textContent += getRemainder(number.value, divider.value)
})

//Третье задание
const faceAge = document.querySelector('#inputFaceAge')
const result2 = document.querySelector('#resultThirdExercise')

function faceControl(age) {
    if (age >= 18) 
        return "Welcome"
    else
        return "Отказ"
}

faceAge.addEventListener("input", () => {
    result2.textContent = "Ответ: "
    result2.textContent += faceControl(faceAge.value)
})

//Четвертое задание
const age1 = document.querySelector('#inputNextAge')
const result3 = document.querySelector('#resultFourthExercise')

function getNextAge(age) {
    if (age == "") 
        return "0"
    else {
        age++
        return age
    }
        
}

age1.addEventListener("input", () => {
    result3.textContent = "Ответ: "
    result3.textContent += getNextAge(age1.value)
})

//Пятое задание
const height = document.querySelector('#input')
const result4 = document.querySelector('#resultFifthExercise')

function canRide(height) {
    return height >= 140
}

height.addEventListener("input", () => {
    result4.textContent = "Ответ: "
    result4.textContent += canRide(height.value)
})