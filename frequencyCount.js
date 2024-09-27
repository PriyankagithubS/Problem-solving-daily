function frequencyCount(arr, n, p) {
    // Step 1: Initialize a hash map to store frequencies
    let frequencyMap = {};

    // Step 2: Count frequencies for numbers between 1 and n
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 1 && arr[i] <= n) {
            if (frequencyMap[arr[i]]) {
                frequencyMap[arr[i]]++;
            } else {
                frequencyMap[arr[i]] = 1;
            }
        }
    }

    // Step 3: Update the array with the frequency count
    for (let i = 0; i < n; i++) {
        arr[i] = frequencyMap[i + 1] || 0;
    }
}

// Example 1
let arr1 = [2, 3, 2, 3, 5];
let n1 = 5, p1 = 5;
frequencyCount(arr1, n1, p1);
console.log(arr1);  // Output: [0, 2, 2, 0, 1]

// Example 2
let arr2 = [3, 3, 3, 3];
let n2 = 4, p2 = 3;
frequencyCount(arr2, n2, p2);
console.log(arr2);  // Output: [0, 0, 4, 0]

// Example 3
let arr3 = [8, 9];
let n3 = 2, p3 = 9;
frequencyCount(arr3, n3, p3);
console.log(arr3);  // Output: [0, 0]
