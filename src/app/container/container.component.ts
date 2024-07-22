import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText:string ='';

  setSearchText(value:string){
    this.searchText =value;
  }

listOfString:string[]=['Mark','Steve','Merry','John','Sarah']





  addToCart:number=0;
  //name="John Doe";
  product=
  {
    name: "Iphone 13",
    price: 999,
    color:'Black',
    dp:8.5,
    inStock: 5,
    pImage:'https://pngimg.com/uploads/iphone_13/small/iphone_13_PNG9.png'

  }

  getDiscountedPrice(){
   return this.product.price - (this.product.price * this.product.dp /100) 
  }
  onNameChange(event:any){
    //console.log(event.target.value)
  }


  decrementCartValue(){
    if(this.addToCart>0)
      {
        this.addToCart--;
      }
    
  }

  incrementCartValue(){
    if(this.addToCart<this.product.inStock)
      {
        this.addToCart++;
      }
   
  }

}
