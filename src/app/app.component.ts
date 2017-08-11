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
  //values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
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
      name: 'Company Three',
      lat: 51.688200,
      lng: 7.808200,
      draggable: true

    },
  ];

  constructor(){

  }

  clickedMarker(marker: marker, index: number) {
    console.log('Clicked marker: '+ marker.name+' at index' +index);
  }

  mapClicked($event:any){
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any) {
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

  }

  addMarker() {
    console.log('Adding Marker');
    if (this.markerDraggable == 'yes') {
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name:this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable:isDraggable
    }

    this.markers.push(newMarker);

  }
  
}
//Market Type
interface marker{
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;

}
