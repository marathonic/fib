const fib = n => n <= 2 ? [0,1] : [...fib(n-1), fib(n-1)[n-2] + fib(n-2)[n-3]];
const fibArr = (n) => {
	if(n <= 2) return [0,1]
	let arr = fibArr(n-1);
  arr.push(arr[arr.length-1] + arr[arr.length-2])
  return arr;
}
console.log(fib(5));
console.log(fibArr(5))
