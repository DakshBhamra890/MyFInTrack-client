import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  serverUrl: string = environment.serveUrl;
  // Getting all categories service
  getCategories() {
    return this.http.get(`${this.serverUrl}/categories`);
  }
  // adding category servies
  addCategory(category: any) {
    return this.http.post(`${this.serverUrl}/categories`, category);
  }
  // updating category service
  updateCategory(category: any) {
    return this.http.put(`${this.serverUrl}/categories/${category._id}`, category);
  }
  // delete category service
  deleteCategory(id: string) {
    return this.http.delete(`${this.serverUrl}/categories/${id}`);
  }
}
