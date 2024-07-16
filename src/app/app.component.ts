import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  parentTitle = 'Default parent data';
  metersModel: any = 0;
  changeTitle(){
    this.parentTitle = "Update parent value";
  }
}
