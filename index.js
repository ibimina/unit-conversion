const userInput = document.querySelector("form");
const section = document.querySelector("section");
const userValue = document.querySelector("input");
const resetSection = document.querySelector(".clear");



const calculate = (newValue) => {



let feetCal = Number(newValue) * 3.28084
let feet = feetCal.toFixed(3)

let meterCal = Number(newValue) / 3.28084;
let meter = meterCal.toFixed(3);

let gallonCal = Number(newValue) *0.264172;
let gallon = gallonCal.toFixed(3);

let litresCal = Number(newValue) * 3.78541;
let litres = litresCal.toFixed(3);

let poundsCal = Number(newValue) * 2.20462;
let pounds = poundsCal.toFixed(3);

let kilosCal = Number(newValue) * 0.453592;
let kilos = kilosCal.toFixed(3);


  let html = `
<article class="length"><h2> Length (Meter/Feet)</h2>
<p> ${newValue} meters = ${feet} feet | ${newValue} feet = ${meter} meters</p></article>

<article class="volume"><h2> Volume (Litres/Gallons)</h2>
<p> ${newValue} litres = ${gallon} gallons | ${newValue} gallons = ${litres} litres</p></article>

<article class="mass"><h2> Mass (Kilograms/Pounds)</h2>
<p> ${newValue} kilos = ${pounds} pounds | ${newValue} pounds = ${kilos} kilos</p>
</article>

`;

  section.innerHTML = html;
};

userInput.addEventListener("submit", (e) => {
  e.preventDefault();

  const newValue = userValue.value;

  if (newValue.length) {
    calculate(newValue);

    userValue.value=""
  }
});


resetSection.addEventListener('click',e=>{
e.preventDefault

userValue.value = "";
section.innerHTML = "";


})
