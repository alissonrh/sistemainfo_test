import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  @Output() login = new EventEmitter<boolean>();

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  

  constructor(private router: Router, private StorageService: StorageService) { }

  ngOnInit(): void {
    if (this.StorageService.getUser()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    if (username === "SISTEMA" && password === "candidato123") {
      this.isLoggedIn = true;
      this.login.emit(this.isLoggedIn);
      sessionStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
      this.StorageService.saveUser({ username, password });
      this.router.navigate(['/profile']);
    } else {
      this.isLoginFailed = true;
      this.errorMessage = "Usuário ou senha invalidos!";
    }
    
  }
}