import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { baseUrl, rejectSearch } from 'src/app/utils/api';
import { response } from 'express';
import { AlertService } from '../utils/aleartService';
import { error } from 'console';
// import DoneIcon from '@mui/icons-material/Done';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
})
export class ListingPageComponent implements OnInit {
  // selectAllTick : boolean = false
  // rejectAllTick : boolean = true
  cancelIcon = baseUrl + 'pending-list/reject'
  rejectPost = baseUrl + 'rejectAll'
  selectedIds: number[] = [];
  rejectionReason: string = '';
  tickBoxClick: boolean = true;
  isChecked: boolean = false;
  showAdditionalColumns: boolean = false;
  tickBox: boolean = false;
  rejectAll: boolean = false;
  authorizeAll: boolean = false;
  hideOnlyPending: boolean = false;
  // searchValue: string = '';
  showOnlyPending: boolean = false;
  results: any[] = [];
  data: any[] = [];
  selectedOption: number = 0;
  searchValue: string = '';
  currentStatus: 'rejected' | 'pending' | 'review' | null = null;

  onOptionChange() {
    console.log('Selected option:', this.selectedOption);
  }

  setStatus(status: 'rejected' | 'pending' | 'review') {
    this.currentStatus = status;
    console.log(`Status set to: ${status}`);
  }

