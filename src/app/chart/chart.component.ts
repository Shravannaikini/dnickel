import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

import { DatacenterService } from '../datacenter.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  data:any[]=[];
  
  movieCountry:any[] =[];
  movieRating:any[] = [];
  movieVsTv:any[] =[];
  tvCountry:any[] = [];
  tvRating:any[] = [];
  movieCountryInd:any[] = [];
  tvYear:any[]=[];
  movieYear:any[]=[];
  tvMovie:any;
   

  constructor(private massdata: DatacenterService) { }

  tvMoviedata:any=[];
  tvMovielabels:any=[];
  tvMovieresult:any=[];

  // movieRatingdata:any=[];
  // movieratinglabels:any=[];
  // movieRatingresult:any=[];




  ngOnInit(): void {
    this.loadData();
    this.loadMovieCountry();
    this.loadMovieRating();
    this.loadMovieTv();
    this.loadTvCountry();
    this.loadTvRating();
    this.loadMovieInd();
    this.loadMovieYear();
    this.loadTvYear();
    this.getgraph1();
    this.movieRatingGraph();
    this.tvRatingGraph();
    this.tvCountryGraph()
    
    console.log(this.tvYear);
    console.log(this.movieRating)
    
  }

  loadData(){
    this.massdata.getData().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.data.push(e);
  });
  });
  }

  loadMovieCountry(){
    this.massdata.getMovieCountry().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.movieCountry.push(e);
  });
  });
  }

  loadMovieRating(){
    this.massdata.getMovieRating().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.movieRating.push(e);
  });
  });
  }

  loadMovieTv(){
    this.massdata.getMovieTv().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.movieVsTv.push(e);
  });
  });
  }

  loadTvCountry(){
    this.massdata.getTvCountry().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.tvCountry.push(e);
  });
  });
  }

  loadTvRating(){
    this.massdata.getTvRating().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.tvRating.push(e);
  });
  });
}

loadTvYear(){
  this.massdata.getTvYear().subscribe( data => { const list = data.split('\n');
list.forEach( e =>{ this.tvYear.push(e);
});
});
}

  

  loadMovieInd(){
    this.massdata.getMovieInd().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.movieCountryInd.push(e);
  });
  });
  }

  loadMovieYear(){
    this.massdata.getMovieYear().subscribe( data => { const list = data.split('\n');
  list.forEach( e =>{ this.movieYear.push(e);
  });
  });
  }

  getgraph1()
  {
  this.massdata.getMovieTv().subscribe(
  data => { const list = data.split('\n');
  list.forEach( e =>{ this.tvMoviedata.push(e.trim());
  });
  //console.log(list);
  this.tvMoviedata.shift();
  console.log(this.tvMoviedata);
  this.setgraph1(this.tvMoviedata, );
 
 })
  }

  setgraph1(data,)
  {  
    let strv='movie-tv';
    let movieTvColors = [];
    this.tvMovielabels=[...new Set(data)];
    console.log(this.tvMovielabels);
    for(let i=0;i<this.tvMovielabels.length; i++)
    {
      let temp=data.filter(x=>x==this.tvMovielabels[i]).length;
      this.tvMovieresult.push(temp);
      temp=0;
    }
    for(let i=0; i<= this.tvMovielabels.length;i++){
      movieTvColors.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }
    this.graphInit2(this.tvMovielabels,this.tvMovieresult, strv, movieTvColors);
    
  }



  movieRatingGraph(){
    let movieRatingdata=[];
    let movieratinglabels=[];
    let movieRatingresult=[];
  this.massdata.getMovieRating().subscribe(
  data => { const list = data.split('\n');
  list.forEach( e =>{movieRatingdata.push(e.trim());
  });
  movieRatingdata.shift();
  
  let str = 'movie-rating';
    movieratinglabels=[...new Set(movieRatingdata)];
    console.log(movieratinglabels);
    for(let i=0;i<movieratinglabels.length; i++)
    {
      let temp=movieRatingdata.filter(x=>x==movieratinglabels[i]).length;
      movieRatingresult.push(temp);
      temp=0;
    }
    this.graphInit(movieratinglabels,movieRatingresult, str);
 
 })
  }


  tvRatingGraph(){
    let tvRatingdata=[];
    let tvratinglabels=[];
    let tvRatingresult=[];
  this.massdata.getTvRating().subscribe(
  data => { const list = data.split('\n');
  list.forEach( e =>{tvRatingdata.push(e.trim());
  });
  tvRatingdata.shift();
  
  let str = 'tv-rating';
    tvratinglabels=[...new Set(tvRatingdata)];
    console.log(tvratinglabels);
    for(let i=0;i<tvratinglabels.length; i++)
    {
      let temp=tvRatingdata.filter(x=>x==tvratinglabels[i]).length;
      tvRatingresult.push(temp);
      temp=0;
    }
    this.graphInit(tvratinglabels,tvRatingresult, str);
 
 })
  }



  tvCountryGraph(){
    let tvCountrydata=[];
    let tvCountrylabels=[];
    let tvCountryresult=[];
    let tvColors=[];
  this.massdata.getTvCountry().subscribe(
  data => { const list = data.split('\n');
  list.forEach( e =>{tvCountrydata.push(e.trim());
  });
  tvCountrydata.shift();
  
  let str = 'tv-country';
    tvCountrylabels=[...new Set(tvCountrydata)];
    console.log(tvCountrylabels);
    for(let i=0;i<tvCountrylabels.length; i++)
    {
      let temp=tvCountrydata.filter(x=>x==tvCountrylabels[i]).length;
      tvCountryresult.push(temp);
      temp=0;
    }

    for(let i=0; i<= tvCountrylabels.length;i++){
      tvColors.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }
    
    this.graphInit2(tvCountrylabels,tvCountryresult, str, tvColors);
 
 })
  }

  


  

  
  
  
  
  
  
  
  
  graphInit(setM: any, dataM: any, strm: string ){
    var ctx = document.getElementById(strm);
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: setM,
        datasets: [{
            label: "Count",
            data: dataM,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }




  graphInit2(setM: any, dataM: any, strm: string, colors:any ){
    
    var ctx = document.getElementById(strm);
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: setM,
        datasets: [{
            label: "Count",
            data: dataM,
            backgroundColor: colors,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }




















} //final brace
