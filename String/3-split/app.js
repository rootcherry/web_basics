const name = 'samantha';

name.split('');
// [ 's', 'a', 'm', 'a', 'n', 't', 'h', 'a' ]

name.split(); // Default is entire string
// 'samantha'

const url = 'www.samanthaming.com/tidbits/80-flatmap';

url.split('/');
// [ 'www.samanthaming.com', 'tidbits', '80-flatmap' ]

const splitted = ['www.samanthaming.com', 'tidbits', '80-flatmap'];

const [domain, parentPath, childPath] = splitted;

console.log(
  domain, // 'www.samanthaming.com'
  parentPath, // 'tidbits'
  childPath // '80-flatmap'
);
