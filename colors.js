let buttonElement = document.getElementById("gc")
buttonElement.addEventListener("click", (e) => {
    setInterval( () => { 
        let bodyElement = document.body
        bodyElement.style.color = generateRandomColor()
        bodyElement.style.backgroundColor = generateRandomColor()
    }, 10000 )
})

function generateRandomColor() {
    let hexadecimal = [ 0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F' ]
    let color = "#"

    for( let i = 0; i < 6; i += 2){
        let element = Math.floor(Math.random() * hexadecimal.length)
        color += hexadecimal[element]
    }
    console.log(color)
    return color // explicit returning
}


// white 