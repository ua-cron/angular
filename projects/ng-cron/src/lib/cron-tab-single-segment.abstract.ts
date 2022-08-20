import { Directive, ViewChild } from '@angular/core';
import { Segment, Type } from '@sbzen/cron-core';

import { CronAndComponent } from './shared';
import { CronTabComponent } from './cron-tab.abstract';
import { CronSingleType } from './cron-single-tab.type';

@Directive()
export abstract class CronTabSingleSegmentComponent extends CronTabComponent {
  @ViewChild(CronAndComponent, { static: true }) and: CronAndComponent|null = null;
  readonly segments: Segment[];

  constructor(tab: CronSingleType) {
    super();
    this.segments = this.getSegments(tab);
  }

  protected override applyChanges() {
    if (this.and) {
      this.and.detectChanges();
    }
    super.applyChanges();
  }

  private getSegments(tab: CronSingleType) {
    const segment = new Map<CronSingleType, Segment>([
      [Type.HOURS, Segment.hours],
      [Type.MINUTES, Segment.minutes],
      [Type.MONTH, Segment.month],
      [Type.SECONDS, Segment.seconds],
      [Type.YEAR, Segment.year]
    ]).get(tab);

    if (!segment) {
      throw `No segments for tab: ${tab}`;
    }

    return [segment];
  }
}
