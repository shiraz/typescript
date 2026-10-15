import housesData from './houses.json';

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: string;
}

function convertHousesToHousesWithID(houses: House[]): HouseWithID[] {
  try {
    return houses.map<HouseWithID>((house) => {
      const id: string = crypto.randomUUID();
      return {
        ...house,
        id,
      };
    });
  } catch (err) {
    console.error('Error occurred while converting houses to houses with id', err);
  }
}

function isHouse(value: unknown): value is House {
  if (typeof value !== 'object' || value === null) return false;

  if (!('name' in value) || !('planets' in value)) return false;

  return (
    typeof value.name === 'string' &&
    (typeof value.planets === 'string' ||
      (Array.isArray(value.planets) && value.planets.every((planet) => typeof planet === 'string')))
  );
}

function parseAndGetHousesWithID(houses: string): HouseWithID[] {
  if (!houses) return [];

  try {
    const houseArr: unknown = JSON.parse(houses);

    if (!Array.isArray(houseArr) || !houseArr.every(isHouse)) return [];

    return convertHousesToHousesWithID(houseArr);
  } catch (err) {
    console.error('Error while parsing houses', err);
    return [];
  }
}

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[];

function findHouses(arg1: unknown, arg2?: unknown): HouseWithID[] {
  let housesWithId: HouseWithID[] = [];

  if (typeof arg1 === 'string') {
    housesWithId = parseAndGetHousesWithID(arg1);
  } else if (Array.isArray(arg1) && arg1.every(isHouse)) {
    housesWithId = convertHousesToHousesWithID(arg1);
  }

  return typeof arg2 === 'function'
    ? housesWithId.filter(arg2 as (house: House) => boolean)
    : housesWithId;
}

console.log(findHouses(JSON.stringify(housesData), ({ name }) => name === 'Atreides'));

console.log(findHouses(housesData, ({ name }) => name === 'Harkonnen'));
