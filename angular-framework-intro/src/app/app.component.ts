import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nicha';
  elements: number[] = [];

  onChangeName(){
    this.name = 'Anna'
  }

  onAddElement(){
    this.elements.push(this.elements.length + 1)
  }
}
