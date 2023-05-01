import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent {
  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService, private _router: Router) {
    this.heroes = _heroesService.getHeroes();
  }
}
