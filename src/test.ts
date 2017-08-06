import { expect } from 'chai';
import { runInstallTest } from '.';

describe(`does-this-module-install`, function () {
  this.timeout(20000);
  it(`runInstallTest`, async () => {
    expect((await runInstallTest())).to.match(/success! installing does-this-module-install from.*/);
  });
});
