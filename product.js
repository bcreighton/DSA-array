/*
    Multiply all numbers in the given array; not including the current index

    Input:[1, 3, 9, 4]
    Output:[108, 36, 12, 27]
*/

const product = (nums) => {
    const prod = [];

    for ( let i = 0; i < nums.length; i++ ) {
        let currentProd = 1;

        for ( let j = 0; j < nums.length; j++ ) {

            const currentVal = nums[i];

            if ( nums[j] !== currentVal ) {
                currentProd *= nums[j];
            }
        }

        prod.push(currentProd);
    }

    return prod;
}

console.log(product([1, 3, 9, 4]));
console.log(product([11, 23, 69, 4]));
