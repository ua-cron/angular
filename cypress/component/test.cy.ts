import { activeTab, cssClasses, localization, disabled, tabChange, tabs, hideTabs, values } from '@sbzen/e2e';
import { TestModule } from './../../projects/e2e/src/app/test/test.module';

describe('E2e tests', () => {
  beforeEach(() => {
    cy.mount('<test></test>', {
      imports: [TestModule]
    })
  });

  activeTab();
  cssClasses();
  localization();
  disabled();
  tabChange();
  tabs();
  hideTabs();
  values();
});
