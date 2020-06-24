let result = Math.max(1, 20, 5);

// 20

console.log(result);

result = Math.max(-1, -20, -5);

// -1

console.log(result);

const array = [1, 20, 5];
const max = Math.max(...array);

result = max; // 20

console.log(result);
