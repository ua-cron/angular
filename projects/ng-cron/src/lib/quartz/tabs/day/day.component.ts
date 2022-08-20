import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Segment, Type, getDaysOfWeekCodes, getList, CronQuartzUIService } from '@sbzen/cron-core';

import { CronTabComponent } from './../../../cron-tab.abstract';

@Component({
  selector: 'quartz-cron-day',
  templateUrl: './day.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuartzCronDayComponent extends CronTabComponent {
  readonly api = this.cronUI.getApi(Type.DAY);
  readonly segment = Segment;
  readonly segments = [Segment.dayOfMonth, Segment.dayOfWeek];

  readonly daysOfWeekEvery = getList(Segment.dayOfWeek, true);
  readonly daysOfWeek = getList(Segment.dayOfWeek);
  readonly daysOfWeekCodes = getDaysOfWeekCodes();

  readonly daysOfMonthEvery = getList(Segment.dayOfMonth, true);
  readonly daysOfMonth = getList(Segment.dayOfMonth);
  readonly limitedDaysOfMonth = this.daysOfMonthEvery.slice(0, 5);

  constructor(
    readonly cronUI: CronQuartzUIService,
    protected readonly cd: ChangeDetectorRef
  ) {
    super();
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

  setDayOfWeekLastNTHDayWeekValue(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfWeekLastNTHDayWeekValue(value);
  }

  setDayOfMonthDaysBeforeEndMonthValue(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfMonthDaysBeforeEndMonthValue(value);
  }

  setDayOfMonthNearestWeekDayOfMonthValue(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfMonthNearestWeekDayOfMonthValue(value);
  }

  setDayOfWeekNTHWeekDayOfMonthPrimaryValue(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfWeekNTHWeekDayOfMonthPrimaryValue(value);
  }

  setDayOfWeekNTHWeekDayOfMonthSecondaryValue(e: Event) {
    const value = this.getEventValue(e);
    this.api.setDayOfWeekNTHWeekDayOfMonthSecondaryValue(value);
  }

  private getEventValue(e: Event) {
    const el = e.target as HTMLSelectElement;
    return el.value;
  }
}
