import { Component, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainComponent implements OnInit {



  constructor(private dbzService: DbzService) {

  }

  ngOnInit() { }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  get listado(): string{
    return this.dbzService.listado;
  }

  onDeleteCharacter(id:string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }


}
