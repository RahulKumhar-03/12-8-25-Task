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
    },
    crypto:{
      coin:'',
      network:'',
      wallet:''
    }
  }
  // address:Address = {
  //   address:'',
  //   city:'',
  //   state:'',
  //   country:'',
  //   stateCode:'',
  //   postalCode:''
  // }
  // bank:Bank = {
  //   cardNumber:'',
  //   cardExpire:'',
  //   cardType:'',
  //   currency:''
  // }
  // company:Company = {
  //   name:'',
  //   department:'',
  //   address: {
  //     address:'',
  //     city:'',
  //     state:'',
  //     country:''
  //   },
  //   title:''
  // }
  // user:User = {
  //   firstName:'',
  //   lastName:'',
  //   age:0,
  //   email:'',
  //   gender:'',
  //   image:'',
  //   phone:'',
  //   username:''
  // }
  // crypto?:Crypto = {
  //   coin:'',
  //   network:'',
  //   wallet:''
  // }
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
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],  
  });
  isLinear = true;

  constructor(private dialogRef: MatDialogRef<AddUserComponent>, private _formBuilder: FormBuilder){}

  onClose(){
    this.dialogRef.close(null)
  }
  onSave(){

    this.dialogRef.close(this.userData);
  }
}
