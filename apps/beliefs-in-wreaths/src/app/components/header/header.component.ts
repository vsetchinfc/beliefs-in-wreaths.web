import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
//import { faFacebook } from '@fortawesome/fontawesome-free';
import { fa } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'b-in-w-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  showNavbar = false;

  ngOnInit(): void { }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  get facebookIcon() {
    return faFacebook;
  }
}
