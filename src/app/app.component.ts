import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-client-demo';
  addProduct: boolean = false;

  public langs: string[] = 
  [  
    'Java',
    'C#',
    'C++',
    'Python'
  ];

  public products: Product[] = [];

  language: string = "Java";

  constructor(private http : HttpClient) {

  }
  addNewLanguage( ):void {
    console.log(this.language);
    this.langs.push(this.language)
  }

  searchProducts() {
    this.http.get<Product[]>('/products').subscribe((body) => {
      console.log("Body is " + body); 
      console.log(body);
      this.products = body;
      console.log(this.products)
    });
  }

  deleteProduct(id: number) {
    console.log("Delete product with id = " + id)
    this.http.delete<any>('product/' + id).subscribe(() => {
      console.log("Uraa");
      this.searchProducts();
    });
  }

  showAddProduct() {
    this.addProduct = true;
  }

  addNewProduct(product: Product) {
    console.log("adding product");
    this.http.post<Product>('product', product).subscribe((body) => {
      this.addProduct = false;
      this.searchProducts();
    })
  }
  
}
