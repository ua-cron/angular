import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Mode } from '@sbzen/cron-core';

import { CronClassesSchema } from './../../../../styles';

@Component({
  selector: 'quartz-cron-increment',
  templateUrl: './increment.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuartzCronIncrementComponent {
  @Output() readonly selected = new EventEmitter<void>();
  @Output() readonly primaryValueChanged = new EventEmitter<string>();
  @Output() readonly secondaryValueChanged = new EventEmitter<string>();
  @Input() segmentId = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() disabledControls = false;
  @Input() label = '';
  @Input() label2 = '';
  @Input() primaryValue = '';
  @Input() primaryOptions: {
    label: string|number,
    value: string
  }[] = [];
  @Input() secondaryValue = '';
  @Input() secondaryOptions: {
    label: string|number,
    value: string
  }[] = [];
  @Input() schema!: CronClassesSchema;
  readonly mode = Mode.INCREMENT;

  setPrimaryValue(e: Event) {
    const el = e.target as HTMLSelectElement;
    this.primaryValueChanged.emit(el.value);
  }

  setSecondaryValue(e: Event) {
    const el = e.target as HTMLSelectElement;
    this.secondaryValueChanged.emit(el.value);
  }
}
