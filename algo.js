var myArr = [6,7,8,6,9,8]

function getNonUniquesFunctional(arr){
  var nonUniques = arr.filter(function(a) {
    return arr.filter(function(b) {
      return a === b;
    }).length > 1;
  })
  return nonUniques.filter(function(el, i, data){
    return data.indexOf(el) === i;
  })
}

aSolution(myArr)



function getNonUniques(arr){
  var newArray = arr.sort();
  var result = []
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i-1]) {
      result.push(newArray[i])
    }
  }
  return result;
}

moreThanOnce(myArr)




