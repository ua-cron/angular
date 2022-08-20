import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronRangeComponent } from './range.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CronRangeComponent],
  exports: [CronRangeComponent]
})
export class CronRangeModule {}
