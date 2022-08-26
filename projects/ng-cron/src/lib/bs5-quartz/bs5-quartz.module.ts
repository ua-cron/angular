import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronContainerModule } from './../container';
import { QuartzCronMinuteModule } from './../quartz/tabs/minute';
import { QuartzCronMonthModule } from './../quartz/tabs/month';
import { QuartzCronHourModule } from './../quartz/tabs/hour';
import { QuartzCronSecondModule } from './../quartz/tabs/second';
import { QuartzCronYearModule } from './../quartz/tabs/year';
import { QuartzCronDayModule } from './../quartz/tabs/day';

import { Bs5QuartzCronComponent } from './bs5-quartz.component';

@NgModule({
  imports: [
    CommonModule,
    QuartzCronMonthModule,
    QuartzCronMinuteModule,
    QuartzCronHourModule,
    QuartzCronSecondModule,
    QuartzCronYearModule,
    QuartzCronDayModule,
    CronContainerModule
  ],
  declarations: [Bs5QuartzCronComponent],
  exports: [Bs5QuartzCronComponent]
})
export class Bs5QuartzCronModule {}
