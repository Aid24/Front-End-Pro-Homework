let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1

let result = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}

console.log(result);

let positive = arr.filter(elem => (elem > 0));
console.log(positive);

// 2

let m = Math.min(...arr);
console.log(m);

let arrIndex = arr.indexOf(-63);
console.log(arrIndex);

// 3
let a = Math.max(...arr);
console.log(a);

let Index = arr.indexOf(76);
console.log(Index);

// 4
let negative = arr.filter(elem => (elem < 0));
console.log(negative);

// 5
function countOfOdd(arr) {
  return arr.filter(item => item % 2).length;
}

console.log(countOfOdd(arr));

// 6
function count(arr) {
  return arr.filter(n => n % 2 === 0).length;
}

console.log(count(arr));

// 7
function arraySum(array, elm) {
    arr = arr.slice(0);   
    for(var sum = 0, a; a = arr.pop();) sum += !elm || elm=="even" && !(a & 1) || elm== "odd" && a & 1 ? a : 0;
    return sum;
}

console.log(arraySum(a, 'even'));

// 8
function arraySum(array, elm) {
    arr = arr.slice(0);   
    for(var sum = 0, a; a = arr.pop();) sum += !elm || elm=="even" && !(a & 1) || elm== "odd" && a & 1 ? a : 0;
    return sum;
}

console.log(arraySum(a, 'odd'));

// 9
function productOfPositive(arr) {
  let product = 1;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        product *= arr[i];
    }
  }
  return product;
}

let results = productOfPositive(a);
console.log(results);

// 10
let max = arr[0];
let j = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    arr[j] = 0;
    j = i;
  } else {
    arr[i] = 0;
  }
}

console.log(arr);