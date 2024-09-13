import {
  Component,
  OnInit,
  AfterViewInit,
  Renderer2,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AlertService } from '../utils/aleartService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { baseUrl } from '../utils/api';

@Component({
  selector: 'app-manual-four-row',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './manual-four-row.component.html',
  styleUrls: ['./manual-four-row.component.css'],
})
export class ManualFourRowComponent implements OnInit, AfterViewInit {
  forecastForm!: FormGroup;

  private apiUrl = baseUrl + 'forecasts';

  corporateCode: string = '';
  corporateName: string = '';
  forecastingAs: string = '';
  entryType: string = '';
  narration: string = '';
  description: string = '';
  mode: string = '';
  beneficiaryPayers: string = '';
  // accountType: string = '';
  accountNumber: string = '';
  forecastedAmount: number = 0;
  currency: string = 'INR';
  lockRecord: boolean = true;
  valueDate: string = '';
  recurringFrom: string = '';
  recurringTo: string = '';
  recurringPattern: string = '';
  searchbyTxt: any;

  accountTypes: any[] = [];
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  searchBy: string = 'corporateCode';
  apiAllUrl = baseUrl + 'corporate/all?page=0&size=3';
  accountOptions = {
    internalAccount: [
      { value: 'internalAcc001', text: 'Internal Acc 001' },
      { value: 'internalAcc002', text: 'Internal Acc 002' },
    ],
    externalAccount: [
      { value: 'externalAcc001', text: 'External Acc 001' },
      { value: 'externalAcc002', text: 'External Acc 002' },
    ],
  };
  // Define the mode options
  modeOptions = {
    inwardPayment: [
      { value: 'accountDeposit', text: 'Account Deposit' },
      { value: 'cash', text: 'Cash' },
    ],
    outwardPayment: [
      { value: 'accountWithdrawal', text: 'Account Withdrawal' },
      { value: 'cash', text: 'Cash' },
    ],
  };

  modeOptionsList: { value: string; text: string }[] = [];

  // Your form data structur

  // Event handler for forecastingAs change
  onForecastingAsChange(event: any): void {
    const selectedForecastingAs = event.target.value;

    // Update modeOptionsList based on selected forecastingAs
    if (selectedForecastingAs === 'Inward Payment') {
      this.modeOptionsList = this.modeOptions.inwardPayment;
    } else if (selectedForecastingAs === 'Outward Payment') {
      this.modeOptionsList = this.modeOptions.outwardPayment;
    } else {
      this.modeOptionsList = []; // Reset if nothing is selected
    }
  }

  @ViewChild('entryType', { static: false })
  entryTypeSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('accountType', { static: false })
  accountTypeSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('accountNumber', { static: false })
  accountNumberSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('forecastingAs', { static: false })
  forecastingAsSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('mode', { static: false })
  modeSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('searchBy', { static: false })
  searchBySelect!: ElementRef<HTMLSelectElement>;

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {}

  formData = {
    corporateCode: '',
    corporateName: '',
    forecastingAs: '',
    forecastCurrency: 'INR',
    entryType: '',
    narration: '',
    description: '',
    mode: '',
    beneficiaryPayers: '',
    accountType: '',
    accountNumber: '',
    forecastedAmount: '',
    lockRecord: false,
    valueDate: '',
    recurringFrom: '',
    recurringTo: '',
    recurringPattern: '',
  };

  ngOnInit(): void {
    this.corporateCodeAllDetail();
  }
  ngAfterViewInit(): void {
    // this.setupDropdownListeners();
    this.toggleValueDate(); // Initial call if needed to set the correct fields visibility on load
  }

  corporateCodeAllDetail(): void {
    this.http.get(this.apiAllUrl).subscribe(
      (result: any) => {
        if (result && result.data && result.data.content) {
          this.users = result.data.content.slice(0, 3);
          this.filteredUsers = [...this.users];
        } else {
          console.error('Unexpected response structure', result);
        }
      },
      (error) => console.error('Subscription error', error)
    );
  }

  openPopup() {
    this.corporateCodeAllDetail();
  }

  searchByCorporate(corporateCode: string): void {
    let url = baseUrl + 'corporate/corporate-code/' + this.searchbyTxt;
    if (corporateCode === 'corporateName') {
      url = baseUrl + 'corporate/corporate-name/' + this.searchbyTxt;
    }
    this.http.get(url).subscribe(
      (result: any) => {
        this.filteredUsers = result.data.content;
      },
      (error) => console.error('Subscription error', error)
    );
  }
 
