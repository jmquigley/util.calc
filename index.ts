'use strict';

import {nil, regexIndexOf} from 'util.toolbox';

const pkg = require('./package.json');

let debug: any = nil;
if (pkg.debug) {
	debug = require('debug')('calc');
}

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
 * @param text {string} the value that will be modified (a number "string")
 * @param oper {string} the operation that will be applied to the text number
 * @return a new string after the simple math operation has been applied.
 */
export function calc(text: string, oper: string): string {

	// The input text must start with a number
	if (!/^\d+/.test(text.trim())) {
		throw new Error(`Invalid number string given to calc (${text}).  Must begin with number`);
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
	let val: number;
	let idx = regexIndexOf(text, /\D/);
	if (idx !== -1) {
		ext = text.slice(idx);
	} else {
		idx = text.length;
	}
	val = Number(text.slice(0, idx));
	const delta = Number(oper.slice(1));

	let result: number;
	switch (oper[0]) {
		case '+': result = val + delta; break;
		case '-': result = val - delta; break;
		case '*': result = val * delta; break;
		case '/': result = val / delta; break;
	}

	debug(`val: ${val}, ext: ${ext}, oper: ${oper}, delta: ${delta}, result: ${result}`);

	return(`${result}${ext}`);
}
