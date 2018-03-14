import { EnvisionAppPage } from './app.po';

describe('envision-app App', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    page = new EnvisionAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });

});
