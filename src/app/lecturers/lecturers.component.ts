import { Component, OnInit } from '@angular/core';
import { LecturerDto } from './lecturer-dto';
import { NavigationEnum } from './lecturer-dto';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  public lecturersFirstDay = [
    new LecturerDto("lekMatuszkiewicz.jpg","Lek. Eryk Matuszkiewicz ","15:00 - 15:30",
      NavigationEnum.left, "Po nitce do kłębka, czyli co internista chciałby powiedzieć pediatrze"),

    // new LecturerDto("","Temat stomatologa", "15:30 - 16:00",
    //   NavigationEnum.right, "Temat stomatologa"),

    new LecturerDto("drMarciniak-Stępak.jpg","Dr n. med. Patrycja Marciniak - Stępak", "16:00 - 16:30",
      NavigationEnum.right, "Symulować czy nie symulować - O to jest pytanie... O symulacji medycznej słów kilka")
  ]
  public lecturersSecDay = [
      // new LecturerDto("","lek. Dagmara Smektała-Smakulska","11:00 - 11:30", NavigationEnum.right, " - "),

    new LecturerDto("drStryczyńska-Kazubska.jpg","Dr n. med. Joanna Kozubska - Stryczyńska","11:30 - 12:00",
      NavigationEnum.left, "Szczepienia ochronne - proste działanie, trudna rozmowa"),

      // new LecturerDto("","dr hab. n. med. Tomasz Szczapa" , "12:00 - 13:30", NavigationEnum.right, " - "),

    new LecturerDto("profDerwich.jpg","Prof. dr hab.n.med. Katarzyna Derwich","14:30 - 15:00", NavigationEnum.left, "Czerwone flagi na horyzoncie - kiedy skierować dziecko do onkologa"),

    new LecturerDto("profFiglerowicz.jpg","Prof. dr hab. n. med. Magdalena Figlerowicz", "15:00 - 15:30", NavigationEnum.right, "Dokąd może nas zaprowadzić podwyższona aktywność aminotransferaz u dzieci"),

    new LecturerDto("profSiwińska.jpg","Prof. dr hab. n. med. Aldona Siwińska","15:30 - 16:00", NavigationEnum.left, "Horror echo"),

  ];
  constructor() { }

  ngOnInit() {
  }

}
