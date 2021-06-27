import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommunitiesComponent } from './dailynickel/communities/communities.component';
import {DemoMaterialModule} from './material-module';
import { MatSliderModule } from '@angular/material/slider';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CommunitiesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatSliderModule,
    FormsModule,
    HammerModule,
    Ng5SliderModule,
    NgxPaginationModule
        
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
