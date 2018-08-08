import { Component, OnInit } from '@angular/core';
// import {ProgramService} from "../../services/program.service"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    // private programservice:ProgramService
  ) { }



  getall(){
    // this.programservice.AllProg()

  }


  ngOnInit() {
    // this.getall()
  }

}
