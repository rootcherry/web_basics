const name = 'samantha';

let result = name.charAt(0); // s

// console.log(result);

const text = 'Web Basics';

result = text.charAt(); // Remember default is 0
// 'W'
console.log(result);

result = text.charAt(text.length - 1); // Get the last letter
// 's';
console.log(result);

result = text.charAt(1000); // Out of range of index
// '';
console.log(result);

result = text.charAt('B'); // 'W'
console.log(result);

result = text.charAt(null); // 'W'
console.log(result);
