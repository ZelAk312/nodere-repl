# nodere-repl

A node repl that reload requires on file changes, more comming soon

# How to install
`npm -g i zelak312/nodere-repl`

# How to use it
```js
-> test = _require("./test.js")
'ahah' // the test.js is currently exporting 'ahah'
// change the test.js file with anything you want for example make it export 'hi'
-> test
'hi'
```

This module doesn't support [const/let/var] for now, example: let test = _require("./test.js") is not supported.

Also don't forget that when you want to have it reload on changes to use _require and not require since _require is actually a custom function!
