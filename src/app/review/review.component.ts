import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';
import { AlertService } from '../utils/aleartService';
import { baseUrl } from '../utils/api';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  singleData: any = {};
  allData: any[] = [];

  constructor(private http: HttpClient, private alertService: AlertService) {}

  id: any;
  ngOnInit() {
    this.id = localStorage.getItem('reviewID');
    setTimeout(() => {
      this.getSelectedData();
    }, 500);
  }

  getSelectedData() {
    this.http.get<any>(baseUrl + 'review-list').subscribe({
      next: (result) => {
        console.log(result, 'this.singleData');
        if (result && result.data && result.data.content) {
          this.singleData = result.data.content[0];
          //this.singleData = result.data.content[this.id];
        } else {
          console.error('Unexpected API response structure', result);
        }
      },
      error: (error) => {
        this.alertService.showAlert('Error', 'Error fetching data');
        console.error('Error fetching data', error);
      },
    });
  }


 

  // hover
}
