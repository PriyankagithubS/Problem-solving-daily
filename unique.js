class Solution {
    // Function to remove duplicates from the given array.
    remove_duplicate(arr) {
        // Code Here
        if (arr.length === 0) return 0; // Handle edge case for empty array

        let uniqueIndex = 0; // Pointer for the last unique element

        // Iterate through the array
        for (let i = 1; i < arr.length; i++) {
            // If current element is different from the last unique element
            if (arr[i] !== arr[uniqueIndex]) {
                uniqueIndex++; // Move the unique index forward
                arr[uniqueIndex] = arr[i]; // Update the unique element
            }
        }

        return uniqueIndex + 1;
    }
}