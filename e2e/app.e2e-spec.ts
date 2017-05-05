import { AngularTnnPage } from './app.po';

describe('angular-tnn App', () => {
  let page: AngularTnnPage;

  beforeEach(() => {
    page = new AngularTnnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
