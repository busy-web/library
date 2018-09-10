"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module Utils
 *
 */
const noop_1 = __importDefault(require("./noop"));
if (!window.NODE_ENV) {
    window.NODE_ENV = 'development';
}
const callMethod = (name, ...args) => {
    if (window.NODE_ENV === 'production') {
        return noop_1.default();
    }
    if (window.console && window.console[name]) {
        window.console[name].apply(window.console, ...args);
    }
};
exports.log = (...args) => (callMethod('log', args));
exports.assert = (message, test) => (callMethod('assert', [test, message]));
exports.info = (...args) => (callMethod('info', args));
exports.warn = (...args) => (callMethod('warn', args));
exports.error = (...args) => (callMethod('error', args));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7R0FHRztBQUNILGtEQUEwQjtBQVMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtJQUNyQixNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztDQUNoQztBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQUcsSUFBVyxFQUFFLEVBQUU7SUFDbkQsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtRQUNyQyxPQUFPLGNBQUksRUFBRSxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDcEQ7QUFDRixDQUFDLENBQUM7QUFFVyxRQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FBQyxDQUN0QyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUN2QixDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQUcsQ0FBQyxPQUFlLEVBQUUsSUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUN6RCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBRSxDQUFDLENBQ3ZDLENBQUM7QUFFVyxRQUFBLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FBQyxDQUN2QyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUN4QixDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFLENBQUMsQ0FDdkMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FDeEIsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRSxDQUFDLENBQ3hDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgVXRpbHNcbiAqXG4gKi9cbmltcG9ydCBub29wIGZyb20gJy4vbm9vcCc7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzoge1xuXHROT0RFX0VOVjogc3RyaW5nO1xuXHRjb25zb2xlOiB7XG5cdFx0W25hbWU6IHN0cmluZ106ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcblx0fVxufTtcblxuaWYgKCF3aW5kb3cuTk9ERV9FTlYpIHtcblx0d2luZG93Lk5PREVfRU5WID0gJ2RldmVsb3BtZW50Jztcbn1cblxuY29uc3QgY2FsbE1ldGhvZCA9IChuYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG5cdGlmICh3aW5kb3cuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuXHRcdHJldHVybiBub29wKCk7XG5cdH1cblxuXHRpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGVbbmFtZV0pIHtcblx0XHR3aW5kb3cuY29uc29sZVtuYW1lXS5hcHBseSh3aW5kb3cuY29uc29sZSwgLi4uYXJncyk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2cgPSAoLi4uYXJnczogYW55W10pID0+IChcblx0Y2FsbE1ldGhvZCgnbG9nJywgYXJncylcbik7XG5cbmV4cG9ydCBjb25zdCBhc3NlcnQgPSAobWVzc2FnZTogc3RyaW5nLCB0ZXN0OiBib29sZWFuKSA9PiAoXG5cdGNhbGxNZXRob2QoJ2Fzc2VydCcsIFsgdGVzdCwgbWVzc2FnZSBdKVxuKTtcblxuZXhwb3J0IGNvbnN0IGluZm8gPSAoLi4uYXJnczogYW55W10pID0+IChcblx0Y2FsbE1ldGhvZCgnaW5mbycsIGFyZ3MpXG4pO1xuXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gKFxuXHRjYWxsTWV0aG9kKCd3YXJuJywgYXJncylcbik7XG5cbmV4cG9ydCBjb25zdCBlcnJvciA9ICguLi5hcmdzOiBhbnlbXSkgPT4gKFxuXHRjYWxsTWV0aG9kKCdlcnJvcicsIGFyZ3MpXG4pO1xuIl19