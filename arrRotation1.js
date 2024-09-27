
function rotateArray(arr) {
    let n = arr.length;
    let lastElement = arr[n - 1];

  
    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

   
    arr[0] = lastElement;

    return arr;
}

// Test cases
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [9, 8, 7, 6, 4, 2, 1, 3];

console.log(rotateArray(arr1)); // Output: [5, 1, 2, 3, 4]
console.log(rotateArray(arr2)); // Output: [3, 9, 8, 7, 6, 4, 2, 1]
