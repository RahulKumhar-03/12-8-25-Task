import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = []
  displayedColumns: string[] = ['firstName','lastName','age','gender','email','phone','action']
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
