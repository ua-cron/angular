import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuartzCronIncrementComponent } from './increment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuartzCronIncrementComponent],
  exports: [QuartzCronIncrementComponent]
})
export class QuartzCronIncrementModule {}
