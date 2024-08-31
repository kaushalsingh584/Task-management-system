import { Component, EventEmitter, Input, Output } from '@angular/core';
interface User{
  id: string,
  name: string,
  avatar: string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  // @Input({required:true}) username!: string;
  // @Input({required:true}) userimage!: string;
  // @Input({required:true}) id!: string;

  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter();
  


  onSelectedUser(){
    this.select.emit(this.user.name)
  }
}
