import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text:any = {
    Days: "Dni",
    Hours: "Godzin",
    Minutes: "Minut",
    Seconds: "Sekund",
  };



  ngOnInit(){
   AOS.init();
  }
}
