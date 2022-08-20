import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronEveryComponent } from './every.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CronEveryComponent],
  exports: [CronEveryComponent]
})
export class CronEveryModule {}
