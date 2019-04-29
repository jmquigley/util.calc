"use strict";

import {regexNumber} from "util.constants";

interface ParseData {
	val: number;
	ext: string;
}

/*
 * Takes a string html sizing number (like `5px`) and breaks it into its
 * number and extension.  It then returns the two parts as part of an
 * object.
 * @param inp {string} - the input string value to parse
 * @return an object that contains the extension (px, rem, etc) and the
 * number value associated with that extension.
 */
function parseNumber(inp: string): ParseData {
	const out: ParseData = {
		ext: "",
		val: 0
	};

	const match: any = inp.match(regexNumber);
	if (match) {
		out.val = Number(match[0]);
		out.ext = inp.slice(match[0].length);
	}

	return out;
}

/*
 * Takes the input number and checks that it conforms to a valid number format
 * It will throw exceptions based on the errors encoutered with the validation
 * process.
 * @param inp {string} - the input string that will be validated
 * @param oper {string} - the operation that will be applied to the string
 */
function validate(inp: string, oper: string = ""): void {
	if (inp) {
		// The input n must start with a number
		if (!/^[+-\d]+/.test(inp.trim())) {
			throw new Error(
				`Invalid number string given to calc (${inp}).  Must begin with number`
			);
		}
	} else {
		throw new Error("Invalid input string given (null)");
	}

	//
	// Matches the given operation.  If this regex fails, the function will
	// throw an exception.  Examples include:
	//
	// '* 1.234'
	// '+ -.234
	// '- 12345'

	if (oper) {
		if (!/[\+\-\*\/]{1}\s*[+-]*\d*\.*\d+$/.test(oper.trim())) {
			throw new Error(
				`Invalid operation string given to calc (${oper}).`
			);
		}
	}
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
 * @param inp {string | number} - the value that will be modified.  This is a
 * number or a string representing a number.
 * @param oper {string} - the operation that will be applied to the text number
 * @return a new string after the simple math operation has been applied.
 */
export function calc(inp: string | number, oper: string): string {
	const inpType: string = typeof inp;

	if (!["string", "number"].includes(inpType)) {
		throw new Error(`Invalid input type given to calc (${inpType})`);
	}

	let input: string = "";
	if (inpType === "number") {
		input = inp.toString();
	} else {
		input = inp as string;
	}

	if (!oper || typeof oper !== "string") {
		return input;
	}

	validate(input, oper);

	const {val, ext} = parseNumber(input);

	const delta = Number(oper.slice(1));
	let result: number;

	switch (oper[0]) {
		case "+":
			result = val + delta;
			break;
		case "-":
			result = val - delta;
			break;
		case "*":
			result = val * delta;
			break;
		case "/":
			result = val / delta;
			break;
	}

	return `${result}${ext}`;
}

/*
 * Converts an input sizing value from "px" to its equivalent "rem" or "em" value
 * depending on the given input extension.  This is done by dividing the input
 * number size in pixels by the base font size given (for "normal" it is 16px).
 * @param inp {string | number} - the input value to convert
 * @param ext {string} - the new extension for the converted value
 * @param fontSize {number} - the current font size in pixels (16 for `16px`, etc)
 * @param precision {number} - the number of decimals retained in the conversion
 * @return a new string representing the converted size in either rem or em
 * depending on the `ext` parameter.
 */
function convert(
	inp: string | number,
	ext: string,
	fontSize: number,
	precision: number
) {
	if (typeof inp === "number") {
		inp = inp.toString();
	}

	validate(inp);
	const {val} = parseNumber(inp);

	return `${parseFloat(
		Math.abs(val / fontSize).toFixed(Math.abs(precision))
	)}${ext}`;
}

/**
 * Takes an input sizing value as a px value and converts it to an
 * equivalent "em" value.  It divides the size of the input value
 * by the given font size.
 * @param inp {string | number} - the value that will be modified.  This is a
 * number or a string representing a number as a "##px" value.
 * @param fontSize=16 {number} - the pixel height of the font used in this
 * calculation.
 * @param precision=3 {number} - the maximum number of decimal places returned
 * by the calculation
 * @return the new "em" conversion value.
 */
export function toEM(
	inp: string | number,
	fontSize: number = 16,
	precision: number = 3
): string {
	return convert(inp, "em", fontSize, precision);
}

/**
 * Takes an input sizing value as a px value and converts it to an
 * equivalent "rem" value.  It divides the size of the input value
 * by the given font size.
 * @param inp {string | number} the value that will be modified.  This is a number
 * or a string representing a number as a "##px" value.
 * @param fontSize=16 {number} - the pixel height of the font used in this
 * calculation.
 * @param precision=3 {number} - the maximum number of decimal places returned
 * by the calculation
 * @return the new "rem" conversion value.
 */
export function toREM(
	inp: string | number,
	fontSize: number = 16,
	precision: number = 3
): string {
	return convert(inp, "rem", fontSize, precision);
}

export default calc;
