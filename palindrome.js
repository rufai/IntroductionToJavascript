// eye
// rotor
// a man a plan a canal panama


// franklin's solution
function palindrome( name ) {
    for( let i = 0; i < name.length; i++ ) {
        if ( name[i] === name[name.length -1 -i] ){
            return 'this is palindrome'
        }
        else {
            return 'this is not palindrome'
        }
    }
}

console.log(  palindrome( "eyes" ) )
console.log(  palindrome( "eye" ) )

// s a i ppuakivikaupp i  a   s
// 0 1 2               16 17  18 

// c i v i c
// 0 1 2 3 4
// 0 == 4
// 1 == 3
// 2

// R a c e c a r
// 0 1 2 3 4 5 6
// 0 == 6
// 1 == 5
// 2 == 4
// 3

// D O U B L E
// 0 1 2 3 4 5
// 0 != 5
 
//  Rufai's Solution
function isPalindrome( phrase ){
    for( let i = 0; i < phrase.length / 2; i++ ) {
        if ( phrase[i]!= phrase[phrase.length -1 -i] ){
            return false
        }
    }
    return true
}

console.log( isPalindrome( "saippuakivikauppias") )

// Amobi's Solution
function isPalindromeReverse( phrase ){
    const opposite  =  phrase.split("").reverse().join("")
    if ( phrase === opposite ){
        return true
    }
    return false
}
