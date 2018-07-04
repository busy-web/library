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
    const LOCALES = [
        {
            key: 'es',
            value: [
                { key: 'h:mm A', value: 'h:mm a' },
                { key: 'MMM D', value: 'll' },
                { key: 'MMM DD', value: 'll' },
                { key: 'MMM. DD, h:mm A', value: 'll h:mm a' },
                { key: 'MMM D YYYY', value: 'll' },
                { key: 'MMM D, YYYY', value: 'll' },
                { key: 'h:mm A M/D/YY', value: 'LT l' },
                { key: 'h:mm A MM/DD/YY', value: 'LT l' },
                { key: 'MMM Do h:mm A', value: 'll h:hh a' },
                { key: 'MMM Do, YYYY', value: 'll' },
                { key: 'MMMM Do YYYY', value: 'LL' },
                { key: 'MMMM Do YYYY, h:mm A', value: 'LL, LT' },
                { key: 'ddd, MMM Do', value: 'ddd, ll' },
                { key: 'ddd, MMM DD', value: 'ddd, ll' },
                { key: 'ddd, MMM D, YYYY', value: 'ddd, ll' },
                { key: 'ddd, MMM Do, YYYY', value: 'ddd, ll' },
                { key: 'ddd. MMM Do, YYYY', value: 'ddd, ll' },
                { key: 'ddd. MMM Do h:mm A', value: 'll h:mm a' },
                { key: 'MMMM D, YYYY @h:mm A', value: 'LL @h:mm a' },
                { key: 'ddd. MMM Do YYYY h:mm A', value: 'ddd, ll h:mm a' }
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
    class Locale {
        /**
         * Get the locale formated date str for a specific region.
         *
         * @public
         * @method format
         * @param str {string} Moment format str
         * @return {string} locale specific moment str
         */
        static format(str, locale = 'en') {
            const formatList = LOCALES.find((llt) => llt.key === locale);
            if (formatList === undefined) {
                return str;
            }
            const format = formatList.value.find((lt) => lt.key === str);
            if (format === undefined) {
                return str;
            }
            return format.value;
        }
    }
    exports.default = Locale;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7OztJQVlILE1BQU0sT0FBTyxHQUFxQjtRQUNqQztZQUNDLEdBQUcsRUFBRSxJQUFJO1lBQ1QsS0FBSyxFQUFFO2dCQUNOLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUcsUUFBUSxFQUFFO2dCQUNuQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFHLElBQUksRUFBRTtnQkFDOUIsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRyxJQUFJLEVBQUU7Z0JBQy9CLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRyxXQUFXLEVBQUU7Z0JBQy9DLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUcsSUFBSSxFQUFFO2dCQUNuQyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFHLElBQUksRUFBRTtnQkFDcEMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUU7Z0JBQ3hDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUU7Z0JBQzFDLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUcsV0FBVyxFQUFFO2dCQUM3QyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFHLElBQUksRUFBRTtnQkFDckMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRyxJQUFJLEVBQUU7Z0JBQ3JDLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLEtBQUssRUFBRyxRQUFRLEVBQUU7Z0JBQ2pELEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUcsU0FBUyxFQUFFO2dCQUN6QyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRTtnQkFDekMsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRTtnQkFDOUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRTtnQkFDL0MsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRTtnQkFDL0MsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFHLFdBQVcsRUFBRTtnQkFDbEQsRUFBRSxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFHLFlBQVksRUFBRTtnQkFDckQsRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxFQUFHLGdCQUFnQixFQUFFO2FBQzVEO1NBQ0Q7S0FDRCxDQUFDO0lBRUY7Ozs7OztPQU1HO0lBQ0g7UUFDQzs7Ozs7OztXQU9HO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFXLEVBQUUsU0FBaUIsSUFBSTtZQUN0RCxNQUFNLFVBQVUsR0FBK0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQW1CLEVBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUM7WUFDbEgsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO2dCQUM3QixPQUFPLEdBQUcsQ0FBQzthQUNYO1lBRUQsTUFBTSxNQUFNLEdBQTJCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBYyxFQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzFHLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDekIsT0FBTyxHQUFHLENBQUM7YUFDWDtZQUVELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNyQixDQUFDO0tBQ0Q7SUF0QkQseUJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIFV0aWxzXG4gKlxuICovXG5cbmludGVyZmFjZSBMb2NhbGVUeXBlIHtcblx0a2V5OiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBMb2NhbGVMaXN0VHlwZSB7XG5cdGtleTogc3RyaW5nO1xuXHR2YWx1ZTogTG9jYWxlVHlwZVtdO1xufVxuXG5jb25zdCBMT0NBTEVTOiBMb2NhbGVMaXN0VHlwZVtdID0gW1xuXHR7XG5cdFx0a2V5OiAnZXMnLFxuXHRcdHZhbHVlOiBbXG5cdFx0XHR7IGtleTogJ2g6bW0gQScsIHZhbHVlOiAgJ2g6bW0gYScgfSxcblx0XHRcdHsga2V5OiAnTU1NIEQnLCB2YWx1ZTogICdsbCcgfSxcblx0XHRcdHsga2V5OiAnTU1NIEREJywgdmFsdWU6ICAnbGwnIH0sXG5cdFx0XHR7IGtleTogJ01NTS4gREQsIGg6bW0gQScsIHZhbHVlOiAgJ2xsIGg6bW0gYScgfSxcblx0XHRcdHsga2V5OiAnTU1NIEQgWVlZWScsIHZhbHVlOiAgJ2xsJyB9LFxuXHRcdFx0eyBrZXk6ICdNTU0gRCwgWVlZWScsIHZhbHVlOiAgJ2xsJyB9LFxuXHRcdFx0eyBrZXk6ICdoOm1tIEEgTS9EL1lZJywgdmFsdWU6ICAnTFQgbCcgfSxcblx0XHRcdHsga2V5OiAnaDptbSBBIE1NL0REL1lZJywgdmFsdWU6ICAnTFQgbCcgfSxcblx0XHRcdHsga2V5OiAnTU1NIERvIGg6bW0gQScsIHZhbHVlOiAgJ2xsIGg6aGggYScgfSxcblx0XHRcdHsga2V5OiAnTU1NIERvLCBZWVlZJywgdmFsdWU6ICAnbGwnIH0sXG5cdFx0XHR7IGtleTogJ01NTU0gRG8gWVlZWScsIHZhbHVlOiAgJ0xMJyB9LFxuXHRcdFx0eyBrZXk6ICdNTU1NIERvIFlZWVksIGg6bW0gQScsIHZhbHVlOiAgJ0xMLCBMVCcgfSxcblx0XHRcdHsga2V5OiAnZGRkLCBNTU0gRG8nLCB2YWx1ZTogICdkZGQsIGxsJyB9LFxuXHRcdFx0eyBrZXk6ICdkZGQsIE1NTSBERCcsIHZhbHVlOiAgJ2RkZCwgbGwnIH0sXG5cdFx0XHR7IGtleTogJ2RkZCwgTU1NIEQsIFlZWVknLCB2YWx1ZTogICdkZGQsIGxsJyB9LFxuXHRcdFx0eyBrZXk6ICdkZGQsIE1NTSBEbywgWVlZWScsIHZhbHVlOiAgJ2RkZCwgbGwnIH0sXG5cdFx0XHR7IGtleTogJ2RkZC4gTU1NIERvLCBZWVlZJywgdmFsdWU6ICAnZGRkLCBsbCcgfSxcblx0XHRcdHsga2V5OiAnZGRkLiBNTU0gRG8gaDptbSBBJywgdmFsdWU6ICAnbGwgaDptbSBhJyB9LFxuXHRcdFx0eyBrZXk6ICdNTU1NIEQsIFlZWVkgQGg6bW0gQScsIHZhbHVlOiAgJ0xMIEBoOm1tIGEnIH0sXG5cdFx0XHR7IGtleTogJ2RkZC4gTU1NIERvIFlZWVkgaDptbSBBJywgdmFsdWU6ICAnZGRkLCBsbCBoOm1tIGEnIH1cblx0XHRdXG5cdH1cbl07XG5cbi8qKlxuICogYFV0aWwvTG9jYWxlYFxuICpcbiAqIEBjbGFzcyBMb2NhbGVcbiAqIEBuYW1lc3BhY2UgQnVzeVV0aWxzXG4gKiBAZXh0ZW5kcyBFbWJlci5PYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxlIHtcblx0LyoqXG5cdCAqIEdldCB0aGUgbG9jYWxlIGZvcm1hdGVkIGRhdGUgc3RyIGZvciBhIHNwZWNpZmljIHJlZ2lvbi5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAbWV0aG9kIGZvcm1hdFxuXHQgKiBAcGFyYW0gc3RyIHtzdHJpbmd9IE1vbWVudCBmb3JtYXQgc3RyXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gbG9jYWxlIHNwZWNpZmljIG1vbWVudCBzdHJcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgZm9ybWF0KHN0cjogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyA9ICdlbicpOiBzdHJpbmcge1xuXHRcdGNvbnN0IGZvcm1hdExpc3Q6IExvY2FsZUxpc3RUeXBlIHwgdW5kZWZpbmVkID0gTE9DQUxFUy5maW5kKChsbHQ6IExvY2FsZUxpc3RUeXBlKTogYm9vbGVhbiA9PiBsbHQua2V5ID09PSBsb2NhbGUpO1xuXHRcdGlmIChmb3JtYXRMaXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZm9ybWF0OiBMb2NhbGVUeXBlIHwgdW5kZWZpbmVkID0gZm9ybWF0TGlzdC52YWx1ZS5maW5kKChsdDogTG9jYWxlVHlwZSk6IGJvb2xlYW4gPT4gbHQua2V5ID09PSBzdHIpO1xuXHRcdGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm9ybWF0LnZhbHVlO1xuXHR9XG59XG5cbiJdfQ==