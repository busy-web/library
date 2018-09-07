/**
 * @module Utils
 *
 */
/**
 * `Util/Locale`
 *
 * @class Locale
 * @namespace BusyUtils
 * @extends Ember.Object
 */
export default class Locale {
    /**
     * Get the locale formated date str for a specific region.
     *
     * @public
     * @method format
     * @param str {string} Moment format str
     * @return {string} locale specific moment str
     */
    static format(str: string, locale?: string): string;
}
