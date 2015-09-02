import fs from 'fs';
import render from '../src';

describe('#render()', () => {

  var context;

  before(() => {
   context = fs.readFileSync(__dirname + '/fixtures/config.toml', 'utf-8');
  });

  it('render toml', () => {
    context = render(context, {
      env: {
        DATABASE_URL: 'user@host'
      }
    });
    context.should.be.equal("[database]\nurl = 'user@host'\n");
  });

});
