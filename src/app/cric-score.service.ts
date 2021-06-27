import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CricScoreService {

  urlInfo = "http://static.cricinfo.com/rss/livescores.xml"
  http: any;

  constructor() { }

  
}
