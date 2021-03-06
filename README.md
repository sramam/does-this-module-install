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

npm enables creation of small modules to compose larger systems.
One problem that surfaces is that smaller modules have to be tested for
deployment.

A common cause of error is when a dependency is listed as a dev-dependency.
This causes needless frustration - in ensuring all will work.

This module, provides a unit installation test as a function.
The function is independent of test framework. It throws on error
when installing it's root-parent module. Root parent is defined as
the first subdirectory containing `node_modules`.

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

`runInstallTest` is a simple function that detects the current parent-root module,
uses it's relative path to install the module into a temp directory.

The function is independent of test framework and returns a success message or throws an error.
Use shown below is tied to `mocha`, should be easy enough to modify as needed.

```TypeScript
// somewhere in your tests
import { runInstallTest } from 'does-this-module-install

// demonstrated with mocha, but should be adaptable to
// any test framework of your choice
describe(`regular module tests`, () => {
  it(`install test`, async () => {
    expect(await runInstallTest()).to.match(/success! installing .*/);
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
