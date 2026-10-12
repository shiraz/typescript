let username: string = 'Jack';
let isLogged: boolean = true;

//isLogged += ' test'; // doesn't work and throws a type error.
username += ' test';

console.log(username);

const myRegEx: RegExp = /foo/;

const names: string[] = username.split(' ');

interface Person {
  first: string;
  last: string;
}

// Custom type.
const person: Person = {
  first: 'William',
  last: 'Tell',
};

// Mapping.
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};

ids[30] = 'c';

if (ids[30] === 'D') {
}

for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

[1,2,3].forEach(v => console.log(v));

['a','b','c'].map(v => `${v}-1`);