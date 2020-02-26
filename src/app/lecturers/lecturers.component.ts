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
    new LecturerDto("lekMatuszkiewicz.jpg","Lek. Eryk Matuszkiewicz ","",
      NavigationEnum.left, "Po nitce do kłębka, czyli co internista chciałby powiedzieć pediatrze"),

    new LecturerDto("drSzczapa.jpg","Dr hab. n. med. Tomasz Szczapa" , "", NavigationEnum.right,
    "Badanie przedmiotowe noworodka - na co należy zwracać uwagę?"),

    new LecturerDto("drStryczyńska-Kazubska.jpg","Dr n. med. Joanna Stryczyńska - Kazubska","",
      NavigationEnum.left, "Szczepienia ochronne - proste działanie, trudna rozmowa"),

      new LecturerDto("drSmektala.jpg","Lek. Dagmara Smektała-Smakulska",
      "", NavigationEnum.right, "Kaszel NPL-owy, POZ-owy, izbowy, czyli postępowanie ostrodyżurowe z pacjentem kaszlącym"),
    ]
    public lecturersSecDay = [
      new LecturerDto("drMarciniak-Stępak.jpg","Dr n. med. Patrycja Marciniak - Stępak", "",
        NavigationEnum.left, "Symulować czy nie symulować - Oto jest pytanie... O symulacji medycznej słów kilka"),
      new LecturerDto("profFiglerowicz.jpg","Prof. dr hab. n. med. Magdalena Figlerowicz", "",
        NavigationEnum.right, "Dokąd może nas zaprowadzić podwyższona aktywność aminotransferaz u dzieci"),


      new LecturerDto("profSiwińska.jpg","Prof. dr hab. n. med. Aldona Siwińska","",
               NavigationEnum.left, "Horror echo"),
               new LecturerDto("drChlapowska.jpg","Dr n. med. Joanna Chłapowska","",
               NavigationEnum.right, "Jama ustna integralną częścią organizmu"),
      new LecturerDto("profDerwich.jpg","Prof. dr hab.n.med. Katarzyna Derwich","",
        NavigationEnum.left, "Czerwone flagi na horyzoncie - kiedy skierować dziecko do onkologa"),






  ];
  constructor() { }

  ngOnInit() {
  }

}
