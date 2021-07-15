/*
    Remove all numbers less than 5

    input: [1,2,3,4,5,6]

    output: [5,6]

    input: [1,4,5,9,8,5,2,3,8,9,2,1]

    output: [5,9,5,8,9]
*/

const filter = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arr.splice(i,1)
        }
    }

    return arr;
}

const arrayInput = [1,5,7,9,10,3,2,6,8,7,3,5,2,3,1,9,8];

console.log(filter(arrayInput));