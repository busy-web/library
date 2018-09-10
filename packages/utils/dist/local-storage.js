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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbC1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztHQUdHO0FBQ0gsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUUxQzs7Ozs7O0dBTUc7QUFDSDtJQUNDOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUNoRCxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXO1FBQ3BDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFXLEVBQUUsWUFBaUI7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxZQUFZLENBQUM7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVc7UUFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBVztRQUMvQixhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNEO0FBckVELCtCQXFFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBVdGlsc1xuICpcbiAqL1xuY29uc3QgTE9DQUxfU1RPUkFHRSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbi8qKlxuICogYFV0aWwvTG9jYWxTdG9yYWdlYFxuICpcbiAqIEBjbGFzcyBMb2NhbFN0b3JhZ2VcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBleHRlbmRzIEVtYmVyLk9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuXHQvKipcblx0ICogQWRkIGEgbmV3IHZhbHVlIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBzZXRQcm9wZXJ0eVxuXHQgKiBAcGFyYW0ge3N0aW5nfSBrZXkgVGhlIGtleSB0byBzdG9yZSB0aGUgdmFsdWUgd2l0aC5cblx0ICogQHBhcmFtIHttaXhlZH0gdmFsdWUgU29tZSB2YWx1ZSB0byBzdG9yZS5cblx0ICogQHJldHVybnMge3RoaXN9XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHNldFByb3BlcnR5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogTG9jYWxTdG9yYWdlIHtcblx0XHRMT0NBTF9TVE9SQUdFLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHZhbHVlIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2Vcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGdldFByb3BlcnR5XG5cdCAqIEBwYXJhbSB7c3Rpbmd9IGtleSBUaGUga2V5IHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoLlxuXHQgKiBAcmV0dXJucyB7bWl4ZWR9XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5KGtleTogc3RyaW5nKTogYW55IHtcblx0XHRyZXR1cm4gTE9DQUxfU1RPUkFHRS5nZXRJdGVtKGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHZhbHVlIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIGlmIHRoZSB2YWx1ZSBpc1xuXHQgKiBudWxsIG9yIHVuZGVmaW5lZCB0aGUgZGVmYXVsdFZhbHVlIHBhc3NlZCBpbiB3aWxsIGJlIHJldHVybmVkLlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2QgZ2V0V2l0aERlZmF1bHRcblx0ICogQHBhcmFtIHtzdGluZ30ga2V5IFRoZSBrZXkgdG8gc3RvcmUgdGhlIHZhbHVlIHdpdGguXG5cdCAqIEBwYXJhbSB7bWl4ZWR9IGRlZmF1bHRWYWx1ZSBBIGRlZmF1bHQgdmFsdWUgdG8gcmV0dXJuIGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHJldHVybnMge21peGVkfVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBnZXRXaXRoRGVmYXVsdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xuXHRcdGlmICghdGhpcy5oYXNWYWx1ZShrZXkpKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIHRvIHNlZSBpZiB0aGUga2V5IHByb3ZpZGVkIGhhcyBhIHZhbHVlIGluIGxvY2FsIHN0b3JhZ2UuXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBoYXNWYWx1ZVxuXHQgKiBAcGFyYW0ge3N0aW5nfSBrZXkgVGhlIGtleSB0byBzdG9yZSB0aGUgdmFsdWUgd2l0aC5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIGhhc1ZhbHVlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgcHJvcCA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5KTtcblx0XHRyZXR1cm4gcHJvcCAhPT0gdW5kZWZpbmVkICYmIHByb3AgIT09IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBhIHZhbHVlIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2Vcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIHJlbW92ZVxuXHQgKiBAcGFyYW0ge3N0aW5nfSBrZXkgVGhlIGtleSB0byBzdG9yZSB0aGUgdmFsdWUgd2l0aC5cblx0ICogQHJldHVybnMge3RoaXN9XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHJlbW92ZShrZXk6IHN0cmluZyk6IExvY2FsU3RvcmFnZSB7XG5cdFx0TE9DQUxfU1RPUkFHRS5yZW1vdmVJdGVtKGtleSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuIl19