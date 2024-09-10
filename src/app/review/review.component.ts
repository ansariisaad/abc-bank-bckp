import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';
import { AlertService } from '../utils/aleartService';
import { baseUrl } from '../utils/api';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  singleData: any = {};
  allData: any[] = [];

  constructor(private http: HttpClient ,private alertService: AlertService) {}

  ngOnInit(){
    this.getSelectedData();
  }

  getSelectedData(){
    this.http.get<any>(baseUrl + 'review-list')
      .subscribe({
        next: (result) => {
          if (result && result.data && result.data.content) {
            this.singleData = result.data.content[1]; 
          } else {
            console.error('Unexpected API response structure', result);
          }
        },
        error: (error) => {
          this.alertService.showAlert('Error', 'Error fetching data'); 
          console.error('Error fetching data', error);
        }
      });
  }

  


  // hover 

  
  
  
}