
const getPin = () => {
    const randomPin = getGeneratePin();
    if (randomPin > 99999) {
        return randomPin;
    } else {
        // console.log('Not 6 digit');
        return getGeneratePin();
    }
}

function getRandomPin() {
    const pin = getGeneratePin();
    const pinString = pin + '';
    if (pinString.length === 6) {
        // console.log(pin);
        return pin;
    } else {
        // console.log('Not 6 digit pin');
        return getGeneratePin();
    }
}


function getGeneratePin() {
    const randomPin = Math.round(Math.random() * 1000000);
    return randomPin;
}


document.getElementById('generate-btn').addEventListener('click', function() {
    const pin = getRandomPin();
    // console.log(pin);
    const pinElementField = document.getElementById('generate-pin');
    pinElementField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const pinInupt = document.getElementById('pin-input');
    const previousInput = pinInupt.value;

    if(isNaN(number)) {
        if(number === 'C') {
            pinInupt.value = '';
        }else if(number === '<'){
            const digits = previousInput.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            pinInupt.value = remainingDigits;
        }
    }else {
        const newInput = previousInput + number;
        pinInupt.value = newInput;
    }
})

document.getElementById('verify-pin').addEventListener('click', function() {
    const pinElementField = document.getElementById('generate-pin');
    const generatePin = pinElementField.value;
    
    const pinInupt = document.getElementById('pin-input');
    const inputPin = pinInupt.value;

    const displySuccess = document.getElementById('notify-success');
    const displyError = document.getElementById('notify-error');

    if(generatePin === inputPin) {
        displyError.style.display = 'none';
        displySuccess.style.display = 'block';
    }else {
        displySuccess.style.display = 'none';
        displyError.style.display = 'block';
    }
})
