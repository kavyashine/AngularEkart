import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products=[
    {
      id:1,
      name:'Nike React Infinity',
      description:'Good Nike product',
      brand:'Nike',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEYARgDASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAEDBAUGAgf/xABEEAACAgECBAQCBwMICgMBAAABAgADEQQhBRIxUQYTQXEiYRQjMoGRobFCUsEHFRZDYpKi0RczU3KCstLh8PEkRJPC/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAAzEQACAQMDAgMGBgEFAAAAAAAAAQIDBBESITEFQRNRYSJxgZHB8BQyobHR4SMGFSQzQv/aAAwDAQACEQMRAD8A/VSWydz1jLdzB6mSAXLdzGW7mSIBct3MZbuZIgFy3cxlu5kiAXLdzGW7mSIBct3MZbuZIgFy3cxlu5kiAXLdzGW7mSIBct3MZbuZIgFy3cxlu5kiAXLdzGW7mSIBct3MZbuZIgFy3cxlu5kiAXLdzGW7mSIBct3MZbuZIgFy3cxlu5kiAXLdzGW7mSIBQWyNz1iB1HvEAHqZJT1MkAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQCjqPeIHUe8QAepklPUyQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAKOo94gdR7xAB6mSU9TJAEREAREQCxEQCSySwCSySwCSySwCREQCySyQCySyQBLJLAJLJLAJLJLAJLJLAEkskAREQBERAKOo94gdR7xAB6mSU9TJAEREAREQBEsQCREsAkRLAJESwCREQBEskARLJAERLAJESwCREsAkRLAJEskAREQBERAKOo94gdR7xAB6mSU9TJAEREAREQBEsQCREsAkRLAJESwCREQBEskARLJAERLAJESwCREsAkRLAJEskAREQBERAKOo94gdR7xAB6mSU9TJAEREAREQBEsQCREsAkRLAJESwCREQBEskARLJAERLAJESwCREsAkRLAJEskAREQBERAKOo94gd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',
      slug:'NIKE Running shoes'
    },
    {
      id:2,
      name:'Puma React Infinity',
      description:'Good Puma product',
      brand:'Puma',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:3600,
      discountPrice:140,
      is_in_inventory:true,
      items_left:6,
      imageURL:'https://th.bing.com/th?id=OIP.1FP6I_tOOc8oc2Bh6GmfDgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      slug:'NIKE Running shoes'
    },
    {
      id:3,
      name:'Adidas React Infinity',
      description:'Good Adidas product',
      brand:'Adidas',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:8660,
      is_in_inventory:false,
      items_left:9,
      imageURL:'https://th.bing.com/th?id=OIP.8hOojeQEAgrvCzWGhoo4YgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      slug:'NIKE Running shoes'
    }, 
    {
      id:4,
      name:'Nike React Infinity',
      description:'Good Nike product',
      brand:'Nike',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th/id/OIP.6sT-UtbKUuRJIpR_D-103wHaFj?w=205&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      slug:'NIKE Running shoes'
    },   
    {
      id:5,
      name:'Nike React Infinity',
      description:'Good Nike product',
      brand:'Nike',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:1600,
      discountPrice:140,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th/id/OIP.rMFba21EByYI1xXAcwnk1gHaFj?w=205&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      slug:'NIKE Running shoes'
    },    
     {
      id:6,
      name:'Nike React Infinity',
      description:'Good Nike product',
      brand:'Nike',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:false,
      items_left:3,
      imageURL:'https://th.bing.com/th?id=OIP.XdCPJSZ4Vo3Wy33pr2W_CwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      slug:'NIKE Running shoes'
    },
    {
      id:7,
      name:'Nike React Infinity',
      description:'Good Nike product',
      brand:'Nike',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:6000,
      discountPrice:300,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th/id/OIF.RSGDIzEuq3xl3vCwnZYkQA?w=321&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      slug:'NIKE Running shoes'
    },
    {
      id:8,
      name:'Nike React Infinity',
      description:'Good Nike product',
      brand:'Nike',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:4500,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th?id=OIP.O4UwDWa-0kTtq515qWR3XgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      slug:'NIKE Running shoes'
    },
    {
      id:9,
      name:'Jordhan',
      description:'Good  product',
      brand:'Jordan',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:11160,
      discountPrice:500,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th/id/OIP.TnGdDzAS4wDYgcoAMFCb9wHaGd?rs=1&pid=ImgDetMain',
      slug:'NIKE Running shoes'
    },
    {
      id:10,
      name:'Nike React Infinity',
      description:'Good Nike product',
      brand:'Nike',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th/id/OIP.6sT-UtbKUuRJIpR_D-103wHaFj?w=205&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      slug:'NIKE Running shoes'
    },
    {
      id:11,
      name:'Adidas',
      description:'Good product',
      brand:'Adidas',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th?id=OIP.lk6p0wdggUQItz8QwCHyIQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      slug:'NIKE Running shoes'
    },
    {
      id:12,
      name:'Sparx React Infinity',
      description:'Good product',
      brand:'Sparx',
      gender:'MEN',
      category:'Running',
      size:[6,7,8,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:'https://th.bing.com/th?id=OIP.1RfKeDjiffAd7MnXDykgcQHaFs&w=285&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      slug:'NIKE Running shoes'
    }
  ]

  totalProductCount=this.products.length;
  totalProductInStock=this.products.filter(p=>p.is_in_inventory === true).length;
  totalProductOutOfStock=this.products.filter(p =>p.is_in_inventory===false).length;

  

  selectedRadioButton:string='all';

  onFillterChanged(value: string){
    console.log(value);
    this.selectedRadioButton = value;
  }
}
