function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const obj = merge({ name: 'Mox' }, { age: 30 });

console.log(obj.name, obj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  descriptionText =
    element.length === 1 ? 'Got 1 element.' : `Got ${element.length} elements.`;
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([1, 2, 3]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Mox' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Mox');
textStorage.addItem('Wade');
textStorage.removeItem('Mox');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Mox' });
// objStorage.addItem({ name: 'Wade', origin: 'Canada' });
// objStorage.removeItem({ name: 'Mox' });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let cg: Partial<CourseGoal> = {};
  cg.title = title;
  cg.description = description;
  cg.completeUntil = date;
  return cg as CourseGoal;
}

const names: Readonly<string[]> = ['James', 'Wade'];
// names.push('test');
