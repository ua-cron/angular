import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestModule } from './test/test.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    TestModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
