const data = [60, 4, 5, 6, 72, 23, 4, 22, 12, 10]

console.log('Max :', Math.max(...data));

console.log('AvG', data.reduce((prev, cur) => prev + cur, 0) / data.length);
