function almightyFormular(a, b, c){ 
    let bottom =  2 * a // denominator
    let top =  - b - Math.sqrt( Math.pow(b , 2) - (4 * a * c) )

    console.log( {top}, {bottom}, top / bottom )
}

almightyFormular( 1, 2, 1)

// 2 * pi * r

function circumference(radius){
    let c = 2 * Math.PI * radius
    console.log( c )
    return c
}

circumference( 5 )
circumference( 8 )