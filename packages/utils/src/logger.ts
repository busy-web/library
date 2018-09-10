/**
 * @module Utils
 *
 */
import noop from './noop';

declare var window: {
	NODE_ENV: string;
	console: {
		[name: string]: (...args: any[]) => void;
	}
};

if (!window.NODE_ENV) {
	window.NODE_ENV = 'development';
}

const callMethod = (name: string, ...args: any[]) => {
	if (window.NODE_ENV === 'production') {
		return noop();
	}

	if (window.console && window.console[name]) {
		window.console[name].apply(window.console, ...args);
	}
};

export const log = (...args: any[]) => (
	callMethod('log', args)
);

export const assert = (message: string, test: boolean) => {
	__assert(typeof message === 'string', 'assert requires a string value `message` as the first param');
	__assert(typeof test === 'boolean', 'assert requires a boolean value `test` as the second param');

	__assert(test, message)
};

const __assert = (test: any, message: any) => (
	callMethod('assert', [ test, message ])
);

export const info = (...args: any[]) => (
	callMethod('info', args)
);

export const warn = (...args: any[]) => (
	callMethod('warn', args)
);

export const error = (...args: any[]) => (
	callMethod('error', args)
);
