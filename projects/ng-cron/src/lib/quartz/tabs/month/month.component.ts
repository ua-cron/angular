import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Segment, Type, getMonthCodes, getList, CronQuartzUIService } from '@sbzen/cron-core';

import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';

@Component({
  selector: 'quartz-cron-month',
  templateUrl: './month.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuartzCronMonthComponent extends CronTabSingleSegmentComponent {
  readonly monthCodes = getMonthCodes();
  readonly monthes = getList(Segment.month);
  readonly incrementPrimaryOptions = this.monthes.map((v, i) => ({
    ...v,
    label: i + 1
  }));
  readonly api = this.cronUI.getApi(Type.MONTH);

  constructor(
    readonly cronUI: CronQuartzUIService,
    protected readonly cd: ChangeDetectorRef
  ) {
    super(Type.MONTH);
  }
}
