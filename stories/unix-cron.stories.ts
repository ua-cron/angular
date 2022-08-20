import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnixCronModule, Tab } from './../projects/ng-cron/src/public-api';
import { UnixCronComponent } from './unix-cron.component';

export default {
  title: 'Unix Cron',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        UnixCronModule
      ],
      declarations: [UnixCronComponent]
    })
  ],
  component: UnixCronComponent,
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

const Template: Story<UnixCronComponent> = (args: UnixCronComponent) => ({
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