  searchParam = '';
  search() {
    if (!this.currentStatus) {
      this.alertService.showAlert(
        'Error',
        'Please select Any One Of This Reject, Pending, or Review first'
      );
      console.log('Please select Reject, Pending, or Review first');
      return;
    }

    if (!this.searchValue) {
      console.log('Please enter a search value');
      return;
    }

    // let selectedOption2 = this.selectedOption;

    console.log(this.selectedOption, 'this.selectedOption');
    console.log(this.searchValue, 'this.searchValue');

    let apiUrl = '';
    const baseUrls =
      'http://167.172.220.75:8084/CashflowForecastingApplication/api/';

    // if (this.selectedOption === 0 * 1) {
    //   console.log('0', '=============');
    //   this.searchParam = 'referenceNo';
    //   console.log(this.searchParam, 'this.searchParam');
    // }
    // if (this.selectedOption === 1 * 1) {
    //   console.log('1', '=============');
    //   this.searchParam = 'corporateCode';
    //   console.log(this.searchParam, 'this.searchParam');
    // }
    // if (this.selectedOption === 2 * 1) {
    //   console.log('2', '=============');
    //   this.searchParam = 'corporateName';
    //   console.log(this.searchParam, 'this.searchParam');
    // }
    // if (this.selectedOption === 3 * 1) {
    //   console.log('3', '=============');
    //   this.searchParam = 'forecastingAs';
    //   console.log(this.searchParam, 'this.searchParam');
    // }
    // if (this.selectedOption === 4 * 1) {
    //   console.log('4', '=============');
    //   this.searchParam = 'entryType';
    //   console.log(this.searchParam, 'this.searchParam');
    // }

    switch (this.selectedOption * 1) {
      case 0:
        this.searchParam = 'referenceNo';
        break;
      case 1:
        this.searchParam = 'corporateCode';
        break;
      case 2:
        this.searchParam = 'corporateName';
        break;
      case 3:
        this.searchParam = 'forecastingAs';
        break;
      case 4:
        this.searchParam = 'entryType';
        break;
      default:
        this.searchParam = 'referenceNo';
    }

    console.log(this.searchParam, 'this.searchParam11  ');
    if (this.currentStatus === 'rejected') {
      apiUrl =
        baseUrls +
        'rejected/search?' +
        this.searchParam +
        '=' +
        this.searchValue;
    }
    if (this.currentStatus === 'pending') {
      console.log(this.searchParam, 'this.searchParam222');
      apiUrl =
        baseUrls +
        'pending-list/search?' +
        this.searchParam +
        '=' +
        this.searchValue;
    }
    if (this.currentStatus === 'review') {
      apiUrl =
        baseUrls +
        'review-list/search?' +
        this.searchParam +
        '=' +
        this.searchValue;
    }
    apiUrl + '&page=0&size=2';

    console.log(apiUrl, 'apiUrl');

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log('Search results:', response);
        if (response.code === 200 && response.data && response.data.content) {
          this.results = response.data.content;
        } else {
          this.alertService.showAlert('Error', 'Data Not Found');
          console.error(
            'No data found or error in response:',
            response.message
          );
          this.results = [];
        }
      },
      (error) => {
        console.error('Error occurred during search:', error);
        this.results = [];
        // this.alertService.showAlert('Error' ,'You Select Wrong Input ');
      }
    );
  }

  // button
  rejectBtn() {
    this.showOnlyPending = false;
    this.hideOnlyPending = true;
    this.rejectAll = false;
    this.showAdditionalColumns = false;
    this.authorizeAll = false;
    console.log(this.selectedOption, 'selectedOption');
    this.rejectBtnApi();
    this.setStatus('rejected');
    this.search();
    this.showAdditionalColumns = true;
    this.tickBox = false;
    console.log('Flag value:', this.showAdditionalColumns);
  }

  reviewBtn() {
    this.showOnlyPending = false;
    this.hideOnlyPending = true;
    this.showAdditionalColumns = false;
    this.tickBox = false;
    this.rejectAll = false;
    this.authorizeAll = false;
    console.log(this.selectedOption, 'selectedOption');
    this.reviewBtnApi();
    this.setStatus('review');
    this.search();
  }

  pendingBtn() {
    this.hideOnlyPending = false;
    console.log(this.selectedOption, 'selectedOption');
    this.showOnlyPending = true;
    this.pendingBtnApi();
    this.rejectAll = true;
    this.authorizeAll = true;
    this.showAdditionalColumns = false;
    this.tickBox = true;
    this.setStatus('pending');
    this.search();
    this.pendingBtnApi();
  }
  // checkbox auto click

  checkedItems: boolean[] = []; // Array to store the checked status of individual checkboxes

  rejectIDS: any = [];
  // Method to toggle checkboxes
  fetchResults() {
    
    this.http.get<any[]>('your-api-endpoint').subscribe(data => {
      this.results = data;
      this.checkedItems = new Array(data.length).fill(false); // Initialize checkbox states
    });
  }

  toggleCheckbox(event: Event, id: number): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    console.log(`Checkbox ${isChecked ? 'checked' : 'unchecked'} for ID: ${id}`);
    
    if (isChecked) {
      this.selectedIds.push(id);
    } else {
      const index = this.selectedIds.indexOf(id);
      if (index > -1) {
        this.selectedIds.splice(index, 1);
      }
    }
  }
  

  toggleHeaderCheckbox(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isChecked = isChecked;
    this.checkedItems = new Array(this.results.length).fill(isChecked);
  }



  // Initialize the checkedItems array based on the length of results

  constructor(private http: HttpClient, private alertService: AlertService ) {}

  allData: any[] = [];

  ngOnInit() {
    this.checkedItems = this.results.map(() => false);
    this.pendingBtnUrl();
    throw new Error('Method not implemented.');
  }

  pendingBtnUrl(): void {
    this.http.get<any>(baseUrl + 'pending-list').subscribe({
      next: (result) => {
        if (result && result.data && result.data.content) {
          this.results = result.data.content; // Adjust according to the actual response structure
        } else {
          console.error('Unexpected API response structure', result);
        }
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

  view(id: any) {
    localStorage.setItem('reviewID', id);
    console.log(`View button clicked for ID: ${id}`);
  }

  // manual show the pending url

  // url for api
  private pendingBtnUrls = baseUrl + 'pending-list' + '?size=50';
  private reviewBtnUrl = baseUrl + 'review-list' + '?size=50';
  private rejectBtnUrl = baseUrl + 'rejected' + '?size=50';

  pendingBtnApi(): void {
    this.loadPendingData().subscribe(
      (response) => {
        console.log('API Response:', response); // Debug statement
        this.results = response.data.content || []; // Ensure data structure is correct
      },
      (error) => {
        console.error('Search request failed', error);
      }
    );
  }

  rejectBtnApi(): void {
    this.loadRejectData().subscribe(
      (response) => {
        console.log('API Response:', response); // Debug statement
        this.results = response.data.content || []; // Ensure data structure is correct
      },
      (error) => {
        console.error('Search request failed', error);
      }
    );
  }

  private loadRejectData(): Observable<any> {
    return this.http.get<any>(this.rejectBtnUrl).pipe(
      catchError((error) => {
        console.error('Search request failed', error);
        return of({ data: [] }); // Return an empty result on error
      })
    );
  }

  reviewBtnApi(): void {
    this.loadReviewData().subscribe(
      (response) => {
        console.log('Review API Response:', response); // Debug statement
        this.results = response.data.content || []; // Ensure data structure is correct
      },
      (error) => {
        console.error('Review request failed', error);
      }
    );
  }

  private loadPendingData(): Observable<any> {
    return this.http.get<any>(this.pendingBtnUrls).pipe(
      catchError((error) => {
        console.error('Pending request failed', error);
        return of({ data: [] }); // Return an empty result on error
      })
    );
  }

  private loadReviewData(): Observable<any> {
    return this.http.get<any>(this.reviewBtnUrl).pipe(
      catchError((error) => {
        console.error('Review request failed', error);
        return of({ data: [] }); 
      })
    );
  }

  // popyp rejectAllbtn api
  isPopupVisible = false;
  inputValue = '';
  isDialogVisible =false

  showPopup() {
    this.isPopupVisible = true;
  }
  showPopup1() {
    this.isPopupVisible = true;
  }
  

  onCancel() {
    // Handle cancel action
    this.isPopupVisible = false;
  }

  onCancel1() {
    // Handle cancel action
    this.isPopupVisible = false;
  }
  
  onConfirm1(){
    console.log('Confirmed with:', this.inputValue);
    this.isPopupVisible = false;

    this.http.post<any>(this.cancelIcon, {
      ids: this.selectedIds,
      rejectionReason: this.rejectionReason,
    }).subscribe(
      response => {
        this.alertService.showAlert(
          'success',
          'Your Data is Verified To Reject'
        );
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );

  }

  // rejectionReason : string = ''
  onConfirm() {
    console.log('Confirmed with:', this.inputValue);
    this.isPopupVisible = false;
    // api
    this.http.post<any>(this.rejectPost, {
      ids: this.selectedIds,
      rejectionReason: this.rejectionReason,
    }).subscribe(
      response => {
        this.alertService.showAlert(
          'success',
          'Your Data is Verified To Reject'
        );
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }


  authorizeBtn(){
    this.http.post(
      baseUrl + 'pending/authorizeAll' , null, 
    ).subscribe(
      response => {
        this.alertService.showAlert(
          'success',
          'Your Data is Verified To authorize'
        );
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }


  rightIconApi(){
    this.http.post( baseUrl + 'pending-list/authorize/' + this.selectedIds , null,).subscribe(
      response => {
        this.alertService.showAlert(
          'success',
          'Your Data is Ready To Review'
        );
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

}


 
