// import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
// import { Router, ActivatedRoute } from '@angular/router';
// import { hostport,Alert,table,destroyTable} from 'src/app/constant.component'; 
// import * as moment from 'moment';

@Component({
  selector: 'app-user-register-details',
  templateUrl: './user-register-details.component.html',
  styleUrls: ['./user-register-details.component.css']
})
export class UserRegisterDetailsComponent implements OnInit {

  constructor(private router: Router,private http: Http, private activatedRoute: ActivatedRoute) { }

  currentStep = 1;
  step1:any;
  step2:any;
  step3:any;
  step4:any;
  userDetails:any;
  singleId:any;
  ngOnInit(): void {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.currentStep = 1; 
    const userDetails1:any = localStorage.getItem('userDetails'); 
    this.userDetails = userDetails1;  
    this.userDetails = JSON.parse(this.userDetails);  
    this.activatedRoute.params.subscribe(paramsId => { 
      const id = paramsId['id'];   
      this.singleId = id *1;   
    }); 
    this.get(); 
    // console.log('this.userDetails',this.userDetails); 
  }



  citizenTbl:any;
  envPostalTxt:any;
  envCenterTxt:any;
  envCenterID:any;
  envCenteName:any;
  envCenterTbl:any;
  statusTxt:any;
  TitleTxt:any;
  FirstNameTxt:any;
  MiddleNameTxt:any;
  LastNameTxt:any;
  EmailTxt:any;
  MobileTxt:any;
  ContactTxt:any;
  DateOfBirthTxt:any;
  PlaceOfBirthTxt:any;
  ReligionTxt:any;
  GenderTxt:any;
  NATIONALITYTxt:any; 
  postalCodeTxt:any;
  CountryIdTxt:any;
  CountryNameTxt:any;
  StateIdTxt:any;
  StateNameTxt:any;
  CityIdTxt:any;
  CityNameTxt:any;
  LocationIdTxt:any;
  LocalityIdTxt:any;
  LocalityNameTxt:any;
  PostalCodeIdTxt:any;
  AddressTxt:any;
  Address2Txt:any;
  MaritalStatusTxt:any;
  OccupationTxt:any;
  HeightTxt:any;
  EyeColorTxt:any; 
  MRZTxt:any; 
  FacialImageTxt:any;
  FingerPrintTxt:any;
  IrisTxt:any;
  PersonalDetailsXmlTxt:any = [];
  DocumantXmlTxt:any =[]; 
  RequestTypeId:any ;
  requestType:any;
  userId:any;
  get(){ 
    this.http.get(hostport +'CitizenID/'+this.singleId)
  .subscribe(Response => {
    const result = Response.json(); 
    this.citizenTbl= result;   
    this.envPostalTxt =this.citizenTbl.CenterPostalCode; 
    this.envCenterTxt =this.citizenTbl.AppointmentCenterId; 
    this.FirstNameTxt =this.citizenTbl.FirstName; 
    this.MiddleNameTxt =this.citizenTbl.MiddleName; 
    this.LastNameTxt =this.citizenTbl.LastName; 
    this.EmailTxt =this.citizenTbl.Email; 
    this.MobileTxt =this.citizenTbl.Mobile;   
    this.ContactTxt =this.citizenTbl.Contact;  
    this.DateOfBirthTxt =  moment(this.citizenTbl.DateOfBirth).format('YYYY-MM-DD');  
    this.PlaceOfBirthTxt =this.citizenTbl.PlaceOfBirth;  
    this.ReligionTxt =this.citizenTbl.Religion;  
    this.GenderTxt =this.citizenTbl.Gender;   
    this.NATIONALITYTxt =this.citizenTbl.NATIONALITY;   
    this.CountryIdTxt =this.citizenTbl.CountryId;    
    this.CountryNameTxt =this.citizenTbl.CountryName;   
    this.StateIdTxt =this.citizenTbl.StateId;    
    this.StateNameTxt =this.citizenTbl.StateName;   
    this.CityIdTxt =this.citizenTbl.CityId;     
    this.CityNameTxt =this.citizenTbl.CityName;   
    this.LocalityIdTxt =this.citizenTbl.LocalityId;   
    this.LocalityNameTxt = this.citizenTbl.LocalityName;   
    this.postalCodeTxt =this.citizenTbl.PostalCode;   
    this.AddressTxt =this.citizenTbl.Address;   
    this.Address2Txt =this.citizenTbl.Address2;   
    this.MaritalStatusTxt =this.citizenTbl.MaritalStatus;   
    this.OccupationTxt =this.citizenTbl.Occupation;   

    this.HeightTxt =this.citizenTbl.Height;     
    this.EyeColorTxt =this.citizenTbl.EyeColor;     
    this.OccupationTxt =this.citizenTbl.Occupation;     
    this.PersonalDetailsXmlTxt =this.citizenTbl.PersonalDetailsXml;
    this.DocumantXmlTxt = this.citizenTbl.DocumantXml;   
    this.requestType =this.citizenTbl.RequestType;  
    this.userId = this.citizenTbl.UserId  ;
    this.FacialImageTxt=this.citizenTbl.FacialImage;
    this.DocumantXmlTxt = JSON.parse(this.citizenTbl.DocumantXml);
    console.log('citizenTbl',this.citizenTbl);
  },error =>{   
    var valid =  error.json();  
      alert(valid.error); 
  });
 } 

 

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    } 
    if(this.currentStep ===2){
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
    }
    if(this.currentStep ===3){
      this.step1 = true;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
    }
    if(this.currentStep ===4){
      this.step1 = true;
      this.step2 = true;
      this.step3 = true;
      this.step4 = false;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
    
    if(this.currentStep ===1){
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
    }
    if(this.currentStep ===2){
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
    }
    if(this.currentStep ===3){
      this.step1 = true;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
    }
    if(this.currentStep ===4){
      this.step1 = true;
      this.step2 = true;
      this.step3 = true;
      this.step4 = false;
    }
  }

  onSubmit() { 
    // Handle form s ubmission logic here
    alert('Form submitted successfully!');
  }

