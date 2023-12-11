import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor(){}

  public counter: number = 0;

  incCounter(value: number):void{
      this.counter += value;
  }
  decCounter(value: number):void{

    if(this.counter > 0){
      this.counter -= value;
    }

  }
  resetCounter():void{
    this.counter = 0;;
  }

}
