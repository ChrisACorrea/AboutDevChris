import { Component, OnInit } from '@angular/core';

/* PrimeNg resources */
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.buildMenu();
  }

  private buildMenu(): void {
    this.items = [
      {
        label: 'Início',
        icon: PrimeIcons.HOME,
        routerLink: ['/'],
      },
      {
        label: 'Portfólio',
        icon: PrimeIcons.BOOK,
        routerLink: ['/portfolio'],
      },
    ];
  }
}
