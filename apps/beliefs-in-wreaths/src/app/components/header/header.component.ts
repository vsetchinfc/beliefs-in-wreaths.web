import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-in-w-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  showNavbar = false;

  ngOnInit(): void {}

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
}
