import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent {
  @Input() heroe: Heroe;
  @Input() id: number;


  constructor(private _router:Router){}
  
  verHeroe(i: number) {
    this._router.navigate(['/heroe', i]);
  }


}
