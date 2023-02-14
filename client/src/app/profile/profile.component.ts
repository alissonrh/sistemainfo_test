import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Users } from '../Models/Users';
import { UsersService } from '../_services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: any = {
    codigo: null,
    nome: null,
    cpf: null,
    endereco: null,
    telefone: null
  };
  errorMessage = '';
  users: Users[] = []

  constructor(private userService: UsersService, private router: Router) {
    this.userService.list().subscribe(
      users => {
        this.users = users
      }
    )
  }

  @Input() login: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoggedIn = true

  ngOnInit(): void {
    /* this.login.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      
    }); */
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== null) {
      // isLoggedIn é do tipo 'string' nesta parte do código
      this.isLoggedIn = JSON.parse(isLoggedIn);
    }
  }

  onSubmit(): void {
    this.userService.create(this.form).subscribe((response: any) => {
      console.log('Success', response)
      alert(response.message)
      window.location.reload();
    }, (error: any) => {
      console.error("Error", error);
    })
  }

  goToDetails(id: string) {
    this.router.navigate([`/details/${id}`]).catch(() => {
      this.router.navigate(['/details']);
    });
  }
}