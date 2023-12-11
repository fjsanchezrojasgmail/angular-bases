import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  deletedHero: string | undefined = '';

  public heroNames: string[] =
    ['SpiderMan','IronMan','Hulk','Thor'];


  removeLastHero(): void {

    this.deletedHero=this.heroNames.pop();

  }

  resetHeroes(): void{
    this.heroNames = ['SpiderMan','IronMan','Hulk','Thor'];
  }

}
