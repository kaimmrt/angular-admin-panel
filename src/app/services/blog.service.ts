import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddBlog, Blog } from "../models/blog";

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    apiUrl = "http://localhost:3000/api/blog/"
    constructor(private httpClient: HttpClient) { }

    add(blog: AddBlog) {
        return this.httpClient.post(this.apiUrl, blog)
    }

    getBlogs(): Observable<Blog[]> {
        return this.httpClient.get<Blog[]>(this.apiUrl)
    }

    findBlog(id: string | null): Observable<Blog> {
        return this.httpClient.get<Blog>(this.apiUrl + `${id}`)
    }

    updateBlog(id: string | null, data: Blog): Observable<Blog> {
        return this.httpClient.put<Blog>(this.apiUrl + `${id}`, data)
    }
}