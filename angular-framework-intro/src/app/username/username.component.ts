import {Component, Input} from '@angular/core';

@Component({
    selector:'app-username',
    template: `
    <p>{{username}}</p>
    `
})
export class UsernameComponent{
   @Input() username = 'string'
}