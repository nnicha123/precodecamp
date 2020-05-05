import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nicha';
  elements: number[] = [];
  message ='';
  hobbies = ['Walk my dog','Cooking','Play games'];
  newHobby = '';
  deletedHobby = false;
  hobbyCount = this.hobbies.length;

  onChangeName(){
    this.name = 'Anna'
  }

  onAddElement(){
    this.elements.push(this.elements.length + 1);
  }
  getColor(element){
    return element % 2 === 0? 'green':'red'
  }

  onUserWasClicked(userName:string){
    alert(userName);
  }
  onAddHobby(){
    this.hobbies.push(this.newHobby);
    this.hobbyCount = this.hobbies.length;
  }
  deleteHobby(hobby){
    const oldHobbies = this.hobbies;
    const toDelete = oldHobbies.indexOf(hobby);
    this.deletedHobby = true;
    this.hobbies = oldHobbies.filter((el,index)=>{
      return index != toDelete
    })
    this.hobbyCount = this.hobbies.length;
  }

  countColor(hobbyCount){
    return hobbyCount >3 ? 'tomato':'cyan'
  }
}
