let addUp = function(array) {
    let newArr = [];

    for (let i = 0; i < array.length - 1; i++) {
        let add = array[i] + array[i + 1]
        newArr.push(add);
    }
    return newArr;
};


function pyramidArray(array) {
    let result = [array];

    while (result.length < array.length) {
        let next = addUp(result[0]);
        result.unshift(next);
    }
    return result;
}

let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]


/* Write a function pyramidArray(base) that takes in an array of numbers representing the base of a pyramid.
The function should return a two-dimensional array representing the completed pyramid.
To generate an element of the next level of the pyramid, we sum the elements below and to the left and below and to the right. */
