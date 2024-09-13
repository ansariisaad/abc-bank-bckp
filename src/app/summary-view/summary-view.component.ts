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
  accountNumber!: string;
  month!: string;
  year!: string;
  accountSummary: any = {}; 
  transactionList: any[] = []; 
  removedTransactions: any[] = [];
  selectedTransactionId: number | null = null; 
  showingTransactions: boolean = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.accountNumber = params['accountNumber'];
      this.fetchData(); 
    });
  }

  fetchData(): void {
    if (!this.accountNumber) {
      console.error('No account number provided');
      return;
    }

    const apiUrl = `${baseUrl}transactions/custom-range-summary?accountNumber=${this.accountNumber}&startDate=2024-09-01&endDate=2024-11-02`;

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

    console.log('Edit', transaction);
  }

  modifyTransaction(transaction: any): void {
  
    console.log('Modify', transaction);
  }

  deleteTransaction(transaction: any): void {

    console.log('Delete', transaction);
  }

  ignoreTransaction(transaction: any): void {
 
    this.transactionList = this.transactionList.filter(t => t.id !== transaction.id);
    this.removedTransactions.push(transaction);
    this.showingTransactions = false; 
  }

  restoreTransaction(transaction: any): void {

    this.removedTransactions = this.removedTransactions.filter(t => t.id !== transaction.id);
    this.transactionList.push(transaction);
    this.showingTransactions = true;
  }

  showTransactions(): void {
    this.showingTransactions = true;
  }

  showRemovedTransactions(): void {
    this.showingTransactions = false;
  }
}