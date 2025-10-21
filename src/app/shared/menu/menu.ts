import { Component, OnInit } from '@angular/core';
import { PrimeNgModules } from '../primengModules';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  imports: [PrimeNgModules],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {


  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
     {
      label: 'Angular pipes',
      icon: 'pi pi-warehouse',
      items: [
        {
          label: 'Texts and dates',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Numbers',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        },
        {
          label: 'Not common',
          icon: 'pi pi-globe',
          routerLink: 'not-common'
        }
      ]
     },
     {
      label: 'Custom Pipes',
      icon: 'pi pi-pen-to-square'
     }
    ]
  }

}
