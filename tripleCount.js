class Solution {
    countTriplet(arr, N) {
        let count=0;
        let map=new map();

        for(let i=0;i<N;i++){
            map.set(arr[i],true);
        }
        for (let i = 0; i < N - 1; i++) {
            for (let j = i + 1; j < N; j++) {
                let sum=arr[i]+arr[j];

                if(map.has(sum)){
                    count++
                }
            }}
     return count;
    }
}
