import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnixCronIncrementComponent } from './increment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnixCronIncrementComponent],
  exports: [UnixCronIncrementComponent]
})
export class UnixCronIncrementModule {}
