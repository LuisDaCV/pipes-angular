import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PrimeNgModules } from './shared/primengModules';
import { Menu } from "./shared/menu/menu";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PrimeNgModules, Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');

  nombre = 'luis daniel colque vasquez';
  valor = 121213;

  obj = {
    "hola": "mundo"
  };

  cambiarNombtre(){

  }

}
