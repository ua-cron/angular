import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Segment, Type, getList, getDaysOfWeekCodes, CronUnixUIService } from '@sbzen/cron-core';

import { CronTabComponent } from './../../../cron-tab.abstract';

@Component({
  selector: 'unix-cron-day',
  templateUrl: './day.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnixCronDayComponent extends CronTabComponent {
  protected readonly segments: Segment[];

  readonly api = this.cronUI.getApi<Type.DAY>(Type.DAY);
  readonly segment = Segment;

  readonly daysOfWeekEvery = getList(Segment.dayOfWeek, true);
  readonly daysOfWeek = getList(Segment.dayOfWeek);
  readonly daysOfWeekCodes = getDaysOfWeekCodes();

  readonly daysOfMonthEvery = getList(Segment.dayOfMonth, true);
  readonly daysOfMonth = getList(Segment.dayOfMonth);

  constructor(
    readonly cronUI: CronUnixUIService,
    protected readonly cd: ChangeDetectorRef
  ) {
    super();
    this.segments = [Segment.dayOfMonth, Segment.dayOfWeek];
  }

  setDayOfWeekIncrementPrimary(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfWeekIncrementPrimary(value);
  }

  setDayOfWeekIncrementSecondary(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfWeekIncrementSecondary(value);
  }

  setDayOfMonthIncrementPrimary(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfMonthIncrementPrimary(value);
  }

  setDayOfMonthIncrementSecondary(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfMonthIncrementSecondary(value);
  }

  private getEventValue(e: Event) {
    const el = e.target as HTMLSelectElement;
    return el.value;
  }
}