  corporateTypeTxt: any;
  onSearchClick(): void { 
    let url = baseUrl + 'corporate/corporate-code/' + this.searchbyTxt;
    if (this.corporateTypeTxt === 'corporateName') {
      url = baseUrl + 'corporate/corporate-name/' + this.searchbyTxt;
    }
    this.http.get(url).subscribe(
      (result: any) => {
        this.filteredUsers = result.data.content;
      },
      (error) => console.error('Subscription error', error)
    ); 
  }
  
  // setupDropdownListeners(): void {
  //   if (this.forecastingAsSelect) {
  //     this.renderer.listen(
  //       this.forecastingAsSelect.nativeElement,
  //       'change',
  //       (event: Event) => {
  //         const selectedForecasting = (event.target as HTMLSelectElement).value;
  //         this.updateModeOptions(selectedForecasting);
  //       }
  //     );
  //   }
  //   if (this.accountTypeSelect) {
  //     this.renderer.listen(
  //       this.accountTypeSelect.nativeElement,
  //       'change',
  //       (event: Event) => {
  //         const selectedType = (event.target as HTMLSelectElement).value;
  //         this.updateAccountNumberOptions(selectedType);
  //       }
  //     );
  //   }
  //   if (this.searchBySelect) {
  //     this.renderer.listen(
  //       this.searchBySelect.nativeElement,
  //       'change',
  //       (event: Event) => {
  //         this.searchBy = (event.target as HTMLSelectElement).value;
  //       }
  //     );
  //   }
  //   if (this.modeSelect) {
  //     this.renderer.listen(
  //       this.modeSelect.nativeElement,
  //       'change',
  //       (event: Event) => {
  //         // Handle mode selection if needed
  //       }
  //     );
  //   }

  //   if (this.accountTypeSelect) {
  //     this.renderer.listen(
  //       this.accountTypeSelect.nativeElement,
  //       'change',
  //       (event: Event) => {
  //         const selectedType = (event.target as HTMLSelectElement).value;
  //         this.loadAccountNumbers(selectedType);
  //       }
  //     );
  //   } else {
  //     console.error('accountTypeSelect is not available');
  //   }
  // }

  toggleValueDate(): void {
    const entryType = (
      document.getElementById('entryType') as HTMLSelectElement
    ).value;
    const valueDateField = document.getElementById(
      'valueDateField'
    ) as HTMLElement;
    const recurringFieldsFrom = document.getElementById(
      'recurringFieldsFrom'
    ) as HTMLElement;
    const recurringFieldsTo = document.getElementById(
      'recurringFieldsTo'
    ) as HTMLElement;
    const recurringFieldsPattern = document.getElementById(
      'recurringFieldsPattern'
    ) as HTMLElement;

    if (entryType === 'O') {
      valueDateField.style.display = 'block';
      recurringFieldsFrom.style.display = 'none';
      recurringFieldsTo.style.display = 'none';
      recurringFieldsPattern.style.display = 'none';
    } else if (entryType === 'R') {
      valueDateField.style.display = 'none';
      recurringFieldsFrom.style.display = 'block';
      recurringFieldsTo.style.display = 'block';
      recurringFieldsPattern.style.display = 'block';
    } else {
      valueDateField.style.display = 'none';
      recurringFieldsFrom.style.display = 'none';
      recurringFieldsTo.style.display = 'none';
      recurringFieldsPattern.style.display = 'none';
    }
  }

  // updateAccountNumberOptions(selectedType: string): void {
  //   const accountNumberSelect = this.accountNumberSelect.nativeElement;
  //   accountNumberSelect.innerHTML =
  //     '<option value="" selected>Please Select</option>';
  //   const options =
  //     this.accountOptions[selectedType as keyof typeof this.accountOptions] ||
  //     [];
  //   options.forEach((option) => {
  //     const opt = this.renderer.createElement('option');
  //     opt.value = option.value;
  //     opt.textContent = option.text;
  //     this.renderer.appendChild(accountNumberSelect, opt);
  //   });
  // }

  // updateModeOptions(selectedForecasting: string): void {
  //   const modeSelect = this.modeSelect.nativeElement;
  //   modeSelect.innerHTML = '<option value="" selected>Please Select</option>';
  //   const options =
  //     this.modeOptions[selectedForecasting as keyof typeof this.modeOptions] ||
  //     [];
  //   options.forEach((option) => {
  //     const opt = this.renderer.createElement('option');
  //     opt.value = option.value;
  //     opt.textContent = option.text;
  //     this.renderer.appendChild(modeSelect, opt);
  //   });
  // }

