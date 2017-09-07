'use strict';

import test from 'ava';
import {calc} from './index';

test('Test calc addition', t => {
	t.is(calc('20px', '+5'), '25px');
});

test('Test calc subtraction', t => {
	t.is(calc('20px', '-5'), '15px');
});

test('Test calc multiplication', t => {
	t.is(calc('20px', '*2'), '40px');
});

test('Test calc division', t => {
	t.is(calc('20px', '/4'), '5px');
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
