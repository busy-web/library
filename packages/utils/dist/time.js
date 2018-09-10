"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module Utils
 *
 */
const time_zones_1 = require("./time-zones");
const moment_1 = __importDefault(require("moment"));
/**
 * `Util/Time`
 *
 * @class Time
 * @namespace Utils
 * @uses Moment
 * @uses Utils.Loc
 * @uses Utils.LocalStorage
 */
class Time {
    static locale(str) {
        if (str && str.length) {
            moment_1.default.locale(str);
        }
        return moment_1.default.locale();
    }
    static timezone(timestamp) {
        if (timestamp !== undefined) {
            return (moment_1.default(timestamp * 1000)
                .subtract(moment_1.default(timestamp * 1000).utcOffset(), 'minutes')
                .utcOffset() * 60);
        }
        else {
            return moment_1.default().utcOffset() * 60;
        }
    }
    static timestamp(timestamp) {
        return this.date(timestamp).unix();
    }
    static date(timestamp) {
        if (timestamp !== undefined) {
            return moment_1.default.utc(timestamp * 1000);
        }
        else {
            return moment_1.default.utc().add(this.timezone(), 'seconds');
        }
    }
    static isDST(timestamp) {
        if (timestamp !== undefined) {
            return moment_1.default(timestamp * 1000).subtract(moment_1.default(timestamp * 1000).utcOffset(), 'minutes').isDST();
        }
        else {
            return moment_1.default().isDST();
        }
    }
    static now() {
        return this.date();
    }
    static utcTimestamp() {
        const time = this.timestamp();
        return time - this.timezone(time);
    }
    static timezoneString(offset, isDST) {
        return time_zones_1.timeZoneString(offset.toString(), isDST);
    }
}
exports.default = Time;
function convertSeconds(seconds, toFixed = 2) {
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
exports.convertSeconds = convertSeconds;
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
function convertSecondsString(seconds, format = 10, padHours = false, showSeconds = false, longFormat = false, toFixed = 2) {
    let timeStr = '';
    const time = convertSeconds(seconds, toFixed);
    if (format === 20) {
        // set time string for decimal hours
        timeStr = `${time.decimal.toFixed(toFixed)} Hrs`;
    }
    else {
        let hourStr = time.hours.toString();
        let minStr = time.minutes.toString();
        let secStr = time.seconds.toString();
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
            }
            else {
                timeStr = `${hourStr} Hrs ${minStr} Mins`;
            }
        }
        else {
            if (showSeconds === true) {
                // set time string for hrs:min:secs
                timeStr = `${hourStr}:${minStr}:${secStr}`;
            }
            else {
                timeStr = `${hourStr}:${minStr}`;
            }
        }
    }
    return timeStr;
}
exports.convertSecondsString = convertSecondsString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztHQUdHO0FBQ0gsNkNBQThDO0FBQzlDLG9EQUE0QjtBQUU1Qjs7Ozs7Ozs7R0FRRztBQUNIO0lBQ1EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFZO1FBQ2hDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBa0I7UUFDeEMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzVCLE9BQU8sQ0FDTixnQkFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQ3RCLFFBQVEsQ0FBQyxnQkFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxTQUFTLENBQUM7aUJBQ3pELFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FDbEIsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLGdCQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDakM7SUFDRixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFrQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBa0I7UUFDcEMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzVCLE9BQU8sZ0JBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTixPQUFPLGdCQUFNLENBQUMsR0FBRyxFQUFFLENBQUMs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IEBtb2R1bGUgVXRpbHNcbiAqXG4gKi9cbmltcG9ydCB7IHRpbWVab25lU3RyaW5nIH0gZnJvbSAnLi90aW1lLXpvbmVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuLyoqXG4gKiBgVXRpbC9UaW1lYFxuICpcbiAqIEBjbGFzcyBUaW1lXG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAdXNlcyBNb21lbnRcbiAqIEB1c2VzIFV0aWxzLkxvY1xuICogQHVzZXMgVXRpbHMuTG9jYWxTdG9yYWdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWUge1xuXHRwdWJsaWMgc3RhdGljIGxvY2FsZShzdHI/OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmIChzdHIgJiYgc3RyLmxlbmd0aCkge1xuXHRcdFx0bW9tZW50LmxvY2FsZShzdHIpO1xuXHRcdH1cblx0XHRyZXR1cm4gbW9tZW50LmxvY2FsZSgpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyB0aW1lem9uZSh0aW1lc3RhbXA/OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmICh0aW1lc3RhbXAgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bW9tZW50KHRpbWVzdGFtcCAqIDEwMDApXG5cdFx0XHRcdFx0LnN1YnRyYWN0KG1vbWVudCh0aW1lc3RhbXAgKiAxMDAwKS51dGNPZmZzZXQoKSwgJ21pbnV0ZXMnKVxuXHRcdFx0XHRcdC51dGNPZmZzZXQoKSAqIDYwXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50KCkudXRjT2Zmc2V0KCkgKiA2MDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHRpbWVzdGFtcCh0aW1lc3RhbXA/OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmRhdGUodGltZXN0YW1wKS51bml4KCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGRhdGUodGltZXN0YW1wPzogbnVtYmVyKTogbW9tZW50Lk1vbWVudCB7XG5cdFx0aWYgKHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50LnV0Yyh0aW1lc3RhbXAgKiAxMDAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG1vbWVudC51dGMoKS5hZGQodGhpcy50aW1lem9uZSgpLCAnc2Vjb25kcycpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgaXNEU1QodGltZXN0YW1wPzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50KHRpbWVzdGFtcCAqIDEwMDApLnN1YnRyYWN0KG1vbWVudCh0aW1lc3RhbXAgKiAxMDAwKS51dGNPZmZzZXQoKSwgJ21pbnV0ZXMnKS5pc0RTVCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50KCkuaXNEU1QoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG5vdygpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHV0Y1RpbWVzdGFtcCgpIHtcblx0XHRjb25zdCB0aW1lID0gdGhpcy50aW1lc3RhbXAoKTtcblx0XHRyZXR1cm4gdGltZSAtIHRoaXMudGltZXpvbmUodGltZSk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHRpbWV6b25lU3RyaW5nKG9mZnNldDogbnVtYmVyLCBpc0RTVDogYm9vbGVhbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRpbWVab25lU3RyaW5nKG9mZnNldC50b1N0cmluZygpLCBpc0RTVCk7XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT2JqZWN0VCB7XG5cdGhvdXJzOiBudW1iZXI7XG5cdG1pbnV0ZXM6IG51bWJlcjtcblx0c2Vjb25kczogbnVtYmVyO1xuXHRkZWNpbWFsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0U2Vjb25kcyhzZWNvbmRzOiBudW1iZXIsIHRvRml4ZWQ6IG51bWJlciA9IDIpOiBJT2JqZWN0VCB7XG5cdGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzIDwgMCkge1xuXHRcdHNlY29uZHMgPSAwO1xuXHR9XG5cblx0bGV0IHJlbWFpbmluZyA9IHNlY29uZHM7XG5cdGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihyZW1haW5pbmcgLyAzNjAwKTtcblx0cmVtYWluaW5nICU9IDM2MDA7XG5cblx0Y29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IocmVtYWluaW5nIC8gNjApO1xuXHRyZW1haW5pbmcgJT0gNjA7XG5cblx0Y29uc3Qgc2VjcyA9IE1hdGguY2VpbChyZW1haW5pbmcpO1xuXHRjb25zdCBkZWNpbWFsID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAvIDYwIC8gNjApICogTWF0aC5wb3coMTAsIHRvRml4ZWQpKSAvIE1hdGgucG93KDEwLCB0b0ZpeGVkKTtcblxuXHRyZXR1cm4geyBkZWNpbWFsLCBob3VycywgbWludXRlcywgc2Vjb25kczogc2VjcyB9O1xufVxuXG4vKipcblx0KiBjb252ZXJ0cyBzZWNvbmRzIHRvIGhvdXJzIGFuZCBtaW51dGVzIGJhc2VkIG9uIHRoZSBsb2NhbFN0b3JhZ2Vcblx0KiB2YWx1ZSBzZXQgZm9yIHRoZSB1c2VycyBwcmVmZXJlbmNlc1xuXHQqXG5cdCogQHB1YmxpY1xuXHQqIEBtZXRob2QgY29udmVydFNlY29uZHNTdHJpbmdcblx0KiBAcGFyYW0gc2Vjb25kcyB7bnVtYmVyfVxuXHQqIEBwYXJhbSBwYWRIb3VycyB7Ym9vbGVhbn0gZGVmYXVsdHMgdG8gZmFsc2Vcblx0KiBAcGFyYW0gc2hvd1NlY29uZHMge2Jvb2xlYW59IGFkZCBzZWNvbmRzIHRvIHRoZSBlbmRcblx0KiBAcGFyYW0gbG9uZ0Zvcm1hdCB7Ym9vbGVhbn0gc2hvd3MgWFggaHJzIFhYIG1pbnMgZm9ybWF0XG5cdCogQHBhcmFtIGZvcm1hdCB7bnVtYmVyfSAxMCBmb3IgMDA6MDAgYW5kIDIwIGZvciAwLjAwIGZvcm1hdHNcblx0KiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCB3aXRoIHRoZSBob3VycywgbWludXRlcywgYW5kIHNlY29uZHNcblx0Ki9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1N0cmluZyhcblx0c2Vjb25kczogbnVtYmVyLFxuXHRmb3JtYXQ6IG51bWJlciA9IDEwLFxuXHRwYWRIb3VyczogYm9vbGVhbiA9IGZhbHNlLFxuXHRzaG93U2Vjb25kczogYm9vbGVhbiA9IGZhbHNlLFxuXHRsb25nRm9ybWF0OiBib29sZWFuID0gZmFsc2UsXG5cdHRvRml4ZWQ6IG51bWJlciA9IDJcbik6IHt9IHtcblx0bGV0IHRpbWVTdHI6IHN0cmluZyA9ICcnO1xuXHRjb25zdCB0aW1lOiBJT2JqZWN0VCA9IGNvbnZlcnRTZWNvbmRzKHNlY29uZHMsIHRvRml4ZWQpO1xuXG5cdGlmIChmb3JtYXQgPT09IDIwKSB7XG5cdFx0Ly8gc2V0IHRpbWUgc3RyaW5nIGZvciBkZWNpbWFsIGhvdXJzXG5cdFx0dGltZVN0ciA9IGAke3RpbWUuZGVjaW1hbC50b0ZpeGVkKHRvRml4ZWQpfSBIcnNgO1xuXHR9ICBlbHNlIHtcblx0XHRsZXQgaG91clN0cjogc3RyaW5nID0gdGltZS5ob3Vycy50b1N0cmluZygpO1xuXHRcdGxldCBtaW5TdHI6IHN0cmluZyA9IHRpbWUubWludXRlcy50b1N0cmluZygpO1xuXHRcdGxldCBzZWNTdHI6IHN0cmluZyA9IHRpbWUuc2Vjb25kcy50b1N0cmluZygpO1xuXG5cdFx0aWYgKHBhZEhvdXJzID09PSB0cnVlKSB7XG5cdFx0XHRob3VyU3RyID0gKHRpbWUuaG91cnMgPCAxMCA/ICcwJyA6ICcnKSArIHRpbWUuaG91cnM7XG5cdFx0XHRtaW5TdHIgPSAodGltZS5taW51dGVzIDwgMTAgPyAnMCcgOiAnJykgKyB0aW1lLm1pbnV0ZXM7XG5cdFx0XHRpZiAobG9uZ0Zvcm1hdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0c2VjU3RyID0gKHRpbWUuc2Vjb25kcyA8IDEwID8gJzAnIDogJycpICsgdGltZS5zZWNvbmRzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChsb25nRm9ybWF0ID09PSB0cnVlKSB7XG5cdFx0XHQvLyBzZXQgdGltZSBzdHJpbmcgZm9yIGxvbmcgZm9ybWF0IGhycyBtaW5zIHNlY3Ncblx0XHRcdGlmIChzaG93U2Vjb25kcyA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aW1lU3RyID0gYCR7aG91clN0cn0gSHJzICR7bWluU3RyfSBNaW5zICR7c2VjU3RyfSBTZWNzYDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpbWVTdHIgPSBgJHtob3VyU3RyfSBIcnMgJHttaW5TdHJ9IE1pbnNgO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc2hvd1NlY29uZHMgPT09IHRydWUpIHtcblx0XHRcdFx0Ly8gc2V0IHRpbWUgc3RyaW5nIGZvciBocnM6bWluOnNlY3Ncblx0XHRcdFx0dGltZVN0ciA9IGAke2hvdXJTdHJ9OiR7bWluU3RyfToke3NlY1N0cn1gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGltZVN0ciA9IGAke2hvdXJTdHJ9OiR7bWluU3RyfWA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRpbWVTdHI7XG59XG5cbiJdfQ==