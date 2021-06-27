import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  products = [
    {name:"Lenovo Thinkpad X1", type:"good",specificity:"laptop",distance:"12",location:"Austin, Texas",price:"1299"},
    {name:"Dell XPS", type:"good",distance:"4",specificity:"laptop",location:"Austin, Texas",price:"1599"},
    {name:"Yoga", type:"skill",distance:"2",specificity:"yoga",location:"Austin, Texas",price:"149"},
    {name:"Hampshire Fitness", type:"skill",specificity:"jim",distance:"1.5",location:"Austin, Texas",price:"200"},
    {name:"Valvoline X20 Grade", type:"good",specificity:"lubricant",distance:"16",location:"Austin, Texas",price:"49"},
    {name:"IKIGAI", type:"good",specificity:"book",distance:"18",location:"Boston, Massachisets",price:"29"},
    {name:"Pearson Specter", type:"skill",specificity:"legal",distance:"17",location:"Downtown, Newyork",price:"599"},
    {name:"iPhone 12", type:"good",specificity:"phone",distance:"12",location:"Austin, Texas",price:"999"},
    {name:"Daikin", type:"good",specificity:"Air Conditioner",distance:"12",location:"Austin, Texas",price:"799"},
    {name:"Moto Xplay", type:"good",specificity:"phone",distance:"8",location:"Austin, Texas",price:"169"},
    {name:"Exide 1500IMTT", type:"good",specificity:"battery",distance:"9",location:"Houston, Texas",price:"300"},
    {name:"Green Care", type:"skill",distance:"3",specificity:"beauty",location:"Austin, Texas",price:"249"},
    {name:"Axe", type:"good",distance:"6",specificity:"beauty",location:"Austin, Texas",price:"15"},
    {name:"Dell Inspiron", type:"good",specificity:"laptop",distance:"12",location:"Austin, Texas",price:"649"},
    {name:"Craigs Therapy", type:"skill",specificity:"therapy",distance:"8",location:"Austin, Texas",price:"149"},
    {name:"Venv Beauty", type:"skill",specificity:"beauty",distance:"12",location:"Austin, Texas",price:"199"},
    {name:"Singage", type:"good",specificity:"sewing",distance:"12",location:"Austin, Texas",price:"499"},
    {name:"Hp Envy", type:"good",specificity:"laptop",distance:"12",location:"Austin, Texas",price:"899"},
    {name:"iPhone SE", type:"good",specificity:"phone",distance:"12",location:"Austin, Texas",price:"399"},
    {name:"Pixel 4A", type:"good",specificity:"phone",distance:"4",location:"Austin, Texas",price:"299"},
    {name:"Jamieson", type:"skill",specificity:"beauty",distance:"12",location:"Austin, Texas",price:"149"},
    {name:"Loreal", type:"skill",specificity:"beauty",distance:"12",location:"Austin, Texas",price:"9"},
    {name:"Seiko", type:"good",specificity:"clock",distance:"7",location:"Austin, Texas",price:"99"},
    {name:"Ac Service", type:"skill",specificity:"service",distance:"8",location:"Austin, Texas",price:"49"},
    {name:"Macbook Pro M1", type:"good",specificity:"laptop",distance:"18",location:"Austin, Texas",price:"1299"},
    {name:"AT&T", type:"good",specificity:"phone",distance:"12",location:"Austin, Texas",price:"1299"},
    {name:"Nikon", type:"good",specificity:"photography",distance:"12",location:"Austin, Texas",price:"1299"},
    {name:"Scott Photography", type:"skill",specificity:"photography",distance:"12",location:"Austin, Texas",price:"1299"},
    {name:"Amcor Videos", type:"skill",specificity:"photography",distance:"12",location:"Austin, Texas",price:"1299"},
    {name:"Nikon 500EOS", type:"good",specificity:"photography",distance:"12",location:"Austin, Texas",price:"1299"},
    {name:"Alice Photography", type:"skill",specificity:"photography",distance:"12",location:"Austin, Texas",price:"1299"},
    ]
  constructor() { }

  getProducts(){
    return this.products;
  }
  
}
