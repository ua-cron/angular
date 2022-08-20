import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UnixCronModule, QuartzCronModule } from '@sbzen/ng-cron';

import { ContainerComponent } from './container';
import { TestComponent } from './test.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UnixCronModule,
    QuartzCronModule
  ],
  declarations: [
    ContainerComponent,
    TestComponent
  ],
  exports: [TestComponent]
})
export class TestModule {}
