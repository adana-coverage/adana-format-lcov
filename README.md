# adana-format-lcov

Convert [adana] coverage data to [lcov] format.

![build status](http://img.shields.io/travis/izaakschroeder/adana-format-lcov/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/izaakschroeder/adana-format-lcov/master.svg?style=flat)
![license](http://img.shields.io/npm/l/adana-format-lcov.svg?style=flat)
![version](http://img.shields.io/npm/v/adana-format-lcov.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/adana-format-lcov.svg?style=flat)

```sh
npm install --save-dev adana-format-lcov
cat coverage.json | adana format lcov > lcov.info
```

[adana-cli]: https://www.github.com/izaakschroeder/adana-cli
[adana]: https://www.github.com/izaakschroeder/babel-plugin-transform-adana
[lcov]: http://ltp.sourceforge.net/coverage/lcov/geninfo.1.php
