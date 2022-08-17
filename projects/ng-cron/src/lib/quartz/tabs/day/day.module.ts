import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronRangeModule } from './../../../shared';
import { QuartzCronDayComponent } from './day.component';

@NgModule({
  imports: [
    CommonModule,
    CronRangeModule
  ],
  declarations: [QuartzCronDayComponent],
  exports: [QuartzCronDayComponent]
})
export class QuartzCronDayModule {}
