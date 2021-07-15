/*
    Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

    Input: amazon, azonma

    Output: False

    Input: amazon, azonam

    Output: true
*/

const stringRotation = (str1, str2) => {
        let rotation = str1;

        for ( let i = 0; i < str1.length; i++ ) {
            let currentChar = rotation[0];
            if ( rotation === str2 ) {
                return true
            }
            
            rotation = rotation.slice(1,str1.length).concat(currentChar);
        }

        return false;
}

console.log(stringRotation('amazon', 'azonam'));
console.log(stringRotation('amazon', 'azonma'));