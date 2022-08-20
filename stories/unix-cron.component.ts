import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab, CronLocalization } from './../projects/ng-cron/src/public-api';

@Component({
  selector: 'storybook-unix-cron',
  template: `
    <input
      class="form-control mb-2"
      readonly
      [value]="value">

    <unix-cron
      name="cron"
      [cssClassPrefix]="cssClassPrefix"
      [activeTab]="activeTab"
      [tabs]="tabs"
      [hideTabs]="hideTabs"
      [localization]="localization"
      [disabled]="disabled"
      [(ngModel)]="value"
      (changed)="changed.emit($event)"
      (tabChanged)="tabChanged.emit($event)">
    </unix-cron>
  `,
})
export class UnixCronComponent {
  @Output() readonly changed = new EventEmitter<string>();
  @Output() readonly tabChanged = new EventEmitter<Tab>();
  @Input() cssClassPrefix?: string;
  @Input() activeTab?: Tab;
  @Input() tabs?: Tab[];
  @Input() hideTabs?: boolean;
  @Input() localization?: CronLocalization;
  @Input() value = '';
  @Input() disabled?: string|null|boolean;
}
