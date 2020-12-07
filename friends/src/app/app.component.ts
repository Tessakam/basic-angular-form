import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

class Language {
  list_language: Array<any> = [
    {
      name: "HTML, CSS, JS, PHP",
    },
  ];
  getLanguages(index: number, data: any) {
    this.list_language[index].active = !this.list_language[index].active
  }
}
export class LanguagesListComponent {
  allLanguages: Language[];

}


