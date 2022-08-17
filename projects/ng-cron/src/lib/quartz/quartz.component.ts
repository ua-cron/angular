import { Component, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Type, CronQuartzUIService } from '@sbzen/cron-core';

import { CronHostComponent } from './../cron-host.abstract';

export function quartzCronServiceFactory() {
  return new CronQuartzUIService();
};

@Component({
  selector: 'quartz-cron',
  templateUrl: './quartz.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CronQuartzUIService,
      useFactory: quartzCronServiceFactory
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuartzCronComponent),
      multi: true
    }
  ]
})
export class QuartzCronComponent extends CronHostComponent {
  constructor(cronQuartzUI: CronQuartzUIService) {
    super(cronQuartzUI, [
      Type.SECONDS,
      Type.MINUTES,
      Type.HOURS,
      Type.DAY,
      Type.MONTH,
      Type.YEAR
    ]);
  }
}
