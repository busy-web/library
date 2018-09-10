"use strict";
/**
 * @module Utils
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper method to determine the broser version.
 *
 * @private
 * @method version
 * @param browser {string} the broser type.
 * @return {string}
 */
function _version(browser) {
    // browser and user agent are the same
    // so just return an empty string for the version.
    if (browser === window.navigator.userAgent) {
        return '';
    }
    // firefox and opera have alternate version strings in some cases.
    if (window.navigator.userAgent.indexOf('Version') !== -1) {
        browser = 'Version';
    }
    // get the index of the version string.
    const index = window.navigator.userAgent.indexOf(browser) + browser.length + 1;
    // get the version from the user agent.
    let version = window.navigator.userAgent.substring(index);
    // trim the version string at semicolon/space if present
    if (version.indexOf(';') !== -1) {
        version = version.substring(0, version.indexOf(';'));
    }
    if (version.indexOf(' ') !== -1) {
        version = version.substring(0, version.indexOf(' '));
    }
    return version;
}
/**
 * `Util/Browser`
 *
 * @class Browser
 * @namespace Utils
 * @extends Ember.Object
 */
class BrowserInfo {
    /**
     * Parses the userAgent to get the browser type
     *
     * @public
     * @method type
     * @return {string} The Browser type string.
     */
    static type() {
        let name = window.navigator.userAgent;
        if (this.isBrowserType('Opera')) { // Opera
            name = 'Opera';
        }
        else if (this.isBrowserType('MSIE')) { // Internet Explorer
            name = 'Internet Explorer';
        }
        else if (this.isBrowserType('Chrome')) { // Chrome
            name = 'Chrome';
        }
        else if (this.isBrowserType('Safari')) { // Safari
            name = 'Safari';
        }
        else if (this.isBrowserType('Firefox')) { // Firefox
            name = 'Firefox';
        }
        else { // some other browser
            const nameOffset = window.navigator.userAgent.lastIndexOf(' ') + 1;
            const versOffset = window.navigator.userAgent.lastIndexOf('/');
            if (nameOffset < versOffset) { // In most other browsers, "name/version" is at the end of userAgent
                name = window.navigator.userAgent.substring(nameOffset, versOffset);
            }
        }
        return name;
    }
    /**
     * Parses the userAgent to get the version of the browser.
     *
     * @public
     * @method version
     * @return {string} The browser version
     */
    static version() {
        const name = this.type();
        return _version(name);
    }
    /**
     * Parses the userAgent to find the operating system
     *
     * @public
     * @method osType
     * @return {string} The OS type.
     */
    static osType() {
        let osType = 'Unknown OS';
        if (window.navigator.appVersion.indexOf('Win') !== -1) { // windows os
            osType = 'Windows';
        }
        else if (window.navigator.appVersion.indexOf('Mac') !== -1) { // mac os could be a mobile client.
            osType = 'MacOS';
            // check if this is mac os or ios.
            if (window.navigator.appVersion.indexOf('Mobile') !== -1) {
                osType = 'iOS';
            }
        }
        else if (window.navigator.appVersion.indexOf('Android') !== -1) { // android os
            osType = 'Android';
        }
        else if (window.navigator.appVersion.indexOf('Linux') !== -1) { // linux os
            osType = 'Linux';
        }
        else if (window.navigator.appVersion.indexOf('X11') !== -1) { // unix os
            osType = 'UNIX';
        }
        return osType;
    }
    /**
     * Parses the userAgent to find the OS version
     *
     * @public
     * @method osVersion
     * @return {string} The os version sematic version.
     */
    static osVersion() {
        const start = window.navigator.appVersion.indexOf('(') + 1;
        const end = window.navigator.appVersion.indexOf(')');
        if (start && end) {
            const version = window.navigator.appVersion.substring(start, end);
            return version.replace(/[^\d]*([\d]?[\d]?(\.|_)?[\d]?[\d]?(\.|_)?[\d]?[\d])[\s\S]*/, '$1').replace(/_/g, '.');
        }
        else {
            return window.navigator.appVersion;
        }
    }
    /**
     * Wrapper method return browser type, version, majorVersion, osType, osVersion
     *
     * @public
     * @method detect
     * @return {object}
     */
    static detect() {
        // get the browser name.
        const bType = this.type();
        let version = _version(bType);
        const major = parseInt(version, 10);
        let majorVersion = major.toString();
        if (isNaN(major)) {
            version = `${parseFloat(window.navigator.appVersion)}`;
            majorVersion = `${parseInt(window.navigator.appVersion, 10)}`;
        }
        // get operating system info.
        const osType = this.osType();
        const osVersion = this.osVersion();
        return { type: bType, version, majorVersion, osType, osVersion };
    }
    /**
     * Check to see if this is a type of browser.
     *
     * @public
     * @method isBrowserType
     * @param browser {sting} browser type Chrome, Safari, ect.
     * @return {boolean}
     */
    static isBrowserType(browser) {
        return (window.navigator.userAgent.indexOf(browser) !== -1);
    }
}
exports.default = BrowserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7O0FBR0g7Ozs7Ozs7R0FPRztBQUNILGtCQUFrQixPQUFlO0lBQ2hDLHNDQUFzQztJQUN0QyxrREFBa0Q7SUFDbEQsSUFBSSxPQUFPLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFDM0MsT0FBTyxFQUFFLENBQUM7S0FDVjtJQUVELGtFQUFrRTtJQUNsRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN6RCxPQUFPLEdBQUcsU0FBUyxDQUFDO0tBQ3BCO0lBRUQsdUNBQXVDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUUvRSx1Q0FBdUM7SUFDdkMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTFELHdEQUF3RDtJQUN4RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNyRDtJQUVELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQztBQVVEOzs7Ozs7R0FNRztBQUNIO0lBRUM7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLElBQUk7UUFDakIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUTtZQUMxQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ2Y7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxvQkFBb0I7WUFDNUQsSUFBSSxHQUFHLG1CQUFtQixDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsU0FBUztZQUNuRCxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsU0FBUztZQUNuRCxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsVUFBVTtZQUNyRCxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ2pCO2FBQU0sRUFBRSxxQkFBcUI7WUFDN0IsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0QsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFLEVBQUUsb0VBQW9FO2dCQUNsRyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNwRTtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLE9BQU87UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsTUFBTTtRQUNuQixJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDMUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxhQUFhO1lBQ3JFLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDbkI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLG1DQUFtQztZQUNsRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBRWpCLGtDQUFrQztZQUNsQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDekQsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNmO1NBQ0Q7YUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLGFBQWE7WUFDaEYsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNuQjthQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVztZQUM1RSxNQUFNLEdBQUcsT0FBTyxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVO1lBQ3pFLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDaEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsU0FBUztRQUN0QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRCxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDakIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsNERBQTRELEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM5RzthQUFNO1lBQ04sT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztTQUNuQztJQUNGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsTUFBTTtRQUNuQix3QkFBd0I7UUFDeEIsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFXLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNLEtBQUssR0FBVyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTVDLElBQUksWUFBWSxHQUFXLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixPQUFPLEdBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3hELFlBQVksR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzlEO1FBRUQsNkJBQTZCO1FBQzdCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFbkMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQWU7UUFDMUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRDtBQWpJRCw4QkFpSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgVXRpbHNcbiAqXG4gKi9cblxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gZGV0ZXJtaW5lIHRoZSBicm9zZXIgdmVyc2lvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1ldGhvZCB2ZXJzaW9uXG4gKiBAcGFyYW0gYnJvd3NlciB7c3RyaW5nfSB0aGUgYnJvc2VyIHR5cGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIF92ZXJzaW9uKGJyb3dzZXI6IHN0cmluZyk6IHN0cmluZyB7XG5cdC8vIGJyb3dzZXIgYW5kIHVzZXIgYWdlbnQgYXJlIHRoZSBzYW1lXG5cdC8vIHNvIGp1c3QgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyBmb3IgdGhlIHZlcnNpb24uXG5cdGlmIChicm93c2VyID09PSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8vIGZpcmVmb3ggYW5kIG9wZXJhIGhhdmUgYWx0ZXJuYXRlIHZlcnNpb24gc3RyaW5ncyBpbiBzb21lIGNhc2VzLlxuXHRpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVmVyc2lvbicpICE9PSAtMSkge1xuXHRcdGJyb3dzZXIgPSAnVmVyc2lvbic7XG5cdH1cblxuXHQvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSB2ZXJzaW9uIHN0cmluZy5cblx0Y29uc3QgaW5kZXggPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGJyb3dzZXIpICsgYnJvd3Nlci5sZW5ndGggKyAxO1xuXG5cdC8vIGdldCB0aGUgdmVyc2lvbiBmcm9tIHRoZSB1c2VyIGFnZW50LlxuXHRsZXQgdmVyc2lvbiA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyhpbmRleCk7XG5cblx0Ly8gdHJpbSB0aGUgdmVyc2lvbiBzdHJpbmcgYXQgc2VtaWNvbG9uL3NwYWNlIGlmIHByZXNlbnRcblx0aWYgKHZlcnNpb24uaW5kZXhPZignOycpICE9PSAtMSkge1xuXHRcdHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCB2ZXJzaW9uLmluZGV4T2YoJzsnKSk7XG5cdH1cblxuXHRpZiAodmVyc2lvbi5pbmRleE9mKCcgJykgIT09IC0xKSB7XG5cdFx0dmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIHZlcnNpb24uaW5kZXhPZignICcpKTtcblx0fVxuXG5cdHJldHVybiB2ZXJzaW9uO1xufVxuXG5pbnRlcmZhY2UgSURldGVjdCB7XG5cdHR5cGU6IHN0cmluZztcblx0dmVyc2lvbjogc3RyaW5nO1xuXHRtYWpvclZlcnNpb246IHN0cmluZztcblx0b3NUeXBlOiBzdHJpbmc7XG5cdG9zVmVyc2lvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIGBVdGlsL0Jyb3dzZXJgXG4gKlxuICogQGNsYXNzIEJyb3dzZXJcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBleHRlbmRzIEVtYmVyLk9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VySW5mbyB7XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgdXNlckFnZW50IHRvIGdldCB0aGUgYnJvd3NlciB0eXBlXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCB0eXBlXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEJyb3dzZXIgdHlwZSBzdHJpbmcuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHR5cGUoKSB7XG5cdFx0bGV0IG5hbWUgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRpZiAodGhpcy5pc0Jyb3dzZXJUeXBlKCdPcGVyYScpKSB7IC8vIE9wZXJhXG5cdFx0XHRuYW1lID0gJ09wZXJhJztcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNCcm93c2VyVHlwZSgnTVNJRScpKSB7IC8vIEludGVybmV0IEV4cGxvcmVyXG5cdFx0XHRuYW1lID0gJ0ludGVybmV0IEV4cGxvcmVyJztcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNCcm93c2VyVHlwZSgnQ2hyb21lJykpIHsgLy8gQ2hyb21lXG5cdFx0XHRuYW1lID0gJ0Nocm9tZSc7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzQnJvd3NlclR5cGUoJ1NhZmFyaScpKSB7IC8vIFNhZmFyaVxuXHRcdFx0bmFtZSA9ICdTYWZhcmknO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5pc0Jyb3dzZXJUeXBlKCdGaXJlZm94JykpIHsgLy8gRmlyZWZveFxuXHRcdFx0bmFtZSA9ICdGaXJlZm94Jztcblx0XHR9IGVsc2UgeyAvLyBzb21lIG90aGVyIGJyb3dzZXJcblx0XHRcdGNvbnN0IG5hbWVPZmZzZXQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZignICcpICsgMTtcblx0XHRcdGNvbnN0IHZlcnNPZmZzZXQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZignLycpO1xuXG5cdFx0XHRpZiAobmFtZU9mZnNldCA8IHZlcnNPZmZzZXQpIHsgLy8gSW4gbW9zdCBvdGhlciBicm93c2VycywgXCJuYW1lL3ZlcnNpb25cIiBpcyBhdCB0aGUgZW5kIG9mIHVzZXJBZ2VudFxuXHRcdFx0XHRuYW1lID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKG5hbWVPZmZzZXQsIHZlcnNPZmZzZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIHVzZXJBZ2VudCB0byBnZXQgdGhlIHZlcnNpb24gb2YgdGhlIGJyb3dzZXIuXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCB2ZXJzaW9uXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGJyb3dzZXIgdmVyc2lvblxuXHQgKi9cblx0cHVibGljIHN0YXRpYyB2ZXJzaW9uKCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLnR5cGUoKTtcblx0XHRyZXR1cm4gX3ZlcnNpb24obmFtZSk7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIHRoZSB1c2VyQWdlbnQgdG8gZmluZCB0aGUgb3BlcmF0aW5nIHN5c3RlbVxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2Qgb3NUeXBlXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIE9TIHR5cGUuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIG9zVHlwZSgpIHtcblx0XHRsZXQgb3NUeXBlID0gJ1Vua25vd24gT1MnO1xuXHRcdGlmICh3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignV2luJykgIT09IC0xKSB7IC8vIHdpbmRvd3Mgb3Ncblx0XHRcdG9zVHlwZSA9ICdXaW5kb3dzJztcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKCdNYWMnKSAhPT0gLTEpIHsgLy8gbWFjIG9zIGNvdWxkIGJlIGEgbW9iaWxlIGNsaWVudC5cblx0XHRcdG9zVHlwZSA9ICdNYWNPUyc7XG5cblx0XHRcdC8vIGNoZWNrIGlmIHRoaXMgaXMgbWFjIG9zIG9yIGlvcy5cblx0XHRcdGlmICh3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignTW9iaWxlJykgIT09IC0xKSB7XG5cdFx0XHRcdG9zVHlwZSA9ICdpT1MnO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJ0FuZHJvaWQnKSAhPT0gLTEpIHsgLy8gYW5kcm9pZCBvc1xuXHRcdFx0b3NUeXBlID0gJ0FuZHJvaWQnO1xuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJ0xpbnV4JykgIT09IC0xKSB7IC8vIGxpbnV4IG9zXG5cdFx0XHRvc1R5cGUgPSAnTGludXgnO1xuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJ1gxMScpICE9PSAtMSkgeyAvLyB1bml4IG9zXG5cdFx0XHRvc1R5cGUgPSAnVU5JWCc7XG5cdFx0fVxuXHRcdHJldHVybiBvc1R5cGU7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIHRoZSB1c2VyQWdlbnQgdG8gZmluZCB0aGUgT1MgdmVyc2lvblxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2Qgb3NWZXJzaW9uXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIG9zIHZlcnNpb24gc2VtYXRpYyB2ZXJzaW9uLlxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBvc1ZlcnNpb24oKTogc3RyaW5nIHtcblx0XHRjb25zdCBzdGFydCA9IHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKCcoJykgKyAxO1xuXHRcdGNvbnN0IGVuZCA9IHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKCcpJyk7XG5cblx0XHRpZiAoc3RhcnQgJiYgZW5kKSB7XG5cdFx0XHRjb25zdCB2ZXJzaW9uID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblx0XHRcdHJldHVybiB2ZXJzaW9uLnJlcGxhY2UoL1teXFxkXSooW1xcZF0/W1xcZF0/KFxcLnxfKT9bXFxkXT9bXFxkXT8oXFwufF8pP1tcXGRdP1tcXGRdKVtcXHNcXFNdKi8sICckMScpLnJlcGxhY2UoL18vZywgJy4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogV3JhcHBlciBtZXRob2QgcmV0dXJuIGJyb3dzZXIgdHlwZSwgdmVyc2lvbiwgbWFqb3JWZXJzaW9uLCBvc1R5cGUsIG9zVmVyc2lvblxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2QgZGV0ZWN0XG5cdCAqIEByZXR1cm4ge29iamVjdH1cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgZGV0ZWN0KCk6IElEZXRlY3Qge1xuXHRcdC8vIGdldCB0aGUgYnJvd3NlciBuYW1lLlxuXHRcdGNvbnN0IGJUeXBlOiBzdHJpbmcgPSB0aGlzLnR5cGUoKTtcblx0XHRsZXQgdmVyc2lvbjogc3RyaW5nID0gX3ZlcnNpb24oYlR5cGUpO1xuXG5cdFx0Y29uc3QgbWFqb3I6IG51bWJlciA9IHBhcnNlSW50KHZlcnNpb24sIDEwKTtcblxuXHRcdGxldCBtYWpvclZlcnNpb246IHN0cmluZyA9IG1ham9yLnRvU3RyaW5nKCk7XG5cdFx0aWYgKGlzTmFOKG1ham9yKSkge1xuXHRcdFx0dmVyc2lvbiAgPSBgJHtwYXJzZUZsb2F0KHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbil9YDtcblx0XHRcdG1ham9yVmVyc2lvbiA9IGAke3BhcnNlSW50KHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApfWA7XG5cdFx0fVxuXG5cdFx0Ly8gZ2V0IG9wZXJhdGluZyBzeXN0ZW0gaW5mby5cblx0XHRjb25zdCBvc1R5cGUgPSB0aGlzLm9zVHlwZSgpO1xuXHRcdGNvbnN0IG9zVmVyc2lvbiA9IHRoaXMub3NWZXJzaW9uKCk7XG5cblx0XHRyZXR1cm4geyB0eXBlOiBiVHlwZSwgdmVyc2lvbiwgbWFqb3JWZXJzaW9uICwgb3NUeXBlLCBvc1ZlcnNpb24gfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBhIHR5cGUgb2YgYnJvd3Nlci5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGlzQnJvd3NlclR5cGVcblx0ICogQHBhcmFtIGJyb3dzZXIge3N0aW5nfSBicm93c2VyIHR5cGUgQ2hyb21lLCBTYWZhcmksIGVjdC5cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgaXNCcm93c2VyVHlwZShicm93c2VyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoYnJvd3NlcikgIT09IC0xKTtcblx0fVxufVxuXG4iXX0=