/**
 * @module Utils
 *
 */
export default class Currency {
    static codes(): string[];
    static code(code: string): ICurCode | undefined;
    static country(name: string): ICurCode[];
    static number(num: number | string): ICurCode | undefined;
    static countries(): string[];
}
interface ICurCode {
    code: string;
    symbol: string;
    num: string;
    digits: number;
    format: string;
    currency: string;
    countries: string[];
}
export {};
