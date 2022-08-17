// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { QuartzCronModule } from './../projects/ng-cron/src/public-api';
import { CommonModule } from '@angular/common';

import { QuartzCronComponent } from './button.component';
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      declarations: [QuartzCronComponent],
      imports: [CommonModule, QuartzCronModule],
    }),
  ],
  component: QuartzCronComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<QuartzCronComponent> = (args: QuartzCronComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {

};

