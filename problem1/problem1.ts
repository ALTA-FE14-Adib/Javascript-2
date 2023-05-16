//Problem 1 - Pair with Target Sum
//Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to given target.
//Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to given target.

const pairSum = (arr:number[], target: number): number[] => {
    const map: {[key: number]: number} = {};

    for(let i =0;i<arr.length;i++){
        const complement = target - arr[i];
        if(map.hasOwnProperty(complement)){
            return [map[complement],i];
        }
        map [arr[i]]=i;
    }
    return [];
}

console.log(pairSum([1, 2, 3, 4,5,6], 6));
console.log(pairSum([2, 5, 9, 11], 11));
