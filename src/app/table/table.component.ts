import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  user:any
  users: User[] = []
  displayedColumns: string[] = ['image','firstName','lastName','userName','age','gender','email','phone','action']
  dataSource = new MatTableDataSource<any>()

  constructor(private service: MainService, private router: Router, private dialog: MatDialog){}

  ngOnInit(){
    this.loadUserDetails()
  }
  loadUserDetails(){
    this.service.getAllUserDetails().subscribe({
      next: (response) => {
        this.users = response.users;
        if(localStorage.getItem('newUser')){
          this.user = localStorage.getItem('newUser')
          this.users.push(JSON.parse(this.user))
        }
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
  openAddUserDialog(){
    const dialog = this.dialog.open(AddUserComponent,{
      width:'700px'
    })
    dialog.afterClosed().subscribe((userData) => {
      console.log(userData);
      
      this.service.createNewUser(userData).subscribe({
        next: (response) => {
          console.log(response);
          
          localStorage.setItem('newUser',JSON.stringify(response));
          alert('New User Added Successfully!');
          this.users = [...this.users,response]
          this.dataSource.data = this.users
        },
        error:(err) =>{
          alert('Error while creating new user! Try Again')
          console.error("Error while creating new user: ",err)
        }
      })
    })
  }
}
export interface User{
  firstName:string;
  lastName:string;
  age:number;
  email:string;
  gender:string;
  image:string;
  phone:string;
  username:string;
}
