import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronMinuteComponent } from './minute.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    QuartzCronIncrementModule
  ],
  declarations: [QuartzCronMinuteComponent],
  exports: [QuartzCronMinuteComponent]
})
export class QuartzCronMinuteModule {}
