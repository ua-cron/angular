import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Segment, getList, Type, CronQuartzUIService } from '@sbzen/cron-core';

import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';

@Component({
  selector: 'quartz-cron-year',
  templateUrl: './year.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuartzCronYearComponent extends CronTabSingleSegmentComponent {
  readonly yearCodes = getList(Segment.year, true);
  readonly years = getList(Segment.year);
  readonly api = this.cronUI.getApi(Type.YEAR);

  constructor(
    readonly cronUI: CronQuartzUIService,
    protected readonly cd: ChangeDetectorRef
  ) {
    super(Type.YEAR);
  }
}
