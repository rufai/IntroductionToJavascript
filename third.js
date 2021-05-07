// infinite loop

/** 
    let m = 11 // start
    while ( m > 10 ) // stop
    {
        console.log( m )
        m++
    }
*/

// coding example 
// gbas gbos gbasgbos

// 1 to 1000

for( let i = 0; i < 100; i++) {
    console.log(i)

    // if ( i % 3 == 0) {
    //     console.log( `${i} is Gbas`)
    // }
    // if ( i % 5 == 0) {
    //     console.log( `${i} is Gbos`)
    // }

    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log( `${i} is GbasGbos`)
    }
    else  if ( i % 3 == 0) {
        console.log( `${i} is Gbas`)
    }
    else if ( i % 5 == 0) {
        console.log( `${i} is Gbos`)
    }
}