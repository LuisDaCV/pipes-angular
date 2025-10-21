import { Component, signal } from '@angular/core';
import { Fieldset } from "primeng/fieldset";
import { PrimeNgModules } from '../../../shared/primengModules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-common',
  imports: [CommonModule, PrimeNgModules],
  templateUrl: './not-common.html',
  styleUrl: './not-common.css'
})
export class NotCommon {

  name = signal<string>('Luis');
  gender = signal<string>('femenino');

  MapInvitacion = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

}
