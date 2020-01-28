export class LecturerDto {
  constructor(imgName: string, name: string, date: string, navigation: NavigationEnum, description: string ){
    this.imgName = imgName;
    this.name = name;
    this.date = date;
    this.navigation = navigation;
    this.description = description;
  }

  public imgName : string;
  public name : string;
  public date : string;
  public description : string;
  public navigation: NavigationEnum;
}

export enum NavigationEnum {
  left,
  right
}
