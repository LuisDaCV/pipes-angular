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
        label: 'Field',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' }
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      }
    ]
  }

}
