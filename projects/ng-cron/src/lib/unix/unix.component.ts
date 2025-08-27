import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Type, CronUnixUIService } from '@sbzen/cron-core';

import { CronHostComponent } from './../cron-host.abstract';
import { cronBootstrap4 } from './../styles';

export function unixCronServiceFactory() {
  return new CronUnixUIService()
};

@Component({
    selector: 'unix-cron',
    templateUrl: './unix.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: CronUnixUIService,
            useFactory: unixCronServiceFactory
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UnixCronComponent),
            multi: true
        }
    ],
    standalone: false
})
export class UnixCronComponent extends CronHostComponent {
  constructor(
    cd: ChangeDetectorRef,
    cronUnixUI: CronUnixUIService
  ) {
    super(
      cd,
      cronUnixUI,
      [Type.MINUTES, Type.HOURS, Type.DAY, Type.MONTH],
      cronBootstrap4
    );
  }
}
