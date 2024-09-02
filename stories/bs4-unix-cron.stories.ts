import { StoryObj, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnixCronModule, Tab } from './../projects/ng-cron/src/public-api';
import { Bs4UnixCronComponent } from './bs4-unix-cron.component';

const meta: Meta<Bs4UnixCronComponent> = {
  title: 'Bootstrap4 - Unix Cron',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        UnixCronModule
      ],
      declarations: [Bs4UnixCronComponent]
    })
  ],
  component: Bs4UnixCronComponent,
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

const Template: StoryObj<Bs4UnixCronComponent> = {
  args: {
    value: '0,1,2 */8 ? JAN,FEB */4',
    changed: action('changed'),
    tabChanged: action('tabChanged')
  }
};

export const Default = Template;
