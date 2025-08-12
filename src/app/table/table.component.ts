import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users: any[] = []
  displayedColumns: string[] = ['firstName','lastName','userName','age','gender','email','phone']
  dataSource = new MatTableDataSource<any>()

  constructor(private service: MainService){}

  ngOnInit(){
    this.loadUserDetails()
  }
  loadUserDetails(){
    this.service.getAllUserDetails().subscribe({
      next: (response) => {
        console.log(response.users);
        
        this.users = response.users
        this.dataSource.data = this.users
      },
      error: (err) => {
        alert('Error occured while fetching the user details');
        console.error("Error while fetching details: ",err)
      }
    })
  }
}
