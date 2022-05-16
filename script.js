var numOnDisplay = "0"
var operator = ""
var number1 = 0
var number2 = 0

document.getElementById("display").innerHTML = numOnDisplay

document.getElementById("num0").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "0"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "0"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num1").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "1"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "1"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num2").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "2"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "2"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num3").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "3"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "3"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num4").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "4"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "4"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num5").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "5"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "5"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num6").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "6"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "6"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num7").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "7"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "7"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num8").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "8"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "8"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num9").addEventListener("click", (e) => {
    if(numOnDisplay.length == 1 && numOnDisplay == "0"){
        numOnDisplay = "9"
        document.getElementById("display").innerHTML = numOnDisplay
    }else{
        numOnDisplay = numOnDisplay + "9"
        document.getElementById("display").innerHTML = numOnDisplay
    }
})

document.getElementById("num.").addEventListener("click", (e) => {
    numOnDisplay = numOnDisplay + "."
    document.getElementById("display").innerHTML = numOnDisplay
})

document.getElementById("num+").addEventListener("click", (e) => {
    number1 = numOnDisplay
    numOnDisplay = numOnDisplay + "+"
    operator = "+"

    document.getElementById("display").innerHTML = numOnDisplay
})

document.getElementById("num-").addEventListener("click", (e) => {
    number1 = numOnDisplay
    numOnDisplay = numOnDisplay + "-"
    operator = "-"

    document.getElementById("display").innerHTML = numOnDisplay
})

document.getElementById("num*").addEventListener("click", (e) => {
    number1 = numOnDisplay
    numOnDisplay = numOnDisplay + "*"
    operator = "*"

    document.getElementById("display").innerHTML = numOnDisplay
})

document.getElementById("num/").addEventListener("click", (e) => {
    number1 = numOnDisplay
    numOnDisplay = numOnDisplay + "/"
    operator = "/"

    document.getElementById("display").innerHTML = numOnDisplay
})

document.getElementById("num=").addEventListener("click", (e) => {
    var vysledek = 0

    if(operator == "+"){
        number2 = numOnDisplay.split('+')[1]
        vysledek = Number(number1) + Number(number2)
        document.getElementById("display").innerHTML = vysledek
    }

    if(operator == "-"){
        number2 = numOnDisplay.split('-')[1]
        vysledek = Number(number1) - Number(number2)
        document.getElementById("display").innerHTML = vysledek
    }

    if(operator == "*"){
        number2 = numOnDisplay.split('*')[1]
        vysledek = Number(number1) * Number(number2)
        document.getElementById("display").innerHTML = vysledek
    }

    if(operator == "/"){
        number2 = numOnDisplay.split('/')[1]
        vysledek = Number(number1) / Number(number2)
        document.getElementById("display").innerHTML = vysledek
    }

    numOnDisplay = "0"
})