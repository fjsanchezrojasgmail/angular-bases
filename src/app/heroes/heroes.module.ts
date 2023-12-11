import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/heroes/list/list.component';
import { HeroComponent } from './hero/heroes/hero/hero.component';



@NgModule({

  declarations: [
    HeroComponent,ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,ListComponent
  ]

})
export class HeroesModule { }
