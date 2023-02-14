import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Users } from '../Models/Users';
import { UsersService } from '../_services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  form: any = {
    id: '',
    codigo: null,
    nome: null,
    cpf: null,
    endereco: null,
    telefone: null
  };
  errorMessage = '';
  users: Users[] = []

  constructor(private userService: UsersService, 
    private router: Router,
    private route: ActivatedRoute,) {
    this.userService.list().subscribe(
      users => {
        this.users = users
      }
    )
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.userService.read(id).subscribe(
      user => {
        console.log(user);
        this.form = user;
      },
      error => {
        if (error.status === 404) {
          this.router.navigate(['/edit']);
        }
      }
    );
  }

  update() {
    this.userService.update(this.form.id, this.form).subscribe(() => {
      alert(`${this.form.nome} Atualizada com Sucesso`)
      this.router.navigate(['/profile']);
    }, error => {
      console.error('Error', error)
    });
  }

  goToDetails(id: string) {
    this.router.navigate([`/details/${id}`]).catch(() => {
      this.router.navigate(['/details']);
    });
  }
}
