import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnixCronDayComponent } from './day.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnixCronDayComponent],
  exports: [UnixCronDayComponent]
})
export class UnixCronDayModule {}
