import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {
  heroes: Heroe[];
  termino: string;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _HeroesService: HeroesService
  ) {
    _ActivatedRoute.params.subscribe((params) => {
      this.termino = params['id'];
      this.heroes = _HeroesService.buscarHeroes(this.termino);
    });
  }
}
