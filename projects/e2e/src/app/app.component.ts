import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Bs5QuartzCronComponent } from 'ng-cron';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styles: `
      @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AppComponent {
  @ViewChild(Bs5QuartzCronComponent, { static: true, read: Bs5QuartzCronComponent }) cron!: Bs5QuartzCronComponent;

  value = '0,1,2 2/4 6/2 ? 2-7 SUN,MON 2019/1';

  ngAfterViewInit() {
    this.cron.writeValue(this.value);
  }
}
