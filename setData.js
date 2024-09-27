function findUnionCount(arr1, arr2) {

    let unionSet = new Set([...arr1, ...arr2]);

   
    return unionSet.size;
}


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];
console.log(findUnionCount(arr1, arr2));  // Output: 5

arr1 = [85, 25, 1, 32, 54, 6];
arr2 = [85, 2];
console.log(findUnionCount(arr1, arr2));  // Output: 7

arr1 = [1, 2, 1, 1, 2];
arr2 = [2, 2, 1, 2, 1];
console.log(findUnionCount(arr1, arr2));  // Output: 2
