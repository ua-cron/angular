import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Type, CronQuartzUIService } from '@sbzen/cron-core';

import { CronHostComponent } from './../cron-host.abstract';
import { cronBootstrap5 } from './../styles';

export function bs5QuartzCronServiceFactory() {
  return new CronQuartzUIService();
};

@Component({
  selector: 'bs5-quartz-cron',
  templateUrl: './../quartz/quartz.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CronQuartzUIService,
      useFactory: bs5QuartzCronServiceFactory
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Bs5QuartzCronComponent),
      multi: true
    }
  ]
})
export class Bs5QuartzCronComponent extends CronHostComponent {
  constructor(
    cd: ChangeDetectorRef,
    cronQuartzUI: CronQuartzUIService
  ) {
    super(
      cd,
      cronQuartzUI,
      [
        Type.SECONDS,
        Type.MINUTES,
        Type.HOURS,
        Type.DAY,
        Type.MONTH,
        Type.YEAR
      ],
      cronBootstrap5
    );
  }
}
