import { Component, OnInit } from '@angular/core';
import { WorkshopDto } from './workshop-dto';

@Component({
  selector: 'app-science-workshops',
  templateUrl: './science-workshops.component.html',
  styleUrls: ['./science-workshops.component.css']
})
export class ScienceWorkshopsComponent implements OnInit {
  workshops = [
    new WorkshopDto("Slajd1.JPG", "Trepanobiopsja", "Trepanobiopsja_Regulamin_VIII_OAP.pdf"),
    new WorkshopDto("Slajd2.JPG", "Nakłucie lędźwiowe", "Naklucie_ledzwiowe_Regulamin_VIII_OAP.pdf"),
    new WorkshopDto("Slajd3.JPG", "Scenariusze w CSM", "Scenariusze_w_CSM_Regulamin_VIII_OAP.pdf"),
    new WorkshopDto("Slajd5.JPG", "Warsztaty laparoskopowe", "Warsztaty_laparoskopowe_Regulamin_VIII_OAP.pdf"),
    new WorkshopDto("Slajd6.JPG", "Resuscytacja noworodka", "Resuscytacja_noworodka_Regulamin_VIII_OAP.pdf"),
    new WorkshopDto("Slajd7.JPG", "Warsztaty z języka migowego", "Warsztaty_z_języka migowego_Regulamin_VIII_OAP.pdf"),
    new WorkshopDto("Slajd8.JPG", "Gra Kliniczna", "Gra_Kliniczna_Regulamin_VIII_OAP.pdf"),



  ]
  constructor() { }

  ngOnInit() {

  }

}
