let number = Math.floor(Math.random()*10+1);



function play() {
    let userNumber = document.getElementById("userNumber").value;
    let message;
    if (userNumber > number) {
        message = "Twój numer jest za duży"
    }
    else if (userNumber < number) {
        message = "Twój numer jest za mały"
    } 
    if (userNumber == number) {
        message = "Gratulacje, liczba jest poprawna"
    }

    document.getElementById("message").innerHTML = message;
    console.log(number)
};
