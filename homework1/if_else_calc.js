
    const prompt = require("prompt-sync")();
    let islem = prompt("İşlemi giriniz (örnek: 5 + 1): ");
    let karakter = islem.split(" "); 
    let result;

    if (karakter[1] === "+") {
        result = parseFloat(karakter[0]) + parseFloat(karakter[2]);
    }
    else if (karakter[1] === "-") {
        result = parseFloat(karakter[0]) - parseFloat(karakter[2]);
    }
    else if (karakter[1] === "*") {
        result = parseFloat(karakter[0]) * parseFloat(karakter[2]);
    }
    else if (karakter[1] === "/") {
        if (karakter[2] === "0"){
            result = "Sıfıra bölünemez!"
        }
        else {
        result = parseFloat(karakter[0]) / parseFloat(karakter[2]);
        }
    }
    else {
        result = "Geçersiz işlem!";
    }
    console.log("Sonuç:", result);
