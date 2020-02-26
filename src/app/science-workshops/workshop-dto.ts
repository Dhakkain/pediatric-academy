export class WorkshopDto {
  constructor(imgName: string, name: string, pathPdf: string){
    this.imgName = imgName;
    this.name = name;
    this.pathPdf = pathPdf;
  }
  public imgName: string;
  public name:string;
  public pathPdf : string;
}
