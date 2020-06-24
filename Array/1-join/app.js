const pieces = ['s', 'a', 'm'];

let result = pieces.join('');
// 'sam'

console.log(result);

const strings = ['Web', 'Basics', '!'];

result = strings.join(); // default coma (,)
// 'Web,Basics,!'

console.log(result);

result = strings.join(' '); // empty space
// 'Web Basics !'

console.log(result);

result = strings.join('-'); // dash
// 'Web-Basics-!'

const numbers = [2, 10, 5];

result = numbers.join(' + '); // note the blank space before and after
// '2 + 10 + 5'

console.log(result);
