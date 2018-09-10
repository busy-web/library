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
    static funcNumArgs(args: any[], argCount: number, equal?: boolean): Assert;
    /**
     * Assert that a value is of type string
     *
     * @chainable
     * @static
     * @public
     * @method isString
     * @param value {mixed} The value to test
     */
    static isString(value: any): Assert;
    /**
     * Assert that a value is of type number
     *
     * @chainable
     * @static
     * @public
     * @method isNumber
     * @param value {mixed} The value to test
     */
    static isNumber(value: any): Assert;
    /**
     * Assert that a value is of type int
     *
     * @chainable
     * @static
     * @public
     * @method isInteger
     * @param value {mixed} The value to test
     */
    static isInteger(value: any): Assert;
    /**
     * Assert that a value is of type boolean
     *
     * @chainable
     * @static
     * @public
     * @method isBoolean
     * @param value {mixed} The value to test
     */
    static isBoolean(value: any): Assert;
    /**
     * Assert that a value is of type array
     *
     * @chainable
     * @static
     * @public
     * @method isArray
     * @param value {mixed} The value to test
     */
    static isArray(value: any): Assert;
    /**
     * Assert that a value is of type object
     *
     * @chainable
     * @static
     * @public
     * @method isObject
     * @param value {mixed} The value to test
     */
    static isObject(value: any): Assert;
    /**
     * Assert that a value is a moment object
     *
     * @chainable
     * @static
     * @public
     * @method isMoment
     * @param value {mixed} The value to test
     */
    static isMoment(value: any): Assert;
    /**
     * Assert that a value is of type uuid
     *
     * @chainable
     * @static
     * @public
     * @method isUUID
     * @param value {mixed} The value to test
     */
    static isUUID(value: any): Assert;
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
    static test(message: string, test: boolean): Assert;
    /**
     * Throw an assertion
     *
     * @static
     * @public
     * @method throw
     * @param message {string} The message to throw.
     */
    static throw(message: string): Assert;
}
