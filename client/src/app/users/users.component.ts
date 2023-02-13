import { Component } from '@angular/core';
import { Users } from '../Models/Users';
import { UsersService } from '../services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Users[] = []

  constructor(private usersService: UsersService) {
    this.usersService.list().subscribe(
      users => {
        this.users = users
      }
    )
  }

}
