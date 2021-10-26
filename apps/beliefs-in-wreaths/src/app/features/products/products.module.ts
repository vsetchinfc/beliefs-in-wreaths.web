import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './containers/products-page.component';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
