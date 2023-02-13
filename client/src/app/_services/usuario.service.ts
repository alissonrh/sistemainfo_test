import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Users } from '../Models/Users'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://localhost:5183/api/usuarios/'

  constructor(private http: HttpClient) { }

  create(users: Users) {
    return this.http.post(this.baseUrl, users)
  }

  read(id: number | string | null): Observable<Users> {    
    return this.http.get<Users>(`${this.baseUrl}${id}`)
  }

  list(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl)
  }

  update(id: number | string | null, users: Users) {
    return this.http.put(`${this.baseUrl}${id}`, users)
  }

  delete(id: number | string | null) {
    return this.http.delete(`${this.baseUrl}${id}`)
  }
}
