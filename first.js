// welcome to VS-CODE

let y = 5
console.log(y)

// conditional
// if statement
/***
 *  if ( condition == true ) {
 *          do an action
 * }
 ***/
    if ( 2 != 3 ){
    console.log("Two is not equal to 3")    
    }

    // if - else statement
    if ( 18 % 2 === 0 ){
    console.log("This is an even number")
    } else {
    console.log("This is an odd number")
    }

    let name  = "Nwachukwu"
    console.log(name)

    let country  = "Ghana"
    console.log(country)

    let h = 2
    h = 3
    // collect plenty data
    // array and object
    let k = []  // empty array
console.log( "size of array k : " + k.length )

let countriesInAfrica = ["Nigeria", "Benin", "Ghana", "Kenya", "Congo", "Libya", "Togo", "Mali", "Barbon"]
    // array of strings
let howManyCountries = countriesInAfrica.length
console.log("howManyCountries: " + howManyCountries)
console.table( countriesInAfrica )
console.log( "country in index 8 is : " + countriesInAfrica[8] )
countriesInAfrica[8] = "Gabon"
console.table( countriesInAfrica )


    let agesOfOldPeople = [99, 72, 60, 98, 69, 112, 88, 124, 80, 79, 55, 99, 120,]
    // array of integers
    let howManyOldPeople = agesOfOldPeople.length
    console.log("howManyOldPeople: " + howManyOldPeople)
    console.table( agesOfOldPeople )
    console.log( "age in index 5 is : " + agesOfOldPeople[5] )
    agesOfOldPeople[2] = 30
    console.table( agesOfOldPeople )


// JSON -- Javascript Object Notation 
// Array of Objects
let numbers = [77,33,23,45,65,75,23,76,99]
// array of numbers
console.log( numbers[5] )

let names = ["Moses", "DivineFavour", "Chief", "Simon", "Stanley", "Linus", "Odogwu", "Henry", "King So"]
// name is an array of strings
console.log( names[4] )

let stateCapitalLGA = [
    {
        "state_name" : "abia",
        "state_capital" : "umuahia",
        "state_population" : 8000000,
        "state_LGA" : ["Osisioma", ]
    },
    {
        "state_name" : "enugu",
        "state_capital" : "enugu",
        "state_population" : 5000000,
        "state_LGA" : ["Isiala Ngwa", "Ezeagu", "Bende", "Aninri", "Udi", "Udenu", "Nkanu", "Oji River", "Nsukka", "Mgbowo"]
    },
    {
        "state_name" : "lagos",
        "state_capital" : "ikeja",
        "state_population" : 19000000,
        "state_LGA" : ["Ikeja", "Agege", "Ifako Ijaye", "Oshodi", "Yaba", "Mushin", "Opebi", "Bariga", "Eti Osa", "Alimoso", "Aja", "Alaba"]
    },
]
// array of objects
console.log( stateCapitalLGA[0] )
console.log( stateCapitalLGA[0].state_capital )
console.log( stateCapitalLGA[0].state_population )
console.log( stateCapitalLGA[0].state_name )

console.log( stateCapitalLGA[2].state_name )

console.log( stateCapitalLGA[1].state_population )
console.log( stateCapitalLGA[1].state_LGA[2] )

console.table( stateCapitalLGA[1] )
console.log( stateCapitalLGA[2].state_LGA[1] )


