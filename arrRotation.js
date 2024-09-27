// Function to rotate the array to the left by 'k' steps
function rotateLeft(arr, k) {
    let n = arr.length;
    // Ensure k is within the range of 0 to n-1
    k = k % n;

    // Perform left rotation k times
    for (let i = 0; i < k; i++) {
        // Store the first element
        let firstElement = arr[0];

        // Shift all elements to the left
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }

        // Place the first element at the end
        arr[n - 1] = firstElement;
    }

    return arr;
}

// Test cases
let arr1 = [1, 2, 3, 4, 5];
let k1 = 1;
let k2 = 2;
let k3 = 3;

console.log(rotateLeft(arr1, k1)); // Output: [2, 3, 4, 5, 1]
console.log(rotateLeft(arr1, k2)); // Output: [3, 4, 5, 1, 2]
console.log(rotateLeft(arr1, k3)); // Output: [4, 5, 1, 2, 3]
