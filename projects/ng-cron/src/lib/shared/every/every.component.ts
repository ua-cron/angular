import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mode } from '@sbzen/cron-core';

import { CronClassesSchema } from './../../styles';

@Component({
  selector: 'cron-every',
  templateUrl: './every.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CronEveryComponent {
  @Output() readonly selected = new EventEmitter<void>();
  @Input() checked = false;
  @Input() disabled = false;
  @Input() label = '';
  @Input() segmentId = '';
  @Input() schema!: CronClassesSchema;

  readonly mode = Mode.EVERY;
}
