/*
    Given a 2D array of 1s and 0s; when a 0 is found that entire row and column will become 0s.

    Input:
        [[1,0,1,1,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,0,1,1,1],
        [1,1,1,1,1]];
    Output:
        [[0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,1,1,0],
        [0,0,0,0,0],
        [0,0,1,1,0]];
*/

const twoDarray = (arr) => {
    const rows = arr;
    const zeroLocations = [];

    for ( let i = 0; i < rows.length; i++ ) { //traverse to find all 0 locations
        const col = rows[i];

        for ( let j = 0; j < col.length; j++ ) {
            if ( rows[i][j] === 0) {
                zeroLocations.push([i,j]);
            }
        }
    }

    const locationRows = zeroLocations;
    let value;

    for ( let x = 0; x < locationRows.length; x++ ) { // traverse rows and columns containing 0
        const row = locationRows[x][0];
        const col = locationRows[x][1];
        debugger;
        value = arr[row,col]; // expecting: 0; getting: row array
    }

    return value;
}

console.log(twoDarray(
        [[1,0,1,1,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,0,1,1,1],
        [1,1,1,1,1]]
    ));