Quality: any;
Quality2: any;
Quality3: any;
Quality4: any;
Quality5: any;
intervalId:any;
intervalId2:any;
intervalId3:any;
intervalId4:any;
intervalId5:any;
leftFourFingers:any;
  rightFourFingers:any;
  twoThumb:any;
  leftThumb:any;
  rightThumb:any;
  scanThumb(type:any){
    
    if(type==='leftFourFingers'){
      this.leftFourFingers = true;
      this.rightFourFingers = true;
      this.twoThumb = true;
      this.leftThumb = true;
      this.rightThumb = true;
      this.getFingerImage(this.singleId*1,1);
      this.getFingerImage2(this.singleId*1,2);
      this.getFingerImage3(this.singleId*1,3);
      this.getFingerImage4(this.singleId*1,4);
      this.getFingerImage5(this.singleId*1,5);
    }

}

fingerImageTbl:any;
imagePath:any;
getFingerImage(AppointmentId:any,FingerImageId:any){ 
  const data1 = {
    "AppointmentId":AppointmentId, 
    "FingerImageId":FingerImageId, 
  }
  this.http.post(hostport +'FingerPrint/getfingerprint',data1)
.subscribe((Response: any) => {
  const result = Response.json(); 
  this.fingerImageTbl= result; 
  this.imagePath = this.fingerImageTbl.FingerImagePath; 
  this.Quality = this.fingerImageTbl.Quality;
}

);
}

fingerImageTbl2:any;
imagePath2:any;
getFingerImage2(AppointmentId:any,FingerImageId:any){ 
  const data1 = {
    "AppointmentId":AppointmentId, 
    "FingerImageId":FingerImageId, 
  }
  this.http.post(hostport +'FingerPrint/getfingerprint',data1)
.subscribe((Response: any) => {
  const result = Response.json(); 
  this.fingerImageTbl2= result; 
  this.imagePath2 = this.fingerImageTbl2.FingerImagePath;
  this.Quality2 = this.fingerImageTbl2.Quality; 

}

);
}

fingerImageTbl3:any;
imagePath3:any;
getFingerImage3(AppointmentId:any,FingerImageId:any){ 
  const data1 = {
    "AppointmentId":AppointmentId, 
    "FingerImageId":FingerImageId, 
  }
  this.http.post(hostport +'FingerPrint/getfingerprint',data1)
.subscribe((Response: any) => {
  const result = Response.json(); 
  this.fingerImageTbl3= result; 
  this.imagePath3 = this.fingerImageTbl3.FingerImagePath; 
      this.Quality3 = this.fingerImageTbl3.Quality;
  
})
}

fingerImageTbl4:any;
imagePath4:any;
getFingerImage4(AppointmentId:any,FingerImageId:any){ 
  const data1 = {
    "AppointmentId":AppointmentId, 
    "FingerImageId":FingerImageId, 
  }
  this.http.post(hostport +'FingerPrint/getfingerprint',data1)
.subscribe((Response: any) => {
  const result = Response.json(); 
  this.fingerImageTbl4= result; 
  this.imagePath4 = this.fingerImageTbl4.FingerImagePath; 
      this.Quality4 = this.fingerImageTbl4.Quality;
})
}

fingerImageTbl5:any;
imagePath5:any;
getFingerImage5(AppointmentId:any,FingerImageId:any){ 
  const data1 = {
    "AppointmentId":AppointmentId, 
    "FingerImageId":FingerImageId, 
  }
  this.http.post(hostport +'FingerPrint/getfingerprint',data1)
.subscribe((Response: any) => {
  const result = Response.json(); 
  this.fingerImageTbl5= result; 
  this.imagePath5 = this.fingerImageTbl5.FingerImagePath; 
  this.Quality5 = this.fingerImageTbl5.Quality;
  
}

);
}


}



