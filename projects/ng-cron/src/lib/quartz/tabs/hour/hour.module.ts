import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronHourComponent } from './hour.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    QuartzCronIncrementModule
  ],
  declarations: [QuartzCronHourComponent],
  exports: [QuartzCronHourComponent]
})
export class QuartzCronHourModule {}
