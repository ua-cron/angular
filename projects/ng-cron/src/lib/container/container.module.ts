import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronContainerComponent } from './container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CronContainerComponent],
  exports: [CronContainerComponent]
})
export class CronContainerModule {}
