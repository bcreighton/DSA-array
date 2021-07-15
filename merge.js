/*
    Merges two different arrays and returns the sorted version

    Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
    Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
*/

const merge = (arr1, arr2) => {
    const merged = [...arr1, ...arr2]; // merged array
    let toMove; // placeholder for any element that needs to move in the array via sorting

    if (merged.length == 0) {
        return null;
    }

    for ( let i = 0; i < merged.length; i++ ) {
        for ( let j = 1; j < merged. length; j++ ) {
            if ( merged[i] > merged[j] && i < j ) {
                toMove = merged[i];
                merged[i] = merged[j];
                merged[j] = toMove;
            }
        }
    }

    return merged;
}

console.log(merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));
console.log(merge([32, 39, 61, 86, 11],[24, 31, 55, 83, 99, 10]));