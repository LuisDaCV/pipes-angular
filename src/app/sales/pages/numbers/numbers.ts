import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PrimeNgModules } from '../../../shared/primengModules';

@Component({
  selector: 'app-numbers',
  imports: [CommonModule, PrimeNgModules],
  templateUrl: './numbers.html',
  styleUrl: './numbers.css'
})
export class Numbers {

  netSales = signal<number>(256678);
  percentage = signal<number>(0.48);


}
