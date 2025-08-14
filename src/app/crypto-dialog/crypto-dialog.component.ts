import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Crypto } from '../tabs/tabs.component';
@Component({
  selector: 'app-crypto-dialog',
  templateUrl: './crypto-dialog.component.html',
  styleUrls: ['./crypto-dialog.component.css']
})
export class CryptoDialogComponent {
  constructor(private dialogRef: MatDialogRef<CryptoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:Crypto){}
  onClose():void{
    this.dialogRef.close()
  }
}
