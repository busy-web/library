"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module Utils
 *
 */
const logger_1 = require("./logger");
const uuid_1 = require("./uuid");
const types_1 = require("./types");
class Assert {
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
    static funcNumArgs(args, argCount, equal = false) {
        if (equal) {
            logger_1.assert(`Function arguments must be equal to ${argCount}`, args.length === argCount);
        }
        else {
            logger_1.assert(`Function arguments must be less then or equal to ${argCount}`, args.length <= argCount);
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
    static isString(value) {
        logger_1.assert(`Type error [${typeof value}] expected a string`, types_1.stringT(value));
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
    static isNumber(value) {
        logger_1.assert(`Type error [${typeof value}] expected a number`, types_1.numberT(value));
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
    static isInteger(value) {
        const stringVal = value.toString();
        const numVal = parseInt(stringVal, 10);
        logger_1.assert(`Type error [${typeof value}] expected an integer`, types_1.numberT(value) && numVal === value);
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
    static isBoolean(value) {
        logger_1.assert(`Type error [${typeof value}] expected a boolean`, types_1.boolT(value));
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
    static isArray(value) {
        logger_1.assert(`Type error [${typeof value}] expected an array`, types_1.arrayT(value));
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
    static isObject(value) {
        logger_1.assert(`Type error [${typeof value}] expected an object`, types_1.objectT(value));
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
    static isMoment(value) {
        logger_1.assert(`Type error [${value.constructor}] expected a Moment`, types_1.definedT(value) && types_1.funcT(value.unix));
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
    static isUUID(value) {
        logger_1.assert(`Type error [${value}] expected a UUID`, types_1.stringT(value) && uuid_1.isValidUUID(value));
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
    static test(message, test) {
        logger_1.assert(message, test);
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
    static throw(message) {
        logger_1.assert(message, false);
        return this;
    }
}
exports.default = Assert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Fzc2VydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7R0FHRztBQUNILHFDQUFrQztBQUNsQyxpQ0FBcUM7QUFDckMsbUNBQW9GO0FBRXBGO0lBQ0M7Ozs7Ozs7Ozs7T0FVRztJQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBVyxFQUFFLFFBQWdCLEVBQUUsUUFBaUIsS0FBSztRQUM5RSxJQUFJLEtBQUssRUFBRTtZQUNWLGVBQU0sQ0FBQyx1Q0FBdUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ04sZUFBTSxDQUFDLG9EQUFvRCxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVU7UUFDaEMsZUFBTSxDQUFDLGVBQWUsT0FBTyxLQUFLLHFCQUFxQixFQUFFLGVBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFVO1FBQ2hDLGVBQU0sQ0FBQyxlQUFlLE9BQU8sS0FBSyxxQkFBcUIsRUFBRSxlQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBVTtRQUNqQyxNQUFNLFNBQVMsR0FBVyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxNQUFNLEdBQVcsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUvQyxlQUFNLENBQUMsZUFBZSxPQUFPLEtBQUssdUJBQXVCLEVBQUUsZUFBTyxDQUFDLEtBQUssQ0FBQyxJQUFLLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQztRQUNoRyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBVTtRQUNqQyxlQUFNLENBQUMsZUFBZSxPQUFPLEtBQUssc0JBQXNCLEVBQUUsYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVU7UUFDL0IsZUFBTSxDQUFDLGVBQWUsT0FBTyxLQUFLLHFCQUFxQixFQUFFLGNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFVO1FBQ2hDLGVBQU0sQ0FBQyxlQUFlLE9BQU8sS0FBSyxzQkFBc0IsRUFBRSxlQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVTtRQUNoQyxlQUFNLENBQUMsZUFBZSxLQUFLLENBQUMsV0FBVyxxQkFBcUIsRUFBRSxnQkFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBVTtRQUM5QixlQUFNLENBQUMsZUFBZSxLQUFLLG1CQUFtQixFQUFFLGVBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxrQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEYsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFlLEVBQUUsSUFBYTtRQUNoRCxlQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQWU7UUFDbEMsZUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FDRDtBQW5LRCx5QkFtS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgVXRpbHNcbiAqXG4gKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGlzVmFsaWRVVUlEIH0gZnJvbSAnLi91dWlkJztcbmltcG9ydCB7IGRlZmluZWRULCBzdHJpbmdULCBib29sVCwgZnVuY1QsIGFycmF5VCwgb2JqZWN0VCwgbnVtYmVyVCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NlcnQge1xuXHQvKipcblx0ICogQXNzZXJ0cyB0aGF0IGEgZnVuY3Rpb25zIGFyZ3VtZW50cyBtdXN0IGJlIG9mIGEgY2VydGFpbiBsZW5ndGhcblx0ICpcblx0ICogQGNoYWluYWJsZVxuXHQgKiBAcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQG1ldGhvZCBmdW5jTnVtQXJnc1xuXHQgKiBAcGFyYW0gYXJncyB7YXJyYXl9IFRoaXMgaXMgdGhlIGBhcmd1bWVudHNgIGtleXdvcmQgZnJvbSB0aGUgY2FsbGluZyBmdW5jdGlvblxuXHQgKiBAcGFyYW0gYXJnQ291bnQge251bWJlcn0gVGhlIG51bWJlciBvZiBhcmdzIHRvIHRlc3QgZm9yXG5cdCAqIEBwYXJhbSBbZXF1YWw9ZmFsc2VdIHtib29sZWFufSBmYWxzZSBpZiBhdCBtb3N0IHRoaXMgbWFueSBhcmdzIGFuZCB0cnVlIGlmIGV4YWN0bHkgdGhpcyBtYW55IGFyZ3MuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIGZ1bmNOdW1BcmdzKGFyZ3M6IGFueVtdLCBhcmdDb3VudDogbnVtYmVyLCBlcXVhbDogYm9vbGVhbiA9IGZhbHNlKTogQXNzZXJ0IHtcblx0XHRpZiAoZXF1YWwpIHtcblx0XHRcdGFzc2VydChgRnVuY3Rpb24gYXJndW1lbnRzIG11c3QgYmUgZXF1YWwgdG8gJHthcmdDb3VudH1gLCBhcmdzLmxlbmd0aCA9PT0gYXJnQ291bnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhc3NlcnQoYEZ1bmN0aW9uIGFyZ3VtZW50cyBtdXN0IGJlIGxlc3MgdGhlbiBvciBlcXVhbCB0byAke2FyZ0NvdW50fWAsIGFyZ3MubGVuZ3RoIDw9IGFyZ0NvdW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQXNzZXJ0IHRoYXQgYSB2YWx1ZSBpcyBvZiB0eXBlIHN0cmluZ1xuXHQgKlxuXHQgKiBAY2hhaW5hYmxlXG5cdCAqIEBzdGF0aWNcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGlzU3RyaW5nXG5cdCAqIEBwYXJhbSB2YWx1ZSB7bWl4ZWR9IFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIGlzU3RyaW5nKHZhbHVlOiBhbnkpOiBBc3NlcnQge1xuXHRcdGFzc2VydChgVHlwZSBlcnJvciBbJHt0eXBlb2YgdmFsdWV9XSBleHBlY3RlZCBhIHN0cmluZ2AsIHN0cmluZ1QodmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCBhIHZhbHVlIGlzIG9mIHR5cGUgbnVtYmVyXG5cdCAqXG5cdCAqIEBjaGFpbmFibGVcblx0ICogQHN0YXRpY1xuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2QgaXNOdW1iZXJcblx0ICogQHBhcmFtIHZhbHVlIHttaXhlZH0gVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgaXNOdW1iZXIodmFsdWU6IGFueSk6IEFzc2VydCB7XG5cdFx0YXNzZXJ0KGBUeXBlIGVycm9yIFske3R5cGVvZiB2YWx1ZX1dIGV4cGVjdGVkIGEgbnVtYmVyYCwgbnVtYmVyVCh2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydCB0aGF0IGEgdmFsdWUgaXMgb2YgdHlwZSBpbnRcblx0ICpcblx0ICogQGNoYWluYWJsZVxuXHQgKiBAc3RhdGljXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBpc0ludGVnZXJcblx0ICogQHBhcmFtIHZhbHVlIHttaXhlZH0gVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlOiBhbnkpOiBBc3NlcnQge1xuXHRcdGNvbnN0IHN0cmluZ1ZhbDogc3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcblx0XHRjb25zdCBudW1WYWw6IG51bWJlciA9IHBhcnNlSW50KHN0cmluZ1ZhbCwgMTApO1xuXG5cdFx0YXNzZXJ0KGBUeXBlIGVycm9yIFske3R5cGVvZiB2YWx1ZX1dIGV4cGVjdGVkIGFuIGludGVnZXJgLCBudW1iZXJUKHZhbHVlKSAmJiAgbnVtVmFsID09PSB2YWx1ZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQXNzZXJ0IHRoYXQgYSB2YWx1ZSBpcyBvZiB0eXBlIGJvb2xlYW5cblx0ICpcblx0ICogQGNoYWluYWJsZVxuXHQgKiBAc3RhdGljXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBpc0Jvb2xlYW5cblx0ICogQHBhcmFtIHZhbHVlIHttaXhlZH0gVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgaXNCb29sZWFuKHZhbHVlOiBhbnkpOiBBc3NlcnQge1xuXHRcdGFzc2VydChgVHlwZSBlcnJvciBbJHt0eXBlb2YgdmFsdWV9XSBleHBlY3RlZCBhIGJvb2xlYW5gLCBib29sVCh2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydCB0aGF0IGEgdmFsdWUgaXMgb2YgdHlwZSBhcnJheVxuXHQgKlxuXHQgKiBAY2hhaW5hYmxlXG5cdCAqIEBzdGF0aWNcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGlzQXJyYXlcblx0ICogQHBhcmFtIHZhbHVlIHttaXhlZH0gVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgaXNBcnJheSh2YWx1ZTogYW55KTogQXNzZXJ0IHtcblx0XHRhc3NlcnQoYFR5cGUgZXJyb3IgWyR7dHlwZW9mIHZhbHVlfV0gZXhwZWN0ZWQgYW4gYXJyYXlgLCBhcnJheVQodmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCBhIHZhbHVlIGlzIG9mIHR5cGUgb2JqZWN0XG5cdCAqXG5cdCAqIEBjaGFpbmFibGVcblx0ICogQHN0YXRpY1xuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2QgaXNPYmplY3Rcblx0ICogQHBhcmFtIHZhbHVlIHttaXhlZH0gVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgaXNPYmplY3QodmFsdWU6IGFueSk6IEFzc2VydCB7XG5cdFx0YXNzZXJ0KGBUeXBlIGVycm9yIFske3R5cGVvZiB2YWx1ZX1dIGV4cGVjdGVkIGFuIG9iamVjdGAsIG9iamVjdFQodmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCBhIHZhbHVlIGlzIGEgbW9tZW50IG9iamVjdFxuXHQgKlxuXHQgKiBAY2hhaW5hYmxlXG5cdCAqIEBzdGF0aWNcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGlzTW9tZW50XG5cdCAqIEBwYXJhbSB2YWx1ZSB7bWl4ZWR9IFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIGlzTW9tZW50KHZhbHVlOiBhbnkpOiBBc3NlcnQge1xuXHRcdGFzc2VydChgVHlwZSBlcnJvciBbJHt2YWx1ZS5jb25zdHJ1Y3Rvcn1dIGV4cGVjdGVkIGEgTW9tZW50YCwgZGVmaW5lZFQodmFsdWUpICYmIGZ1bmNUKHZhbHVlLnVuaXgpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCBhIHZhbHVlIGlzIG9mIHR5cGUgdXVpZFxuXHQgKlxuXHQgKiBAY2hhaW5hYmxlXG5cdCAqIEBzdGF0aWNcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGlzVVVJRFxuXHQgKiBAcGFyYW0gdmFsdWUge21peGVkfSBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBpc1VVSUQodmFsdWU6IGFueSk6IEFzc2VydCB7XG5cdFx0YXNzZXJ0KGBUeXBlIGVycm9yIFske3ZhbHVlfV0gZXhwZWN0ZWQgYSBVVUlEYCwgc3RyaW5nVCh2YWx1ZSkgJiYgaXNWYWxpZFVVSUQodmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCBhIGN1c3RvbSB0ZXN0XG5cdCAqXG5cdCAqIEBjaGFpbmFibGVcblx0ICogQHN0YXRpY1xuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2QgdGVzdFxuXHQgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSB0aGUgbWVzc2FnZSB0byBkaXNwbGF5IGlmIHRoZSB0ZXN0IGZhaWxzXG5cdCAqIEBwYXJhbSB0ZXN0IHtib29sZWFufSBBIHRlc3QgdGhhdCBldmVsdWF0ZXMgdG8gdHJ1ZSBvciBmYWxzZVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyB0ZXN0KG1lc3NhZ2U6IHN0cmluZywgdGVzdDogYm9vbGVhbik6IEFzc2VydCB7XG5cdFx0YXNzZXJ0KG1lc3NhZ2UsIHRlc3QpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRocm93IGFuIGFzc2VydGlvblxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCB0aHJvd1xuXHQgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBUaGUgbWVzc2FnZSB0byB0aHJvdy5cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgdGhyb3cobWVzc2FnZTogc3RyaW5nKTogQXNzZXJ0IHtcblx0XHRhc3NlcnQobWVzc2FnZSwgZmFsc2UpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iXX0=