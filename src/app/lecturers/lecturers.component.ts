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

    new LecturerDto("drSzczapa.jpg","dr hab. n. med. Tomasz Szczapa" , "15:30 - 16:00", NavigationEnum.right, ""),

    new LecturerDto("drStryczyńska-Kazubska.jpg","Dr n. med. Joanna Kozubska - Stryczyńska","16:00 - 16:30",
      NavigationEnum.left, "Szczepienia ochronne - proste działanie, trudna rozmowa"),

      // new LecturerDto("","lek. Dagmara Smektała-Smakulska","11:00 - 11:30", NavigationEnum.right, " - "),
    ]
    public lecturersSecDay = [
      new LecturerDto("drMarciniak-Stępak.jpg","Dr n. med. Patrycja Marciniak - Stępak", "11:30 - 12:00",
        NavigationEnum.left, "Symulować czy nie symulować - Oto jest pytanie... O symulacji medycznej słów kilka"),
      new LecturerDto("profFiglerowicz.jpg","Prof. dr hab. n. med. Magdalena Figlerowicz", "12:00 - 12:30",
        NavigationEnum.right, "Dokąd może nas zaprowadzić podwyższona aktywność aminotransferaz u dzieci"),

      new LecturerDto("profDerwich.jpg","Prof. dr hab.n.med. Katarzyna Derwich","14:30 - 15:00",
        NavigationEnum.left, "Czerwone flagi na horyzoncie - kiedy skierować dziecko do onkologa"),

      new LecturerDto("profSiwińska.jpg","Prof. dr hab. n. med. Aldona Siwińska","15:00 - 15:30",
       NavigationEnum.right, "Horror echo"),
      new LecturerDto("drChlapowska.jpg","Dr n. med. Joanna Chłapowska","15:30 - 16:00",
      NavigationEnum.left, ""),






  ];
  constructor() { }

  ngOnInit() {
  }

}
