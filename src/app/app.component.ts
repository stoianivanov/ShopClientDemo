import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-client-demo';

 public langs: string[] = [  'Java',
  'C#',
  'C++',
  'Python'
];

  language: string = "Java";

  addNewLanguage( ):void {
    console.log(this.language);
    this.langs.push(this.language)
  }
  
}
