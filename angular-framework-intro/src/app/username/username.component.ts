import {Component} from '@angular/core';

@Component({
    selector:'app-username',
    template: `
    <p>{{username}}</p>
    `
})
export class UsernameComponent{
    username='Nook'
}