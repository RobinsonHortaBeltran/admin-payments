import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  isNavbarCollapsed: boolean = false;
  private homeRoute: string = '/home';
  private pathSvg: string = '../../../assets/svg/';
  protected Buttons: any[] = [
    {
      title: 'INICIO',
      svg: `${this.pathSvg}/home.svg`,
      route: this.homeRoute,
      children: 'start',
    },
    {
      title: 'MI PERFIL',
      svg: `${this.pathSvg}/profile.svg`,
      route: this.homeRoute,
      children: 'profile',
    },
    // {
    //   title: 'MIS CONTRATOS',
    //   svg: `${this.pathSvg}/invoice-icon.svg`,
    //   route: this.homeRoute,
    //   children: 'contracts',
    // },
    // {
    //   title: 'MIS FACTURAS',
    //   svg: `${this.pathSvg}/invoice-icon.svg`,
    //   route: this.homeRoute,
    //   children: 'invoices',
    // },
    {
      title: 'AGREGAR CLIENTE',
      svg: `${this.pathSvg}/person-add.svg`,
      route: this.homeRoute,
      children: 'clients',
    },
    {
      title: 'MIS PRODUCTOS',
      svg: `${this.pathSvg}/product-icon.svg`,
      route: this.homeRoute,
      children: 'products',
    },
    {
      title: 'REALIZAR VENTA',
      svg: `${this.pathSvg}/cart-shoping.svg`,
      route: this.homeRoute,
      children: 'sales',
    },
  ];

  treeData: any[] = [
    {
      id: 1,
      nombre: 'Nodo 1',
      children: [
        { id: 2, nombre: 'Nodo 1.1' },
        { id: 3, nombre: 'Nodo 1.2' },
      ],
    },
    {
      id: 4,
      nombre: 'Nodo 2',
    },
    {
      id: 5,
      nombre: 'Nodo 3',
      children: [
        { id: 6, nombre: 'Nodo 3.1' },
        { id: 7, nombre: 'Nodo 3.2' },
      ],
    },
  ];

  constructor(private router: Router) {}
  onToggleSidebar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.toggleSidebar.emit();
  }

  navigateTo(route: string, children: string) {
    this.router.navigate([route, children]);
  }
}
