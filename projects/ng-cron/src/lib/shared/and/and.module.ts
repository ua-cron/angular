import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronAndComponent } from './and.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CronAndComponent],
  exports: [CronAndComponent]
})
export class CronAndModule {}
