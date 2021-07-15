/*
    Removes individual characters from a string

    Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
    Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/

const remove = (str, remove) => {
    let alteredStr;

    for ( let i = 0; i < str.length; i++ ) {
        for ( let j = 0; j < remove.length; j++ ) {
            debugger;
            let strChar = str[i];
            let removeChar = remove[j];

            if ( strChar.toLowerCase() === removeChar.toLowerCase() ) {
                alteredStr = str.replace(strChar, removeChar);
            }
        }
    }

    return alteredStr;
}

console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));