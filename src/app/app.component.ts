import { Component } from '@angular/core';
import { Option } from './model/options';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nam ultrices vulputate turpis, in euismod quam lacinia sed. 
  Fusce vel eros eget eros finibus venenatis quis sit amet enim. 
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
  per inceptos himenaeos. Donec iaculis erat sed mauris auctor venenatis. 
  Fusce efficitur vestibulum est eu placerat. Aenean sodales velit sit amet nulla lobortis, 
  eu aliquet ante scelerisque. Donec in tellus sem. Fusce quis condimentum urna, 
  id vestibulum nisl.`;
  public options: Option[] = [];
  header = "Um welche Rubrik geht es heute?"
  constructor(){
    const hose = new Option(
      "Hose",
      "Masshose",
      "hose.jpeg",
      this.loremIpsum,
      "alt",
      [],
      "Hosen" 
    );
    const acc = new Option(
      "Accessoires",
      "Gürtel etc.",
      "accessoirces.jpeg",
      this.loremIpsum,
      "alt",
      [],
      "Accessoires"
    );
    const stoff1 = new Option(
      "blauer Stoff",
      "Klassisch",
      "stoff_blau.jpg",
      this.loremIpsum,
      "alt",
      [],
      ""
    )
    const stoff2 = new Option(
      "dunkler Stoff",
      "öppis",
      "stoff_dunkel.jpg",
      this.loremIpsum,
      "alt",
      [],
      ""
    )
    const stoff3 = new Option(
      "grauer Stoff",
      "Wenn es nicht schwarz-weiss ist",
      "stoff_grau.jpg",
      this.loremIpsum,
      "alt",
      [],
      ""
    )
    const stoff4 = new Option(
      "roter Stoff",
      "für Trauzeugen",
      "stoff_rot.jpg",
      this.loremIpsum,
      "alt",
      [],
      ""
    )
    const anzug = new Option(
    "Anzug",
    "Kompletter Anzug",
    "anzug.jpeg",
    this.loremIpsum,
    "alt",
    [stoff1, stoff2, stoff3, stoff4],
    "Wähle deinen Stoff!"
    );
    

    this.options.push(anzug);
    this.options.push(hose);
    this.options.push(acc);
  }
  changeOptions(newOp: Option[], newHeader: string): void {
    this.options = newOp;
    this.header = newHeader;
  }
}
