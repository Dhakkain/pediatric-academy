import { Component, OnInit } from '@angular/core';
import { WorkshopDto } from './workshop-dto';

@Component({
  selector: 'app-science-workshops',
  templateUrl: './science-workshops.component.html',
  styleUrls: ['./science-workshops.component.css']
})
export class ScienceWorkshopsComponent implements OnInit {
  workshops = [
    new WorkshopDto("Slajd1.JPG", "Trepanobiopsja", "/../../files/Trepanobiopsja - Regulamin VIII OAP.pdf"),
    new WorkshopDto("Slajd2.JPG", "Nakłucie lędźwiowe", "Nakłucie lędzwiowe - Regulamin VIII OAP.pdf"),
    new WorkshopDto("Slajd3.JPG", "Scenariusze w CSM", "Scenariusze w CSM - Regulamin VIII OAP.pdf"),
    new WorkshopDto("Slajd6.JPG", "Resuscytacja noworodka", "Resuscytacja noworodka - Regulamin VIII OAP.pdf"),
    new WorkshopDto("Slajd7.JPG", "Warsztaty z języka migowego", "Warsztaty z języka migowego - Regulamin VIII OAP .pdf"),
    new WorkshopDto("Slajd8.JPG", "Gra Kliniczna", "Gra Kliniczna - Regulamin VIII OAP.pdf"),


  ]
  constructor() { }

  ngOnInit() {

  }

}
