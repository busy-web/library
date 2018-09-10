/**
 * @module Utils
 *
 */
import { assert } from './logger';
import { isValidUUID } from './uuid';
import { definedT, stringT, boolT, funcT, arrayT, objectT, numberT } from './types';

export default class Assert {
	/**
	 * Asserts that a functions arguments must be of a certain length
	 *
	 * @chainable
	 * @public
	 * @static
	 * @method funcNumArgs
	 * @param args {array} This is the `arguments` keyword from the calling function
	 * @param argCount {number} The number of args to test for
	 * @param [equal=false] {boolean} false if at most this many args and true if exactly this many args.
	 */
	public static funcNumArgs(args: any[], argCount: number, equal: boolean = false): Assert {
		if (equal) {
			assert(`Function arguments must be equal to ${argCount}`, args.length === argCount);
		} else {
			assert(`Function arguments must be less then or equal to ${argCount}`, args.length <= argCount);
		}
		return this;
	}

	/**
	 * Assert that a value is of type string
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isString
	 * @param value {mixed} The value to test
	 */
	public static isString(value: any): Assert {
		assert(`Type error [${typeof value}] expected a string`, stringT(value));
		return this;
	}

	/**
	 * Assert that a value is of type number
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isNumber
	 * @param value {mixed} The value to test
	 */
	public static isNumber(value: any): Assert {
		assert(`Type error [${typeof value}] expected a number`, numberT(value));
		return this;
	}

	/**
	 * Assert that a value is of type int
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isInteger
	 * @param value {mixed} The value to test
	 */
	public static isInteger(value: any): Assert {
		const stringVal: string = value.toString();
		const numVal: number = parseInt(stringVal, 10);

		assert(`Type error [${typeof value}] expected an integer`, numberT(value) &&  numVal === value);
		return this;
	}

	/**
	 * Assert that a value is of type boolean
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isBoolean
	 * @param value {mixed} The value to test
	 */
	public static isBoolean(value: any): Assert {
		assert(`Type error [${typeof value}] expected a boolean`, boolT(value));
		return this;
	}

	/**
	 * Assert that a value is of type array
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isArray
	 * @param value {mixed} The value to test
	 */
	public static isArray(value: any): Assert {
		assert(`Type error [${typeof value}] expected an array`, arrayT(value));
		return this;
	}

	/**
	 * Assert that a value is of type object
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isObject
	 * @param value {mixed} The value to test
	 */
	public static isObject(value: any): Assert {
		assert(`Type error [${typeof value}] expected an object`, objectT(value));
		return this;
	}

	/**
	 * Assert that a value is a moment object
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isMoment
	 * @param value {mixed} The value to test
	 */
	public static isMoment(value: any): Assert {
		assert(`Type error [${value.constructor}] expected a Moment`, definedT(value) && funcT(value.unix));
		return this;
	}

	/**
	 * Assert that a value is of type uuid
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isUUID
	 * @param value {mixed} The value to test
	 */
	public static isUUID(value: any): Assert {
		assert(`Type error [${value}] expected a UUID`, stringT(value) && isValidUUID(value));
		return this;
	}

	/**
	 * Assert that a custom test
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method test
	 * @param message {string} the message to display if the test fails
	 * @param test {boolean} A test that eveluates to true or false
	 */
	public static test(message: string, test: boolean): Assert {
		assert(message, test);
		return this;
	}

	/**
	 * Throw an assertion
	 *
	 * @static
	 * @public
	 * @method throw
	 * @param message {string} The message to throw.
	 */
	public static throw(message: string): Assert {
		assert(message, false);
		return this;
	}
}
