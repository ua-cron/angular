import { Component, ContentChild, TemplateRef, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Type } from '@sbzen/cron-core';

import { CronLocalization } from './../cron-localization';
import { CronClassesSchema } from './../styles';

@Component({
  selector: 'cron-container',
  templateUrl: './container.html',
  styleUrls: ['./container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CronContainerComponent {
  @ContentChild('content') content!: TemplateRef<{ $implicit: Type }>;
  @ViewChildren('tabEl', { read: ElementRef }) tabEls: QueryList<ElementRef>|null = null;
  @Output() readonly tabChanged = new EventEmitter<Type>();
  @Input() localization!: Required<CronLocalization>;
  @Input() hostClass = '';
  @Input() activeTab = Type.MINUTES;
  @Input() tabs: Type[] = [];
  @Input() hideTabs = false;
  @Input() schema!: CronClassesSchema;

  readonly tabsLocalizationKeys = {
    [Type.DAY]: 'day',
    [Type.HOURS]: 'hours',
    [Type.MINUTES]: 'minutes',
    [Type.MONTH]: 'month',
    [Type.SECONDS]: 'seconds',
    [Type.YEAR]: 'year'
  } as const;

  constructor(private readonly cd: ChangeDetectorRef) {}

  navigateTab(code: string, tab: Type) {
    if (!this.tabEls || code !== 'ArrowRight' && code !== 'ArrowLeft') {
      return;
    }
    const tabEls = this.tabEls.toArray().map(er => er.nativeElement);
    const tabs = this.tabs;
    const pos = tabs.indexOf(tab);
    let toPos = 0;

    if (code === 'ArrowRight') {
      const nextPos = pos + 1;
      toPos = (nextPos === tabs.length) ? 0 : nextPos;
    }
    if (code === 'ArrowLeft') {
      const prevPos = pos - 1;
      toPos = (prevPos < 0) ? tabs.length - 1 : prevPos;
    }

    this.setTab(tabs[toPos]);
    const tabEl = tabEls[toPos];
    if (tabEl) {
      tabEl.focus();
      this.cd.detectChanges();
    }
  }

  setTab(tab: Type) {
    this.activeTab = tab;
    this.cd.detectChanges();
    this.tabChanged.emit(tab);
  }
}
