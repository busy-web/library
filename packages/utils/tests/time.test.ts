/**
 * @module Tests
 *
 */
import moment from 'moment';
import Time from '@src/time';

test('create date object', () => {
	const time = Time.date();
	expect(time).toBe(moment.constructor);
});
