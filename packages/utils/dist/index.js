var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./browser", "./currency", "./locale", "./local-storage", "./time", "./uuid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const browser_1 = __importDefault(require("./browser"));
    const currency_1 = __importDefault(require("./currency"));
    const locale_1 = __importDefault(require("./locale"));
    const local_storage_1 = __importDefault(require("./local-storage"));
    const time_1 = __importDefault(require("./time"));
    const uuid_1 = __importDefault(require("./uuid"));
    exports.default = {
        Browser: browser_1.default,
        Currency: currency_1.default,
        Locale: locale_1.default,
        LocalStorage: local_storage_1.default,
        Time: time_1.default,
        UUID: uuid_1.default
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFDQSx3REFBZ0M7SUFDaEMsMERBQWtDO0lBQ2xDLHNEQUE4QjtJQUM5QixvRUFBMkM7SUFDM0Msa0RBQTBCO0lBQzFCLGtEQUEwQjtJQUUxQixrQkFBZTtRQUNkLE9BQU8sRUFBUCxpQkFBTztRQUNQLFFBQVEsRUFBUixrQkFBUTtRQUNSLE1BQU0sRUFBTixnQkFBTTtRQUNOLFlBQVksRUFBWix1QkFBWTtRQUNaLElBQUksRUFBSixjQUFJO1FBQ0osSUFBSSxFQUFKLGNBQUk7S0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gJy4vY3VycmVuY3knO1xuaW1wb3J0IExvY2FsZSBmcm9tICcuL2xvY2FsZSc7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL3RpbWUnO1xuaW1wb3J0IFVVSUQgZnJvbSAnLi91dWlkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRCcm93c2VyLFxuXHRDdXJyZW5jeSxcblx0TG9jYWxlLFxuXHRMb2NhbFN0b3JhZ2UsXG5cdFRpbWUsXG5cdFVVSURcbn07XG4iXX0=