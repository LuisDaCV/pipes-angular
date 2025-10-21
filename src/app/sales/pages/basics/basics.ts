import { Component, signal } from '@angular/core';
import { PrimeNgModules } from '../../../shared/primengModules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basics',
  imports: [CommonModule ,PrimeNgModules],
  templateUrl: './basics.html',
  styleUrl: './basics.css'
})
export class Basics {
  name = signal<string>('luis');
  nameUpper = signal<string>('LUIS');
  nameComplete = signal<string>('luis colque');
  date = signal(new Date());

}
