import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
interface IProduct {
  type: string;
  name: string;
  price: number;
  imgUrl: string;
  id: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'angular-17';
  // imgUrl :string="../assets/أحد.png"
  // htmltag: string = "<span> welcome world</span>"
  // username: string = "mohamed"
  // userage: number = 30
  // userEmail: string = "mohamed@example.com"
  // istrue: boolean = false;
  // isActive: boolean = true;
  // day:string="sunday"
  // frinds:string[]=["mohamed","ahmed","sara","laila"]
  // products:IProduct[]=[
  //   {id: 1, type: "phone", name:" iphone 17",price:1000 ,imgUrl:"../assets/iphone17.jpg"},
  //   {id: 2, type: "phone", name:" samsung",price:2000 ,imgUrl:"../assets/samsunga17.jpg"},
  //   {id: 3, type: "phone", name:" xiaomi",price:900 ,imgUrl:"../assets/xiam.jpg"},
  //   {id: 4, type: "laptop", name:" apple",price:2000 ,imgUrl:"../assets/apple.jpg"},
  //   {id: 5, type: "laptop", name:" lenovo",price:3000 ,imgUrl:"../assets/lenovi.jpg"},
  //   {id: 6, type: "tablet", name:" iphone",price:1500 ,imgUrl:"../assets/tabletiphoe.jpg"},
  //   {id: 7, type: "tablet", name:" samsung",price:1300 ,imgUrl:"../assets/samsungtablet.jpg"},
  // ]
  // addProduct(){
  //   this.products.push({id: this.products.length + 1, type: "phone", name:" huawei",price:1200 ,imgUrl:"../assets/tabletiphoe.jpg"})
  // }
  // trackById(index: number, product: IProduct): number {
  //   return product.id;
  // }
  username: string = "";
}
