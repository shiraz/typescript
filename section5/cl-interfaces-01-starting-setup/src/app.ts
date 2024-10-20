interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name: string;
    // Optional property.
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    outputName?: string;

    constructor(n: string, outputName?: string) {
        this.name = n;

        if (outputName) {
            this.outputName = outputName;
        }
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);

        if (this.outputName) {
            console.log(`${phrase} ${this.name} | ${this.outputName}`);
        }
    }
}

// const user1 = {
//     name: 'Mox',
//     age: 20,
//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// };

const user1 = new Person('Mox');

user1.greet('Hi there - I am');

const user2 = new Person('Mox', 'Output');
user2.greet('Hi there - I am');