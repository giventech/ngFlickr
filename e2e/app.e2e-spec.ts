import { NgFlickrPage } from './app.po';

describe('ng-flickr App', () => {
  let page: NgFlickrPage;

  beforeEach(() => {
    page = new NgFlickrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
