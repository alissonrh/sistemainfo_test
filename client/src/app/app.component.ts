import { Component } from '@angular/core';

import { StorageService } from './_services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  isLoggedIn = false;
  username?: string;

  constructor(private StorageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.StorageService.getUser();

    if (this.isLoggedIn) {
      const user = this.StorageService.getUser();

      this.username = user.username;
    }
  }

  logout(): void {
    this.StorageService.signOut();
    window.location.reload();
  }
}
