import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Type, CronUnixUIService, CronQuartzUIService } from '@sbzen/cron-core';

import { CronLocalization, localization, DeepPartial } from './cron-localization';

type RawObject = DeepPartial<{
	[key: string]: string|RawObject;
}>;

@Directive()
export abstract class CronHostComponent implements ControlValueAccessor {
  @Output() readonly changed = new EventEmitter<string>();
  @Output() readonly tabChanged = new EventEmitter<Type>();
  @Input() cssClassPrefix = '';
  @Input() activeTab: Type = this.getActiveTab();
  @Input() tabs: Type[]|null = null;
  @Input() hideTabs = false;
  @Input() localization?: CronLocalization;
  @Input() set disabled(value: string|null|boolean) {
    const disableFields = value != null && `${value}` !== 'false';
    this.cronUI.setDisabled(disableFields);
  }

  protected onChange: ((cronValue: string) => {})|null = null;
  protected onTouched: (() => {})|null = null;

  readonly type = Type;

  constructor(
    private readonly cronUI: CronUnixUIService|CronQuartzUIService,
    private readonly initialTabs: Type[]
  ) {}

  writeValue(cronValue: string) {
    this.cronUI.fillFromExpression(cronValue || '');
  }

  registerOnChange(fn: (cronValue: string) => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouched = fn;
  }

  applyChanges() {
    const str = this.cronUI.toString();
    if (this.onChange) {
      this.onChange(str);
    }
    if (this.onTouched) {
      this.onTouched();
    }
    this.changed.emit(str);
  }

  getActiveTab() {
    const tabs = this.getTabs();
    const [firstTab] = tabs.length ? tabs : [this.initialTabs[0]];
    return this.activeTab || firstTab;
  }

  getTabs() {
    return this.tabs || this.initialTabs;
  }

  getLocalization() {
    const args: RawObject[] = [localization];
    if (this.localization) {
      args.push(this.localization);
    }
    return this.mergeDeep<typeof localization>(...args);
  }

  private mergeDeep<T extends RawObject>(...objects: RawObject[]) {
    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];

        if (pVal && typeof pVal === 'object' && oVal && typeof oVal === 'object') {
          prev[key] = this.mergeDeep(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });

      return prev;
    }, {}) as T;
  }
}
