export class Option{
    title: String;
    subtitle: String;
    img: String;
    text: String;
    imgAlt: String;
    click: Option[];
    newHeader: string;
    constructor(title: string, subtitle: string, img: string, text: string, imgAlt = "", click: Option[], newHeader: string){
        this.title = title;
        this.img = img;
        this.text = text;
        this.subtitle = subtitle;
        this.imgAlt = imgAlt;
        this.click = click;
        this.newHeader = newHeader;
    }
}