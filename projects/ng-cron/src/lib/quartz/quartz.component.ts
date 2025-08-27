import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Type, CronQuartzUIService } from '@sbzen/cron-core';

import { CronHostComponent } from './../cron-host.abstract';
import { cronBootstrap4 } from './../styles';

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
    ],
    standalone: false
})
export class QuartzCronComponent extends CronHostComponent {
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
      cronBootstrap4
    );
  }
}
