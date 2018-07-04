/**
 * `Util/LocalStorage`
 *
 * @class LocalStorage
 * @namespace Utils
 * @extends Ember.Object
 */
export default class LocalStorage {
    /**
     * Add a new value to the local storage
     *
     * @public
     * @method setProperty
     * @param {sting} key The key to store the value with.
     * @param {mixed} value Some value to store.
     * @returns {this}
     */
    static setProperty(key: string, value: any): LocalStorage;
    /**
     * Gets a value from the local storage
     *
     * @public
     * @method getProperty
     * @param {sting} key The key to store the value with.
     * @returns {mixed}
     */
    static getProperty(key: string): any;
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
    static getWithDefault(key: string, defaultValue: any): any;
    /**
     * Check to see if the key provided has a value in local storage.
     *
     * @public
     * @method hasValue
     * @param {sting} key The key to store the value with.
     * @returns {boolean}
     */
    static hasValue(key: string): boolean;
    /**
     * Removes a value from the local storage
     *
     * @public
     * @method remove
     * @param {sting} key The key to store the value with.
     * @returns {this}
     */
    static remove(key: string): LocalStorage;
}
