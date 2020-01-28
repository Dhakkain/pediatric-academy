export class SponsorDto {
  constructor(name: string, imgName: string, width: string, url = '', radius = '') {
    this.name = name;
    this.imgName = imgName;
    this.width = width;
    this.url = url;
    this.radius = radius;
  }
  name: string;
  imgName: string;
  width: string;
  url:string;
  radius: string;
}
