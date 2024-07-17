import { Component,Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
// Data or value flowing from parent component(Product-list) to child component(filter)using Input Decorator
@Input()
all:number=0;

@Input()
inStock:number=0;

@Input()
outOfstock:number=0;

//making the radio button as all by default using the values called all, true, false
selectedRadioButton:string='all'
//selectedRadioButton:string='true'
//selectedRadioButton:string='false'

//creating a variable and using EventEmiter. Since, custom event whenever changes hpnd in webpage
@Output()
selectedRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

//calling a Eventemiiter by emit method, selectedRadioButton using this variable where the event values/changes will be stored in this
onselectedRadioButtonChanged(){
  this.selectedRadioButtonChanged.emit(this.selectedRadioButton)
}
}
