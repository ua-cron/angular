import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronMonthComponent } from './month.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    QuartzCronIncrementModule
  ],
  declarations: [QuartzCronMonthComponent],
  exports: [QuartzCronMonthComponent]
})
export class QuartzCronMonthModule {}
