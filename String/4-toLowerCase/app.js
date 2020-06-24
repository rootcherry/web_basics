const name = 'SaMaNthA';

let result = name.toLowerCase();
// 'samantha'

console.log(result);

const original = 'WeB BasIcS 102';
const lower = original.toLowerCase();

console.log(original);
console.log(lower);

// ⚠️ Other Data Types Won't Work!

null.toLowerCase(); // TypeError
undefined.toLowerCase(); // TypeError
['hey'].toLowerCase(); // TypeError
(75).toLowerCase(); // TypeError
