import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

// const p1 = new Product('A Book', 12.99);
// console.log(p1.getInformation());

// const loadedProducts = products.map((p) => {
//   return new Product(p.title, p.price);
// });
const loadedProducts = plainToClass(Product, products);
console.log(loadedProducts);

const newProduct = new Product('', -5.99);
validate(newProduct).then((errors) => {
  if (errors) {
    console.log('Errors: ', errors);
  }
  console.log(newProduct.getInformation());
});
