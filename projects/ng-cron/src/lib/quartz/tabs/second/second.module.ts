import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronSecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    CronEveryModule,
    CronRangeModule,
    CronAndModule,
    QuartzCronIncrementModule
  ],
  declarations: [QuartzCronSecondComponent],
  exports: [QuartzCronSecondComponent]
})
export class QuartzCronSecondModule {}
