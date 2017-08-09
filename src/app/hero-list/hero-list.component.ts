import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailService } from './hero-detail.service';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers : [HeroDetailService]
})
export class HeroListComponent implements OnInit{

  constructor(private heroDetailService: HeroDetailService){ }

  public heroes = HEROES;  selectedHero: Hero;
  title = 'Tour of Heroes';

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

   ngOnInit(): void {
    this.heroDetailService.getHeroes();
  }
}
