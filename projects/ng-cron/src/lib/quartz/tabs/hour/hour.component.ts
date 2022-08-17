import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Segment, Type, getList, CronQuartzUIService } from '@sbzen/cron-core';

import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';

@Component({
  selector: 'quartz-cron-hour',
  templateUrl: './hour.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuartzCronHourComponent extends CronTabSingleSegmentComponent {
  readonly hourCodes = getList(Segment.hours, true);
  readonly hours = getList(Segment.hours);
  readonly api = this.cronUI.getApi(Type.HOURS);

  constructor(
    readonly cronUI: CronQuartzUIService,
    protected readonly cd: ChangeDetectorRef
  ) {
    super(Type.HOURS);
  }
}
