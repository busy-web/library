/**
 * @module Utils
 *
 */
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7Ozs7Ozs7Ozs7O0lBR0g7Ozs7Ozs7T0FPRztJQUNILGtCQUFrQixPQUFlO1FBQ2hDLHNDQUFzQztRQUN0QyxrREFBa0Q7UUFDbEQsSUFBSSxPQUFPLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDM0MsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELGtFQUFrRTtRQUNsRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN6RCxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQ3BCO1FBRUQsdUNBQXVDO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUUvRSx1Q0FBdUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELHdEQUF3RDtRQUN4RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FB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VUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDeEQsWUFBWSxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDOUQ7WUFFRCw2QkFBNkI7WUFDN0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVuQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFHLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNuRSxDQUFDO1FBRUQ7Ozs7Ozs7V0FPRztRQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBZTtZQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUNEO0lBaklELDhCQWlJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBVdGlsc1xuICpcbiAqL1xuXG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBkZXRlcm1pbmUgdGhlIGJyb3NlciB2ZXJzaW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWV0aG9kIHZlcnNpb25cbiAqIEBwYXJhbSBicm93c2VyIHtzdHJpbmd9IHRoZSBicm9zZXIgdHlwZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gX3ZlcnNpb24oYnJvd3Nlcjogc3RyaW5nKTogc3RyaW5nIHtcblx0Ly8gYnJvd3NlciBhbmQgdXNlciBhZ2VudCBhcmUgdGhlIHNhbWVcblx0Ly8gc28ganVzdCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nIGZvciB0aGUgdmVyc2lvbi5cblx0aWYgKGJyb3dzZXIgPT09IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Ly8gZmlyZWZveCBhbmQgb3BlcmEgaGF2ZSBhbHRlcm5hdGUgdmVyc2lvbiBzdHJpbmdzIGluIHNvbWUgY2FzZXMuXG5cdGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdWZXJzaW9uJykgIT09IC0xKSB7XG5cdFx0YnJvd3NlciA9ICdWZXJzaW9uJztcblx0fVxuXG5cdC8vIGdldCB0aGUgaW5kZXggb2YgdGhlIHZlcnNpb24gc3RyaW5nLlxuXHRjb25zdCBpbmRleCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoYnJvd3NlcikgKyBicm93c2VyLmxlbmd0aCArIDE7XG5cblx0Ly8gZ2V0IHRoZSB2ZXJzaW9uIGZyb20gdGhlIHVzZXIgYWdlbnQuXG5cdGxldCB2ZXJzaW9uID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKGluZGV4KTtcblxuXHQvLyB0cmltIHRoZSB2ZXJzaW9uIHN0cmluZyBhdCBzZW1pY29sb24vc3BhY2UgaWYgcHJlc2VudFxuXHRpZiAodmVyc2lvbi5pbmRleE9mKCc7JykgIT09IC0xKSB7XG5cdFx0dmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIHZlcnNpb24uaW5kZXhPZignOycpKTtcblx0fVxuXG5cdGlmICh2ZXJzaW9uLmluZGV4T2YoJyAnKSAhPT0gLTEpIHtcblx0XHR2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgdmVyc2lvbi5pbmRleE9mKCcgJykpO1xuXHR9XG5cblx0cmV0dXJuIHZlcnNpb247XG59XG5cbmludGVyZmFjZSBJRGV0ZWN0IHtcblx0dHlwZTogc3RyaW5nO1xuXHR2ZXJzaW9uOiBzdHJpbmc7XG5cdG1ham9yVmVyc2lvbjogc3RyaW5nO1xuXHRvc1R5cGU6IHN0cmluZztcblx0b3NWZXJzaW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogYFV0aWwvQnJvd3NlcmBcbiAqXG4gKiBAY2xhc3MgQnJvd3NlclxuICogQG5hbWVzcGFjZSBVdGlsc1xuICogQGV4dGVuZHMgRW1iZXIuT2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJJbmZvIHtcblxuXHQvKipcblx0ICogUGFyc2VzIHRoZSB1c2VyQWdlbnQgdG8gZ2V0IHRoZSBicm93c2VyIHR5cGVcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIHR5cGVcblx0ICogQHJldHVybiB7c3RyaW5nfSBUaGUgQnJvd3NlciB0eXBlIHN0cmluZy5cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgdHlwZSgpIHtcblx0XHRsZXQgbmFtZSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdGlmICh0aGlzLmlzQnJvd3NlclR5cGUoJ09wZXJhJykpIHsgLy8gT3BlcmFcblx0XHRcdG5hbWUgPSAnT3BlcmEnO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5pc0Jyb3dzZXJUeXBlKCdNU0lFJykpIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcblx0XHRcdG5hbWUgPSAnSW50ZXJuZXQgRXhwbG9yZXInO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5pc0Jyb3dzZXJUeXBlKCdDaHJvbWUnKSkgeyAvLyBDaHJvbWVcblx0XHRcdG5hbWUgPSAnQ2hyb21lJztcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNCcm93c2VyVHlwZSgnU2FmYXJpJykpIHsgLy8gU2FmYXJpXG5cdFx0XHRuYW1lID0gJ1NhZmFyaSc7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzQnJvd3NlclR5cGUoJ0ZpcmVmb3gnKSkgeyAvLyBGaXJlZm94XG5cdFx0XHRuYW1lID0gJ0ZpcmVmb3gnO1xuXHRcdH0gZWxzZSB7IC8vIHNvbWUgb3RoZXIgYnJvd3NlclxuXHRcdFx0Y29uc3QgbmFtZU9mZnNldCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKCcgJykgKyAxO1xuXHRcdFx0Y29uc3QgdmVyc09mZnNldCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKCcvJyk7XG5cblx0XHRcdGlmIChuYW1lT2Zmc2V0IDwgdmVyc09mZnNldCkgeyAvLyBJbiBtb3N0IG90aGVyIGJyb3dzZXJzLCBcIm5hbWUvdmVyc2lvblwiIGlzIGF0IHRoZSBlbmQgb2YgdXNlckFnZW50XG5cdFx0XHRcdG5hbWUgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcobmFtZU9mZnNldCwgdmVyc09mZnNldCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgdXNlckFnZW50IHRvIGdldCB0aGUgdmVyc2lvbiBvZiB0aGUgYnJvd3Nlci5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIHZlcnNpb25cblx0ICogQHJldHVybiB7c3RyaW5nfSBUaGUgYnJvd3NlciB2ZXJzaW9uXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHZlcnNpb24oKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMudHlwZSgpO1xuXHRcdHJldHVybiBfdmVyc2lvbihuYW1lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIHVzZXJBZ2VudCB0byBmaW5kIHRoZSBvcGVyYXRpbmcgc3lzdGVtXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBvc1R5cGVcblx0ICogQHJldHVybiB7c3RyaW5nfSBUaGUgT1MgdHlwZS5cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgb3NUeXBlKCkge1xuXHRcdGxldCBvc1R5cGUgPSAnVW5rbm93biBPUyc7XG5cdFx0aWYgKHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKCdXaW4nKSAhPT0gLTEpIHsgLy8gd2luZG93cyBvc1xuXHRcdFx0b3NUeXBlID0gJ1dpbmRvd3MnO1xuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJ01hYycpICE9PSAtMSkgeyAvLyBtYWMgb3MgY291bGQgYmUgYSBtb2JpbGUgY2xpZW50LlxuXHRcdFx0b3NUeXBlID0gJ01hY09TJztcblxuXHRcdFx0Ly8gY2hlY2sgaWYgdGhpcyBpcyBtYWMgb3Mgb3IgaW9zLlxuXHRcdFx0aWYgKHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKCdNb2JpbGUnKSAhPT0gLTEpIHtcblx0XHRcdFx0b3NUeXBlID0gJ2lPUyc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignQW5kcm9pZCcpICE9PSAtMSkgeyAvLyBhbmRyb2lkIG9zXG5cdFx0XHRvc1R5cGUgPSAnQW5kcm9pZCc7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignTGludXgnKSAhPT0gLTEpIHsgLy8gbGludXggb3Ncblx0XHRcdG9zVHlwZSA9ICdMaW51eCc7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignWDExJykgIT09IC0xKSB7IC8vIHVuaXggb3Ncblx0XHRcdG9zVHlwZSA9ICdVTklYJztcblx0XHR9XG5cdFx0cmV0dXJuIG9zVHlwZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIHVzZXJBZ2VudCB0byBmaW5kIHRoZSBPUyB2ZXJzaW9uXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBvc1ZlcnNpb25cblx0ICogQHJldHVybiB7c3RyaW5nfSBUaGUgb3MgdmVyc2lvbiBzZW1hdGljIHZlcnNpb24uXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIG9zVmVyc2lvbigpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHN0YXJ0ID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJygnKSArIDE7XG5cdFx0Y29uc3QgZW5kID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJyknKTtcblxuXHRcdGlmIChzdGFydCAmJiBlbmQpIHtcblx0XHRcdGNvbnN0IHZlcnNpb24gPSB3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24uc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuXHRcdFx0cmV0dXJuIHZlcnNpb24ucmVwbGFjZSgvW15cXGRdKihbXFxkXT9bXFxkXT8oXFwufF8pP1tcXGRdP1tcXGRdPyhcXC58Xyk/W1xcZF0/W1xcZF0pW1xcc1xcU10qLywgJyQxJykucmVwbGFjZSgvXy9nLCAnLicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBXcmFwcGVyIG1ldGhvZCByZXR1cm4gYnJvd3NlciB0eXBlLCB2ZXJzaW9uLCBtYWpvclZlcnNpb24sIG9zVHlwZSwgb3NWZXJzaW9uXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQG1ldGhvZCBkZXRlY3Rcblx0ICogQHJldHVybiB7b2JqZWN0fVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBkZXRlY3QoKTogSURldGVjdCB7XG5cdFx0Ly8gZ2V0IHRoZSBicm93c2VyIG5hbWUuXG5cdFx0Y29uc3QgYlR5cGU6IHN0cmluZyA9IHRoaXMudHlwZSgpO1xuXHRcdGxldCB2ZXJzaW9uOiBzdHJpbmcgPSBfdmVyc2lvbihiVHlwZSk7XG5cblx0XHRjb25zdCBtYWpvcjogbnVtYmVyID0gcGFyc2VJbnQodmVyc2lvbiwgMTApO1xuXG5cdFx0bGV0IG1ham9yVmVyc2lvbjogc3RyaW5nID0gbWFqb3IudG9TdHJpbmcoKTtcblx0XHRpZiAoaXNOYU4obWFqb3IpKSB7XG5cdFx0XHR2ZXJzaW9uICA9IGAke3BhcnNlRmxvYXQod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uKX1gO1xuXHRcdFx0bWFqb3JWZXJzaW9uID0gYCR7cGFyc2VJbnQod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCl9YDtcblx0XHR9XG5cblx0XHQvLyBnZXQgb3BlcmF0aW5nIHN5c3RlbSBpbmZvLlxuXHRcdGNvbnN0IG9zVHlwZSA9IHRoaXMub3NUeXBlKCk7XG5cdFx0Y29uc3Qgb3NWZXJzaW9uID0gdGhpcy5vc1ZlcnNpb24oKTtcblxuXHRcdHJldHVybiB7IHR5cGU6IGJUeXBlLCB2ZXJzaW9uLCBtYWpvclZlcnNpb24gLCBvc1R5cGUsIG9zVmVyc2lvbiB9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIGEgdHlwZSBvZiBicm93c2VyLlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBtZXRob2QgaXNCcm93c2VyVHlwZVxuXHQgKiBAcGFyYW0gYnJvd3NlciB7c3Rpbmd9IGJyb3dzZXIgdHlwZSBDaHJvbWUsIFNhZmFyaSwgZWN0LlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBpc0Jyb3dzZXJUeXBlKGJyb3dzZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihicm93c2VyKSAhPT0gLTEpO1xuXHR9XG59XG5cbiJdfQ==