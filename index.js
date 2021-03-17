const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './readme.mustache';

let DATA = {
    version: process.env.npm_package_version ?? 'unknown'
};

function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = "<!--\n  WARNING: this file is auto-generated!\n  Make changes to readme.mustache\n-->\n\n" + Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}
generateReadMe();