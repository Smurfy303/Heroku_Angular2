import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroDetailService {

  constructor() { }
   getHeroes(): Hero[] {
    
    return HEROES;
  }
}
