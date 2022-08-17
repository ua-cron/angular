import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronContainerModule } from './../container';
import { QuartzCronMinuteModule } from './tabs/minute';
import { QuartzCronMonthModule } from './tabs/month';
import { QuartzCronHourModule } from './tabs/hour';
import { QuartzCronSecondModule } from './tabs/second';
import { QuartzCronYearModule } from './tabs/year';
import { QuartzCronDayModule } from './tabs/day';

import { QuartzCronComponent } from './quartz.component';

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
  declarations: [QuartzCronComponent],
  exports: [QuartzCronComponent]
})
export class QuartzCronModule {}
