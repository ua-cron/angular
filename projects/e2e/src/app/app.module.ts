import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Bs5QuartzCronModule } from "../../../ng-cron/src/lib/bs5-quartz/bs5-quartz.module";

@NgModule({
  imports: [BrowserModule, Bs5QuartzCronModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
