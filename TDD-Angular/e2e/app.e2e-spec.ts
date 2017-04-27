import { TDDAngularPage } from './app.po';

describe('tdd-angular App', function() {
  let page: TDDAngularPage;

  beforeEach(() => {
    page = new TDDAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movies Collection');
  });
});
