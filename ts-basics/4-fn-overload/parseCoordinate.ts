interface Coordinate {
  x: number;
  y: number;
}

// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return { ...obj };
// }

// function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
//   return { x, y };
// }

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;

// Unknown is like any, but you have to cast it before you can use it. Think of it like a safe any.

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let c: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':');
      if ((key === 'x' || key === 'y') && value !== undefined) {
        c[key] = parseInt(value, 10);
      }
    });
  } else if (typeof arg1 === 'object') {
    c = {
      ...(arg1 as Coordinate),
    };
  } else {
    c = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return c;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 1, y: 2 }));
console.log(parseCoordinate('x:12,y:22'));
