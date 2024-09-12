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

  id: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id, 'this.id==');
      this.getSelectedData();
    });
  }

  getSelectedData() {
    this.http.get<any>(baseUrl + 'review-list').subscribe({
      next: (result) => {
        this.singleData = result.data.content[this.id];
      },
      error: (error) => {
        this.alertService.showAlert('Error', 'Error fetching data');
      },
    });
  }
}
