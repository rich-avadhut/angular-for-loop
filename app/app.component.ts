import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  outdoorGames = {};
  indoorGanes = [];
  constructor(){
    this.indoorGanes = ["Snooker","Squash","Bowling","Table Tennis","Badminton","Chess","Carem"];
    
    this.outdoorGames = [
      {
        "id": 1,
        "name": "Basketball"
      },
      {
        "id": 2,
        "name": "Volleyball"
      },
      {
        "id": 3,
        "name": "Frisbee"
      },
      {
        "id": 4,
        "name": "Golf"
      },
      {
        "id": 5,
        "name": "Soccer"
      },
      {
        "id": 6,
        "name": "Cricket"
      }
    ];  
  }
}