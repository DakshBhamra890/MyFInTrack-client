import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  serverUrl: string = environment.serveUrl;
  constructor(private http: HttpClient) { }

  // getting all transaction service
  getTransactions(category: string | undefined) {
    if (category) {
      return this.http.get(`${this.serverUrl}/transactions?category=${category}`);
    } else {
      return this.http.get(`${this.serverUrl}/transactions`);
    }
  }

  // Adding new transaction service
  addTransaction(transaction: any) {
    return this.http.post(`${this.serverUrl}/transactions`, transaction);
  }
  // updating transaction service
  updateTransaction(transaction: any) {
    return this.http.put(`${this.serverUrl}/transactions/${transaction._id}`, transaction);
  }
  // delete transaction service
  deleteTransaction(_id: string) {
    return this.http.delete(`${this.serverUrl}/transactions/${_id}`);
  }

}
