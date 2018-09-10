"use strict";
/**
 * @module Utils
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
function definedT(value) {
    return (value !== null && value !== undefined);
}
exports.definedT = definedT;
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
function stringT(value) {
    return definedT(value) && typeof value === 'string';
}
exports.stringT = stringT;
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
function stringTE(value) {
    return stringT(value) && value.length === 0;
}
exports.stringTE = stringTE;
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
function numberT(value) {
    return definedT(value) && typeof value === 'number' && !isNaN(value);
}
exports.numberT = numberT;
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
function arrayT(value) {
    return definedT(value) && Array.isArray(value);
}
exports.arrayT = arrayT;
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
function arrayTE(value) {
    return arrayT(value) && value.length === 0;
}
exports.arrayTE = arrayTE;
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
function objectT(value) {
    return definedT(value) && typeof value === 'object';
}
exports.objectT = objectT;
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
function boolT(value) {
    return definedT(value) && typeof value === 'boolean';
}
exports.boolT = boolT;
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
function funcT(value) {
    return definedT(value) && typeof value === 'function';
}
exports.funcT = funcT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSDs7Ozs7Ozs7Ozs7R0FXRztBQUNILGtCQUF5QixLQUFVO0lBQ2xDLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRkQsNEJBRUM7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILGlCQUF3QixLQUFVO0lBQ2pDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUNyRCxDQUFDO0FBRkQsMEJBRUM7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILGtCQUF5QixLQUFVO0lBQ2xDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCw0QkFFQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsaUJBQXdCLEtBQVU7SUFDakMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFGRCwwQkFFQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsZ0JBQXVCLEtBQVU7SUFDaEMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRkQsd0JBRUM7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILGlCQUF3QixLQUFVO0lBQ2pDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFGRCwwQkFFQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsaUJBQXdCLEtBQVU7SUFDakMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO0FBQ3JELENBQUM7QUFGRCwwQkFFQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsZUFBc0IsS0FBVTtJQUMvQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDdEQsQ0FBQztBQUZELHNCQUVDO0FBR0Q7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxlQUFzQixLQUFVO0lBQy9CLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztBQUN2RCxDQUFDO0FBRkQsc0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgVXRpbHNcbiAqXG4gKi9cblxuLyoqXG4gKiBgZGVmaW5lZCB0eXBlYFxuICpcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgbm90IG51bGwsIHVuZGVmaW5lZCBvciBOYU5cbiAqIHJldHVybiB0cnVlIChkZWZpbmVkKVxuICogcmV0dXJuIGZhbHNlIChub3QgZGVmaW5lZClcbiAqXG4gKiBAcHVibGljXG4gKiBAbWV0aG9kIGRlZmluZWRUXG4gKiBAcGFyYW0gdmFsdWUge21peGVkfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRUKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0cmV0dXJuICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKTtcbn1cblxuLyoqXG4gKiBgc3RyaW5nIHR5cGVgXG4gKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBkZWZpbmVkVCBhbmQgaXMgdHlwZSBzdHJpbmdcbiAqIHJldHVybiB0cnVlIChzdHJpbmcpXG4gKiByZXR1cm4gZmFsc2UgKG5vdCBzdHJpbmcpXG4gKlxuICogQHB1YmxpY1xuICogQG1ldGhvZCBzdHJpbmdUXG4gKiBAcGFyYW0gdmFsdWUge21peGVkfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gZGVmaW5lZFQodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogYGVtcHR5IHN0cmluZyB0eXBlYFxuICpcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgZGVmaW5lZFQgYW5kIGlzIHR5cGUgc3RyaW5nIGFuZCBpcyBlbXB0eVxuICogcmV0dXJuIHRydWUgKGVtcHR5IHN0cmluZylcbiAqIHJldHVybiBmYWxzZSAobm90IGVtcHR5IHN0cmluZylcbiAqXG4gKiBAcHVibGljXG4gKiBAbWV0aG9kIHN0cmluZ1RFXG4gKiBAcGFyYW0gdmFsdWUge21peGVkfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RFKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0cmV0dXJuIHN0cmluZ1QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBgbnVtYmVyIHR5cGVgXG4gKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBkZWZpbmVkVCBhbmQgaXMgdHlwZSBudW1iZXJcbiAqIHJldHVybiB0cnVlIChudW1iZXIpXG4gKiByZXR1cm4gZmFsc2UgKG5vdCBudW1iZXIpXG4gKlxuICogQHB1YmxpY1xuICogQG1ldGhvZCBudW1iZXJUXG4gKiBAcGFyYW0gdmFsdWUge21peGVkfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gZGVmaW5lZFQodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBgYXJyYXkgdHlwZWBcbiAqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGRlZmluZWRUIGFuZCBpcyB0eXBlIGFycmF5XG4gKiByZXR1cm4gdHJ1ZSAoYXJyYXkpXG4gKiByZXR1cm4gZmFsc2UgKG5vdCBhcnJheSlcbiAqXG4gKiBAcHVibGljXG4gKiBAbWV0aG9kIGFycmF5VFxuICogQHBhcmFtIHZhbHVlIHttaXhlZH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gZGVmaW5lZFQodmFsdWUpICYmIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuXG4vKipcbiAqIGBlbXB0eSBhcnJheSB0eXBlYFxuICpcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgZGVmaW5lZFQgYW5kIGlzIHR5cGUgYXJyYXkgYW5kIGlzIGVtcHR5XG4gKiByZXR1cm4gdHJ1ZSAoZW1wdHkgYXJyYXkpXG4gKiByZXR1cm4gZmFsc2UgKG5vdCBlbXB0eSBhcnJheSlcbiAqXG4gKiBAcHVibGljXG4gKiBAbWV0aG9kIGFycmF5VEVcbiAqIEBwYXJhbSB2YWx1ZSB7bWl4ZWR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlURSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdHJldHVybiBhcnJheVQodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBgb2JqZWN0IHR5cGVgXG4gKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBkZWZpbmVkVCBhbmQgaXMgdHlwZSBvYmplY3RcbiAqIHJldHVybiB0cnVlIChvYmplY3QpXG4gKiByZXR1cm4gZmFsc2UgKG5vdCBvYmplY3QpXG4gKlxuICogQHB1YmxpY1xuICogQG1ldGhvZCBvYmplY3RUXG4gKiBAcGFyYW0gdmFsdWUge21peGVkfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gZGVmaW5lZFQodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogYGJvb2xlYW4gdHlwZWBcbiAqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGRlZmluZWRUIGFuZCBpcyB0eXBlIGJvb2xlYW5cbiAqIHJldHVybiB0cnVlIChib29sZWFuKVxuICogcmV0dXJuIGZhbHNlIChub3QgYm9vbGVhbilcbiAqXG4gKiBAcHVibGljXG4gKiBAbWV0aG9kIGJvb2xUXG4gKiBAcGFyYW0gdmFsdWUge21peGVkfVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb2xUKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0cmV0dXJuIGRlZmluZWRUKHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuXG4vKipcbiAqIGBmdW5jdGlvbiB0eXBlYFxuICpcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgZGVmaW5lZFQgYW5kIGlzIHR5cGUgZnVuY3Rpb25cbiAqIHJldHVybiB0cnVlIChmdW5jdGlvbilcbiAqIHJldHVybiBmYWxzZSAobm90IGZ1bmN0aW9uKVxuICpcbiAqIEBwdWJsaWNcbiAqIEBtZXRob2QgZnVuY1RcbiAqIEBwYXJhbSB2YWx1ZSB7bWl4ZWR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnVuY1QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gZGVmaW5lZFQodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbiJdfQ==