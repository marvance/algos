//this file contains algorithm "challenges"

//rework the following five

function fizzBuzz(a,b){
  //sort first
  var arr =[a,b];
  arr.sort(function(a,b){
    return a-b; 
  })
  a = arr[0];
  b=arr[1];
  
  for(var i=a; i<=b; i++){
    result = "";
    if(i%3===0){
      result +="fizz";
    }
    if(i%5===0){
      result +="buzz";
    }
    //print result if exists, otherwise print current number
    if(result){
      console.log(result)
    } else {
      console.log(i)
    }
  }

}

fizzBuzz(50,1)

//Fibonacci sum below certain number

function fibSum(max){
  prev = 0;
  current = 1;
  result = 0;
  while(current <=max){
    result += current;
    current +=prev;
    prev = current - prev
  }

}
fibSum(10)


//Is it prime?
function isItPrime(num){
  if (num < 4){
    return false;
  } else {
    for(i=2;i<num; i++){
      if(num%i===0){
        return false;
      }
    }
    return true;
  }
}

isItPrime(36)


//function using Apply
function speak(line){
  console.log("The", this.adjective, " rabbit says ", line, "'");
}

var whiteRabbit = {adjective: "white", speak: speak};
var redRabbit = {adjective: "red", speak: speak};

whiteRabbit.speak("Meow?");
redRabbit.speak("woof!");

speak.apply(redRabbit, ["Wut", "woof", "meow"]);

//This is a closure:
//A closure is a function inside a function that has access to variables in the outer function
//Anytime you access a variable outside your immediate scope, you create a closure.
function foo(x){
  var tempVar = 3;

  function bar(y){
    console.log(x + y + (++tempVar));
  }
  bar(10);
}
foo(2);