import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apiMeli';
  products: any = '';
  product: any = '';
  entrada: any = '';
  url: any = 'https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=';
  target: any;


  constructor(private http: HttpClient) {



  }

  search() {
    this.listData()
  }


  async getProducts() {
    return new Promise((resolve, reject) => {
      this.target = this.url + this.entrada

      this.target.replace(/ /g, '%20')

      console.log(this.target)

      this.http.get<any>(this.target.toString()).subscribe(data => {
        resolve(data)
      })
    })
  }

  async listData() {
    this.products = await this.getProducts()
    this.product = this.products.results[0]
    console.log(this.products)
  }



}
