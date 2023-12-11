import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({

  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]

})
export class CounterModule { }
