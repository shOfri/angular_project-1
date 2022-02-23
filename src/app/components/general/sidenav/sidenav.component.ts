import { Component, OnInit } from '@angular/core';
import { NavItems } from 'src/app/interfaces/nav-items';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItems[] = [
    {
      title: 'customers',
      link: 'customers',
      icon: 'bi bi-file-person-fill',
    },
    {
      title: 'contacts',
      link: 'contacts',
      icon: 'bi bi-envelope-fill',
    },
    {
      title: 'lead',
      link: 'lead',
      icon: 'bi bi-person-workspace',
    },
    {
      title: 'reports',
      link: 'reports',
      icon: 'bi bi-graph-up',
    },
    {
      title: 'integrations',
      link: 'integrations',
      icon: 'bi bi-intersect',
    },
    {
      title: 'tear-end sale',
      link: 'tear-end_sale',
      icon: 'bi bi-emoji-smile-fill',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
