#!/usr/bin/env node

const repl = require("repl");
const vm = require('vm');
const require_ = require("require-reload");
const fs = require("fs");

const requireRE = /(.*[^\s])(?=\s?=\s?_require\(["'](.*)["']\))/;
const requires = {};

const r = repl.start({
    "prompt": "-> ",
    "useColors": true
});

r.context._require = function (file) {
    if (requires[file]) return require_(file);
    fs.watchFile(file, type => {
        vm.runInContext(`${requires[file]} = _require("${file}")`, r.context);
    });
    return require_(file);
}

r.on("line", line => {
    const req = line.match(requireRE);
    if (req) {
        requires[req[2]] = req[1];
    }
});