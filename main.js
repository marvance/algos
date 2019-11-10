//Bubble sort
//best case: quadratic time complexity

function swap(a,b,arr){
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function bubbleSort(arr) {
 for (let i=0; i < arr.length; i++) {
  for (let j=0; j<arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(j,j+1,arr)
    }
  }
 }
 return arr
}

console.log(bubbleSort([4,7,2,8,9,4,3,1]))

function bubbleSortToo(arr){
 for (let i=0; i < arr.length; i++) {
  for (let j=0; j<arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
  }
 }
 return arr

}

console.log(bubbleSortToo([4,7,2,8,3,1]))

//Selection Sort
//Quadratic time complexity in all cases
//aka O(n^2)

function swap2(a,b,arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function selectionSort(arr) {
  for (let i=0; i < arr.length; i++) {
    //at each item in the array, assign current value to minimum
    let min = i;
    //at each item in the array, run another for loop starting one index up
    //from current item
    for (let j = i + 1; j < arr.length; j++){
      //if value of original item in array is greater than the
      //value of current item, 
      if (arr[min] > arr[j]) {
        //then assign current item to minimum
        min = j;
      };      
    }
    //now that you've updated the minimum, perform swap
    //pass in current item, new minimum, and original array
    //this assigns new minimum to current item in sequence
    swap2(i, min, arr)
  }
  return arr
}
console.log(selectionSort([4,7,2,8,9,4,3,1]))

//Insertion sort
//Quadratic time complexity in average and worst case scenarios
//hardest one so far for me to understand
//stable algorithm
//wtf is a stable algorithm?

function insertionSort(arr){
  for (let = 1; i< array.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}

console.log(selectionSort([4,7,2,8,9,4,3,1]))

//Quick sort
//O(nlog(n)) time complexity
//aka halfway between linear (O(n)) and quadratic
//O(logn) space complexity
//"Intermediate" algo
//Recursive divide and conquer approach.
//utilizing a pivot value
//in-place algorithm
//unstable algorithm

//swap function using ES6 array destructuring
function swap3(a,b,arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

//return fixed pivot point
function pivot(arr, left=0, right=arr.length-1) {
  let shift = left;
  for(let i=left+1; i<=right; i++){
    //move all the small elements to left side
    if(arr[i] < arr[left]) swap(arr, i, ++shift);
  }
  swap3(arr, left, shift);
  return shift;
}

function quickSort(array, left=0, right=array.length - 1) {
  
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    //recursively call function to left of pivot
    //and to right of pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);

  }
  return array;
}

console.log(quickSort([4,7,2,8,9,4,3,1]))

//Merge sort
//O(nlog(n)) time complexity

