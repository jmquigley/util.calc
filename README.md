# util.calc

> Takes an HTML sizing string and computes a new value

[![Build Status](https://travis-ci.org/jmquigley/util.calc.svg?branch=master)](https://travis-ci.org/jmquigley/util.calc)
[![tslint code style](https://img.shields.io/badge/code_style-TSlint-5ed9c7.svg)](https://palantir.github.io/tslint/)
[![Test Runner](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.calc.svg)](https://www.npmjs.com/package/util.calc)
[![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.calc/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.calc?branch=master)


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
Takes an HTML width/size string and performs a calcuation against it.  This would be used to dynamically size an attribute for inline styles in a React component (e.g.).  It uses four basic operations (addition, subtraction multiplication, and division).

e.g.

taking "20px" and doubling its size:

```javascxript
calc('20px', '* 2'); // '40px'
```

## Usage
This module exposes a single module named [calc](docs/index.md).  It will take an HTML size string or a number and perform one of four basic operations:


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
