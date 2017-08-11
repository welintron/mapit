import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  //zoom level
  zoom: number = 10;

  //star position
  lat: number = 51.678418;
  lng: number = 7.809007;
  //markers
  markers:  marker[] = [
    {
      name: 'Company One',
      lat: 51.678200,
      lng: 7.809200,
      draggable: true

    },
    {
      name: 'Company Two',
      lat: 51.679200,
      lng: 7.819200,
      draggable: true

    },    
    {
      name: 'Company One',
      lat: 51.688200,
      lng: 7.808200,
      draggable: true

    },
  ];

  constructor(){

  }

  
}
//Market Type
interface marker{
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;

}
