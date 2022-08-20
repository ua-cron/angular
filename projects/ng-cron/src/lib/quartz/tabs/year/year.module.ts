import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronYearComponent } from './year.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    QuartzCronIncrementModule
  ],
  declarations: [QuartzCronYearComponent],
  exports: [QuartzCronYearComponent]
})
export class QuartzCronYearModule {}
