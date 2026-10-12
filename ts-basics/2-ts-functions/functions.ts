export function addNumbers(a: number, b: number): number {
  return a + b;
}

// any type must be avoided.

export const addStrings = (a: string, b: string): string => `${a} ${b}`;

export const format = (title: string, param: string | number): string => `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
};

// Promise.
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(' ')}`;
}

export function getName(user: {first: string, last: string}): string {
  return `${user?.first} ${user?.last}`;
};

