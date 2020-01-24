//Multiples of 3 and 5
//Find sum of all multiples of 3 or 5 below the provided value.

//using for loop
function multiplesOf3And5(num){
  var result = 0;
  for (var i = 3; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

multiplesOf3And5(20)

//using while loop
function multiplesOf3And5(num){
  let result = 0;
  let i = 0
  while (i < num) {
    if (i % 3 === 0 || i % 5 === 0) result += i;
    i++;
  }
  return result;

}

multiplesOf3And5(20)