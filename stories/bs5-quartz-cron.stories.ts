import { StoryObj, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Bs5QuartzCronModule, Tab } from './../projects/ng-cron/src/public-api';
import { Bs5QuartzCronComponent } from './bs5-quartz-cron.component';

const meta: Meta<Bs5QuartzCronComponent> = {
  title: 'Bootstrap5 - Quartz Cron',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        Bs5QuartzCronModule
      ],
      declarations: [Bs5QuartzCronComponent]
    })
  ],
  component: Bs5QuartzCronComponent,
  argTypes: {
    tabs: {
      control: 'inline-check',
      options: [
        Tab.SECONDS,
        Tab.MINUTES,
        Tab.HOURS,
        Tab.MONTH,
        Tab.DAY,
        Tab.YEAR
      ]
    },
    activeTab: {
      control: 'inline-radio',
      options: [
        Tab.SECONDS,
        Tab.MINUTES,
        Tab.HOURS,
        Tab.MONTH,
        Tab.DAY,
        Tab.YEAR
      ]
    },
    disabled: {
      control: 'boolean'
    },
    hideTabs: {
      control: 'boolean'
    },
    cssClassPrefix: {
      control: 'text'
    },
    localization: {
      control: 'object'
    },
  }
};
export default meta;

const Template: StoryObj<Bs5QuartzCronComponent> = {
  args: {
    value: '2,0,4,3,1 0/1 3/2 ? * 4/5 *',
    changed: action('changed'),
    tabChanged: action('tabChanged')
  }
};

export const Default = Template;
