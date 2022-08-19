import { Directive, Input, ChangeDetectorRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Mode, Segment, CronUnixUIService, CronQuartzUIService } from '@sbzen/cron-core';

import { FullCronLocalization } from './cron-localization';

@Directive()
export abstract class CronTabComponent implements OnInit, OnDestroy {
  @Output() readonly changed = new EventEmitter<never>();
  @Input() localization!: FullCronLocalization;
  @Input() cssClassPrefix = '';

  private readonly sessionId = Date.now().toString();
  private unListener: (() => void)|null = null;
  protected abstract readonly segments: Segment[];
  protected abstract readonly cd: ChangeDetectorRef;

  abstract readonly cronUI: CronUnixUIService|CronQuartzUIService;
  readonly mode = Mode;

  ngOnInit() {
    this.unListener = this.cronUI.listen(this.segments, () => {
      this.cd.detectChanges();
      this.applyChanges();
    });
  }

  ngOnDestroy() {
    if (this.unListener) {
      this.unListener();
    }
  }

  genId(mode: Mode, extra?: string) {
    return `${mode}-${extra || ''}${this.sessionId}`;
  }

  localizeList(list: { value: string, label: string }[], localizationStore: { [key: string]: string }) {
    return list.map(v => ({
      ...v,
      label: this.localizeLabel(v.label, localizationStore)
    }));
  }

  localizeLabel(label: string, localizationStore: { [key: string]: string }) {
    return localizationStore[label.toLowerCase()]
  }

  protected applyChanges() {
    this.changed.emit();
  }
}
