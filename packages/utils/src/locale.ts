/**
 * @module Utils
 *
 */

interface LocaleType {
	key: string;
	value: string;
}

interface LocaleListType {
	key: string;
	value: LocaleType[];
}

const LOCALES: LocaleListType[] = [
	{
		key: 'es',
		value: [
			{ key: 'h:mm A', value:  'h:mm a' },
			{ key: 'MMM D', value:  'll' },
			{ key: 'MMM DD', value:  'll' },
			{ key: 'MMM. DD, h:mm A', value:  'll h:mm a' },
			{ key: 'MMM D YYYY', value:  'll' },
			{ key: 'MMM D, YYYY', value:  'll' },
			{ key: 'h:mm A M/D/YY', value:  'LT l' },
			{ key: 'h:mm A MM/DD/YY', value:  'LT l' },
			{ key: 'MMM Do h:mm A', value:  'll h:hh a' },
			{ key: 'MMM Do, YYYY', value:  'll' },
			{ key: 'MMMM Do YYYY', value:  'LL' },
			{ key: 'MMMM Do YYYY, h:mm A', value:  'LL, LT' },
			{ key: 'ddd, MMM Do', value:  'ddd, ll' },
			{ key: 'ddd, MMM DD', value:  'ddd, ll' },
			{ key: 'ddd, MMM D, YYYY', value:  'ddd, ll' },
			{ key: 'ddd, MMM Do, YYYY', value:  'ddd, ll' },
			{ key: 'ddd. MMM Do, YYYY', value:  'ddd, ll' },
			{ key: 'ddd. MMM Do h:mm A', value:  'll h:mm a' },
			{ key: 'MMMM D, YYYY @h:mm A', value:  'LL @h:mm a' },
			{ key: 'ddd. MMM Do YYYY h:mm A', value:  'ddd, ll h:mm a' }
		]
	}
];

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
	public static format(str: string, locale: string = 'en'): string {
		const formatList: LocaleListType | undefined = LOCALES.find((llt: LocaleListType): boolean => llt.key === locale);
		if (formatList === undefined) {
			return str;
		}

		const format: LocaleType | undefined = formatList.value.find((lt: LocaleType): boolean => lt.key === str);
		if (format === undefined) {
			return str;
		}

		return format.value;
	}
}

