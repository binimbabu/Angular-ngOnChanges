import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {
  @Input() title: any;
  @Input() metersValue: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['metersValue'] && changes['metersValue'].currentValue) {  //to check if currentValue exist
      this.metersValue = changes['metersValue'].currentValue * 100;
    }
    else {
      this.metersValue = 0;
    }
  }
}
