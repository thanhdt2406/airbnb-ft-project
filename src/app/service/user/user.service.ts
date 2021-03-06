import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(API_URL + `/users`);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(API_URL + `/register`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }
  updateUserById(id: number, user: User): Observable<User> {
    return  this.http.put<User>(API_URL + `/users/${id}`, user);
  }

  changePassword(user: User): Observable<User> {
    return this.http.put<User>(API_URL + `/users/passwords`, user);
  }
}
