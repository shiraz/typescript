type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('40', '36', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Wade', 'Wilson', 'as-text');
console.log(combineNames);

type User = { name: string } | string;
let u1: User = {name: 'Wade'};
u1 = 'Michael';