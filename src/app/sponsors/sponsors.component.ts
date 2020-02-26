import { Component, OnInit } from "@angular/core";
import { SponsorDto } from "./sponsor-dto";

@Component({
  selector: "app-sponsors",
  templateUrl: "./sponsors.component.html",
  styleUrls: ["./sponsors.component.css"]
})
export class SponsorsComponent implements OnInit {
  honoraryPatrons: Array<SponsorDto> = [
    new SponsorDto("", "profWachowiak.jpg", "110%", "", "15%"),
    new SponsorDto(
      "",
      "ptpLogo.jpg",
      "100%",
      "https://ptp.edu.pl/"
    ),

    new SponsorDto("", "poznanLogo.jpg", "110%", "https://www.poznan.pl/"),
    new SponsorDto("", "wilLogo.png", "110%", "https://wil.org.pl/"),

    new SponsorDto(
      "",
      "fpdzcnLogo.png",
      "110%",
      "http://fundacjapomocydzieciom.com.pl/"
    ),
    new SponsorDto(
      "",
      "stn.png",
      "110%",
      "http://stn.ump.edu.pl/stn/aktualnosci"
    ),
    new SponsorDto("", "komisjaLogo.jpg", "110%", "https://wil.org.pl/organy/okregowa-rada-lekarska/komisje-problemowe/komisja-ds-mlodych-lekarzy/", ""),

  ];

  mediaPatrons: Array<SponsorDto> = [
    new SponsorDto("", "pulsumLogo.jpg", "100%", "http://pulsum.ump.edu.pl/"),
    new SponsorDto("", "mtubeLogo.png", "120%", "https://medtube.pl/"),
    new SponsorDto("", "odLogo.png", "100%", "https://onkologia-dziecieca.pl/"),
    new SponsorDto("", "borgisLogo.png", "100%", "http://borgis.pl/"),
    new SponsorDto("", "smLogo.jpg", "120%", "http://www.standardy.pl/"),
    new SponsorDto("", "ffLogo.png", "120%", "https://food-forum.pl/"),
    new SponsorDto("", "mpplLogo.gif", "120%", "https://www.mp.pl/"),
    new SponsorDto("", "pediatrycznyLogo.png", "120%", "https://przegladpediatryczny.pl/"),
    new SponsorDto("", "Czelej.png", "100%", "https://czelej.com.pl/"),

  ];

  scientificPatrons: Array<SponsorDto> = [
    new SponsorDto("", "profDerwich.jpg", "125%", "15%"),
    new SponsorDto("", "drMarciniakStepak.jpg", "125%")
  ];

  sponsors: Array<SponsorDto> = [
    new SponsorDto(" ", "gradatimLogo.png", "100%", "https://www.gradatim-sympozja.pl/"),
    new SponsorDto("", "resonnezLogo.svg", "125%", "https://resonnez.com/"),
    new SponsorDto(
      "",
      "dzieciakiLogo.png",
      "125%",
      "http://dzieciakichojraki.pl/"
    ),
    new SponsorDto("", "lepolekLogo.png", "115%", "https://lepolek.pl/"),
    new SponsorDto("", "redbull.jpg", "100%", "https://www.redbull.com/pl-pl/"),
    new SponsorDto("", "medgical.png", "170%", "https://medgical.pl/"),

  ];

  constructor() {}

  ngOnInit() {}
}
