import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home.component';
import { ImgCarouselComponent } from './components/img-carousel/img-carousel.component';

@NgModule({
  declarations: [HomeComponent, ImgCarouselComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule],
  bootstrap: [HomeModule],
})
export class HomeModule {}
