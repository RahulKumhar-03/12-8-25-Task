import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  address: any[]=[]
  constructor(private router: ActivatedRoute){}
  ngOnInit(){
    this.router.queryParamMap.subscribe(params => {
      const address = params.get('address');
      console.log(address);
      
      const bank = params.get('bank')
      console.log(bank);
      
      const company = params.get('company')
      console.log(company);
      
      const crypto = params.get('crypto')
      console.log(crypto);
      
    })
  }
}
