import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Token } from '../models/token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl = "http://localhost:3000/api/auth/"

    constructor(private httpClient: HttpClient) { }


    login(login: Login) {
        return this.httpClient.post<Token>(this.apiUrl + "login", login)
    }

    isAuthenticated() {
        if (localStorage.getItem("token")) {
            return true
        }
        else {
            return false
        }
    }
}