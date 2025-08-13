import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CryptoDialogComponent } from '../crypto-dialog/crypto-dialog.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  address!: Address
  bank!: Bank
  company!: Company
  crypto!: Crypto

  constructor(private router: ActivatedRoute, private dialog: MatDialog){}

  ngOnInit(){
    this.address = history.state.address;
    console.log(this.address);

    this.bank = history.state.bank;
    console.log(this.bank);
    
    this.company = history.state.company;
    console.log(this.company);

    this.crypto = history.state.crypto;
    console.log(this.crypto);
  }
  openCryptoDialog(data: any){
    this.dialog.open(CryptoDialogComponent,{
      width: '450px',
      data: data,
    })
  }
}
export interface Address{
  address:string;
  city:string;
  state:string;
  stateCode:string
  country:string;
  postalCode:string
}
export interface Bank{
  cardNumber:string;
  currency:string;
  cardType:string;
  cardExpire:string;
}
export interface Company{
  name:string;
  department:string;
  title:string;
  address:{
    address:string;
    city:string;
    state:string;
    country:string
  }
}
export interface Crypto{
  coin:string;
  network:string;
  wallet:string;
}