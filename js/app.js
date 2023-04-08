function generatePin() {
    const generateRandom = Math.round(Math.random() * 10000);
    const generateString = generateRandom + '';
    const countLength = generateString.length;
    if (countLength == 4) {
        const showPin = document.getElementById('display-pin');
        const generatePinValue = showPin.value = generateRandom;
    }
    else {
        return generatePin();
    }

}

// FOR kEY PAD
document.getElementById('key-pad').addEventListener('click', function (event) {


    const newNumber = event.target.innerText;
    const showNumber = document.getElementById('typed-numbers');

    if (isNaN(newNumber)) {
        if (newNumber == 'C')
            showNumber.value = '';
    }
    else {
        const oldNumber = showNumber.value;
        const mainNumber = oldNumber + newNumber;
        showNumber.value = mainNumber;
    }

});

function verifyPin() {
    const inputNumber = document.getElementById('typed-numbers').value;
    const generateNumber = document.getElementById('display-pin').value;
    const success = document.getElementById('notify-success');
    const error = document.getElementById('notify-fail');

    if (inputNumber == generateNumber) {
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
}