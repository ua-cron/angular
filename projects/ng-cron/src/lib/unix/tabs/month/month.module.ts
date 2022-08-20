import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { UnixCronIncrementModule } from './../shared/increment';
import { UnixCronMonthComponent } from './month.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    UnixCronIncrementModule
  ],
  declarations: [UnixCronMonthComponent],
  exports: [UnixCronMonthComponent]
})
export class UnixCronMonthModule {}
