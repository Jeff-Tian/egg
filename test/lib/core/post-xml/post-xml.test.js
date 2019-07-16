'use strict';

const assert = require('assert');
const mm = require('egg-mock');
const utils = require('../../../utils');

describe('test/lib/core/post-xml/post-xml.test.js', () => {
  let app;
  before(() => {
    app = utils.app('apps/post-xml');
    return app.ready();
  });
  after(() => app.close());

  afterEach(mm.restore);

  it('should return config.name', () => {
    assert(app.config.name === 'post-xml');
    console.log('app = ', app);
    assert(app.config.logger.disableConsoleAfterReady === false);
  });
});
