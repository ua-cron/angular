import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Type, CronUnixUIService } from '@sbzen/cron-core';

import { CronHostComponent } from './../cron-host.abstract';
import { cronBootstrap5 } from './../styles';

export function bs5UnixCronServiceFactory() {
  return new CronUnixUIService()
};

@Component({
  selector: 'bs5-unix-cron',
  templateUrl: './../unix/unix.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CronUnixUIService,
      useFactory: bs5UnixCronServiceFactory
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Bs5UnixCronComponent),
      multi: true
    }
  ]
})
export class Bs5UnixCronComponent extends CronHostComponent {
  constructor(
    cd: ChangeDetectorRef,
    cronUnixUI: CronUnixUIService
  ) {
    super(
      cd,
      cronUnixUI,
      [Type.MINUTES, Type.HOURS, Type.DAY, Type.MONTH],
      cronBootstrap5
    );
  }
}
