# does-this-module-install
<!-- badge -->
[![npm license](https://img.shields.io/npm/l/does-this-module-install.svg)](https://www.npmjs.com/package/does-this-module-install)
[![travis status](https://img.shields.io/travis/sramam/does-this-module-install.svg)](https://travis-ci.org/sramam/does-this-module-install)
[![Build status](https://ci.appveyor.com/api/projects/status/90am2usst4qeutgi?svg=true)](https://ci.appveyor.com/project/sramam/does-this-module-install)
[![Coverage Status](https://coveralls.io/repos/github/sramam/does-this-module-install/badge.svg?branch=master)](https://coveralls.io/github/sramam/does-this-module-install?branch=master)
[![David](https://david-dm.org/sramam/does-this-module-install/status.svg)](https://david-dm.org/sramam/does-this-module-install)
[![David](https://david-dm.org/sramam/does-this-module-install/dev-status.svg)](https://david-dm.org/sramam/does-this-module-install?type=dev)
<br/>
[![NPM](https://nodei.co/npm/does-this-module-install.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/does-this-module-install/)
<!-- endbadge -->
npm encourages the creation of small modules to compose a larger system.
One problem that surfaces is that smaller modules have to be tested for
deployment.

A common cause of error is when a dependency is listed as a dev-dependency. This causes needless frustration - and multiple
trips to a the git-repo to ensure it all works as intended.

This module, provides a unit installation test, that tests an
npm module can be self installed in production mode.

## Installation

```bash
npm install does-this-module-install -D
```

or

```bash
yarn install doed-this-module-install --save-dev
```

## Usage

`runInstallTest` is a simple function that detects the current root module, uses the relative path
to install this module in a temp directory, by spawning an npm task. The function is designed to be
called from your test framework of choice.

It returns a success message or throws an error.

```TypeScript
// somewhere in your tests
import { runInstallTest } from 'does-this-module-install

// demonstrated with mocha, but should be adaptable to
// any test framework of your choice
describe(`regular module tests`, () => {
  it(`install test`, async () => {
    expect(runInstallTest).to.equal(true);
  });
});
```

## Code of conduct
Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md).
By participating in this project you agree to abide by its terms.

## License

Apache-2.0

## Support

Bugs, PRs, comments, suggestions welcomed!
