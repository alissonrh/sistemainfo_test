import { Component, OnInit } from '@angular/core';
import { Users } from '../Models/Users';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../_services/usuario.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: Users = {
    id: '',
    nome: '',
    cpf: '',
    endereco: '',
    telefone: ''
  }

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.read(id).subscribe(
      user => {
        console.log(user);
        this.user = user;
      },
      error => {
        if (error.status === 404) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  edit(id: any) {
    this.router.navigate(['edit', id]);
  }

  delete() {
    this.usersService.delete(this.user.id).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }
}
