// Importing all the necessary modules
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { FormsModule } from '@angular/forms';

export class Transaction {
  _id: string | undefined;
  userId: string | undefined;
  category: string | undefined;
  amount: number | undefined;
  description: string | undefined;
};

@Component({
  selector: 'app-transaction',
  imports: [NgFor, FormsModule],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  constructor(private transactionService: TransactionService) {}

  TRANSACTIONS: any;
  _id: string | undefined;
  userId: string | undefined;
  category: string | undefined;
  amount: number | undefined;
  description: string | undefined;
  keyword: string | undefined;


  // Getting all transactions
  getTransactions(): void {
    this.transactionService.getTransactions(this.keyword).subscribe(response => {
      this.TRANSACTIONS = response;
    });
  }

  // Adding transactions
  addTransaction(): void {
    let newTransaction = {
      userId: this.userId,
      category: this.category,
      amount: this.amount,
      description: this.description
    };

    this.transactionService.addTransaction(newTransaction).subscribe(response => {
      this.getTransactions();
      this.clearForm();
    });
  }

  // this clears the form after adding a new transaction
  clearForm(): void {
    this._id = undefined;
    this.userId = undefined;
    this.category = undefined;
    this.amount = undefined;
    this.description = undefined;
    this.keyword = undefined;
    this.getTransactions();
  }

  // Selecting a transaction 
  selectTransaction(transaction: Transaction): void {
    this._id = transaction._id;
    this.userId = transaction.userId;
    this.category = transaction.category;
    this.amount = transaction.amount;
    this.description = transaction.description;
  }

  // deleting the transcation
  deleteTransaction(_id: string): void {
    if (confirm('Delete this transaction?')) {
      this.transactionService.deleteTransaction(_id).subscribe(response => {
        this.getTransactions();
        this.clearForm();
      });
    }
  }

  // updating the transaction
  updateTransaction(): void {
    let transaction = {
      _id: this._id,
      userId: this.userId,
      category: this.category,
      amount: this.amount,
      description: this.description
    };

    this.transactionService.updateTransaction(transaction).subscribe(response => {
      this.getTransactions();
      this.clearForm();
    });
  }

// this starts the the component
  ngOnInit(): void {
    this.getTransactions();
  }
}
