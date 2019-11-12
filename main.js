//This file contains sorting algorithms as well as data structures


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
//O(n) space complexity
//recursive divide and conquer algo
//popular bc performant and easy to implement
//stable algo

//1. Divide: break the array from the middle using recursion
//until only 1 element is left

//2. Conquer: sort the resulting small arrays 
//containing 1 item each

//3. Combine: merge small arrays into 1 array

function merge(arr1, arr2) {
  //set initial variable values
  let i=0, j=0, mergedArr = [];

  //while iterator 1 is less than arr1 length
  //and iterator 2 is less than arr2 length

  //aka iterate through length of left half of original array
  //and right half

  while (i<arr1.length && j < arr2.length) {

    //if value of current item in array 1 is greater than
    //value of current item in array 2
    //then push value of iterator of array 2
    //into our master array
    //and keep going until 
    //value of iterator of array 1 is not greater than
    //value of iterator of array 2


    if(arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);

    //if value of iterator of array 1 is NOT greater than
    //value of iterator of array 2
    //push cuurent value in array 1 into our master array

    else mergedArr.push(arr1[i++]);

  }
  // console.log(mergedArr);
  // console.log(arr1);
  // console.log(arr2);

  //push remaining values of arr1 into master array
  while (i<arr1.length) {
    mergedArr.push(arr1[i++]);
  }
  //push remaining values of arr2 into master array
  while (j<arr2.length) {
    mergedArr.push(arr2[j++]);
  }
  console.log(mergedArr);
  return mergedArr;
}

function mergeSort(array) {
  //base case: an array of 1 item
  if (array.length == 1) return array;

  //find value of middle item in array
  let middle = Math.floor(array.length/2);

  //chop array in half to get left half
  let left = mergeSort(array.slice(0, middle));
  //chop array in half to get right half
  let right = mergeSort(array.slice(middle));
  //perform merge function, passing in left and right
  //halves as arr1 and arr2
  return merge(left, right);
}

console.log(mergeSort([4,7,2,8,9,4,3,1]))

//Stacks in JavaScript
//stacks follow LIFO or FILO (first in last out) principle
// Stack's insertion/deletion operations have O(1) time complexity
//aka constant (?) time complxity
//arrays can be treated like stacks because 
//.push and .pop have O(1) time complxity

var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];

homeworkStack.pop();

homeworkStack.push("CS50");


//Create a stack class
//I did the methods from scratch without checking answers
function Stack() {
  var collection = [];
  this.printStack = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(item) {
    collection[collection.length] = item;
    console.log(collection)
    return collection.length;
  }
  this.pop = function(){
    collection.length = collection.length-1
    console.log(collection)
    return collection
  }
  this.peek = function(){
    return collection[collection.length-1]
  }
  this.isEmpty = function(){
    return collection.length === 0;
  }
  this.clear = function(){
    collection.length = 0;
    return collection;
  }
  // Only change code above this line
}

var meowstack = new Stack()
meowstack.push(1)
meowstack.push(2)
meowstack.push(3)
meowstack.push(5)
meowstack.push(7)
meowstack.push(3)
meowstack.push(5)
meowstack.push(7)
meowstack.pop()

var emptystack = new Stack()

console.log(meowstack)
console.log(meowstack.peek())
console.log(emptystack.isEmpty())
console.log(meowstack.clear())

//Queues in JavaScript
//follow FIFO/LILO principle
//to add to queue, push to end of array
//to remove from queue, take from beginning of array

//Create a Queue class
//I did the methods from scratch without checking answers

function Queue() {
  var collection = [];

  this.enqueue = function(item){
    collection[collection.length] = item;
    console.log(collection)
    return collection.length;
  }
  this.dequeue = function(){
    var dequeuedItem = collection[0]
    for (var i=0; i<collection.length; i++){
      collection[i] = collection[i + 1]
    }
    collection.length = collection.length - 1;
    console.log(collection)
    console.log(dequeuedItem)
    return dequeuedItem
  }
  this.front = function(){
    return collection[0];
  }
  this.size = function(){
    return collection.length;
  }
  this.isEmpty = function(){
    return collection.length === 0;
  }
}

var barkstack = new Queue();

barkstack.enqueue(4)
barkstack.enqueue(7)
barkstack.enqueue(2)
barkstack.enqueue(9)
barkstack.enqueue(1)
console.log(barkstack)
console.log(barkstack.front())
console.log(barkstack.size())
console.log(barkstack.isEmpty())
barkstack.dequeue()

//FCC's solution using an object instead of array
//uses ES6 new Class keyword/syntax??????
//and thus can get away with using object?????
//no idea, return to it later

class Queue2 {
  constructor(){
    this.collection = {};
    this.start = 0;
    this.end = 0;
  }
  enqueue(item) {
    this.collection[this.end++] = item;
  }
  dequeue(){
    return this.collection[this.start++];
  }
  front() {
    return this.collection[this.start];
  }
  size() {
    return this.end - this.start;
  }
  isEmpty() {
    return this.size() === 0;
  }
}



//Create a Map data structure
//No solution listed so figured whole thing out myself
var MapNoES6 = function(){
  this.collection = {};
  this.add = function(key, value){
    this.collection[key] = value;
    console.log(this.collection)
    return this.collection;
  }
  this.remove = function(key){
    delete this.collection[key];
    console.log(this.collection);

  }
  this.get = function(key){
    console.log(this.collection[key])
    return this.collection[key];
  }
  this.has = function(key){
    return key in this.collection === true
  }
  this.values = function(){
    return Object.values(this.collection)
  }
  this.size = function(){
    return Object.entries(this.collection).length
  }
  this.clear  = function(){
    this.collection = {};
    console.log(this.collection)
  }
};

var mappy = new MapNoES6()

mappy.add("Caleb", 6)
mappy.add("Raphael", 8)
mappy.add("Sam", 7)
mappy.add("Doug", 5)

mappy.remove("Sam")

mappy.get("Doug")

console.log(mappy.has("Caleb"))
console.log(mappy.has("Christo"))
console.log(mappy.values())
console.log(mappy.size())
mappy.clear()


//define new Map object using built-in ES6 Map() class 
var myMap = new Map()
myMap.set("freeCodeCamp", "Awesome!")
console.log(myMap)


//Hashtables
//provides efficient O(n) lookup time

//actually, hashtables in JS very complicated. Return to it later.

//Implement a Linked List
//A linked list is a linear collection of data elements, called "nodes",
//each of which points to the next.
//each node contains two key pieces of information:
//the element itself, and a reference to the next node.

var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');
var Cat = new Node('Cat');
var Dog = new Node('Dog');

Kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;

// test your code
console.log(Kitten.next);
console.log(Cat.next);

//Create a Linked List class
//return to tomorrow




//fizzBuzz!!

function sort(a,b){
  return a-b;
}

function fizzBuzz(a,b) {
  sort(a,b)

}
// .....never mind





