const numberOne = document.querySelector('#value1')
const numberTwo = document.querySelector('#value2')
const numberThree = document.querySelector('#value3')

increaseNumber(0.1, 5000, numberOne)

function increaseNumber(numberFrom, numberTo, elem) {
    let step = (numberFrom / numberTo) * 100

    elem.textContent = Math.round(numberFrom += step)

    // console.log(step)
    
    if (numberFrom <= numberTo) {
        // setTimeout(() => increaseNumber(numberFrom, numberTo, elem), time)
        requestAnimationFrame(() => increaseNumber(numberFrom, numberTo, elem))
    }
    else if (numberFrom > numberTo) {
        numberFrom = numberTo
        elem.textContent = numberFrom
    }
}
