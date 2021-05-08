// print all the prime numbers between 100 and 200

// prime number is any number divisible itself
// nothing can divide it
// 1,3,2,7,5,11,13,17,19,23,29,31,37,41, 43, 47

// is 8 a prime number
// 8/2 === 0


// is 7 a prime number
// 7 / 2, 7/3, 7/4, 7/5, 7/6

// nested loop
isPrime = false
for ( let current  = 100; current < 200; current++ ){
    console.log( current )
    for( let below = 2; below < current; below++){
        if ( current % below === 0 ){
            // console.log( `${i} is not a prime number` )
            // continue
            console.log( current + " is not a prime number" ) 
        }
    }
}