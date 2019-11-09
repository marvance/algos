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