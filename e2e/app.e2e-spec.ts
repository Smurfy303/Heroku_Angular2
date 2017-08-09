import { Angular2BowerPage } from './app.po';

describe('angular2-bower App', () => {
  let page: Angular2BowerPage;

  beforeEach(() => {
    page = new Angular2BowerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
