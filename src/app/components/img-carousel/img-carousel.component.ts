import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss'],
})
export class ImgCarouselComponent implements OnInit {
  images = [1, 2, 3, 4, 5].map((n) => `assets/products/product${n}.png`);
  constructor() {}
  ngOnInit(): void {}
}
