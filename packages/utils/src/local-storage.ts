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
	public static setProperty(key: string, value: any): LocalStorage {
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
	public static getProperty(key: string): any {
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
	public static getWithDefault(key: string, defaultValue: any): any {
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
	public static hasValue(key: string): boolean {
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
	public static remove(key: string): LocalStorage {
		LOCAL_STORAGE.removeItem(key);
		return this;
	}
}

