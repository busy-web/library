(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @module Utils
     *
     */
    const LOCAL_STORAGE = window.localStorage;
    /**
     * `Util/LocalStorage`
     *
     * @class LocalStorage
     * @namespace Utils
     * @extends Ember.Object
     */
    class LocalStorage {
        /**
         * Add a new value to the local storage
         *
         * @public
         * @method setProperty
         * @param {sting} key The key to store the value with.
         * @param {mixed} value Some value to store.
         * @returns {this}
         */
        static setProperty(key, value) {
            LOCAL_STORAGE.setItem(key, value);
            return this;
        }
        /**
         * Gets a value from the local storage
         *
         * @public
         * @method getProperty
         * @param {sting} key The key to store the value with.
         * @returns {mixed}
         */
        static getProperty(key) {
            return LOCAL_STORAGE.getItem(key);
        }
        /**
         * Gets a value from the local storage and if the value is
         * null or undefined the defaultValue passed in will be returned.
         *
         * @public
         * @method getWithDefault
         * @param {sting} key The key to store the value with.
         * @param {mixed} defaultValue A default value to return if the value is null or undefined.
         * @returns {mixed}
         */
        static getWithDefault(key, defaultValue) {
            if (!this.hasValue(key)) {
                return defaultValue;
            }
            return this.getProperty(key);
        }
        /**
         * Check to see if the key provided has a value in local storage.
         *
         * @public
         * @method hasValue
         * @param {sting} key The key to store the value with.
         * @returns {boolean}
         */
        static hasValue(key) {
            const prop = this.getProperty(key);
            return prop !== undefined && prop !== null;
        }
        /**
         * Removes a value from the local storage
         *
         * @public
         * @method remove
         * @param {sting} key The key to store the value with.
         * @returns {this}
         */
        static remove(key) {
            LOCAL_STORAGE.removeItem(key);
            return this;
        }
    }
    exports.default = LocalStorage;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbC1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7OztPQUdHO0lBQ0gsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUUxQzs7Ozs7O09BTUc7SUFDSDtRQUNDOzs7Ozs7OztXQVFHO1FBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtZQUNoRCxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXO1lBQ3BDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0ksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFXLEVBQUUsWUFBaUI7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sWUFBWSxDQUFDO2FBQ3BCO1lBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFXO1lBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUM7UUFDNUMsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7UUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVc7WUFDL0IsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7S0FDRDtJQXJFRCwrQkFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgVXRpbHNcbiAqXG4gKi9cbmNvbnN0IExPQ0FMX1NUT1JBR0UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXG4vKipcbiAqIGBVdGlsL0xvY2FsU3RvcmFnZWBcbiAqXG4gKiBAY2xhc3MgTG9jYWxTdG9yYWdlXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAZXh0ZW5kcyBFbWJlci5PYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcblx0LyoqXG5cdCAqIEFkZCBhIG5ldyB2YWx1ZSB0byB0aGUgbG9jYWwgc3RvcmFnZVxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2Qgc2V0UHJvcGVydHlcblx0ICogQHBhcmFtIHtzdGluZ30ga2V5IFRoZSBrZXkgdG8gc3RvcmUgdGhlIHZhbHVlIHdpdGguXG5cdCAqIEBwYXJhbSB7bWl4ZWR9IHZhbHVlIFNvbWUgdmFsdWUgdG8gc3RvcmUuXG5cdCAqIEByZXR1cm5zIHt0aGlzfVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBzZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IExvY2FsU3RvcmFnZSB7XG5cdFx0TE9DQUxfU1RPUkFHRS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSB2YWx1ZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBnZXRQcm9wZXJ0eVxuXHQgKiBAcGFyYW0ge3N0aW5nfSBrZXkgVGhlIGtleSB0byBzdG9yZSB0aGUgdmFsdWUgd2l0aC5cblx0ICogQHJldHVybnMge21peGVkfVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eShrZXk6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIExPQ0FMX1NUT1JBR0UuZ2V0SXRlbShrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSB2YWx1ZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCBpZiB0aGUgdmFsdWUgaXNcblx0ICogbnVsbCBvciB1bmRlZmluZWQgdGhlIGRlZmF1bHRWYWx1ZSBwYXNzZWQgaW4gd2lsbCBiZSByZXR1cm5lZC5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGdldFdpdGhEZWZhdWx0XG5cdCAqIEBwYXJhbSB7c3Rpbmd9IGtleSBUaGUga2V5IHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoLlxuXHQgKiBAcGFyYW0ge21peGVkfSBkZWZhdWx0VmFsdWUgQSBkZWZhdWx0IHZhbHVlIHRvIHJldHVybiBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEByZXR1cm5zIHttaXhlZH1cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgZ2V0V2l0aERlZmF1bHQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogYW55IHtcblx0XHRpZiAoIXRoaXMuaGFzVmFsdWUoa2V5KSkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoa2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayB0byBzZWUgaWYgdGhlIGtleSBwcm92aWRlZCBoYXMgYSB2YWx1ZSBpbiBsb2NhbCBzdG9yYWdlLlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2QgaGFzVmFsdWVcblx0ICogQHBhcmFtIHtzdGluZ30ga2V5IFRoZSBrZXkgdG8gc3RvcmUgdGhlIHZhbHVlIHdpdGguXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBoYXNWYWx1ZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHByb3AgPSB0aGlzLmdldFByb3BlcnR5KGtleSk7XG5cdFx0cmV0dXJuIHByb3AgIT09IHVuZGVmaW5lZCAmJiBwcm9wICE9PSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgYSB2YWx1ZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCByZW1vdmVcblx0ICogQHBhcmFtIHtzdGluZ30ga2V5IFRoZSBrZXkgdG8gc3RvcmUgdGhlIHZhbHVlIHdpdGguXG5cdCAqIEByZXR1cm5zIHt0aGlzfVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyByZW1vdmUoa2V5OiBzdHJpbmcpOiBMb2NhbFN0b3JhZ2Uge1xuXHRcdExPQ0FMX1NUT1JBR0UucmVtb3ZlSXRlbShrZXkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbiJdfQ==