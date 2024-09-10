import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
// import { hostport } from 'src/app/utils/api'; 
import { baseUrl } from '../utils/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements AfterViewInit {
  forecastPeriod: string = '';
  selectedOption: number = 0;
  searchValue: string = '';
  accounts: any[] = [];
  yearlySummary: any = {}; 
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private cdr: ChangeDetectorRef, 
    private http: HttpClient, 
    private router: Router 
  ) {}

  onOptionChange() {
    console.log('Selected option:', this.selectedOption);
  }

  search() {
    this.loading = true;
    this.error = null;
    const url = this.buildUrl();

    if (!url) {
      this.loading = false;
      return;
    }

    console.log('Constructed URL:', url);

    this.http.get(url).subscribe(
      (response: any) => {
        this.loading = false;
        if (response.code === 200 && response.status === 'success') {
          this.accounts = response.data;
      
          this.accounts.forEach(account => account.showTable = false);

          if (this.accounts.length > 0) {
            const accountNumber = this.accounts[0].accountNumber;
            this.fetchYearlySummary(accountNumber);
          }
        } else {
          this.error = response.message || 'No data found.';
        }
      },
      (error) => {
        this.loading = false;
        this.error = 'Error fetching data. Please try again later.';
        console.error('HTTP request error:', error);
      }
    );
  }

  private fetchYearlySummary(accountNumber: string) {
    const yearlySummaryUrl = `${baseUrl}transactions/yearly-summary?accountNumber=${accountNumber}`;

    this.http.get(yearlySummaryUrl).subscribe(
      (response: any) => {
        if (response.code === 200 && response.status === 'success') {
          this.yearlySummary[accountNumber] = response.data;  
          console.log('Yearly Summary:', this.yearlySummary);

          const account = this.accounts.find(acc => acc.accountNumber === accountNumber);
          if (account) {
            account.yearlyOpeningBalance = response.data.yearlyOpeningBalance;
            account.yearlyClosingBalance = response.data.yearlyClosingBalance;
          }
        } else {
          this.error = response.message || 'No yearly summary data found.';
        }
      },
      (error) => {
        this.error = 'Error fetching yearly summary. Please try again later.';
        console.error('HTTP request error (Yearly Summary):', error);
      }
    );
  }

  private buildUrl(): string {
    let url = `${baseUrl}accounts/search?`;
    console.log('searchValue', this.searchValue);
    this.selectedOption = Number(this.selectedOption);

    switch (this.selectedOption) {
      case 1:
        url += `accountNumber=${encodeURIComponent(this.searchValue)}`;
        break;

      case 2:
        url += `accountTitle=${encodeURIComponent(this.searchValue)}`;
        break;

      default:
        this.error = 'Please select a search option.';
        return '';
    }

    return url;
  }

  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const selectedDate = new Date(inputElement.value);

    if (!isNaN(selectedDate.getTime())) {
      const endDate = new Date(selectedDate);
      endDate.setMonth(endDate.getMonth() + 6);
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const startDateFormatted = selectedDate.toLocaleDateString(
        undefined,
        options
      );
      const endDateFormatted = endDate.toLocaleDateString(undefined, options);

      this.forecastPeriod = `${startDateFormatted} - ${endDateFormatted}`;

      this.cdr.detectChanges();
    } else {
      this.forecastPeriod = 'Please select a valid date.';
    }
  }

  ngAfterViewInit(): void {
    const canvas1 = document.getElementById('donutChart1') as HTMLCanvasElement;
    const ctx1 = canvas1?.getContext('2d');
    if (ctx1) {
      new Chart(ctx1, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: 'My Dataset',
              data: [300, 50, 100],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
        },
      });
    }

    const canvas2 = document.getElementById('donutChart2') as HTMLCanvasElement;
    const ctx2 = canvas2?.getContext('2d');
    if (ctx2) {
      new Chart(ctx2, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: 'Another Dataset',
              data: [200, 150, 250],
              backgroundColor: ['#4CAF50', '#9C27B0', '#FF9800'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
        },
      });
    }
  }

  toggleTable(account: any) {
    this.router.navigate(['/summary-view'], { queryParams: { accountNumber: account.accountNumber } });
  }
}
