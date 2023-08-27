const franc = require("franc");
const langs = require("langs")
const langCode = franc('Hola como estas')

const lenguage = langs.where("3", langCode)
console.log(lenguage.name)
