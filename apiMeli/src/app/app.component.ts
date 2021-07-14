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


  constructor(private http: HttpClient) {

    this.listData()


  }

  async listData() {
    this.products = await this.getProducts()
    this.product = this.products.results[0]
    console.log(this.products)
  }


  async getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get<any>('https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung%20Galaxy%20S8').subscribe(data => {
        resolve(data)
      })
    })
  }


}
