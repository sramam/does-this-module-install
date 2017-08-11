
import * as sh from 'shelljs';
import * as path from 'path';
import * as fs from 'fs';
import * as tmp from 'tmp';
import * as engchk from 'runtime-engine-check';
engchk(); // checks node version matches spec in package.json

function findNpmRoot() {
  const npm = sh.which('npm');
  const root = sh.exec(`${npm} root`, { silent: true });
  return path.resolve(`${root}/..`);
}

function getNpmPath() {
  /* istanbul ignore next */
  return process.env.npm_execpath || sh.which(`npm`);
}
/**
 * Simple function that creates a new npm repo and attempts to install
 * parent repo. This is a simple test to ensure that all dependencies
 * are properly specified to prevent "works-(only!)-on-my-machine"
 * problems.
 *
 * @param dirname -
 */
export const runInstallTest = async () => {
  const result = [];
  const cwd = process.cwd();

  try {
    const npm = getNpmPath();
    const pkgpath = findNpmRoot();
    const pkgjson = path.join(pkgpath, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgjson, 'utf8'));

    // all checks pass. Create a tmp dir
    const installDir = tmp.dirSync().name;

    // create a new npm module in tmp dir
    sh.cd(installDir);
    // initialize an npm modules
    const o1 = sh.exec(`${npm} init -f`, { silent: true });
    result.push(o1);
    // and install the root pkg
    const o2 = sh.exec(`${npm} install ${pkgpath}`, { silent: true });
    sh.cd(cwd);
    result.push(o2);
    return `success! installing ${pkg.name} from ${pkgpath}`;
  } catch (err) {
    /* istanbul ignore next */
    if (true) {
      sh.cd(cwd);
      console.log(JSON.stringify(result, null, 2));
      throw err;
    }
  }
};

/* istanbul ignore next */
if (require.main === module) {
  runInstallTest()
    .then(msg => {
      console.log(msg);
    }).catch(err => {
      console.error(err);
    });
}
