import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronContainerModule } from './../container';
import { UnixCronMinuteModule } from './tabs/minute';
import { UnixCronMonthModule } from './tabs/month';
import { UnixCronHourModule } from './tabs/hour';
import { UnixCronDayModule } from './tabs/day';

import { UnixCronComponent } from './unix.component';

@NgModule({
  imports: [
    CommonModule,
    UnixCronMinuteModule,
    UnixCronMonthModule,
    UnixCronHourModule,
    UnixCronDayModule,
    CronContainerModule
  ],
  declarations: [UnixCronComponent],
  exports: [UnixCronComponent]
})
export class UnixCronModule {}
