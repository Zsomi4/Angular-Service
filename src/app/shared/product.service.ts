import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products = [
  {id: 1, name: "Vasaló", price: 28},
  {id: 2, name: "CPU", price: 45},
  {id: 3, name: "HDD", price: 67},
  {id: 4, name: "GPU", price: 45}
];
  constructor() { }
}
