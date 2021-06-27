import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider'
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommunitiesComponent implements OnInit {
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;

  p:number=1;

  current:number;
  products;
  productReal;
  checkValue1;
  checkValue2;
  value:number=1;
  highValue:number=1900;
  options: Options;
  distance: number = 5;
  expandClass1 = "square-radios-shell";
  expandClass2 = "square-radios-shell";
  iconClass1 = "fa fa-chevron-circle-down";
  iconClass2 = "fa fa-chevron-circle-down";
  productCount;

  listGrid = "card"
  milesButton1 = "miles";
  milesButton2 = "miles-bare";
  milesButton3 = "miles-bare";
  milesButton4 = "miles-bare";


  skills = [
    {name:"Show All", value:"all",checked:true},
    {name:"Landscaping+Gardening",value:"Landscaping+Gardening",checked:false},
    {name:"Beauty",value:"beauty",checked:false},
    {name:"Phones",value:"phone", checked:false},
    {name:"Photography",value:"photography", checked:false},
    {name:"Technical Support",value:"Technical Support", checked:false},
    {name:"Legal",value:"Legal", checked:false}
  ];
  goods = [
    {name:"Show All", value:"all",checked:true},
    {name:"Landscaping+Gardening",value:"Landscaping+Gardening",checked:false},
    {name:"Beauty",value:"beauty",checked:false},
    {name:"Phones",value:"phone", checked:false},
    {name:"Photography",value:"photography", checked:false},
    {name:"Technical Support",value:"Technical Support", checked:false},
    {name:"Legal",value:"Legal", checked:false}
  ]

  

  constructor(private productData:ProductDataService) { }

  ngOnInit(): void {
    this.options = {
    floor: 5,
    ceil: 1900
  };
  this.loadProducts();
  console.log(this.p);
  }

  // ranger code
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  //ranger code

  //cal lowhigh
  calLowIndex(num){
    return (num*10)-10;
  }
  calHighIndex(num){
    if(num*10 > this.products.length){
      return (num*10)-((num*10)-this.products.length); 
    }
      return (num*10);
  }
  //call lowhigh

  // expander

  expand1(){
    if(this.expandClass1 == "square-radios-shell"){
      this.expandClass1 = "square-radios-shell-expand";
      this.iconClass1 = "fa fa-chevron-circle-up";
    }else{
      this.expandClass1 = "square-radios-shell";
      this.iconClass1 = "fa fa-chevron-circle-down";
    }
  }
  expand2(){
    if(this.expandClass2 == "square-radios-shell"){
      this.expandClass2 = "square-radios-shell-expand";
      this.iconClass2 = "fa fa-chevron-circle-up";
    }else{
      this.expandClass2 = "square-radios-shell";
      this.iconClass2 = "fa fa-chevron-circle-down";
    }
  }

  loadProducts(){
    let data = this.productData.getProducts();
    this.productReal = data;
    this.products = [...this.productReal];
  }

  onItemChange1(){
      let x = document.getElementsByName("checkbox");
      this.checkValue1 = x;
      console.log(this.checkValue1)
   }

  onItemChange2(value){
  this.checkValue2 = value;
  }

  selectedOptions(){
    return this.skills
      .filter(opt => opt.checked)
      .map(opt => opt.value)
  }
  selectedOptions1(){
    return this.goods
      .filter(opt => opt.checked)
      .map(opt => opt.value)
  }


  updateDistance(event){
    this.distance = event.value;
  }

  updateDistanceButton(value){
    this.distance = parseInt(value);
  }
  updateRange(c1,c2){
    this.value = c1;
    this.highValue = c2;
  }

  listView(){
    this.listGrid = "cardH"
  }

  gridView(){
    this.listGrid = "card"
  }

  milesButton(num){
    if(num == 5){
      this.milesButton1 = "miles";
      this.milesButton2 = "miles-bare";
      this.milesButton3 = "miles-bare";
      this.milesButton4 = "miles-bare"; 
    }else if(num == 10){
      this.milesButton1 = "miles";
      this.milesButton2 = "miles";
      this.milesButton3 = "miles-bare";
      this.milesButton4 = "miles-bare";
    }else if(num == 15){
      this.milesButton1 = "miles";
      this.milesButton2 = "miles";
      this.milesButton3 = "miles";
      this.milesButton4 = "miles-bare";
    }else{
      this.milesButton1 = "miles";
      this.milesButton2 = "miles";
      this.milesButton3 = "miles";
      this.milesButton4 = "miles";
    }
  }

  filterStream(x, stream, type){
    let skill:any;
    skill = this.productReal.filter((product)=>{
      let i=0;
      while(i < x.length){

        if((x[i]== product[stream]) && (type == product.type)){
          i=0;
          return true;
        }
        i=i+1; 
      }
      i=0;
      return false;
    });
    this.products = this.products.concat(skill);
  }

  filterRangers(num1,type,products,num2=null){
  var dummy = products.filter((product)=>{
    if(type=="slider"){
      return parseInt(product.distance) <= num1;
    }else if(type == "ranger"){
      return (parseInt(product.price) >= num1) && (parseInt(product.price) <= num2) ;
    }
  })  ;
  if(type == "slider"){
    this.products= this.products.concat(dummy);
  }else{
    this.products = dummy;
  }
   
  }




  submitConstraints(){
    this.p = 1;
    this.products = [];
    let x:any = this.selectedOptions();
    let y:any = this.selectedOptions1();
    let distance = this.distance;
    let rangeLow = this.value;
    let rangeHigh = this.highValue;
    if(x.length>1){
      x.shift();
      this.filterStream(x, "specificity", "skill");
      this.filterRangers(distance,"slider",this.products);
      this.filterRangers(rangeLow,"ranger", this.products,rangeHigh);
    }else if(y.length>1){
      y.shift();
      this.filterStream(y, "specificity", "good");
      this.filterRangers(distance,"slider",this.products);
      this.filterRangers(rangeLow,"ranger",this.products,rangeHigh);
    }else{
      this.filterRangers(distance,"slider", this.productReal);
      console.log(this.products)
      this.filterRangers(rangeLow,"ranger",this.products,rangeHigh);
    }

    console.log(this.products.length)
  }


}
