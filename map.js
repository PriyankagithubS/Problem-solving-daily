const array1 = [1,2,3,4,5];

function mapFunc(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(accumulator,arr[i]));
  }
  return result;
}
const map1 = mapFunc(array1,function (x) {
  return ;
});
console.log(map1);

