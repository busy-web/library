/**
 * @module Utils
 *
 */
import moment from 'moment';
import { timeZoneString } from '@app/time-zones';

/**
 * `Util/Time`
 *
 * @class Time
 * @namespace Utils
 * @uses Moment
 * @uses Utils.Loc
 * @uses Utils.LocalStorage
 */
export default class Time {
	public static locale(str?: string): string {
		if (str && str.length) {
			moment.locale(str);
		}
		return moment.locale();
	}

	public static timezone(timestamp?: number): number {
		if (timestamp !== undefined) {
			return (
				moment(timestamp * 1000)
					.subtract(moment(timestamp * 1000).utcOffset(), 'minutes')
					.utcOffset() * 60
			);
		} else {
			return moment().utcOffset() * 60;
		}
	}

	public static timestamp(timestamp?: number): number {
		return this.date(timestamp).unix();
	}

	public static date(timestamp?: number): moment.Moment {
		if (timestamp !== undefined) {
			return moment.utc(timestamp * 1000);
		} else {
			return moment.utc().add(this.timezone(), 'seconds');
		}
	}

	public static isDST(timestamp?: number): boolean {
		if (timestamp !== undefined) {
			return moment(timestamp * 1000).subtract(moment(timestamp * 1000).utcOffset(), 'minutes').isDST();
		} else {
			return moment().isDST();
		}
	}

	public static timezoneString(offset: number, isDST: boolean): string | undefined {
		return timeZoneString(offset.toString(), isDST);
	}
}

export interface IObjectT {
	hours: number;
	minutes: number;
	seconds: number;
	decimal: number;
}

export function convertSeconds(seconds: number, toFixed: number = 2): IObjectT {
	if (isNaN(seconds) || seconds < 0) {
		seconds = 0;
	}

	let remaining = seconds;
	const hours = Math.floor(remaining / 3600);
	remaining %= 3600;

	const minutes = Math.floor(remaining / 60);
	remaining %= 60;

	const secs = Math.ceil(remaining);
	const decimal = Math.round((seconds / 60 / 60) * Math.pow(10, toFixed)) / Math.pow(10, toFixed);

	return { decimal, hours, minutes, seconds: secs };
}

/**
	* converts seconds to hours and minutes based on the localStorage
	* value set for the users preferences
	*
	* @public
	* @method convertSecondsString
	* @param seconds {number}
	* @param padHours {boolean} defaults to false
	* @param showSeconds {boolean} add seconds to the end
	* @param longFormat {boolean} shows XX hrs XX mins format
	* @param format {number} 10 for 00:00 and 20 for 0.00 formats
	* @return {object} An object with the hours, minutes, and seconds
	*/
export function convertSecondsStrin(
	seconds: number,
	format: number = 10,
	padHours: boolean = false,
	showSeconds: boolean = false,
	longFormat: boolean = false,
	toFixed: number = 2
): {} {
	let timeStr: string = '';
	const time: IObjectT = convertSeconds(seconds, toFixed);

	if (format === 20) {
		// set time string for decimal hours
		timeStr = `${time.decimal.toFixed(toFixed)} Hrs`;
	}  else {
		let hourStr: string = time.hours.toString();
		let minStr: string = time.minutes.toString();
		let secStr: string = time.seconds.toString();

		if (padHours === true) {
			hourStr = (time.hours < 10 ? '0' : '') + time.hours;
			minStr = (time.minutes < 10 ? '0' : '') + time.minutes;
			if (longFormat === false) {
				secStr = (time.seconds < 10 ? '0' : '') + time.seconds;
			}
		}

		if (longFormat === true) {
			// set time string for long format hrs mins secs
			if (showSeconds === true) {
				timeStr = `${hourStr} Hrs ${minStr} Mins ${secStr} Secs`;
			} else {
				timeStr = `${hourStr} Hrs ${minStr} Mins`;
			}
		} else {
			if (showSeconds === true) {
				// set time string for hrs:min:secs
				timeStr = `${hourStr}:${minStr}:${secStr}`;
			} else {
				timeStr = `${hourStr}:${minStr}`;
			}
		}
	}

	return timeStr;
}

