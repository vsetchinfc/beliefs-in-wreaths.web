import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [COMPONENTS],
})
export class BiwSharedUiModule {}
