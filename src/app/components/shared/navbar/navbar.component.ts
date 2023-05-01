import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  buscar:string=''

  constructor(
    private _Router:Router
  ){}

  buscarHeroe(){
    this._Router.navigate(['/buscar',this.buscar])
  }
}
