import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Users } from '../Models/Users';
import { UsersService } from '../services/usuario.service';

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

  constructor(private userServide: UsersService) { }

  @Input() login: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoggedIn = false

  ngOnInit(): void {
    this.login.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onSubmit(): void {
    this.userServide.create(this.form).subscribe((response: any) => {
      console.log('Success', response)
      alert(`${this.form.nome} Cadastrada com Sucesso`)
    }, (error: any) => {
      console.error("Error", error);
    })
  }
}