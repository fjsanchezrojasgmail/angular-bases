import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbzService {

  public listado: string = "Listado de heroes";
  public characters: Character[] = [
    {id: uuid(),name: 'Krillin',power: 1000},
    {id: uuid(),name: 'Goku',power: 9500},
    {id: uuid(),name: 'Vegeta',power: 7500}

];

  constructor() {

  }

  addCharacter(character: Character): void{



    const newCharacter: Character = {
      id: uuid(),...character
    };


    //newCharacter.id = this.characters.length + 1;

    this.characters.push(newCharacter);

  }

  deleteCharacter(character: Character){
    console.log("Borrar: ", character);

    this.characters.forEach((data,index)=>{
      if(data === character){
        //this.characters = this.characters.filter(()=> data.name != character);
        this.characters.splice(index,1);
      }
    })

  }

  deleteCharacterById(id: string){

    this.characters = this.characters.filter(character => character.id !== id);

  }

}
