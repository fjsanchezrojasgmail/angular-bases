import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input()
  listTitle: string = "";
  @Input()
  characters: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<Character> = new EventEmitter();


  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {

    console.log(this.characters);

  }

  deleteCharacter(character: Character, id: string):void{
    // console.log("deleteCharacter: ", id);
    //this.onDeleteCharacter.emit(character);
    this.onDeleteId.emit(id);

  }

}
