const name = 'samantha';

let result = name.slice(0, 3);

console.log(result);

const string = 'Web Basics';

result = string.slice(0); // Clone the string
// 'Web Basics'
console.log(result);

result = string.slice(); // Default is 0, so it will just clone
// 'Web Basics'
console.log(result);

result = string.slice(-1); // Get the last letter
// 's'
console.log(result);

result = string.slice(4, 7); // 'Bas'
console.log(result);

result = string.slice(-6, -3); // 'Bas'
console.log(result);

result = string.slice(4, -3); // 'Bas'
console.log(result);
