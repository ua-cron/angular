import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Tab } from '@sbzen/ng-cron';

@Component({
	selector: 'test',
	templateUrl: './test.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  readonly tab = Tab;
}
