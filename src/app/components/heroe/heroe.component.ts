import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent {
  heroe: Heroe;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _HeroesService: HeroesService
  ) {
    _ActivatedRoute.params.subscribe((params) => {
      console.warn(params['id']);
      this.heroe = _HeroesService.getHeroe(params['id']);
    });
  }
}
