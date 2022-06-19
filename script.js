function getNumber() {
    let x = document.getElementById("irga").value;

    if (x == 0) {
        document.getElementById("si_irga").innerHTML += "<br>";
        document.getElementById("si_irga").innerHTML += "Invalid input";
        console.log(x);
    } else if (x % 15 == 0) {
        document.getElementById("si_irga").innerHTML += "<br>";
        document.getElementById("si_irga").innerHTML += "FizzBuzz!";
        console.log(x);
    } else if (x % 5 == 0) {
        document.getElementById("si_irga").innerHTML += "<br>";
        document.getElementById("si_irga").innerHTML += "Fizz!";
        console.log(x);
    } else if (x % 3 == 0) {
        document.getElementById("si_irga").innerHTML += "<br>";
        document.getElementById("si_irga").innerHTML += "Buzz!";
        console.log(x);
    } else {
        document.getElementById("si_irga").innerHTML += "<br>";
        document.getElementById("si_irga").innerHTML += x;
        console.log(x);
    }

}