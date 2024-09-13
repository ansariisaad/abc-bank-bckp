import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';
import { AlertService } from '../utils/aleartService';
import { baseUrl } from '../utils/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  singleData: any = {};
  allData: any[] = [];

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {}

  id: number = 0;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log(this.id, 'this.id==');
      this.getSelectedData();
    });
  }

  // getSelectedData(): void {
  //   this.http.get<any>(`${baseUrl}review-list`, ).subscribe({
  //     next: (result) => {
  //       console.log('API Result:', result);  // Log the entire result to check its structure
  //       if (result.data && Array.isArray(result.data.content)) {
  //         // Assuming result.data.content is an array of objects with an 'id' property
  //         this.singleData = result.data.content.find((result: { id: number }) => result.id == this.id);

  //         console.log('Single Data:', this.singleData);
          
  //         if (!this.singleData) {
  //           this.alertService.showAlert('Info', 'No data found for the provided ID.');
  //         }
  //       } else {
  //         this.alertService.showAlert('Error', 'Unexpected response structure.');
  //       }
  //     },
  //     error: (error) => {
  //       this.alertService.showAlert('Error', 'Error fetching data');
  //     },
  //   });
  // }


  getSelectedData(): void {
    this.http.get<any>(`${baseUrl}review-list`, {
      params: {
        size: '100' 
      }
    }).subscribe({
      next: (result) => {
        console.log('API Result:', result);  // Log the entire result to check its structure
        if (result.data && Array.isArray(result.data.content)) {
          // Assuming result.data.content is an array of objects with an 'id' property
          this.singleData = result.data.content.find((item: { id: number }) => item.id == this.id);
  
          console.log('Single Data:', this.singleData);
          
          if (!this.singleData) {
            this.alertService.showAlert('Info', 'No data found for the provided ID.');
          }
        } else {
          this.alertService.showAlert('Error', 'Unexpected response structure.');
        }
      },
      error: (error) => {
        this.alertService.showAlert('Error', 'Error fetching data');
      },
    });
  }
  
  
  
  
}
