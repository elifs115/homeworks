const prompt = require("prompt-sync")()
const cumle = prompt("Bir cümle giriniz: ")

let karaktersayi = cumle.length

console.log("Karakter sayısı: ", karaktersayi)

const kelimesayi = cumle.split(" ").length

console.log("kelimesayısı: ", kelimesayi)

const ters  = cumle.split("").reverse().join("")

console.log(ters)
