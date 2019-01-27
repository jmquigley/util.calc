'use strict';

import {calc, toEM, toREM} from './index';

test('Test calc addition', () => {
	expect(calc('20px', '+5')).toBe('25px');
	expect(calc('20.5px', '+5')).toBe('25.5px');
});

test('Test calc subtraction', () => {
	expect(calc('20px', '-5')).toBe('15px');
	expect(calc('20.5px', '-5')).toBe('15.5px');
});

test('Test calc multiplication', () => {
	expect(calc('20px', '*2')).toBe('40px');
	expect(calc('20.25px', '*2')).toBe('40.5px');
});

test('Test calc division', () => {
	expect(calc('20px', '/4')).toBe('5px');
	expect(calc('20.8px', '/4')).toBe('5.2px');
});

test('Test more complex usages of calc function', () => {
	expect(calc('20px', '++2')).toBe('22px');

	expect(calc('20px', '*    1')).toBe('20px');
	expect(calc('20px', '*  -1')).toBe('-20px');

	expect(calc('20', '+ -2')).toBe('18');
	expect(calc('20px', '* 1.5')).toBe('30px');

	expect(calc('20abc', '/4')).toBe('5abc');
});

test('Test bad numbers given to the calc function', () => {
	expect(() => {
		calc('abc', '+x');
	}).toThrow();

	expect(() => {
		calc('20px', '++alksjdflaj');
	}).toThrow();
});

test('Test with a time value', () => {
	expect(calc('0.5s', '* 2')).toBe('1s');
	expect(calc('1.0s', '/ 2')).toBe('0.5s');
});

test('Test with a number value', () => {
	expect(calc(0, '- 1')).toBe('-1');
	expect(calc(-1, '- 1')).toBe('-2');
	expect(calc(1, '- 1')).toBe('0');
});

test('Test converting 80px to rem and em with font size 16', () => {
	expect(toREM('80px')).toBe('5rem');
	expect(toREM(80)).toBe('5rem');
	expect(toEM('80px')).toBe('5em');
	expect(toEM(80)).toBe('5em');
});

test('Test converting 79px to rem and em with font size 16', () => {
	expect(toREM('79px')).toBe('4.938rem');
	expect(toREM(79)).toBe('4.938rem');
	expect(toEM('79px')).toBe('4.938em');
	expect(toEM(79)).toBe('4.938em');
});

test('Test bad numbers given to the toEM functions', () => {
	expect(() => {
		toEM('abc');
	}).toThrow();
});

test('Test bad numbers given to the toREM functions', () => {
	expect(() => {
		toREM('abc');
	}).toThrow();
});
