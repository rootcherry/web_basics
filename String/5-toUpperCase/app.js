const name = 'samantha';

let result = name.toUpperCase();
// 'SAMANTHA'

console.log(result);

const original = 'Web Basics 101';
const upper = original.toUpperCase();

console.log(original);
console.log(upper);
original; // 'Web Basics 101'
upper; // 'WEB BASICS 101'

// ⚠️ Other Data Types Won't Work!

null.toUpperCase(); // TypeError
undefined.toUpperCase(); // TypeError
['hey'].toUpperCase(); // TypeError
(75).toUpperCase(); // TypeError
