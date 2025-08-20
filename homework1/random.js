const prompt = require("prompt-sync")();
const number = Math.floor(Math.random()*100)+ 1
let guess = 500
console.log("1-100 arasında bir sayı tahmin et! ")
while (guess !== number){
    guess = parseInt(prompt("Bir sayı tahmin et: "));

    if (guess >= number){
        console.log("Daha küçük!")
    }
    else if (guess <= number){
        console.log("Daha büyük!")
    }
    else {
        console.log("Geçerli bir sayı giriniz!")
    }
}
console.log("Tebrikler, bildiniz!", number)