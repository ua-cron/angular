import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Segment, Type, getList, CronQuartzUIService } from '@sbzen/cron-core';

import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';

@Component({
  selector: 'quartz-cron-minute',
  templateUrl: './minute.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuartzCronMinuteComponent extends CronTabSingleSegmentComponent {
  readonly minuteCodes = getList(Segment.minutes, true);
  readonly minutes = getList(Segment.minutes);
  readonly api = this.cronUI.getApi(Type.MINUTES);

  constructor(
    readonly cronUI: CronQuartzUIService,
    protected readonly cd: ChangeDetectorRef
  ) {
    super(Type.MINUTES);
  }
}
