import { AuditAppAngularPage } from './app.po';

describe('audit-app-angular App', () => {
  let page: AuditAppAngularPage;

  beforeEach(() => {
    page = new AuditAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
