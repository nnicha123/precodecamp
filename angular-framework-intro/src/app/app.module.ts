import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import {HobbyComponent} from './hobby/hobby.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { AccountComponent } from './account/account.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'',component:UserComponent},
  {path:'blog',component:BlogComponent},
  {path:'account',component:AccountComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    UsernameComponent,
    InfoComponent,
    UserComponent,
    BlogComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
