app.component.ts

export class AppComponent {
  parentTitle = 'Default parent data';
  metersModel:any=0;
changeTitle(){
    this.parentTitle = "Update parent value";
  }
}

app.component.hmtl


<input type="text" [(ngModel)]="metersModel" placeholder="Enter value in meters"/>
<app-child [title]="parentTitle" [metersValue]="metersModel"></app-child>
<button (click)="changeTitle()">Change parentTitle</button>

child.component.ts

export class ChildComponent implements OnChanges {
  @Input() title: any;
  @Input() metersValue: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['metersValue'].currentValue) {  //to check if currentValue exist
      this.metersValue = changes['metersValue'].currentValue * 100;
    }
    else {
      this.metersValue = 0;
    }
  }
}


Whenever the component has @Input decorator then only we can use ngOnChanges() . The child component has @Input decorator in its ts file.
ngOnChanges are used when parent component passes data to child component and in the child.component.ts when we receive the value and we want to manipulate the value obtained in @Input ( here 'title' ) then we use ngOnChanges (in the child component ts file) .

changes in SimpleChanges ( ngOnChanges(changes: SimpleChanges): void ) is a collection of all @Input ( here in child.component.ts there is 2 @Inputs() they are title and meterValue , these 2 of the objects of title and meterValue of them will be present in changes of SimpleChanges) . When we console the changes in SimpleChanges like below you will receive the console as below


ngOnChanges(changes: SimpleChanges): void {
console.log("changes", changes);
}


Output Console


changes 
{title: SimpleChange, metersValue: SimpleChange}
metersValue
: 
SimpleChange
currentValue
: 
0
firstChange
: 
true
previousValue
: 
undefined
[[Prototype]]
: 
Object
title
: 
SimpleChange
currentValue
: 
"Default parent data"
firstChange
: 
true
previousValue
: 
undefined



currentValue is the present value for metersModule the value is 0. firstChange will decide if its the first onload change of the child component or not. previousValue is the previous value holding in the @Input decorator metersValue.
When we enter 10 in the input text then 10 * 100 is manipulated in the ngOnChanges and the result (i.e metersValue) will be 1000.