// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Wade',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR
};

const person = {
    name: 'Wade',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

let favoritesActivities: string[];
favoritesActivities = ['Sports'];

console.log(person);