  refreshData(): void {
    this.corporateCodeAllDetail();
  }

  onAccountTypeChange() {
    if (this.formData.corporateCode && this.formData.accountType) {
      const url =
        baseUrl +
        `accounts/by-type?accountType=${this.formData.accountType}&corporateId=${this.corporateCodeId}`;
      this.http.get(url).subscribe((response: any) => {
        this.accountTypes = response.data;
      });
    } else {
      this.alertService.showAlert(
        'Error',
        'Please add Corporate Code and select an Account Type first'
      );
    }
  }

  corporateCodeId: any;
  selectRow(user: any): void {
    this.corporateCodeId = user.id;
    this.formData.corporateCode = user.corporateCode;
    this.formData.corporateName = user.corporateName;
  }

  submitForm(): void {
    const missingFields = this.checkForMissingFields();

    if (missingFields.length > 0) {
      // If there are missing fields, display a warning message
      this.alertService.showAlert(
        'Missing Field',
        `The following fields are missing: ${missingFields.join(', ')}`
      );
    } else {
      // If all required fields are filled, submit the form
      this.http
        .post(baseUrl + 'forecasts', this.formData)
        .pipe(
          catchError((error) => {
            this.alertService.showAlert(
              'Error',
              'Error occurred while saving the forecast.'
            );
            return throwError(error);
          })
        )
        .subscribe((response) => {
          this.alertService.showAlert(
            'Success',
            'Forecast saved successfully!'
          );
          this.formData = {
            corporateCode: '',
            corporateName: '',
            forecastingAs: '',
            forecastCurrency: 'INR',
            entryType: '',
            narration: '',
            description: '',
            mode: '',
            beneficiaryPayers: '',
            accountType: '',
            accountNumber: '',
            forecastedAmount: '',
            lockRecord: false,
            valueDate: '',
            recurringFrom: '',
            recurringTo: '',
            recurringPattern: '',
          };
          // Optionally, you can reset the form or provide feedback to the user here
        });
    }
  }

  cancel() {
    this.formData = {
      corporateCode: '',
      corporateName: '',
      forecastingAs: '',
      forecastCurrency: 'INR',
      entryType: '',
      narration: '',
      description: '',
      mode: '',
      beneficiaryPayers: '',
      accountType: '',
      accountNumber: '',
      forecastedAmount: '',
      lockRecord: false,
      valueDate: '',
      recurringFrom: '',
      recurringTo: '',
      recurringPattern: '',
    };
  }

  checkForMissingFields(): string[] {
    // List all required fields
    const requiredFields = [
      'corporateCode',
      'forecastingAs',
      'entryType',
      'narration',
      'mode',
      'accountType',
      'accountNumber',
      'forecastedAmount',
    ];

    // Cast formData to `any` for dynamic access
    const missingFields = requiredFields.filter(
      (field) => !(this.formData as any)[field]
    );

    return missingFields;
  }

  // new api for by type

  loadAccountNumbers(selectedType: string): void {
    const corporateId = 3; // Assuming corporate ID is constant or obtained elsewhere
    let encodedType = encodeURIComponent(selectedType.trim()); // Encode to handle spaces and special characters

    if (encodedType === 'internal Account') {
      encodedType = 'Internal Account';
    } else if (encodedType === 'externalAccount') {
      encodedType = 'External Account';
    }

    const url = `${baseUrl}accounts/by-type?accountType=${encodeURIComponent(
      encodedType
    )}&corporateId=${corporateId}`;
    console.log('Fetching account numbers with URL:', url); // Log the request URL for debugging

    this.http.get<any>(url).subscribe(
      (result) => {
        console.log('API response:', result); // Log the API response to inspect its structure
        if (result && result.data) {
          this.accountTypes = result.data.map((item: any) => ({
            value: item.accountNumber, // Use accountNumber as the value
            text: item.accountNumber, // Use accountNumber as the display text
          }));
        } else {
          this.accountTypes = [];
          console.error('Unexpected response structure:', result); // Log if the response is null or unexpected
        }
        this.cdr.detectChanges(); // Update the view with new data
      },
      (error) => {
        console.error('Error fetching account numbers:', error); // Log any errors encountered
        this.alertService.showAlert('Error', 'Error fetching account numbers.');
      }
    );
  }
}
