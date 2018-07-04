var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@src/time-zones", "moment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @module Utils
     *
     */
    const time_zones_1 = require("@src/time-zones");
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
    function convertSecondsStrin(seconds, format = 10, padHours = false, showSeconds = false, longFormat = false, toFixed = 2) {
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
    exports.convertSecondsStrin = convertSecondsStrin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQUE7OztPQUdHO0lBQ0gsZ0RBQWlEO0lBQ2pELG9EQUE0QjtJQUU1Qjs7Ozs7Ozs7T0FRRztJQUNIO1FBQ1EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFZO1lBQ2hDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQWtCO1lBQ3hDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxDQUNOLGdCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztxQkFDdEIsUUFBUSxDQUFDLGdCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLFNBQVMsQ0FBQztxQkFDekQsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUNsQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxnQkFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ2pDO1FBQ0YsQ0FBQztRQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBa0I7WUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQWtCO1lBQ3BDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ04sT0FBTyxnQkFBTSxD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Q3BELE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZELElBQUksVUFBVSxLQUFLLEtBQUssRUFBRTtvQkFDekIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDdkQ7YUFDRDtZQUVELElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtnQkFDeEIsZ0RBQWdEO2dCQUNoRCxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7b0JBQ3pCLE9BQU8sR0FBRyxHQUFHLE9BQU8sUUFBUSxNQUFNLFNBQVMsTUFBTSxPQUFPLENBQUM7aUJBQ3pEO3FCQUFNO29CQUNOLE9BQU8sR0FBRyxHQUFHLE9BQU8sUUFBUSxNQUFNLE9BQU8sQ0FBQztpQkFDMUM7YUFDRDtpQkFBTTtnQkFDTixJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7b0JBQ3pCLG1DQUFtQztvQkFDbkMsT0FBTyxHQUFHLEdBQUcsT0FBTyxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sT0FBTyxHQUFHLEdBQUcsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO2lCQUNqQzthQUNEO1NBQ0Q7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBN0NELGtEQTZDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBVdGlsc1xuICpcbiAqL1xuaW1wb3J0IHsgdGltZVpvbmVTdHJpbmcgfSBmcm9tICdAc3JjL3RpbWUtem9uZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG4vKipcbiAqIGBVdGlsL1RpbWVgXG4gKlxuICogQGNsYXNzIFRpbWVcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEB1c2VzIE1vbWVudFxuICogQHVzZXMgVXRpbHMuTG9jXG4gKiBAdXNlcyBVdGlscy5Mb2NhbFN0b3JhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZSB7XG5cdHB1YmxpYyBzdGF0aWMgbG9jYWxlKHN0cj86IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0aWYgKHN0ciAmJiBzdHIubGVuZ3RoKSB7XG5cdFx0XHRtb21lbnQubG9jYWxlKHN0cik7XG5cdFx0fVxuXHRcdHJldHVybiBtb21lbnQubG9jYWxlKCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHRpbWV6b25lKHRpbWVzdGFtcD86IG51bWJlcik6IG51bWJlciB7XG5cdFx0aWYgKHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRtb21lbnQodGltZXN0YW1wICogMTAwMClcblx0XHRcdFx0XHQuc3VidHJhY3QobW9tZW50KHRpbWVzdGFtcCAqIDEwMDApLnV0Y09mZnNldCgpLCAnbWludXRlcycpXG5cdFx0XHRcdFx0LnV0Y09mZnNldCgpICogNjBcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtb21lbnQoKS51dGNPZmZzZXQoKSAqIDYwO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgdGltZXN0YW1wKHRpbWVzdGFtcD86IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZSh0aW1lc3RhbXApLnVuaXgoKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZGF0ZSh0aW1lc3RhbXA/OiBudW1iZXIpOiBtb21lbnQuTW9tZW50IHtcblx0XHRpZiAodGltZXN0YW1wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBtb21lbnQudXRjKHRpbWVzdGFtcCAqIDEwMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50LnV0YygpLmFkZCh0aGlzLnRpbWV6b25lKCksICdzZWNvbmRzJyk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBpc0RTVCh0aW1lc3RhbXA/OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRpZiAodGltZXN0YW1wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBtb21lbnQodGltZXN0YW1wICogMTAwMCkuc3VidHJhY3QobW9tZW50KHRpbWVzdGFtcCAqIDEwMDApLnV0Y09mZnNldCgpLCAnbWludXRlcycpLmlzRFNUKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtb21lbnQoKS5pc0RTVCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgdGltZXpvbmVTdHJpbmcob2Zmc2V0OiBudW1iZXIsIGlzRFNUOiBib29sZWFuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGltZVpvbmVTdHJpbmcob2Zmc2V0LnRvU3RyaW5nKCksIGlzRFNUKTtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYmplY3RUIHtcblx0aG91cnM6IG51bWJlcjtcblx0bWludXRlczogbnVtYmVyO1xuXHRzZWNvbmRzOiBudW1iZXI7XG5cdGRlY2ltYWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRTZWNvbmRzKHNlY29uZHM6IG51bWJlciwgdG9GaXhlZDogbnVtYmVyID0gMik6IElPYmplY3RUIHtcblx0aWYgKGlzTmFOKHNlY29uZHMpIHx8IHNlY29uZHMgPCAwKSB7XG5cdFx0c2Vjb25kcyA9IDA7XG5cdH1cblxuXHRsZXQgcmVtYWluaW5nID0gc2Vjb25kcztcblx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHJlbWFpbmluZyAvIDM2MDApO1xuXHRyZW1haW5pbmcgJT0gMzYwMDtcblxuXHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihyZW1haW5pbmcgLyA2MCk7XG5cdHJlbWFpbmluZyAlPSA2MDtcblxuXHRjb25zdCBzZWNzID0gTWF0aC5jZWlsKHJlbWFpbmluZyk7XG5cdGNvbnN0IGRlY2ltYWwgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC8gNjAgLyA2MCkgKiBNYXRoLnBvdygxMCwgdG9GaXhlZCkpIC8gTWF0aC5wb3coMTAsIHRvRml4ZWQpO1xuXG5cdHJldHVybiB7IGRlY2ltYWwsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzOiBzZWNzIH07XG59XG5cbi8qKlxuXHQqIGNvbnZlcnRzIHNlY29uZHMgdG8gaG91cnMgYW5kIG1pbnV0ZXMgYmFzZWQgb24gdGhlIGxvY2FsU3RvcmFnZVxuXHQqIHZhbHVlIHNldCBmb3IgdGhlIHVzZXJzIHByZWZlcmVuY2VzXG5cdCpcblx0KiBAcHVibGljXG5cdCogQG1ldGhvZCBjb252ZXJ0U2Vjb25kc1N0cmluZ1xuXHQqIEBwYXJhbSBzZWNvbmRzIHtudW1iZXJ9XG5cdCogQHBhcmFtIHBhZEhvdXJzIHtib29sZWFufSBkZWZhdWx0cyB0byBmYWxzZVxuXHQqIEBwYXJhbSBzaG93U2Vjb25kcyB7Ym9vbGVhbn0gYWRkIHNlY29uZHMgdG8gdGhlIGVuZFxuXHQqIEBwYXJhbSBsb25nRm9ybWF0IHtib29sZWFufSBzaG93cyBYWCBocnMgWFggbWlucyBmb3JtYXRcblx0KiBAcGFyYW0gZm9ybWF0IHtudW1iZXJ9IDEwIGZvciAwMDowMCBhbmQgMjAgZm9yIDAuMDAgZm9ybWF0c1xuXHQqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IHdpdGggdGhlIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kc1xuXHQqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRTZWNvbmRzU3RyaW4oXG5cdHNlY29uZHM6IG51bWJlcixcblx0Zm9ybWF0OiBudW1iZXIgPSAxMCxcblx0cGFkSG91cnM6IGJvb2xlYW4gPSBmYWxzZSxcblx0c2hvd1NlY29uZHM6IGJvb2xlYW4gPSBmYWxzZSxcblx0bG9uZ0Zvcm1hdDogYm9vbGVhbiA9IGZhbHNlLFxuXHR0b0ZpeGVkOiBudW1iZXIgPSAyXG4pOiB7fSB7XG5cdGxldCB0aW1lU3RyOiBzdHJpbmcgPSAnJztcblx0Y29uc3QgdGltZTogSU9iamVjdFQgPSBjb252ZXJ0U2Vjb25kcyhzZWNvbmRzLCB0b0ZpeGVkKTtcblxuXHRpZiAoZm9ybWF0ID09PSAyMCkge1xuXHRcdC8vIHNldCB0aW1lIHN0cmluZyBmb3IgZGVjaW1hbCBob3Vyc1xuXHRcdHRpbWVTdHIgPSBgJHt0aW1lLmRlY2ltYWwudG9GaXhlZCh0b0ZpeGVkKX0gSHJzYDtcblx0fSAgZWxzZSB7XG5cdFx0bGV0IGhvdXJTdHI6IHN0cmluZyA9IHRpbWUuaG91cnMudG9TdHJpbmcoKTtcblx0XHRsZXQgbWluU3RyOiBzdHJpbmcgPSB0aW1lLm1pbnV0ZXMudG9TdHJpbmcoKTtcblx0XHRsZXQgc2VjU3RyOiBzdHJpbmcgPSB0aW1lLnNlY29uZHMudG9TdHJpbmcoKTtcblxuXHRcdGlmIChwYWRIb3VycyA9PT0gdHJ1ZSkge1xuXHRcdFx0aG91clN0ciA9ICh0aW1lLmhvdXJzIDwgMTAgPyAnMCcgOiAnJykgKyB0aW1lLmhvdXJzO1xuXHRcdFx0bWluU3RyID0gKHRpbWUubWludXRlcyA8IDEwID8gJzAnIDogJycpICsgdGltZS5taW51dGVzO1xuXHRcdFx0aWYgKGxvbmdGb3JtYXQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHNlY1N0ciA9ICh0aW1lLnNlY29uZHMgPCAxMCA/ICcwJyA6ICcnKSArIHRpbWUuc2Vjb25kcztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobG9uZ0Zvcm1hdCA9PT0gdHJ1ZSkge1xuXHRcdFx0Ly8gc2V0IHRpbWUgc3RyaW5nIGZvciBsb25nIGZvcm1hdCBocnMgbWlucyBzZWNzXG5cdFx0XHRpZiAoc2hvd1NlY29uZHMgPT09IHRydWUpIHtcblx0XHRcdFx0dGltZVN0ciA9IGAke2hvdXJTdHJ9IEhycyAke21pblN0cn0gTWlucyAke3NlY1N0cn0gU2Vjc2A7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aW1lU3RyID0gYCR7aG91clN0cn0gSHJzICR7bWluU3RyfSBNaW5zYDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHNob3dTZWNvbmRzID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIHNldCB0aW1lIHN0cmluZyBmb3IgaHJzOm1pbjpzZWNzXG5cdFx0XHRcdHRpbWVTdHIgPSBgJHtob3VyU3RyfToke21pblN0cn06JHtzZWNTdHJ9YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpbWVTdHIgPSBgJHtob3VyU3RyfToke21pblN0cn1gO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aW1lU3RyO1xufVxuXG4iXX0=