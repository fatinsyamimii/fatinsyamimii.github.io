function CheckUmur(){
    let umur = prompt("Enter your age");

    if (umur < 13) {
        console.log('kanak-kanak');
        alert("kanak-kanak");

    } else if ((umur >= 13) && (umur < 19)) {
        console.log('remaja');
        alert('remaja');

    } else if ((umur >= 19) && (umur < 56)) {
        console.log('dewasa');
        alert('dewasa');

    } else {
        console.log('warga emas');
        alert('warga emas');
    }
}

function CheckIC(){
    let umur = prompt("Enter Your Age");
    let IC = true;

    if (umur >=18) {
        if (IC) {
            console.log("You Can Enter");

        } else {
            console.log("You must bring your IC to Enter.");
        }
    } else {
        console.log("You can't Enter");
    }

    }


    function CheckSize(){
        let size = 'M';
        switch (size) {
            case 'S':
            case 'M':
                console.log('small size')
                break;
            case 'L' :
            case 'XL' :
                console.log('normal size');
                break;
            default:
                console.log('big size');
                break;
        }
    }
