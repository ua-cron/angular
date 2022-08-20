import { Component, Input, ContentChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Tab, CronLocalization } from '@sbzen/ng-cron';

import { getLocalizationPathes, getLocalization } from './../localization';

@Component({
  selector: 'container',
  templateUrl: './container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @ContentChild('content') content!: TemplateRef<HTMLDivElement>;
  @Input() type = '';
  @Input() value = '';
  @Input() initialTabs = [Tab.SECONDS, Tab.MINUTES, Tab.HOURS, Tab.DAY, Tab.MONTH, Tab.YEAR];
  disabled? = false;
  hideTabs? = false;
  cssClassPrefix? = '';
  activeTab?: Tab;
  tabs?: Tab[];
  localization?: CronLocalization;
  readonly updateValue = (v: string) => this.setValue(v);
  readonly updateActiveTab = (v: Tab) => this.setActiveTab(v);

  constructor(private readonly cd: ChangeDetectorRef) {}

  handleValueUpdate(e: Event) {
    const el = e.target as HTMLInputElement;
    const value = el.value;
    this.setValue(value);
  }

  setValue(v: string) {
    this.value = v;
    this.cd.detectChanges();
  }

  setDisabled(v?: boolean) {
    this.disabled = v;
    this.cd.detectChanges();
  }

  setHideTabs(v?: boolean) {
    this.hideTabs = v;
    this.cd.detectChanges();
  }

  setCssClassPrefix(v?: string) {
    this.cssClassPrefix = v;
    this.cd.detectChanges();
  }

  setActiveTab(v?: Tab) {
    this.activeTab = v;
    this.cd.detectChanges();
  }

  setLocalization(v?: CronLocalization) {
    this.localization = v;
    this.cd.detectChanges();
  }

  setTabs(v?: Tab[]) {
    this.tabs = v;
    this.cd.detectChanges();
  }

  getLocalization() {
    return getLocalization();
  }

  getLocalizationPathes() {
    return getLocalizationPathes();
  }

  getLocalizationValue(path: string, loc = getLocalization()) {
    const paths = path.split('.');
    const lastProp = paths[paths.length - 1];
    // @ts-ignore
    const store = paths.slice(0, paths.length - 1).reduce((acc, prop) => acc[prop], loc);
    // @ts-ignore
    return store[lastProp];
  }

  updateLocalizationField(path: string, e: Event) {
    const el = e.target as HTMLInputElement;
    const localizationValue = el.value;
    const paths = path.split('.');
    const lastProp = paths[paths.length - 1];
    // @ts-ignore
    const store = paths.slice(0, paths.length - 1).reduce((acc, prop) => acc[prop], this.localization);
    // @ts-ignore
    store[lastProp] = localizationValue;
    this.setLocalization({ ...this.localization });
  }

  addedTab(tab: Tab) {
    return (this.tabs || []).includes(tab);
  }

  toggleTab(tab: Tab) {
    const tabsToUse = this.tabs || [];
    if (this.addedTab(tab)) {
      this.setTabs(tabsToUse.filter(t => t !== tab));
      return;
    }
    this.setTabs([...tabsToUse, tab]);
  }
}
