'use strict';

import test from 'ava';
import {calc} from './index';

test('Test calc addition', t => {
	t.is(calc('20px', '+5'), '25px');
	t.is(calc('20.5px', '+5'), '25.5px');
});

test('Test calc subtraction', t => {
	t.is(calc('20px', '-5'), '15px');
	t.is(calc('20.5px', '-5'), '15.5px');
});

test('Test calc multiplication', t => {
	t.is(calc('20px', '*2'), '40px');
	t.is(calc('20.25px', '*2'), '40.5px');
});

test('Test calc division', t => {
	t.is(calc('20px', '/4'), '5px');
	t.is(calc('20.8px', '/4'), '5.2px');
});

test('Test more complex usages of calc function', t => {
	t.is(calc('20px', '++2'), '22px');

	t.is(calc('20px', '*    1'), '20px');
	t.is(calc('20px', '*  -1'), '-20px');

	t.is(calc('20', '+ -2'), '18');
	t.is(calc('20px', '* 1.5'), '30px');

	t.is(calc('20abc', '/4'), '5abc');
});

test('Test bad numbers given to the calc function', t => {
	t.throws(() => {
		calc('abc', '+x');
	});

	t.throws(() => {
		calc('20px', '++alksjdflaj');
	});
});

test('Test with a time value', t => {
	t.is(calc('0.5s', '* 2'), '1s');
	t.is(calc('1.0s', '/ 2'), '0.5s');
});

test('Test with a number value', t => {
	t.is(calc(0, '- 1'), '-1');
	t.is(calc(-1, '- 1'), '-2');
	t.is(calc(1, '- 1'), '0');
});
