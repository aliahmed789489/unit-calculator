/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputBox = document.querySelector("#input-box")
const inputBtn = document.querySelector(".box .box-btn") 
const convertedPara1 = document.querySelector("#demo1") 
const convertedPara2 = document.querySelector("#demo2") 
const convertedPara3 = document.querySelector("#demo3") 
const clearEl = document.querySelector("#clear-el")
// fixed values to be converted
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

inputBtn.addEventListener("click", function(){
	let inputValue = inputBox.value
	convertedPara1.innerHTML += `
	${inputValue} meters = ${inputValue*meterToFeet.toFixed(2)} feet | ${inputValue} feet = ${Number(inputValue/meterToFeet).toFixed(2)} meter `

	convertedPara2.innerHTML += `
	${inputValue} liters = ${Number(inputValue*literToGallon).toFixed(2)} gallons | ${inputValue} gallon =
	 ${Number(inputValue*literToGallon).toFixed(2)} liters`

	convertedPara3.innerHTML += `${inputValue} Kilogram = ${Number(inputValue*kilogramToPound).toFixed(2)} pounds | ${inputValue} pounds = 
	${Number(inputValue*kilogramToPound).toFixed(2)} Kilogram`
}) 

/clearEl.addEventListener("click",function(){
		inputBox.value = " "
		convertedPara1.innerHTML = " "
		convertedPara2.innerHTML = " "
		convertedPara3.innerHTML = " "

})