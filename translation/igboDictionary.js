let igboDictionary = {
    "i" : "A",
    "am" : "bu",
    "a" : "m",
    "boy" : "Nwata Nwoke",
    "girl" : "Nwata Nwanyi",
    "tall" : "Ogologo",
    "this" : "nkea",
    "is" : "bu",
    "house" : "Ulo",
    "my" : "nkem",
    "goat" : "ewu"
}

let englishPhrase = prompt("Write a sentence")
let words = englishPhrase.split(" ")
//    console.table ( words )
let igboPhrase = ""
for (const key of words) {
    console.log(`${key} ==> ${igboDictionary[ key.toLowerCase() ]}`)
    igboPhrase += igboDictionary[ key.toLowerCase() ] + " "
}
console.log( igboPhrase )
alert( igboPhrase )