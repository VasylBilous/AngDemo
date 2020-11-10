export class Event {
  title: string;
  date: string;
  imgUrl: string;
  description: string;
  constructor(title: string, date:string, imgUrl:string, description:string){
    this.date = date;
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
  }
}
