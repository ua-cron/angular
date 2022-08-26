import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronContainerModule } from './../container';
import { UnixCronMinuteModule } from './../unix/tabs/minute';
import { UnixCronMonthModule } from './../unix/tabs/month';
import { UnixCronHourModule } from './../unix/tabs/hour';
import { UnixCronDayModule } from './../unix/tabs/day';

import { Bs5UnixCronComponent } from './bs5-unix.component';

@NgModule({
  imports: [
    CommonModule,
    UnixCronMinuteModule,
    UnixCronMonthModule,
    UnixCronHourModule,
    UnixCronDayModule,
    CronContainerModule
  ],
  declarations: [Bs5UnixCronComponent],
  exports: [Bs5UnixCronComponent]
})
export class Bs5UnixCronModule {}
