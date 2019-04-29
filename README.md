# util.calc

> Takes an HTML sizing string and computes a new value

[![build](https://circleci.com/gh/jmquigley/util.calc/tree/master.svg?style=shield)](https://circleci.com/gh/jmquigley/util.calc/tree/master)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.calc.svg)](https://www.npmjs.com/package/util.calc)
[![coverage](https://coveralls.io/repos/github/jmquigley/util.calc/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.calc?branch=master)


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add --dev util.calc
```

To build the app and run all tests:
```
$ yarn run all
```


## Overview
Takes an HTML width/size string and performs a calcuation to scale it.  This would be used to dynamically size an attribute for inline styles in a React component (e.g.).  It uses four basic operations (addition, subtraction multiplication, and division).

e.g.

taking "20px" and doubling its size:

```javascxript
calc('20px', '* 2'); // '40px'
```

The module also contains two helper methods named [toEM()](docs/index.md#toEM) and [toREM()](docs/index.md#toREM) for converting a sizing value from pixels to [EM/REM](https://zellwk.com/blog/rem-vs-em/).


## Usage (calc)
Exposes a function named [calc()](docs/index.md#calc).  It will take an HTML size string or a number and perform one of four basic operations:


#### Addition

```javascript
import {calc} from 'util.calc';
calc('20px', '+ 5'); // 25px
```

#### Subtraction

```javascript
import {calc} from 'util.calc';
calc('20px', '- 5'); // 15px
```

#### Multiplication

```javascript
import {calc} from 'util.calc';
calc('20px', '* 2'); // 40px
```

#### Division

```javascript
import {calc} from 'util.calc';
calc('20px', '/ 4'); // 5px
```

## Usage (toREM/toEM/unitToNumber)

```javascript
import {toREM, toEM} from 'util.calc';
toREM('80px', 16, 3); // '5rem'
toEM('80px', 16, 3);  // '5em'
```

Both functions take a pixel sizing value, the font size (default 16), and the maximum digits of precision (default 3).  This example rounds perfectly, so there is no decimal portion.  A simpler way to do the same thing would be:

```javascript
import {toREM, toEM} from 'util.calc';
toREM('80px'); // '5rem'
toEM('80px');  // '5em'
```

The next example shows the precision value when the font size does not divide evenly into the given pixel size:

```javascript
import {toREM, toEM} from 'util.calc';
toREM('79px'); // '4.938rem'
toEM('79px');  // '4.938em'
```

The last example converts a unit string into a number:

```javascript
import {unitToNumber} from 'util.calc';
unitToNumber("24px");     // 24
unitToNumber("1.5rem");   // 1.5
```
