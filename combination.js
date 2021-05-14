const studentNames = ["Nick", "Uche", "Juliet", "Daniel", "James", "Moses", "Solomon", "Ken", "Dorathy", "Chinedu", "Rufai", "Linus", "Amobi", "Seun", "Victo"]

console.log( studentNames.length )
const numberToBeSelected = 4
console.log(`We have ${studentNames.length} students and ${numberToBeSelected} are selected at random`)
const randomStudentSelected = []

for( let i = 0; i < numberToBeSelected; i++){
    const studentIndex = Math.floor( Math.random() * studentNames.length )
    randomStudentSelected.push( studentNames[studentIndex] )
}

console.log( { randomStudentSelected } )