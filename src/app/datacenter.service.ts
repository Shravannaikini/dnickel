import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatacenterService {

  data = '/assets/netflix_titles.csv';
  movieCountry = '/assets/movie_country.csv';
  movieRating = '/assets/movie_rating.csv';
  movieVsTv = '/assets/movie_tv.csv';
  tvCountry = '/assets/tv_country.csv';
  tvRating = '/assets/tv_rating.csv';
  movieCountryInd = '/assets/movie_country_ind.csv';
  movieYear = '/assets/movie_year.csv';
  tvYear = '/assets/tv_year.csv'

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.data, {responseType: 'text'})
  }

  getMovieCountry(){
    return this.http.get(this.movieCountry, {responseType: 'text'})
  }

  getMovieRating(){
    return this.http.get(this.movieRating, {responseType: 'text'})
  }

  getMovieTv(){
    return this.http.get(this.movieVsTv, {responseType: 'text'})
  }

  getTvCountry(){
    return this.http.get(this.tvCountry, {responseType: 'text'})
  }

  getTvRating(){
    return this.http.get(this.tvRating, {responseType: 'text'})
  }
  getMovieInd(){
    return this.http.get(this.movieCountryInd, {responseType: 'text'})
  }

  getMovieYear(){
    return this.http.get(this.movieYear, {responseType: 'text'})
  }

  getTvYear(){
    return this.http.get(this.tvYear, {responseType: 'text'})
  }






} //final Brace
