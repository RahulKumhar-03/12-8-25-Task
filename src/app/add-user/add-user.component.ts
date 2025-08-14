import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Address, Bank, Company, Crypto } from '../tabs/tabs.component';
import { User } from '../table/table.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userData: any = {
    firstName:'',
    lastName:'',
    age:0,
    email:'',
    gender:'',
    image:'',
    phone:'',
    username:'',
    address: {
      address:'',
      city:'',
      state:'',
      country:'',
      stateCode:'',
      postalCode:''
    },
    bank: {
      cardNumber:'',
      cardExpire:'',
      cardType:'',
      currency:''
    },
    crypto:{
      coin:'',
      wallet:'',
      network:''
    },
    company:{
      name:'',
      department:'',
      address: {
        address:'',
        city:'',
        state:'',
        country:''
      },
      title:''
    }
  }
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    image: ['',Validators.required],
    age: [0,[Validators.required, Validators.max(80)]],
    phone: ['',Validators.required],
    email: ['',Validators.required],
    username: ['',Validators.required],
    gender: ['',Validators.required],
  });
  addressFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    state: ['',Validators.required],
    postalCode: ['',Validators.required],
    country: ['',Validators.required],
    city: ['',Validators.required],
  })
  bankFormGroup = this._formBuilder.group({
    cardNo:['', Validators.required],
    cardType:['', Validators.required],
    currency:['', Validators.required],
    expire:['', Validators.required],
  })
  companyFormGroup = this._formBuilder.group({
    companyName:['', Validators.required],
    department:['', Validators.required],
    title:['', Validators.required],
    companyStreet:['', Validators.required],
    companyCity:['', Validators.required],
    companyCountry:['', Validators.required],
    companyState:['', Validators.required],
  })
  thirdFormGroup = this._formBuilder.group({
    coin:[''],
    wallet:[''],
    network:[''],
  })
  
  isLinear = true;
  isOptional = true;

  constructor(private dialogRef: MatDialogRef<AddUserComponent>, private _formBuilder: FormBuilder){}

  onClose(){
    this.dialogRef.close(null)
  }
  onSave(){
    console.log(this.userData);
    
    this.dialogRef.close(this.userData);
  }
}
