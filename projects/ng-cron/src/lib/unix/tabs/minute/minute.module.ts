import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { UnixCronIncrementModule } from './../shared/increment';
import { UnixCronMinuteComponent } from './minute.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    UnixCronIncrementModule
  ],
  declarations: [UnixCronMinuteComponent],
  exports: [UnixCronMinuteComponent]
})
export class UnixCronMinuteModule {}
