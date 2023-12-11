import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;
  private original = true;
  public showNameButton = true;
  public showAgeButton = true;

get capitalizedName(): string {

  return this.name.toUpperCase();

}

getHeroDescription(): string{

  return `${ this.name } - ${ this.age }`

}

changeHero():void {

  if(this.original){
    this.name = 'spiderMan';
    this.original = false;
  }else{
    this.name = 'ironMan';
    this.original = true;
  }

  this.showNameButton = false;

}

changeAge():void {

  if(this.original){
    this.age = 28;
    this.original = false;
  }else{
    this.age = 45
    this.original = true;
  }

  this.showAgeButton = false;

}

resetForm():void {

  this.name =  'ironMan';
  this.age = 45;
  this.original = true;
  this.showNameButton = true;
  this.showAgeButton = true;

}

}
