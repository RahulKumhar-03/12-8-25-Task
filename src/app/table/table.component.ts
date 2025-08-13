import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users: any[] = []
  displayedColumns: string[] = ['image','firstName','lastName','userName','age','gender','email','phone','action']
  dataSource = new MatTableDataSource<any>()

  constructor(private service: MainService, private router: Router){}

  ngOnInit(){
    this.loadUserDetails()
  }
  loadUserDetails(){
    this.service.getAllUserDetails().subscribe({
      next: (response) => {
        this.users = response.users
        this.dataSource.data = this.users
      },
      error: (err) => {
        alert('Error occured while fetching the user details');
        console.error("Error while fetching details: ",err)
      }
    })
  }
  goToTabs(data:any){
    this.router.navigate(['/tabs'], {state:{address: data.address, bank: data.bank, company: data.company, crypto: data.crypto}});
  }
}
