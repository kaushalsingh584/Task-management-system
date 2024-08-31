import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-management';
  users = DUMMY_USERS;
  username:string = "";

  // onSelectedUser(id:string){
  //   console.log("the selected user id is: "+ id);
  // }
  onSelectedUser(username:string){
    console.log("the selected user id is: "+ username);
    this.username= username;
  }
}
