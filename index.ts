'use strict';

const debug = require('debug')('util.calc');
const pkg = require('./package.json');

import {regexNumber} from 'util.constants';

/**
 * Takes an HTML width/size string and performs a calcuation against it.  This
 * would be used to dynamically size an attribute for inline styles in a
 * React component (e.g.).  It uses four basic operations (addition, subtraction
 * multiplication, and division).
 *
 * e.g.
 *
 * taking "20px" and doubling its size => calc('20px', '* 2'); // '40px'
 *
 * @param inp {string | number} the value that will be modified.  This is a number
 * or a string representing a number.
 * @param oper {string} the operation that will be applied to the text number
 * @return a new string after the simple math operation has been applied.
 */
export function calc(inp: string | number, oper: string): string {

	if (typeof inp === 'number') {
		inp = inp.toString();
	}

	// The input n must start with a number
	if (!/^[+-\d]+/.test(inp.trim())) {
		throw new Error(`Invalid number string given to calc (${inp}).  Must begin with number`);
	}

	//
	// Matches the given operation.  If this regex fails, the function will
	// throw an exception.  Examples include:
	//
	// '* 1.234'
	// '+ -.234
	// '- 12345'

	if (!/[\+\-\*\/]{1}\s*[+-]*\d*\.*\d+$/.test(oper.trim())) {
		throw new Error(`Invalid operation string given to calc (${oper}).`);
	}

	let ext: string = '';
	let val: number = 0;
	const match: any = inp.match(regexNumber);
	if (match) {
		val = Number(match[0]);
		ext = inp.slice(match[0].length);
	}
	const delta = Number(oper.slice(1));

	let result: number;
	switch (oper[0]) {
		case '+': result = val + delta; break;
		case '-': result = val - delta; break;
		case '*': result = val * delta; break;
		case '/': result = val / delta; break;
	}

	/* istanbul ignore if  */
	if (pkg.debug) {
		debug(`val: ${val}, ext: ${ext}, oper: ${oper}, delta: ${delta}, result: ${result}`);
	}

	return(`${result}${ext}`);
}
