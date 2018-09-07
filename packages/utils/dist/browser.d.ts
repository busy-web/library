/**
 * @module Utils
 *
 */
interface IDetect {
    type: string;
    version: string;
    majorVersion: string;
    osType: string;
    osVersion: string;
}
/**
 * `Util/Browser`
 *
 * @class Browser
 * @namespace Utils
 * @extends Ember.Object
 */
export default class BrowserInfo {
    /**
     * Parses the userAgent to get the browser type
     *
     * @public
     * @method type
     * @return {string} The Browser type string.
     */
    static type(): string;
    /**
     * Parses the userAgent to get the version of the browser.
     *
     * @public
     * @method version
     * @return {string} The browser version
     */
    static version(): string;
    /**
     * Parses the userAgent to find the operating system
     *
     * @public
     * @method osType
     * @return {string} The OS type.
     */
    static osType(): string;
    /**
     * Parses the userAgent to find the OS version
     *
     * @public
     * @method osVersion
     * @return {string} The os version sematic version.
     */
    static osVersion(): string;
    /**
     * Wrapper method return browser type, version, majorVersion, osType, osVersion
     *
     * @public
     * @method detect
     * @return {object}
     */
    static detect(): IDetect;
    /**
     * Check to see if this is a type of browser.
     *
     * @public
     * @method isBrowserType
     * @param browser {sting} browser type Chrome, Safari, ect.
     * @return {boolean}
     */
    static isBrowserType(browser: string): boolean;
}
export {};
