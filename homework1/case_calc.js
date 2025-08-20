const prompt = require("prompt-sync")();
    let islem = prompt("İşlemi giriniz (örnek: 5 + 1): ");
    let karakter = islem.split(" "); 
    let result;
    let a = karakter[0];
    let b = karakter[2];
    let c = karakter[1];

switch(c){
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * c;
        break;
    case "/":
        if (b === "0"){
            result = "Sfıra bölünemez!";
        }
        else 
            result = a / b;
        break;
default:
    result = "Geçersiz işlem!";
}
console.log(result);
