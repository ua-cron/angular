import { activeTab, cssClasses, localization, disabled, tabChange, tabs, hideTabs, values } from '@sbzen/e2e';
import { TestModule } from './test/test.module';

const beforeEachCb = () => beforeEach(() => {
  cy.mount('<test></test>', {
    imports: [TestModule]
  })
});

activeTab(beforeEachCb);
cssClasses(beforeEachCb);
localization(beforeEachCb);
disabled(beforeEachCb);
tabChange(beforeEachCb);
tabs(beforeEachCb);
hideTabs(beforeEachCb);
values(beforeEachCb);
