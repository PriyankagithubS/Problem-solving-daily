




// function numSearch(arr,target){
//     for(let start=0;start<arr.length;start++){
//         if(arr[start]===target){
//             return true;
//         }
//     }
//     return false;
// }
// const numbers=[10,15,25,30,45];
// const target=25;
// let result = numSearch(numbers, target)
// console.log();
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage
console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
