import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itensProdutos: Product[] = [];

  addToCart(p1: Product) {
    this.itensProdutos.push(p1);
  }

  getItens() {
    return this.itensProdutos;
  }

  clearCart() {
    this.itensProdutos = [];
    return this.itensProdutos;
  }

  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: Number }[]>(
      '/assets/shipping.json'
    );
  }
  constructor(private httpClient: HttpClient) {}
}
