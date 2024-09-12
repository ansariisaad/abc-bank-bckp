import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../utils/api';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css'],
})
export class SummaryViewComponent implements OnInit {
  month!: string;
  year!: string;
  accountSummary: any = {}; // To store account data
  transactionList: any[] = []; // To store transaction data
  removedTransactions: any[] = []; // To store removed transaction data
  selectedTransactionId: number | null = null; // To store selected transaction ID for menu
  showingTransactions: boolean = true; // To toggle table visibility

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.month = params['month'];
      this.year = params['year'];
      this.fetchData(); // Fetch data based on route parameters
    });
  }

  fetchData(): void {
    const apiUrl =  `${baseUrl} transactions/custom-range-summary?accountNumber=ACC00101&startDate=2024-09-01&endDate=2024-11-02`;

    this.http.get(apiUrl).subscribe({
      next: (response: any) => {
        if (response.code === 200) {
          this.accountSummary = {
            cifId: response.data.cifId,
            corporateName: response.data.corporateName,
            accountNumber: response.data.accountNumber,
            openingBalance: response.data.openingBalance,
            closingBalance: response.data.closingBalance,
            odLimit: response.data.odLimit,
            startDate: response.data.startDate,
            endDate: response.data.endDate,
            totalCashInflow: response.data.totalCashInflow,
            totalCashOutflow: response.data.totalCashOutflow,
            netCashflow: response.data.netCashflow
          };

          // Extract transactions and removedTransactions
          this.transactionList = response.data.transactions.content || [];
          this.removedTransactions = response.data.ignoredTransactions.content || [];
        } else {
          console.error('Error fetching data:', response.message);
        }
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }

  toggleMenu(transactionId: number): void {
    this.selectedTransactionId = this.selectedTransactionId === transactionId ? null : transactionId;
  }

  editTransaction(transaction: any): void {
    // Implement your logic for editing the transaction
    console.log('Edit', transaction);
  }

  modifyTransaction(transaction: any): void {
    // Implement your logic for modifying the transaction
    console.log('Modify', transaction);
  }

  deleteTransaction(transaction: any): void {
    // Implement your logic for deleting the transaction
    console.log('Delete', transaction);
  }

  ignoreTransaction(transaction: any): void {
    // Remove transaction from transactionList and add to removedTransactions
    this.transactionList = this.transactionList.filter(t => t.id !== transaction.id);
    this.removedTransactions.push(transaction);
    this.showingTransactions = false; // Show removed transactions table after ignoring
  }

  restoreTransaction(transaction: any): void {
    // Remove transaction from removedTransactions and add back to transactionList
    this.removedTransactions = this.removedTransactions.filter(t => t.id !== transaction.id);
    this.transactionList.push(transaction);
    this.showingTransactions = true; // Show transactions table after restoring
  }

  showTransactions(): void {
    this.showingTransactions = true;
  }

  showRemovedTransactions(): void {
    this.showingTransactions = false;
  }
}