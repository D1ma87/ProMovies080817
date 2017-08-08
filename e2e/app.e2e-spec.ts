import { ProMovies080817Page } from './app.po';

describe('pro-movies080817 App', () => {
  let page: ProMovies080817Page;

  beforeEach(() => {
    page = new ProMovies080817Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
