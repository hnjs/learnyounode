var numbers = process.argv.slice(2);

var sum = numbers.reduce(function(a,b) {return a+parseInt(b);}, 0);
console.log(sum);