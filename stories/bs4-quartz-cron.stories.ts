import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuartzCronModule, Tab } from './../projects/ng-cron/src/public-api';
import { Bs4QuartzCronComponent } from './bs4-quartz-cron.component';

export default {
  title: 'Bootstrap4 - Quartz Cron',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        QuartzCronModule
      ],
      declarations: [Bs4QuartzCronComponent]
    })
  ],
  component: Bs4QuartzCronComponent,
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
} as Meta;

const Template: Story<Bs4QuartzCronComponent> = (args: Bs4QuartzCronComponent) => ({
  props: {
    ...args,
    changed: action('changed'),
    tabChanged: action('tabChanged')
  }
});

export const Default = Template.bind({});
Default.args = {
  value: '2,0,4,3,1 0/1 3/2 ? * 4/5 *'
};

