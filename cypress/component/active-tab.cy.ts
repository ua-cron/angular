import { activeTab } from '@sbzen/e2e';
import { TestModule } from './test/test.module';

const beforeEachCb = () => beforeEach(() => {
  cy.mount('<test></test>', {
    imports: [TestModule]
  })
});

activeTab(beforeEachCb);
