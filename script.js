const parkingForm = document.getElementById('parking-form')

const nameField = document.getElementById('name-field')
const carYear = document.getElementById('car-year')
const carMake = document.getElementById('car-make')
const carModel = document.getElementById('car-model')
const startDate = document.getElementById('start-date')
const days = document.getElementById('days')
const creditCard = document.getElementById('credit-card')
const cvv = document.getElementById('cvv')
const expiration = document.getElementById('expiration')

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
if (/\d/.test(nameField.value) === true || nameField.value === '') {
    nameField.classList.remove('input-valid')
    nameField.classList.remove('input-invalid')
} else {
    nameField.classList.remove('input-invalid')
    nameField.classList.remove('input-valid')

}





function validateName(input) {
    let errorEl = document.createElement('p')
    errorEl.id = 'name error'
    if (input.value ==) {
        
    } else {
        
    }
}
function validateCarYear(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

    if (condition) {
        
    } else {
        
    }
}

function validateCarMake(params) {
    let errorEl = document.createElement('p')
    errorEl.id = "start-date-error"
    console.log(input.value)

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
    // Cannot checkin before today
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
    // Cannot checkout in under 5 days
    // Check in time no earlier than 1pm
    // Check out time no later than 10am
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




// form.addEventListener('submit', (event)) => {
//     event.preventDefault()
// 

