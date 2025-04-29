function addition () {
    let a = 25;
    let b = 10;

    console.log(a + b);
}

function substraction (a , b) {
    console.log(a - b);
}

function multiplication () {
    let a = 6;
    let b = 8;

    let result = a * b;

    // increment operator
    // result++;

    //decrement operator
    result--;

    console.log(result);    
}

function divide() {
    let a = 144;
    let b = 12;

    console.log(a/b);
}

    //decrement operator
    function countdown() {
        let countdown = 10

        while (countdown > 0) {
            console.log("Countdown " + countdown);
            countdown--;
        }
    }