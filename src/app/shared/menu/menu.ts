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
      label: 'Angular Pipes',
      icon: 'pi pi-plus',
      items: [
        {
          label: 'Texts and dates',
          icon: 'pi pi-folder-plus',
          routerLink: ' '
        },
        {
          label: 'Numbers',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        }
      ]
    }
    ]
  }

}
