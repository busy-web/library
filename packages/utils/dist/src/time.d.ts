import moment from 'moment';
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
    static locale(str?: string): string;
    static timezone(timestamp?: number): number;
    static timestamp(timestamp?: number): number;
    static date(timestamp?: number): moment.Moment;
    static isDST(timestamp?: number): boolean;
    static timezoneString(offset: number, isDST: boolean): string | undefined;
}
export interface IObjectT {
    hours: number;
    minutes: number;
    seconds: number;
    decimal: number;
}
export declare function convertSeconds(seconds: number, toFixed?: number): IObjectT;
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
export declare function convertSecondsStrin(seconds: number, format?: number, padHours?: boolean, showSeconds?: boolean, longFormat?: boolean, toFixed?: number): {};
