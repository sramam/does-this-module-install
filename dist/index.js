"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sh = require("shelljs");
const path = require("path");
const fs = require("fs");
const tmp = require("tmp");
const engchk = require("runtime-engine-check");
engchk();
function findNpmRoot() {
    const npm = sh.which('npm');
    const root = sh.exec(`${npm} root`, { silent: true }).stdout.split(path.sep).reduce((_, subdir) => {
        _.found = _.found || !!subdir.match('node_modules');
        (!_.found) && _.path.push(subdir);
        return _;
    }, { path: [], found: false });
    return root.path.join(path.sep);
}
function getNpmPath() {
    return process.env.npm_execpath || sh.which(`npm`);
}
exports.runInstallTest = () => __awaiter(this, void 0, void 0, function* () {
    const result = [];
    try {
        const npm = getNpmPath();
        const pkgpath = findNpmRoot();
        const pkgjson = path.join(pkgpath, 'package.json');
        const pkg = JSON.parse(fs.readFileSync(pkgjson, 'utf8'));
        const installDir = tmp.dirSync().name;
        sh.cd(installDir);
        const o1 = sh.exec(`${npm} init -f`, { silent: true });
        result.push(o1);
        const o2 = sh.exec(`${npm} install ${pkgpath}`, { silent: true });
        result.push(o2);
        return `success! installing ${pkg.name} from ${pkgpath}`;
    }
    catch (err) {
        if (true) {
            console.log(JSON.stringify(result, null, 2));
            throw err;
        }
    }
});
if (require.main === module) {
    exports.runInstallTest()
        .then(msg => {
        console.log(msg);
    }).catch(err => {
        console.error(err);
    });
}
