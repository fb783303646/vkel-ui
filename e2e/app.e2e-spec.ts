import { VkelUiPage } from './app.po';

describe('vkel-ui App', () => {
  let page: VkelUiPage;

  beforeEach(() => {
    page = new VkelUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
