let parkingForm = document.getElementById('parking-form')

let nameField = document.getElementById('name-field')
let carYear = document.getElementById('car-year')
let carMake = document.getElementById('car-make')
let carModel = document.getElementById('car-model')
let startDate = document.getElementById('start-date')
let days = document.getElementById('days')
let creditCard = document.getElementById('credit-card')
let cvv = document.getElementById('cvv')
let expiration = document.getElementById('expiration')

parkingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName();
    validateCarYear();
    validateCarMake();
    validateCarModel();
    validateStartDate();
    validateDays();
    validateCreditCard();
    validateCvv();
    validateExpiration();

}
)

// need a function for each element ID
// also need to make each required
// submit button should do all the validation, not each field

//  This is what James A. had
//     if (/\d/.test(nameField.value) === true || nameField.value === '') {
//     nameField.classList.remove('input-valid')
//     nameField.classList.remove('input-invalid')
// } else {
//     nameField.classList.remove('input-invalid')
//     nameField.classList.remove('input-valid')

// }






function validateName(input) {

    let errorEl = document.createElement('p')
    errorEl.id = 'name-error'
    // found this name regEx
    let regExName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    // copied 51-69 from today's example and tried to change getElementById Id's to match, pretty sure it doesn't work
    if (regExName.test(input.value)) {
        input.classList.remove('invalid')
        input.classList.add('valid')

    } else if input.value === '' {
        errorEl.innerText = 'name is required'
        document.getElementById('name-field').appendChild(errorEl)
        input.classList.remove('valid')
    }

    else {
        if (document.getElementById('name-error')) {
            document.getElementById('name-error').remove()
        }
        errorEl.innerText = 'Must enter valid name'
        document.getElementById('nameField').appendChild(errorEl)
        input.classList.remove('valid')
        input.classList.add('invalid')
    }

}
function validateCarYear(input) {
    let errorEl = document.createElement('p')
    errorEl.id = "cay-year-error"

    if ((input.value) => 1901 && =< (moment(input.value).isBefore(now))) { 
        input.classList.remove('invalid')
        input.classList.add('valid')
        if (document.getElementById('start-date-error')) {
            document.getElementById('start-date-error').remove()
        }
        checkinInput.classList.remove('invalid')
        checkinInput.classList.add('valid')}

function validateCarMake(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"

    if (condition) {
        
    } else {
        
    }
}

function validateCarModel(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (condition) {
        
    } else {
        
    }
}

function validateStartDate (input) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (moment(input.value).isBefore(now)) {
        errorEl.innerText = "You must choose a date after today"
        document.getElementById('check-in-div').appendChild(errorEl)
        console.log('date must be after today')
        checkinInput.classList.add('invalid')

    } else {
        if (document.getElementById('start-date-error')) {
            document.getElementById('start-date-error').remove()
        }
        checkinInput.classList.remove('invalid')
        checkinInput.classList.add('valid')
    }
}

function validateStartDate(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (condition) {
        
    } else {
        
    }
}

function validateDays(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (condition) {
        
    } else {
        
    }
}

function validateCreditCard(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (condition) {
        
    } else {
        
    }
}

function Cvv(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (condition) {
        
    } else {
        
    }
}

function ValidateExpiration(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (condition) {
        
    } else {
        
    }
}




