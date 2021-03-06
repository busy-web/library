/**
 * @module Utils
 *
 */

/**
 * `defined type`
 *
 * Check if a value is not null, undefined or NaN
 * return true (defined)
 * return false (not defined)
 *
 * @public
 * @method definedT
 * @param value {mixed}
 * @return {boolean}
 */
export function definedT(value: any): boolean {
	return (value !== null && value !== undefined);
}

/**
 * `string type`
 *
 * Check if a value is definedT and is type string
 * return true (string)
 * return false (not string)
 *
 * @public
 * @method stringT
 * @param value {mixed}
 * @return {boolean}
 */
export function stringT(value: any): boolean {
	return definedT(value) && typeof value === 'string';
}

/**
 * `empty string type`
 *
 * Check if a value is definedT and is type string and is empty
 * return true (empty string)
 * return false (not empty string)
 *
 * @public
 * @method stringTE
 * @param value {mixed}
 * @return {boolean}
 */
export function stringTE(value: any): boolean {
	return stringT(value) && value.length === 0;
}

/**
 * `number type`
 *
 * Check if a value is definedT and is type number
 * return true (number)
 * return false (not number)
 *
 * @public
 * @method numberT
 * @param value {mixed}
 * @return {boolean}
 */
export function numberT(value: any): boolean {
	return definedT(value) && typeof value === 'number' && !isNaN(value);
}

/**
 * `array type`
 *
 * Check if a value is definedT and is type array
 * return true (array)
 * return false (not array)
 *
 * @public
 * @method arrayT
 * @param value {mixed}
 * @return {boolean}
 */
export function arrayT(value: any): boolean {
	return definedT(value) && Array.isArray(value);
}

/**
 * `empty array type`
 *
 * Check if a value is definedT and is type array and is empty
 * return true (empty array)
 * return false (not empty array)
 *
 * @public
 * @method arrayTE
 * @param value {mixed}
 * @return {boolean}
 */
export function arrayTE(value: any): boolean {
	return arrayT(value) && value.length === 0;
}

/**
 * `object type`
 *
 * Check if a value is definedT and is type object
 * return true (object)
 * return false (not object)
 *
 * @public
 * @method objectT
 * @param value {mixed}
 * @return {boolean}
 */
export function objectT(value: any): boolean {
	return definedT(value) && typeof value === 'object';
}

/**
 * `boolean type`
 *
 * Check if a value is definedT and is type boolean
 * return true (boolean)
 * return false (not boolean)
 *
 * @public
 * @method boolT
 * @param value {mixed}
 * @return {boolean}
 */
export function boolT(value: any): boolean {
	return definedT(value) && typeof value === 'boolean';
}


/**
 * `function type`
 *
 * Check if a value is definedT and is type function
 * return true (function)
 * return false (not function)
 *
 * @public
 * @method funcT
 * @param value {mixed}
 * @return {boolean}
 */
export function funcT(value: any): boolean {
	return definedT(value) && typeof value === 'function';
}
