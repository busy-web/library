/**
 * V4 UUID Generator
 *
 * Adapted from @orbi/utils:
 *
 * ---------------------------------------------------------------------------------------------------------
 * Fast UUID generator, RFC4122 version 4 compliant.
 *
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 * ---------------------------------------------------------------------------------------------------------
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
    const lut = [];
    for (let i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
    /* tslint:disable */
    /**
     * `uuid`
     * generates a Version 4 UUID using Jeff Ward's high performance generator.
     *
     * @public
     * @method uuid
     * @returns {string}
     */
    function uuid() {
        const d0 = Math.random() * 0xffffffff | 0;
        const d1 = Math.random() * 0xffffffff | 0;
        const d2 = Math.random() * 0xffffffff | 0;
        const d3 = Math.random() * 0xffffffff | 0;
        return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
            lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
            lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
            lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
    }
    exports.default = uuid;
});
/* tslint:enable */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7Ozs7Ozs7Ozs7O0lBRUgsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBRXpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoRDtJQUVELG9CQUFvQjtJQUNwQjs7Ozs7OztPQU9HO0lBQ0g7UUFDQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUUxQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRztZQUM5RixHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRztZQUNyRyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQy9GLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQVZELHVCQVVDOztBQUNELG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVjQgVVVJRCBHZW5lcmF0b3JcbiAqXG4gKiBBZGFwdGVkIGZyb20gQG9yYmkvdXRpbHM6XG4gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGYXN0IFVVSUQgZ2VuZXJhdG9yLCBSRkM0MTIyIHZlcnNpb24gNCBjb21wbGlhbnQuXG4gKlxuICogQGF1dGhvciBKZWZmIFdhcmQgKGpjd2FyZC5jb20pLlxuICogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VcbiAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtYS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdC8yMTk2MzEzNiMyMTk2MzEzNlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbHV0OiBzdHJpbmdbXSA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG5cdGx1dFtpXSA9IChpIDwgMTYgPyAnMCcgOiAnJykgKyAoaSkudG9TdHJpbmcoMTYpO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBgdXVpZGBcbiAqIGdlbmVyYXRlcyBhIFZlcnNpb24gNCBVVUlEIHVzaW5nIEplZmYgV2FyZCdzIGhpZ2ggcGVyZm9ybWFuY2UgZ2VuZXJhdG9yLlxuICpcbiAqIEBwdWJsaWNcbiAqIEBtZXRob2QgdXVpZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXVpZCgpOiBzdHJpbmcge1xuXHRjb25zdCBkMCA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblx0Y29uc3QgZDEgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG5cdGNvbnN0IGQyID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRjb25zdCBkMyA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblxuXHRyZXR1cm4gbHV0W2QwICYgMHhmZl0gKyBsdXRbZDAgPj4gOCAmIDB4ZmZdICsgbHV0W2QwID4+IDE2ICYgMHhmZl0gKyBsdXRbZDAgPj4gMjQgJiAweGZmXSArICctJyArXG5cdFx0bHV0W2QxICYgMHhmZl0gKyBsdXRbZDEgPj4gOCAmIDB4ZmZdICsgJy0nICsgbHV0W2QxID4+IDE2ICYgMHgwZiB8IDB4NDBdICsgbHV0W2QxID4+IDI0ICYgMHhmZl0gKyAnLScgK1xuXHRcdGx1dFtkMiAmIDB4M2YgfCAweDgwXSArIGx1dFtkMiA+PiA4ICYgMHhmZl0gKyAnLScgKyBsdXRbZDIgPj4gMTYgJiAweGZmXSArIGx1dFtkMiA+PiAyNCAmIDB4ZmZdICtcblx0XHRsdXRbZDMgJiAweGZmXSArIGx1dFtkMyA+PiA4ICYgMHhmZl0gKyBsdXRbZDMgPj4gMTYgJiAweGZmXSArIGx1dFtkMyA+PiAyNCAmIDB4ZmZdO1xufVxuLyogdHNsaW50OmVuYWJsZSAqL1xuIl19