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
export declare function definedT(value: any): boolean;
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
export declare function stringT(value: any): boolean;
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
export declare function stringTE(value: any): boolean;
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
export declare function numberT(value: any): boolean;
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
export declare function arrayT(value: any): boolean;
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
export declare function arrayTE(value: any): boolean;
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
export declare function objectT(value: any): boolean;
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
export declare function boolT(value: any): boolean;
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
export declare function funcT(value: any): boolean;
