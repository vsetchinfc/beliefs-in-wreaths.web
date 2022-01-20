import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  get facebookIcon() {
    return faFacebook;
  }

  get instagramIcon() {
    return faInstagram;
  }

  get tiktokIcon() {
    return faTiktok;
  }

  get barsIcon() {
    return faBars;
  }
}
