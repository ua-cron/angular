import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Mode } from '@sbzen/cron-core';

@Component({
  selector: 'cron-and',
  templateUrl: './and.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CronAndComponent {
  @Output() readonly selected = new EventEmitter<void>();
  @Input() cssClassPrefix = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() disabledControls = false;
  @Input() gridSize = 'col-1';
  @Input() label = '';
  @Input() segmentId = '';
  @Input() options: {
    label: string|number,
    value: string
  }[] = [];
  @Input() isValueSelected: (value: string) => boolean = () => false;
  @Input() selectValue: (value: string) => boolean = () => false;
  readonly mode = Mode.AND;

  constructor(private readonly cd: ChangeDetectorRef) {}

  changeValue(e: Event, value: string) {
    const status = this.selectValue(value);
    if (!status) {
      e.preventDefault();
    }
  }

  detectChanges() {
    this.cd.detectChanges();
  }
}
