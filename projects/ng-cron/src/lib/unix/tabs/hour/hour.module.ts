import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { UnixCronIncrementModule } from './../shared/increment';
import { UnixCronHourComponent } from './hour.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    UnixCronIncrementModule
  ],
  declarations: [UnixCronHourComponent],
  exports: [UnixCronHourComponent]
})
export class UnixCronHourModule {}
