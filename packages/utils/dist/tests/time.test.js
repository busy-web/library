var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "moment", "@src/time"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @module Tests
     *
     */
    const moment_1 = __importDefault(require("moment"));
    const time_1 = __importDefault(require("@src/time"));
    test('create date object', () => {
        const time = time_1.default.date();
        expect(time).toBe(moment_1.default.constructor);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvdGltZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQUE7OztPQUdHO0lBQ0gsb0RBQTRCO0lBQzVCLHFEQUE2QjtJQUU3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxHQUFHLGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgVGVzdHNcbiAqXG4gKi9cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBUaW1lIGZyb20gJ0BzcmMvdGltZSc7XG5cbnRlc3QoJ2NyZWF0ZSBkYXRlIG9iamVjdCcsICgpID0+IHtcblx0Y29uc3QgdGltZSA9IFRpbWUuZGF0ZSgpO1xuXHRleHBlY3QodGltZSkudG9CZShtb21lbnQuY29uc3RydWN0b3IpO1xufSk7XG4iXX0=