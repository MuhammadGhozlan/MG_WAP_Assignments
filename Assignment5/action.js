function FunctionOne(arrOne) {
  let sumOf = arrOne.filter(n => n > 20)
  .reduce((acc, current) => acc + current);
  return sumOf;
}

function FunctionTwo(arrTwo) {
  let res = arrTwo.filter(name =>  name.length >= 5 && name.includes('a'));
  return res;
}

let arrOne = [0,1,2,123,5,6,78,22];
console.log(FunctionOne(arrOne));

let arrTwo = ['Mohammad', 'jack', 'MIU', 'momomimi'];
console.log(FunctionTwo(arrTwo));