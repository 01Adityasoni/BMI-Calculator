const form = document.querySelector('form') // get the form element

form.addEventListener('submit', function(e) { // add submit event listener
    e.preventDefault()// prevent form from submitting

const height = parseInt(document.querySelector('#height').value); // get height value and convert to integer
const weight = parseInt(document.querySelector('#weight').value); // get weight value and convert to integer
const result = document.querySelector('#result');// get the result div
const message = document.querySelector('#message');// get the message div

// validate the input

if (isNaN(height) || height <= 0 || height ==='') { // check if height is a valid number
    result.innerHTML = `Please enter valid height: ${height}`;// show error message
} else if (isNaN(weight) || weight <= 0 || weight ==='') {// check if weight is a valid number
    result.innerHTML = `Please enter valid weight: ${weight}`;// show error message
} else {// if both inputs are valid
    // calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);// BMI formula
    // show the result
    result.innerHTML = `<span>${bmi}</span>`;       // display BMI value
if(bmi < 18.6){
    message.innerHTML =`<span>you are under weight</span>`; // display underweight message
}
else if(bmi >= 18.6 && bmi < 24.9){
    message.innerHTML =`<span>you are normal weight</span>`; // display normal weight message
}
else if(bmi >= 24.9 && bmi < 29.9){
    message.innerHTML =`<span>you are over weight</span>`; // display overweight message
}
else{
    message.innerHTML =`<span>you are obese</span>`; // display obese message
}
}

})