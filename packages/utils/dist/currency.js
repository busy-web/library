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
    class Currency {
        static codes() {
            return sortByCode(CURRENCY_CODES).map((cc) => cc.code);
        }
        static code(code) {
            code = code.toUpperCase();
            return this.codes().find((cc) => cc === code);
        }
        static country(name) {
            name = name.toLowerCase();
            return CURRENCY_CODES.filter(c => {
                return (c.countries || []).indexOf(name) > -1;
            });
        }
        static number(num) {
            let numStr = num.toString();
            if (typeof num === 'number') {
                numStr = ('000' + num).substr(-3);
            }
            return CURRENCY_CODES.find((cc) => cc.num === numStr);
        }
        static countries() {
            const list = [];
            CURRENCY_CODES.map(cc => cc.countries).forEach(item => {
                if (item !== undefined && item !== null && item.length) {
                    item.forEach(country => {
                        if (list.indexOf(country) === -1) {
                            list.push(country);
                        }
                    });
                }
            });
            return list;
        }
    }
    exports.default = Currency;
    function sortByCode(list) {
        return list.sort((ca, cb) => {
            if (ca.code < cb.code) {
                return -1;
            }
            else if (ca.code > cb.code) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    const space = '\u0020';
    const apostrophe = '\u0027';
    const comma = '\u002c';
    const decimal = '\u002e';
    const DEL_CD = `${comma},${decimal}`;
    const DEL_DC = `${decimal},${comma}`;
    const DEL_SD = `${space},${decimal}`;
    const DEL_SC = `${space},${comma}`;
    const DEL_AD = `${apostrophe},${decimal}`;
    const CURRENCY_CODES = [
        {
            code: 'AED',
            symbol: '\u062f.\u0625',
            num: '784',
            digits: 2,
            format: DEL_CD,
            currency: 'United Arab Emirates dirham',
            countries: ['united arab emirates']
        },
        {
            code: 'AFN',
            symbol: '\u060b',
            num: '971',
            digits: 2,
            format: DEL_CD,
            currency: 'Afghan afghani',
            countries: ['afghanistan']
        },
        {
            code: 'ALL',
            symbol: '\u004c\u0065\u006b',
            num: '008',
            digits: 2,
            format: DEL_CD,
            currency: 'Albanian lek',
            countries: ['albania']
        },
        {
            code: 'AMD',
            symbol: '\u0564\u0580.',
            num: '051',
            digits: 2,
            format: DEL_CD,
            currency: 'Armenian dram',
            countries: ['armenia']
        },
        {
            code: 'ANG',
            symbol: '\u0192',
            num: '532',
            digits: 2,
            format: DEL_DC,
            currency: 'Netherlands Antillean guilder',
            countries: ['curaçao', 'sint maarten']
        },
        {
            code: 'AOA',
            symbol: 'Kz',
            num: '973',
            digits: 2,
            format: DEL_CD,
            currency: 'Angolan kwanza',
            countries: ['angola']
        },
        {
            code: 'ARS',
            symbol: '\u0024',
            num: '032',
            digits: 2,
            format: DEL_DC,
            currency: 'Argentine peso',
            countries: ['argentina']
        },
        {
            code: 'AUD',
            symbol: '\u0024',
            num: '036',
            digits: 2,
            format: DEL_SD,
            currency: 'Australian dollar',
            countries: [
                'australia',
                'australian antarctic territory',
                'christmas island',
                'cocos (keeling) islands',
                'heard and mcdonald islands',
                'kiribati',
                'nauru',
                'norfolk island',
                'tuvalu'
            ]
        },
        {
            code: 'AWG',
            symbol: '\u0192',
            num: '533',
            digits: 2,
            format: DEL_CD,
            currency: 'Aruban florin',
            countries: ['aruba']
        },
        {
            code: 'AZN',
            symbol: '\u20bc',
            num: '944',
            digits: 2,
            format: DEL_CD,
            currency: 'Azerbaijani manat',
            countries: ['azerbaijan']
        },
        {
            code: 'BAM',
            symbol: '\u041a\u041c',
            num: '977',
            digits: 2,
            format: DEL_CD,
            currency: 'Bosnia and Herzegovina convertible mark',
            countries: ['bosnia and herzegovina']
        },
        {
            code: 'BBD',
            symbol: '\u0024',
            num: '052',
            digits: 2,
            format: DEL_CD,
            currency: 'Barbados dollar',
            countries: ['barbados']
        },
        {
            code: 'BDT',
            symbol: '\u09f3',
            num: '050',
            digits: 2,
            format: DEL_CD,
            currency: 'Bangladeshi taka',
            countries: ['bangladesh']
        },
        {
            code: 'BGN',
            symbol: '\u043b\u0432',
            num: '975',
            digits: 2,
            format: DEL_CD,
            currency: 'Bulgarian lev',
            countries: ['bulgaria']
        },
        {
            code: 'BHD',
            symbol: '\u0628.\u062f',
            num: '048',
            digits: 3,
            format: DEL_CD,
            currency: 'Bahraini dinar',
            countries: ['bahrain']
        },
        {
            code: 'BIF',
            symbol: 'Fr',
            num: '108',
            digits: 0,
            format: DEL_CD,
            currency: 'Burundian franc',
            countries: ['burundi']
        },
        {
            code: 'BMD',
            symbol: '\u0024',
            num: '060',
            digits: 2,
            format: DEL_CD,
            currency: 'Bermudian dollar',
            countries: ['bermuda']
        },
        {
            code: 'BND',
            symbol: '\u0024',
            num: '096',
            digits: 2,
            format: DEL_CD,
            currency: 'Brunei dollar',
            countries: ['brunei', 'singapore']
        },
        {
            code: 'BOB',
            symbol: 'Bs.',
            num: '068',
            digits: 2,
            format: DEL_CD,
            currency: 'Boliviano',
            countries: ['bolivia']
        },
        {
            code: 'BRL',
            symbol: '\u0052\u0024',
            num: '986',
            digits: 2,
            format: DEL_DC,
            currency: 'Brazilian real',
            countries: ['brazil']
        },
        {
            code: 'BSD',
            symbol: '\u0024',
            num: '044',
            digits: 2,
            format: DEL_CD,
            currency: 'Bahamian dollar',
            countries: ['bahamas']
        },
        {
            code: 'BTN',
            symbol: 'Nu.',
            num: '064',
            digits: 2,
            format: DEL_CD,
            currency: 'Bhutanese ngultrum',
            countries: ['bhutan']
        },
        {
            code: 'BWP',
            symbol: 'P',
            num: '072',
            digits: 2,
            format: DEL_CD,
            currency: 'Botswana pula',
            countries: ['botswana']
        },
        {
            code: 'BYN',
            symbol: 'Br',
            num: '933',
            digits: 2,
            format: DEL_CD,
            currency: 'New Belarusian ruble',
            countries: ['belarus']
        },
        {
            code: 'BZD',
            symbol: '\u0024',
            num: '084',
            digits: 2,
            format: DEL_CD,
            currency: 'Belize dollar',
            countries: ['belize']
        },
        {
            code: 'CAD',
            symbol: '\u0024',
            num: '124',
            digits: 2,
            format: DEL_CD,
            currency: 'Canadian dollar',
            countries: ['canada', 'saint pierre and miquelon']
        },
        {
            code: 'CDF',
            symbol: 'Fr',
            num: '976',
            digits: 2,
            format: DEL_CD,
            currency: 'Congolese franc',
            countries: ['democratic republic of congo']
        },
        {
            code: 'CHF',
            symbol: 'Fr',
            num: '756',
            digits: 2,
            format: DEL_AD,
            currency: 'Swiss franc',
            countries: ['switzerland', 'liechtenstein']
        },
        {
            code: 'CLP',
            symbol: '\u0024',
            num: '152',
            digits: 0,
            format: DEL_DC,
            currency: 'Chilean peso',
            countries: ['chile']
        },
        {
            code: 'CNY',
            symbol: '\u00a5',
            num: '156',
            digits: 2,
            format: DEL_CD,
            currency: 'Chinese yuan',
            countries: ['china']
        },
        {
            code: 'COP',
            symbol: '\u0024',
            num: '170',
            digits: 2,
            format: DEL_DC,
            currency: 'Colombian peso',
            countries: ['colombia']
        },
        {
            code: 'CRC',
            symbol: '\u20a1',
            num: '188',
            digits: 2,
            format: DEL_DC,
            currency: 'Costa Rican colon',
            countries: ['costa rica']
        },
        {
            code: 'CUP',
            symbol: '\u0024',
            num: '192',
            digits: 2,
            format: DEL_CD,
            currency: 'Cuban peso',
            countries: ['cuba']
        },
        {
            code: 'CVE',
            symbol: '\u0024',
            num: '132',
            digits: 0,
            format: DEL_CD,
            currency: 'Cape Verde escudo',
            countries: ['cape verde']
        },
        {
            code: 'CZK',
            symbol: 'K\u010d',
            num: '203',
            digits: 2,
            format: DEL_DC,
            currency: 'Czech koruna',
            countries: ['czech republic']
        },
        {
            code: 'DJF',
            symbol: 'Fdj',
            num: '262',
            digits: 0,
            format: DEL_CD,
            currency: 'Djiboutian franc',
            countries: ['djibouti']
        },
        {
            code: 'DKK',
            symbol: 'kr',
            num: '208',
            digits: 2,
            format: DEL_DC,
            currency: 'Danish krone',
            countries: ['denmark', 'faroe islands', 'greenland']
        },
        {
            code: 'DOP',
            symbol: '\u0024',
            num: '214',
            digits: 2,
            format: DEL_CD,
            currency: 'Dominican peso',
            countries: ['dominican republic']
        },
        {
            code: 'DZD',
            symbol: '\u062f.\u062c',
            num: '012',
            digits: 2,
            format: DEL_CD,
            currency: 'Algerian dinar',
            countries: ['algeria']
        },
        {
            code: 'EGP',
            symbol: '\u062c.\u0645',
            num: '818',
            digits: 2,
            format: DEL_CD,
            currency: 'Egyptian pound',
            countries: ['egypt', 'palestinian territories']
        },
        {
            code: 'ERN',
            symbol: 'Nfk',
            num: '232',
            digits: 2,
            format: DEL_CD,
            currency: 'Eritrean nakfa',
            countries: ['eritrea']
        },
        {
            code: 'ETB',
            symbol: 'Br',
            num: '230',
            digits: 2,
            format: DEL_CD,
            currency: 'Ethiopian birr',
            countries: ['ethiopia']
        },
        {
            code: 'EUR',
            symbol: '\u20ac',
            num: '978',
            digits: 2,
            format: DEL_CD,
            currency: 'Euro',
            countries: [
                'andorra', 'austria', 'belgium', 'cyprus', 'estonia', 'finland', 'france',
                'germany', 'greece', 'ireland', 'italy', 'kosovo', 'luxembourg', 'malta',
                'monaco', 'montenegro', 'netherlands', 'portugal', 'san marino', 'slovakia',
                'slovenia', 'spain', 'vatican city'
            ]
        },
        {
            code: 'FJD',
            symbol: '\u0024',
            num: '242',
            digits: 2,
            format: DEL_CD,
            currency: 'Fiji dollar',
            countries: ['fiji']
        },
        {
            code: 'FKP',
            symbol: '\u00a3',
            num: '238',
            digits: 2,
            format: DEL_CD,
            currency: 'Falkland Islands pound',
            countries: ['falkland islands']
        },
        {
            code: 'GBP',
            symbol: '\u00a3',
            num: '826',
            digits: 2,
            format: DEL_CD,
            currency: 'Pound sterling',
            countries: [
                'united kingdom',
                'british crown dependencies (the  isle of man and the channel islands)',
                'south georgia and the south sandwich islands',
                'british antarctic territory',
                'british indian ocean territory'
            ]
        },
        {
            code: 'GEL',
            symbol: '\u10da',
            num: '981',
            digits: 2,
            format: DEL_CD,
            currency: 'Georgian lari',
            countries: ['georgia']
        },
        {
            code: 'GHS',
            symbol: '\u20b5',
            num: '936',
            digits: 2,
            format: DEL_CD,
            currency: 'Ghanaian cedi',
            countries: ['ghana']
        },
        {
            code: 'GIP',
            symbol: '\u00a3',
            num: '292',
            digits: 2,
            format: DEL_CD,
            currency: 'Gibraltar pound',
            countries: ['gibraltar']
        },
        {
            code: 'GMD',
            symbol: 'D',
            num: '270',
            digits: 2,
            format: DEL_CD,
            currency: 'Gambian dalasi',
            countries: ['gambia']
        },
        {
            code: 'GNF',
            symbol: 'Fr',
            num: '324',
            digits: 0,
            format: DEL_CD,
            currency: 'Guinean franc',
            countries: ['guinea']
        },
        {
            code: 'GTQ',
            symbol: 'Q',
            num: '320',
            digits: 2,
            format: DEL_CD,
            currency: 'Guatemalan quetzal',
            countries: ['guatemala']
        },
        {
            code: 'GYD',
            symbol: '\u0024',
            num: '328',
            digits: 2,
            format: DEL_CD,
            currency: 'Guyanese dollar',
            countries: ['guyana']
        },
        {
            code: 'HKD',
            symbol: '\u0024',
            num: '344',
            digits: 2,
            format: DEL_CD,
            currency: 'Hong Kong dollar',
            countries: ['hong kong', 'macao']
        },
        {
            code: 'HNL',
            symbol: 'L',
            num: '340',
            digits: 2,
            format: DEL_CD,
            currency: 'Honduran lempira',
            countries: ['honduras']
        },
        {
            code: 'HRK',
            symbol: 'kn',
            num: '191',
            digits: 2,
            format: DEL_DC,
            currency: 'Croatian kuna',
            countries: ['croatia']
        },
        {
            code: 'HTG',
            symbol: 'G',
            num: '332',
            digits: 2,
            format: DEL_CD,
            currency: 'Haitian gourde',
            countries: ['haiti']
        },
        {
            code: 'HUF',
            symbol: 'Ft',
            num: '348',
            digits: 2,
            format: DEL_DC,
            currency: 'Hungarian forint',
            countries: ['hungary']
        },
        {
            code: 'IDR',
            symbol: 'Rp',
            num: '360',
            digits: 2,
            format: DEL_DC,
            currency: 'Indonesian rupiah',
            countries: ['indonesia']
        },
        {
            code: 'ILS',
            symbol: '\u20aa',
            num: '376',
            digits: 2,
            format: DEL_CD,
            currency: 'Israeli new shekel',
            countries: ['israel', 'palestinian territories']
        },
        {
            code: 'INR',
            symbol: '\u20b9',
            num: '356',
            digits: 2,
            format: DEL_CD,
            currency: 'Indian rupee',
            countries: ['india']
        },
        {
            code: 'IQD',
            symbol: '\u0639.\u062f',
            num: '368',
            digits: 3,
            format: DEL_CD,
            currency: 'Iraqi dinar',
            countries: ['iraq']
        },
        {
            code: 'IRR',
            symbol: '\ufdfc',
            num: '364',
            digits: 2,
            format: DEL_CD,
            currency: 'Iranian rial',
            countries: ['iran']
        },
        {
            code: 'ISK',
            symbol: 'kr',
            num: '352',
            digits: 0,
            format: DEL_DC,
            currency: 'Icelandic króna',
            countries: ['iceland']
        },
        {
            code: 'JMD',
            symbol: '\u0024',
            num: '388',
            digits: 2,
            format: DEL_CD,
            currency: 'Jamaican dollar',
            countries: ['jamaica']
        },
        {
            code: 'JOD',
            symbol: '\u062f.\u0627',
            num: '400',
            digits: 3,
            format: DEL_CD,
            currency: 'Jordanian dinar',
            countries: ['jordan']
        },
        {
            code: 'JPY',
            symbol: '\u00a5',
            num: '392',
            digits: 0,
            format: DEL_CD,
            currency: 'Japanese yen',
            countries: ['japan']
        },
        {
            code: 'KES',
            symbol: 'KSh',
            num: '404',
            digits: 2,
            format: DEL_CD,
            currency: 'Kenyan shilling',
            countries: ['kenya']
        },
        {
            code: 'KGS',
            symbol: 'som',
            num: '417',
            digits: 2,
            format: DEL_CD,
            currency: 'Kyrgyzstani som',
            countries: ['kyrgyzstan']
        },
        {
            code: 'KHR',
            symbol: '\u17db',
            num: '116',
            digits: 2,
            format: DEL_CD,
            currency: 'Cambodian riel',
            countries: ['cambodia']
        },
        {
            code: 'KMF',
            symbol: 'Fr',
            num: '174',
            digits: 0,
            format: DEL_CD,
            currency: 'Comoro franc',
            countries: ['comoros']
        },
        {
            code: 'KPW',
            symbol: '\u20a9',
            num: '408',
            digits: 2,
            format: DEL_CD,
            currency: 'North Korean won',
            countries: ['north korea']
        },
        {
            code: 'KRW',
            symbol: '\u20a9',
            num: '410',
            digits: 0,
            format: DEL_CD,
            currency: 'South Korean won',
            countries: ['south korea']
        },
        {
            code: 'KWD',
            symbol: '\u062f.\u0643',
            num: '414',
            digits: 3,
            format: DEL_CD,
            currency: 'Kuwaiti dinar',
            countries: ['kuwait']
        },
        {
            code: 'KYD',
            symbol: '\u0024',
            num: '136',
            digits: 2,
            format: DEL_CD,
            currency: 'Cayman Islands dollar',
            countries: ['cayman islands']
        },
        {
            code: 'KZT',
            symbol: '\u3012',
            num: '398',
            digits: 2,
            format: DEL_CD,
            currency: 'Kazakhstani tenge',
            countries: ['kazakhstan']
        },
        {
            code: 'LAK',
            symbol: '\u20ad',
            num: '418',
            digits: 2,
            format: DEL_CD,
            currency: 'Lao kip',
            countries: ['laos']
        },
        {
            code: 'LBP',
            symbol: '\u0644.\u0644',
            num: '422',
            digits: 2,
            format: DEL_SD,
            currency: 'Lebanese pound',
            countries: ['lebanon']
        },
        {
            code: 'LKR',
            symbol: '\u20a8',
            num: '144',
            digits: 2,
            format: DEL_CD,
            currency: 'Sri Lankan rupee',
            countries: ['sri lanka']
        },
        {
            code: 'LRD',
            symbol: '\u0024',
            num: '430',
            digits: 2,
            format: DEL_CD,
            currency: 'Liberian dollar',
            countries: ['liberia']
        },
        {
            code: 'LSL',
            symbol: 'L',
            num: '426',
            digits: 2,
            format: DEL_CD,
            currency: 'Lesotho loti',
            countries: ['lesotho']
        },
        {
            code: 'LYD',
            symbol: '\u0644.\u062f',
            num: '434',
            digits: 3,
            format: DEL_CD,
            currency: 'Libyan dinar',
            countries: ['libya']
        },
        {
            code: 'MAD',
            symbol: '\u062f.\u0645.',
            num: '504',
            digits: 2,
            format: DEL_CD,
            currency: 'Moroccan dirham',
            countries: ['morocco']
        },
        {
            code: 'MDL',
            symbol: 'L',
            num: '498',
            digits: 2,
            format: DEL_CD,
            currency: 'Moldovan leu',
            countries: ['moldova (except  transnistria)']
        },
        {
            code: 'MGA',
            symbol: 'Ar',
            num: '969',
            digits: 1,
            format: DEL_CD,
            currency: 'Malagasy ariary',
            countries: ['madagascar']
        },
        {
            code: 'MKD',
            symbol: '\u0434\u0435\u043d',
            num: '807',
            digits: 2,
            format: DEL_CD,
            currency: 'Macedonian denar',
            countries: ['macedonia']
        },
        {
            code: 'MMK',
            symbol: 'K',
            num: '104',
            digits: 2,
            format: DEL_CD,
            currency: 'Myanma kyat',
            countries: ['myanmar']
        },
        {
            code: 'MNT',
            symbol: '\u20ae',
            num: '496',
            digits: 2,
            format: DEL_CD,
            currency: 'Mongolian tugrik',
            countries: ['mongolia']
        },
        {
            code: 'MOP',
            symbol: 'P',
            num: '446',
            digits: 2,
            format: DEL_CD,
            currency: 'Macanese pataca',
            countries: ['macao']
        },
        {
            code: 'MRO',
            symbol: 'UM',
            num: '478',
            digits: 1,
            format: DEL_CD,
            currency: 'Mauritanian ouguiya',
            countries: ['mauritania']
        },
        {
            code: 'MUR',
            symbol: '\u20a8',
            num: '480',
            digits: 2,
            format: DEL_CD,
            currency: 'Mauritian rupee',
            countries: ['mauritius']
        },
        {
            code: 'MVR',
            symbol: 'MVR',
            num: '462',
            digits: 2,
            format: DEL_CD,
            currency: 'Maldivian rufiyaa',
            countries: ['maldives']
        },
        {
            code: 'MWK',
            symbol: 'MK',
            num: '454',
            digits: 2,
            format: DEL_CD,
            currency: 'Malawian kwacha',
            countries: ['malawi']
        },
        {
            code: 'MXN',
            symbol: '\u0024',
            num: '484',
            digits: 2,
            format: DEL_CD,
            currency: 'Mexican peso',
            countries: ['mexico']
        },
        {
            code: 'MYR',
            symbol: 'RM',
            num: '458',
            digits: 2,
            format: DEL_CD,
            currency: 'Malaysian ringgit',
            countries: ['malaysia']
        },
        {
            code: 'MZN',
            symbol: 'MTn',
            num: '943',
            digits: 2,
            format: DEL_CD,
            currency: 'Mozambican metical',
            countries: ['mozambique']
        },
        {
            code: 'NAD',
            symbol: '\u0024',
            num: '516',
            digits: 2,
            format: DEL_CD,
            currency: 'Namibian dollar',
            countries: ['namibia']
        },
        {
            code: 'NGN',
            symbol: '\u20a6',
            num: '566',
            digits: 2,
            format: DEL_CD,
            currency: 'Nigerian naira',
            countries: ['nigeria']
        },
        {
            code: 'NIO',
            symbol: '\u0043\u0024',
            num: '558',
            digits: 2,
            format: DEL_CD,
            currency: 'Nicaraguan córdoba',
            countries: ['nicaragua']
        },
        {
            code: 'NOK',
            symbol: 'kr',
            num: '578',
            digits: 2,
            format: DEL_DC,
            currency: 'Norwegian krone',
            countries: ['norway', 'svalbard', 'jan mayen', 'bouvet island', 'queen maud land', 'peter i island']
        },
        {
            code: 'NPR',
            symbol: '\u20a8',
            num: '524',
            digits: 2,
            format: DEL_CD,
            currency: 'Nepalese rupee',
            countries: ['nepal']
        },
        {
            code: 'NZD',
            symbol: '\u0024',
            num: '554',
            digits: 2,
            format: DEL_CD,
            currency: 'New Zealand dollar',
            countries: ['cook islands', 'new zealand', 'niue', 'pitcairn', 'tokelau', 'ross dependency']
        },
        {
            code: 'OMR',
            symbol: '\u0631.\u0639.',
            num: '512',
            digits: 3,
            format: DEL_CD,
            currency: 'Omani rial',
            countries: ['oman']
        },
        {
            code: 'PAB',
            symbol: 'B/.',
            num: '590',
            digits: 2,
            format: DEL_CD,
            currency: 'Panamanian balboa',
            countries: ['panama']
        },
        {
            code: 'PEN',
            symbol: 'S/.',
            num: '604',
            digits: 2,
            format: DEL_CD,
            currency: 'Peruvian nuevo sol',
            countries: ['peru']
        },
        {
            code: 'PGK',
            symbol: 'K',
            num: '598',
            digits: 2,
            format: DEL_CD,
            currency: 'Papua New Guinean kina',
            countries: ['papua new guinea']
        },
        {
            code: 'PHP',
            symbol: '\u20b1',
            num: '608',
            digits: 2,
            format: DEL_CD,
            currency: 'Philippine peso',
            countries: ['philippines']
        },
        {
            code: 'PKR',
            symbol: '\u20a8',
            num: '586',
            digits: 2,
            format: DEL_CD,
            currency: 'Pakistani rupee',
            countries: ['pakistan']
        },
        {
            code: 'PLN',
            symbol: 'z\u0142',
            num: '985',
            digits: 2,
            format: DEL_SC,
            currency: 'Polish złoty',
            countries: ['poland']
        },
        {
            code: 'PYG',
            symbol: '\u20b2',
            num: '600',
            digits: 0,
            format: DEL_CD,
            currency: 'Paraguayan guaraní',
            countries: ['paraguay']
        },
        {
            code: 'QAR',
            symbol: '\u0631.\u0642',
            num: '634',
            digits: 2,
            format: DEL_CD,
            currency: 'Qatari riyal',
            countries: ['qatar']
        },
        {
            code: 'RON',
            symbol: 'L',
            num: '946',
            digits: 2,
            format: DEL_DC,
            currency: 'Romanian new leu',
            countries: ['romania']
        },
        {
            code: 'RSD',
            symbol: '\u0420\u0421\u0414',
            num: '941',
            digits: 2,
            format: DEL_CD,
            currency: 'Serbian dinar',
            countries: ['serbia']
        },
        {
            code: 'RUB',
            symbol: '\u0440.',
            num: '643',
            digits: 2,
            format: DEL_DC,
            currency: 'Russian rouble',
            countries: ['russia', 'abkhazia', 'south ossetia']
        },
        {
            code: 'RWF',
            symbol: 'FRw',
            num: '646',
            digits: 0,
            format: DEL_CD,
            currency: 'Rwandan franc',
            countries: ['rwanda']
        },
        {
            code: 'SAR',
            symbol: '\u0631.\u0633',
            num: '682',
            digits: 2,
            format: DEL_CD,
            currency: 'Saudi riyal',
            countries: ['saudi arabia']
        },
        {
            code: 'SBD',
            symbol: '\u0024',
            num: '090',
            digits: 2,
            format: DEL_CD,
            currency: 'Solomon Islands dollar',
            countries: ['solomon islands']
        },
        {
            code: 'SCR',
            symbol: '\u20a8',
            num: '690',
            digits: 2,
            format: DEL_CD,
            currency: 'Seychelles rupee',
            countries: ['seychelles']
        },
        {
            code: 'SDG',
            symbol: '\u00a3',
            num: '938',
            digits: 2,
            format: DEL_CD,
            currency: 'Sudanese pound',
            countries: ['sudan']
        },
        {
            code: 'SEK',
            symbol: 'kr',
            num: '752',
            digits: 2,
            format: DEL_SC,
            currency: 'Swedish krona/kronor',
            countries: ['sweden']
        },
        {
            code: 'SGD',
            symbol: '\u0024',
            num: '702',
            digits: 2,
            format: DEL_CD,
            currency: 'Singapore dollar',
            countries: ['singapore', 'brunei']
        },
        {
            code: 'SHP',
            symbol: '\u00a3',
            num: '654',
            digits: 2,
            format: DEL_CD,
            currency: 'Saint Helena pound',
            countries: ['saint helena']
        },
        {
            code: 'SLL',
            symbol: 'Le',
            num: '694',
            digits: 2,
            format: DEL_CD,
            currency: 'Sierra Leonean leone',
            countries: ['sierra leone']
        },
        {
            code: 'SOS',
            symbol: 'Sh',
            num: '706',
            digits: 2,
            format: DEL_CD,
            currency: 'Somali shilling',
            countries: ['somalia']
        },
        {
            code: 'SRD',
            symbol: '\u0024',
            num: '968',
            digits: 2,
            format: DEL_CD,
            currency: 'Surinamese dollar',
            countries: ['suriname']
        },
        {
            code: 'SSP',
            symbol: '\u00a3',
            num: '728',
            digits: 2,
            format: DEL_CD,
            currency: 'South Sudanese pound',
            countries: ['south sudan']
        },
        {
            code: 'STD',
            symbol: 'Db',
            num: '678',
            digits: 2,
            format: DEL_CD,
            currency: 'São Tomé and Príncipe dobra',
            countries: ['são tomé and príncipe']
        },
        {
            code: 'SVC',
            symbol: '\u20a1',
            num: '',
            digits: 2,
            format: DEL_CD,
            currency: 'Salvadoran colon',
            countries: ['el salvador']
        },
        {
            code: 'SYP',
            symbol: '\u00a3S',
            num: '760',
            digits: 2,
            format: DEL_CD,
            currency: 'Syrian pound',
            countries: ['syria']
        },
        {
            code: 'SZL',
            symbol: 'L',
            num: '748',
            digits: 2,
            format: `${comma}${space},${decimal}`,
            currency: 'Swazi lilangeni',
            countries: ['swaziland']
        },
        {
            code: 'THB',
            symbol: '\u0e3f',
            num: '764',
            digits: 2,
            format: DEL_CD,
            currency: 'Thai baht',
            countries: ['thailand']
        },
        {
            code: 'TJS',
            symbol: '\u0405\u041c',
            num: '972',
            digits: 2,
            format: DEL_CD,
            currency: 'Tajikistani somoni',
            countries: ['tajikistan']
        },
        {
            code: 'TMT',
            symbol: 'm',
            num: '934',
            digits: 2,
            format: DEL_CD,
            currency: 'Turkmenistani manat',
            countries: ['turkmenistan']
        },
        {
            code: 'TND',
            symbol: '\u062f.\u062a',
            num: '788',
            digits: 3,
            format: DEL_CD,
            currency: 'Tunisian dinar',
            countries: ['tunisia']
        },
        {
            code: 'TOP',
            symbol: '\u0054\u0024',
            num: '776',
            digits: 2,
            format: DEL_CD,
            currency: 'Tongan paʻanga',
            countries: ['tonga']
        },
        {
            code: 'TRY',
            symbol: 'TL',
            num: '949',
            digits: 2,
            format: DEL_CD,
            currency: 'Turkish lira',
            countries: ['turkey', 'northern cyprus']
        },
        {
            code: 'TTD',
            symbol: '\u0024',
            num: '780',
            digits: 2,
            format: DEL_CD,
            currency: 'Trinidad and Tobago dollar',
            countries: ['trinidad and tobago']
        },
        {
            code: 'TWD',
            symbol: '\u0024',
            num: '901',
            digits: 2,
            format: DEL_CD,
            currency: 'New Taiwan dollar',
            countries: ['republic of china (taiwan)']
        },
        {
            code: 'TZS',
            symbol: 'Sh',
            num: '834',
            digits: 2,
            format: DEL_CD,
            currency: 'Tanzanian shilling',
            countries: ['tanzania']
        },
        {
            code: 'UAH',
            symbol: '\u20b4',
            num: '980',
            digits: 2,
            format: DEL_SC,
            currency: 'Ukrainian hryvnia',
            countries: ['ukraine']
        },
        {
            code: 'UGX',
            symbol: 'USh',
            num: '800',
            digits: 0,
            format: DEL_CD,
            currency: 'Ugandan shilling',
            countries: ['uganda']
        },
        {
            code: 'USD',
            symbol: '\u0024',
            num: '840',
            digits: 2,
            format: DEL_CD,
            currency: 'United States dollar',
            countries: [
                'american samoa', 'barbados', 'bermuda', 'british indian ocean territory',
                'british virgin islands, caribbean netherlands', 'ecuador', 'el salvador',
                'guam', 'haiti', 'marshall islands', 'federated states of micronesia',
                'northern mariana islands', 'palau', 'panama', 'puerto rico', 'timor-leste',
                'turks and caicos islands', 'united states', 'u.s. virgin islands', 'zimbabwe'
            ]
        },
        {
            code: 'UYU',
            symbol: '\u0024',
            num: '858',
            digits: 2,
            format: DEL_DC,
            currency: 'Uruguayan peso',
            countries: ['uruguay']
        },
        {
            code: 'UZS',
            symbol: '\u043b\u0432',
            num: '860',
            digits: 2,
            format: DEL_CD,
            currency: 'Uzbekistan som',
            countries: ['uzbekistan']
        },
        {
            code: 'VEF',
            symbol: 'Bs F',
            num: '937',
            digits: 2,
            format: DEL_DC,
            currency: 'Venezuelan bolívar',
            countries: ['venezuela']
        },
        {
            code: 'VND',
            symbol: '\u20ab',
            num: '704',
            digits: 0,
            format: DEL_DC,
            currency: 'Vietnamese dong',
            countries: ['vietnam']
        },
        {
            code: 'VUV',
            symbol: 'Vt',
            num: '548',
            digits: 0,
            format: DEL_CD,
            currency: 'Vanuatu vatu',
            countries: ['vanuatu']
        },
        {
            code: 'WST',
            symbol: 'SAT$',
            num: '882',
            digits: 2,
            format: DEL_CD,
            currency: 'Samoan tala',
            countries: ['samoa']
        },
        {
            code: 'XAF',
            symbol: 'FCFA',
            num: '950',
            digits: 0,
            format: DEL_CD,
            currency: 'CFA franc BEAC',
            countries: ['cameroon', 'central african republic', 'republic of the congo', 'chad', 'equatorial guinea', 'gabon']
        },
        {
            code: 'XBT',
            symbol: '\u20bf',
            num: '',
            digits: 0,
            format: DEL_CD,
            currency: 'Bitcoin',
            countries: []
        },
        {
            code: 'XCD',
            symbol: '\u0024',
            num: '951',
            digits: 2,
            format: DEL_CD,
            currency: 'East Caribbean dollar',
            countries: [
                'anguilla',
                'antigua and barbuda',
                'dominica',
                'grenada',
                'montserrat',
                'saint kitts and nevis',
                'saint lucia',
                'saint vincent and the grenadines'
            ]
        },
        {
            code: 'XDR',
            symbol: 'SDR',
            num: '960',
            digits: 0,
            format: DEL_CD,
            currency: 'Special drawing rights',
            countries: ['international monetary fund']
        },
        {
            code: 'XOF',
            symbol: 'CFA',
            num: '952',
            digits: 0,
            format: DEL_CD,
            currency: 'CFA franc BCEAO',
            countries: ['benin', 'burkina faso', 'côte d\'ivoire', 'guinea-bissau', 'mali', 'niger', 'senegal', 'togo']
        },
        {
            code: 'XPF',
            symbol: 'Fr',
            num: '953',
            digits: 0,
            format: DEL_CD,
            currency: 'CFP franc (Franc du Pacifique)',
            countries: ['french polynesia', 'new caledonia', 'wallis and futuna']
        },
        {
            code: 'XTS',
            symbol: 'T',
            num: '963',
            digits: 4,
            format: DEL_CD,
            currency: 'Code reserved for testing purposes',
            countries: []
        },
        {
            code: 'XXX',
            symbol: '',
            num: '999',
            digits: 0,
            format: DEL_CD,
            currency: 'No Currency',
            countries: []
        },
        {
            code: 'YER',
            symbol: '\ufdfc',
            num: '886',
            digits: 2,
            format: DEL_CD,
            currency: 'Yemeni rial',
            countries: ['yemen']
        },
        {
            code: 'ZAR',
            symbol: 'R',
            num: '710',
            digits: 2,
            format: DEL_SD,
            currency: 'South African rand',
            countries: ['south africa']
        },
        {
            code: 'ZMW',
            symbol: 'ZK',
            num: '967',
            digits: 2,
            format: DEL_CD,
            currency: 'Zambian kwacha',
            countries: ['zambia']
        },
        {
            code: 'ZWL',
            symbol: '\u0024',
            num: '932',
            digits: 2,
            format: DEL_SD,
            currency: 'Zimbabwean dollar',
            countries: ['zimbabwe']
        }
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3VycmVuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOzs7Ozs7Ozs7Ozs7SUFFSDtRQUNRLE1BQU0sQ0FBQyxLQUFLO1lBQ2xCLE9BQU8sVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQVksRUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVk7WUFDOUIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFVLEVBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFZO1lBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFvQjtZQUN4QyxJQUFJLE1BQU0sR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztZQUNELE9BQU8sY0FBYyxDQUFDLElBQUks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QU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLEVBQUU7U0FDYjtRQUNEO1lBQ0MsSUFBSSxFQUFFLEtBQUs7WUFDWCxNQUFNLEVBQUUsUUFBUTtZQUNoQixHQUFHLEVBQUUsS0FBSztZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDcEI7UUFDRDtZQUNDLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxHQUFHLEVBQUUsS0FBSztZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUMzQjtRQUNEO1lBQ0MsSUFBSSxFQUFFLEtBQUs7WUFDWCxNQUFNLEVBQUUsSUFBSTtZQUNaLEdBQUcsRUFBRSxLQUFLO1lBQ1YsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ3JCO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3ZCO0tBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBVdGlsc1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeSB7XG5cdHB1YmxpYyBzdGF0aWMgY29kZXMoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiBzb3J0QnlDb2RlKENVUlJFTkNZX0NPREVTKS5tYXAoKGNjOiBJQ3VyQ29kZSk6IHN0cmluZyA9PiBjYy5jb2RlKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY29kZShjb2RlOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGNvZGUgPSBjb2RlLnRvVXBwZXJDYXNlKCk7XG5cdFx0cmV0dXJuIHRoaXMuY29kZXMoKS5maW5kKChjYzogc3RyaW5nKTogYm9vbGVhbiA9PiBjYyA9PT0gY29kZSk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGNvdW50cnkobmFtZTogc3RyaW5nKTogSUN1ckNvZGVbXSB7XG5cdFx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gQ1VSUkVOQ1lfQ09ERVMuZmlsdGVyKGMgPT4ge1xuXHRcdFx0cmV0dXJuIChjLmNvdW50cmllcyB8fCBbXSkuaW5kZXhPZihuYW1lKSA+IC0xO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBudW1iZXIobnVtOiBudW1iZXIgfCBzdHJpbmcpOiBJQ3VyQ29kZSB8IHVuZGVmaW5lZCB7XG5cdFx0bGV0IG51bVN0cjogc3RyaW5nID0gbnVtLnRvU3RyaW5nKCk7XG5cdFx0aWYgKHR5cGVvZiBudW0gPT09ICdudW1iZXInKSB7XG5cdFx0XHRudW1TdHIgPSAoJzAwMCcgKyBudW0pLnN1YnN0cigtMyk7XG5cdFx0fVxuXHRcdHJldHVybiBDVVJSRU5DWV9DT0RFUy5maW5kKChjYzogSUN1ckNvZGUpOiBib29sZWFuID0+IGNjLm51bSA9PT0gbnVtU3RyKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY291bnRyaWVzKCk6IHN0cmluZ1tdIHtcblx0XHRjb25zdCBsaXN0OiBzdHJpbmdbXSA9IFtdO1xuXHRcdENVUlJFTkNZX0NPREVTLm1hcChjYyA9PiBjYy5jb3VudHJpZXMpLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGwgJiYgaXRlbS5sZW5ndGgpIHtcblx0XHRcdFx0aXRlbS5mb3JFYWNoKGNvdW50cnkgPT4ge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YoY291bnRyeSkgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnB1c2goY291bnRyeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gbGlzdDtcblx0fVxufVxuXG5mdW5jdGlvbiBzb3J0QnlDb2RlKGxpc3Q6IElDdXJDb2RlW10pOiBJQ3VyQ29kZVtdIHtcblx0cmV0dXJuIGxpc3Quc29ydCgoY2E6IElDdXJDb2RlLCBjYjogSUN1ckNvZGUpOiBudW1iZXIgPT4ge1xuXHRcdGlmIChjYS5jb2RlIDwgY2IuY29kZSkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH0gZWxzZSBpZiAoY2EuY29kZSA+IGNiLmNvZGUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH0pO1xufVxuXG5jb25zdCBzcGFjZSA9ICdcXHUwMDIwJztcbmNvbnN0IGFwb3N0cm9waGUgPSAnXFx1MDAyNyc7XG5jb25zdCBjb21tYSA9ICdcXHUwMDJjJztcbmNvbnN0IGRlY2ltYWwgPSAnXFx1MDAyZSc7XG5jb25zdCBERUxfQ0QgPSBgJHtjb21tYX0sJHtkZWNpbWFsfWA7XG5jb25zdCBERUxfREMgPSBgJHtkZWNpbWFsfSwke2NvbW1hfWA7XG5jb25zdCBERUxfU0QgPSBgJHtzcGFjZX0sJHtkZWNpbWFsfWA7XG5jb25zdCBERUxfU0MgPSBgJHtzcGFjZX0sJHtjb21tYX1gO1xuY29uc3QgREVMX0FEID0gYCR7YXBvc3Ryb3BoZX0sJHtkZWNpbWFsfWA7XG5cbmludGVyZmFjZSBJQ3VyQ29kZSB7XG5cdGNvZGU6IHN0cmluZztcblx0c3ltYm9sOiBzdHJpbmc7XG5cdG51bTogc3RyaW5nO1xuXHRkaWdpdHM6IG51bWJlcjtcblx0Zm9ybWF0OiBzdHJpbmc7XG5cdGN1cnJlbmN5OiBzdHJpbmc7XG5cdGNvdW50cmllczogc3RyaW5nW107XG59XG5cbmNvbnN0IENVUlJFTkNZX0NPREVTOiBJQ3VyQ29kZVtdID0gW1xuXHR7XG5cdFx0Y29kZTogJ0FFRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyZi5cXHUwNjI1Jyxcblx0XHRudW06ICc3ODQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzIGRpcmhhbScsXG5cdFx0Y291bnRyaWVzOiBbJ3VuaXRlZCBhcmFiIGVtaXJhdGVzJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBRk4nLFxuXHRcdHN5bWJvbDogJ1xcdTA2MGInLFxuXHRcdG51bTogJzk3MScsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQWZnaGFuIGFmZ2hhbmknLFxuXHRcdGNvdW50cmllczogWydhZmdoYW5pc3RhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQUxMJyxcblx0XHRzeW1ib2w6ICdcXHUwMDRjXFx1MDA2NVxcdTAwNmInLFxuXHRcdG51bTogJzAwOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQWxiYW5pYW4gbGVrJyxcblx0XHRjb3VudHJpZXM6IFsnYWxiYW5pYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQU1EJyxcblx0XHRzeW1ib2w6ICdcXHUwNTY0XFx1MDU4MC4nLFxuXHRcdG51bTogJzA1MScsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQXJtZW5pYW4gZHJhbScsXG5cdFx0Y291bnRyaWVzOiBbJ2FybWVuaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0FORycsXG5cdFx0c3ltYm9sOiAnXFx1MDE5MicsXG5cdFx0bnVtOiAnNTMyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdOZXRoZXJsYW5kcyBBbnRpbGxlYW4gZ3VpbGRlcicsXG5cdFx0Y291bnRyaWVzOiBbJ2N1cmHDp2FvJywgJ3NpbnQgbWFhcnRlbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQU9BJyxcblx0XHRzeW1ib2w6ICdLeicsXG5cdFx0bnVtOiAnOTczJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdBbmdvbGFuIGt3YW56YScsXG5cdFx0Y291bnRyaWVzOiBbJ2FuZ29sYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQVJTJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcwMzInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ0FyZ2VudGluZSBwZXNvJyxcblx0XHRjb3VudHJpZXM6IFsnYXJnZW50aW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBVUQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzAzNicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX1NELFxuXHRcdGN1cnJlbmN5OiAnQXVzdHJhbGlhbiBkb2xsYXInLFxuXHRcdGNvdW50cmllczogW1xuXHRcdFx0J2F1c3RyYWxpYScsXG5cdFx0XHQnYXVzdHJhbGlhbiBhbnRhcmN0aWMgdGVycml0b3J5Jyxcblx0XHRcdCdjaHJpc3RtYXMgaXNsYW5kJyxcblx0XHRcdCdjb2NvcyAoa2VlbGluZykgaXNsYW5kcycsXG5cdFx0XHQnaGVhcmQgYW5kIG1jZG9uYWxkIGlzbGFuZHMnLFxuXHRcdFx0J2tpcmliYXRpJyxcblx0XHRcdCduYXVydScsXG5cdFx0XHQnbm9yZm9sayBpc2xhbmQnLFxuXHRcdFx0J3R1dmFsdSdcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQVdHJyxcblx0XHRzeW1ib2w6ICdcXHUwMTkyJyxcblx0XHRudW06ICc1MzMnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0FydWJhbiBmbG9yaW4nLFxuXHRcdGNvdW50cmllczogWydhcnViYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQVpOJyxcblx0XHRzeW1ib2w6ICdcXHUyMGJjJyxcblx0XHRudW06ICc5NDQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0F6ZXJiYWlqYW5pIG1hbmF0Jyxcblx0XHRjb3VudHJpZXM6IFsnYXplcmJhaWphbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQkFNJyxcblx0XHRzeW1ib2w6ICdcXHUwNDFhXFx1MDQxYycsXG5cdFx0bnVtOiAnOTc3Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hIGNvbnZlcnRpYmxlIG1hcmsnLFxuXHRcdGNvdW50cmllczogWydib3NuaWEgYW5kIGhlcnplZ292aW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCQkQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzA1MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQmFyYmFkb3MgZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnYmFyYmFkb3MnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0JEVCcsXG5cdFx0c3ltYm9sOiAnXFx1MDlmMycsXG5cdFx0bnVtOiAnMDUwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCYW5nbGFkZXNoaSB0YWthJyxcblx0XHRjb3VudHJpZXM6IFsnYmFuZ2xhZGVzaCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQkdOJyxcblx0XHRzeW1ib2w6ICdcXHUwNDNiXFx1MDQzMicsXG5cdFx0bnVtOiAnOTc1Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCdWxnYXJpYW4gbGV2Jyxcblx0XHRjb3VudHJpZXM6IFsnYnVsZ2FyaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0JIRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyOC5cXHUwNjJmJyxcblx0XHRudW06ICcwNDgnLFxuXHRcdGRpZ2l0czogMyxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0JhaHJhaW5pIGRpbmFyJyxcblx0XHRjb3VudHJpZXM6IFsnYmFocmFpbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQklGJyxcblx0XHRzeW1ib2w6ICdGcicsXG5cdFx0bnVtOiAnMTA4Jyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCdXJ1bmRpYW4gZnJhbmMnLFxuXHRcdGNvdW50cmllczogWydidXJ1bmRpJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCTUQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzA2MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQmVybXVkaWFuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ2Jlcm11ZGEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0JORCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMDk2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCcnVuZWkgZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnYnJ1bmVpJywgJ3NpbmdhcG9yZSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQk9CJyxcblx0XHRzeW1ib2w6ICdCcy4nLFxuXHRcdG51bTogJzA2OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQm9saXZpYW5vJyxcblx0XHRjb3VudHJpZXM6IFsnYm9saXZpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQlJMJyxcblx0XHRzeW1ib2w6ICdcXHUwMDUyXFx1MDAyNCcsXG5cdFx0bnVtOiAnOTg2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdCcmF6aWxpYW4gcmVhbCcsXG5cdFx0Y291bnRyaWVzOiBbJ2JyYXppbCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQlNEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcwNDQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0JhaGFtaWFuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ2JhaGFtYXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0JUTicsXG5cdFx0c3ltYm9sOiAnTnUuJyxcblx0XHRudW06ICcwNjQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0JodXRhbmVzZSBuZ3VsdHJ1bScsXG5cdFx0Y291bnRyaWVzOiBbJ2JodXRhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQldQJyxcblx0XHRzeW1ib2w6ICdQJyxcblx0XHRudW06ICcwNzInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0JvdHN3YW5hIHB1bGEnLFxuXHRcdGNvdW50cmllczogWydib3Rzd2FuYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQllOJyxcblx0XHRzeW1ib2w6ICdCcicsXG5cdFx0bnVtOiAnOTMzJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdOZXcgQmVsYXJ1c2lhbiBydWJsZScsXG5cdFx0Y291bnRyaWVzOiBbJ2JlbGFydXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0JaRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMDg0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCZWxpemUgZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnYmVsaXplJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDQUQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzEyNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ2FuYWRpYW4gZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnY2FuYWRhJywgJ3NhaW50IHBpZXJyZSBhbmQgbWlxdWVsb24nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0NERicsXG5cdFx0c3ltYm9sOiAnRnInLFxuXHRcdG51bTogJzk3NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ29uZ29sZXNlIGZyYW5jJyxcblx0XHRjb3VudHJpZXM6IFsnZGVtb2NyYXRpYyByZXB1YmxpYyBvZiBjb25nbyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQ0hGJyxcblx0XHRzeW1ib2w6ICdGcicsXG5cdFx0bnVtOiAnNzU2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQUQsXG5cdFx0Y3VycmVuY3k6ICdTd2lzcyBmcmFuYycsXG5cdFx0Y291bnRyaWVzOiBbJ3N3aXR6ZXJsYW5kJywgJ2xpZWNodGVuc3RlaW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0NMUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMTUyJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdDaGlsZWFuIHBlc28nLFxuXHRcdGNvdW50cmllczogWydjaGlsZSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQ05ZJyxcblx0XHRzeW1ib2w6ICdcXHUwMGE1Jyxcblx0XHRudW06ICcxNTYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0NoaW5lc2UgeXVhbicsXG5cdFx0Y291bnRyaWVzOiBbJ2NoaW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDT1AnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzE3MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnQ29sb21iaWFuIHBlc28nLFxuXHRcdGNvdW50cmllczogWydjb2xvbWJpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQ1JDJyxcblx0XHRzeW1ib2w6ICdcXHUyMGExJyxcblx0XHRudW06ICcxODgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ0Nvc3RhIFJpY2FuIGNvbG9uJyxcblx0XHRjb3VudHJpZXM6IFsnY29zdGEgcmljYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQ1VQJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcxOTInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0N1YmFuIHBlc28nLFxuXHRcdGNvdW50cmllczogWydjdWJhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDVkUnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzEzMicsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ2FwZSBWZXJkZSBlc2N1ZG8nLFxuXHRcdGNvdW50cmllczogWydjYXBlIHZlcmRlJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDWksnLFxuXHRcdHN5bWJvbDogJ0tcXHUwMTBkJyxcblx0XHRudW06ICcyMDMnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ0N6ZWNoIGtvcnVuYScsXG5cdFx0Y291bnRyaWVzOiBbJ2N6ZWNoIHJlcHVibGljJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdESkYnLFxuXHRcdHN5bWJvbDogJ0ZkaicsXG5cdFx0bnVtOiAnMjYyJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdEamlib3V0aWFuIGZyYW5jJyxcblx0XHRjb3VudHJpZXM6IFsnZGppYm91dGknXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0RLSycsXG5cdFx0c3ltYm9sOiAna3InLFxuXHRcdG51bTogJzIwOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnRGFuaXNoIGtyb25lJyxcblx0XHRjb3VudHJpZXM6IFsnZGVubWFyaycsICdmYXJvZSBpc2xhbmRzJywgJ2dyZWVubGFuZCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnRE9QJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcyMTQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0RvbWluaWNhbiBwZXNvJyxcblx0XHRjb3VudHJpZXM6IFsnZG9taW5pY2FuIHJlcHVibGljJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdEWkQnLFxuXHRcdHN5bWJvbDogJ1xcdTA2MmYuXFx1MDYyYycsXG5cdFx0bnVtOiAnMDEyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdBbGdlcmlhbiBkaW5hcicsXG5cdFx0Y291bnRyaWVzOiBbJ2FsZ2VyaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0VHUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyYy5cXHUwNjQ1Jyxcblx0XHRudW06ICc4MTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0VneXB0aWFuIHBvdW5kJyxcblx0XHRjb3VudHJpZXM6IFsnZWd5cHQnLCAncGFsZXN0aW5pYW4gdGVycml0b3JpZXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0VSTicsXG5cdFx0c3ltYm9sOiAnTmZrJyxcblx0XHRudW06ICcyMzInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0VyaXRyZWFuIG5ha2ZhJyxcblx0XHRjb3VudHJpZXM6IFsnZXJpdHJlYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnRVRCJyxcblx0XHRzeW1ib2w6ICdCcicsXG5cdFx0bnVtOiAnMjMwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdFdGhpb3BpYW4gYmlycicsXG5cdFx0Y291bnRyaWVzOiBbJ2V0aGlvcGlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdFVVInLFxuXHRcdHN5bWJvbDogJ1xcdTIwYWMnLFxuXHRcdG51bTogJzk3OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnRXVybycsXG5cdFx0Y291bnRyaWVzOiBbXG5cdFx0XHQnYW5kb3JyYScsICdhdXN0cmlhJywgJ2JlbGdpdW0nLCAnY3lwcnVzJywgJ2VzdG9uaWEnLCAnZmlubGFuZCcsICdmcmFuY2UnLFxuXHRcdFx0J2dlcm1hbnknLCAnZ3JlZWNlJywgJ2lyZWxhbmQnLCAnaXRhbHknLCAna29zb3ZvJywgJ2x1eGVtYm91cmcnLCAnbWFsdGEnLFxuXHRcdFx0J21vbmFjbycsICdtb250ZW5lZ3JvJywgJ25ldGhlcmxhbmRzJywgJ3BvcnR1Z2FsJywgJ3NhbiBtYXJpbm8nLCAnc2xvdmFraWEnLFxuXHRcdFx0J3Nsb3ZlbmlhJywgJ3NwYWluJywgJ3ZhdGljYW4gY2l0eSdcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnRkpEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcyNDInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0ZpamkgZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnZmlqaSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnRktQJyxcblx0XHRzeW1ib2w6ICdcXHUwMGEzJyxcblx0XHRudW06ICcyMzgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0ZhbGtsYW5kIElzbGFuZHMgcG91bmQnLFxuXHRcdGNvdW50cmllczogWydmYWxrbGFuZCBpc2xhbmRzJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdHQlAnLFxuXHRcdHN5bWJvbDogJ1xcdTAwYTMnLFxuXHRcdG51bTogJzgyNicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnUG91bmQgc3RlcmxpbmcnLFxuXHRcdGNvdW50cmllczogW1xuXHRcdFx0J3VuaXRlZCBraW5nZG9tJyxcblx0XHRcdCdicml0aXNoIGNyb3duIGRlcGVuZGVuY2llcyAodGhlICBpc2xlIG9mIG1hbiBhbmQgdGhlIGNoYW5uZWwgaXNsYW5kcyknLFxuXHRcdFx0J3NvdXRoIGdlb3JnaWEgYW5kIHRoZSBzb3V0aCBzYW5kd2ljaCBpc2xhbmRzJyxcblx0XHRcdCdicml0aXNoIGFudGFyY3RpYyB0ZXJyaXRvcnknLFxuXHRcdFx0J2JyaXRpc2ggaW5kaWFuIG9jZWFuIHRlcnJpdG9yeSdcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnR0VMJyxcblx0XHRzeW1ib2w6ICdcXHUxMGRhJyxcblx0XHRudW06ICc5ODEnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0dlb3JnaWFuIGxhcmknLFxuXHRcdGNvdW50cmllczogWydnZW9yZ2lhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdHSFMnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYjUnLFxuXHRcdG51bTogJzkzNicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnR2hhbmFpYW4gY2VkaScsXG5cdFx0Y291bnRyaWVzOiBbJ2doYW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdHSVAnLFxuXHRcdHN5bWJvbDogJ1xcdTAwYTMnLFxuXHRcdG51bTogJzI5MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnR2licmFsdGFyIHBvdW5kJyxcblx0XHRjb3VudHJpZXM6IFsnZ2licmFsdGFyJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdHTUQnLFxuXHRcdHN5bWJvbDogJ0QnLFxuXHRcdG51bTogJzI3MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnR2FtYmlhbiBkYWxhc2knLFxuXHRcdGNvdW50cmllczogWydnYW1iaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0dORicsXG5cdFx0c3ltYm9sOiAnRnInLFxuXHRcdG51bTogJzMyNCcsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnR3VpbmVhbiBmcmFuYycsXG5cdFx0Y291bnRyaWVzOiBbJ2d1aW5lYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnR1RRJyxcblx0XHRzeW1ib2w6ICdRJyxcblx0XHRudW06ICczMjAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0d1YXRlbWFsYW4gcXVldHphbCcsXG5cdFx0Y291bnRyaWVzOiBbJ2d1YXRlbWFsYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnR1lEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICczMjgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0d1eWFuZXNlIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ2d1eWFuYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSEtEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICczNDQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0hvbmcgS29uZyBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydob25nIGtvbmcnLCAnbWFjYW8nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0hOTCcsXG5cdFx0c3ltYm9sOiAnTCcsXG5cdFx0bnVtOiAnMzQwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdIb25kdXJhbiBsZW1waXJhJyxcblx0XHRjb3VudHJpZXM6IFsnaG9uZHVyYXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0hSSycsXG5cdFx0c3ltYm9sOiAna24nLFxuXHRcdG51bTogJzE5MScsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnQ3JvYXRpYW4ga3VuYScsXG5cdFx0Y291bnRyaWVzOiBbJ2Nyb2F0aWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0hURycsXG5cdFx0c3ltYm9sOiAnRycsXG5cdFx0bnVtOiAnMzMyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdIYWl0aWFuIGdvdXJkZScsXG5cdFx0Y291bnRyaWVzOiBbJ2hhaXRpJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdIVUYnLFxuXHRcdHN5bWJvbDogJ0Z0Jyxcblx0XHRudW06ICczNDgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ0h1bmdhcmlhbiBmb3JpbnQnLFxuXHRcdGNvdW50cmllczogWydodW5nYXJ5J11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdJRFInLFxuXHRcdHN5bWJvbDogJ1JwJyxcblx0XHRudW06ICczNjAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ0luZG9uZXNpYW4gcnVwaWFoJyxcblx0XHRjb3VudHJpZXM6IFsnaW5kb25lc2lhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdJTFMnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYWEnLFxuXHRcdG51bTogJzM3NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnSXNyYWVsaSBuZXcgc2hla2VsJyxcblx0XHRjb3VudHJpZXM6IFsnaXNyYWVsJywgJ3BhbGVzdGluaWFuIHRlcnJpdG9yaWVzJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdJTlInLFxuXHRcdHN5bWJvbDogJ1xcdTIwYjknLFxuXHRcdG51bTogJzM1NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnSW5kaWFuIHJ1cGVlJyxcblx0XHRjb3VudHJpZXM6IFsnaW5kaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0lRRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYzOS5cXHUwNjJmJyxcblx0XHRudW06ICczNjgnLFxuXHRcdGRpZ2l0czogMyxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0lyYXFpIGRpbmFyJyxcblx0XHRjb3VudHJpZXM6IFsnaXJhcSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSVJSJyxcblx0XHRzeW1ib2w6ICdcXHVmZGZjJyxcblx0XHRudW06ICczNjQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0lyYW5pYW4gcmlhbCcsXG5cdFx0Y291bnRyaWVzOiBbJ2lyYW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0lTSycsXG5cdFx0c3ltYm9sOiAna3InLFxuXHRcdG51bTogJzM1MicsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnSWNlbGFuZGljIGtyw7NuYScsXG5cdFx0Y291bnRyaWVzOiBbJ2ljZWxhbmQnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0pNRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMzg4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdKYW1haWNhbiBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydqYW1haWNhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdKT0QnLFxuXHRcdHN5bWJvbDogJ1xcdTA2MmYuXFx1MDYyNycsXG5cdFx0bnVtOiAnNDAwJyxcblx0XHRkaWdpdHM6IDMsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdKb3JkYW5pYW4gZGluYXInLFxuXHRcdGNvdW50cmllczogWydqb3JkYW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0pQWScsXG5cdFx0c3ltYm9sOiAnXFx1MDBhNScsXG5cdFx0bnVtOiAnMzkyJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdKYXBhbmVzZSB5ZW4nLFxuXHRcdGNvdW50cmllczogWydqYXBhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS0VTJyxcblx0XHRzeW1ib2w6ICdLU2gnLFxuXHRcdG51bTogJzQwNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnS2VueWFuIHNoaWxsaW5nJyxcblx0XHRjb3VudHJpZXM6IFsna2VueWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0tHUycsXG5cdFx0c3ltYm9sOiAnc29tJyxcblx0XHRudW06ICc0MTcnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0t5cmd5enN0YW5pIHNvbScsXG5cdFx0Y291bnRyaWVzOiBbJ2t5cmd5enN0YW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0tIUicsXG5cdFx0c3ltYm9sOiAnXFx1MTdkYicsXG5cdFx0bnVtOiAnMTE2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdDYW1ib2RpYW4gcmllbCcsXG5cdFx0Y291bnRyaWVzOiBbJ2NhbWJvZGlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdLTUYnLFxuXHRcdHN5bWJvbDogJ0ZyJyxcblx0XHRudW06ICcxNzQnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0NvbW9ybyBmcmFuYycsXG5cdFx0Y291bnRyaWVzOiBbJ2NvbW9yb3MnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0tQVycsXG5cdFx0c3ltYm9sOiAnXFx1MjBhOScsXG5cdFx0bnVtOiAnNDA4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdOb3J0aCBLb3JlYW4gd29uJyxcblx0XHRjb3VudHJpZXM6IFsnbm9ydGgga29yZWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0tSVycsXG5cdFx0c3ltYm9sOiAnXFx1MjBhOScsXG5cdFx0bnVtOiAnNDEwJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTb3V0aCBLb3JlYW4gd29uJyxcblx0XHRjb3VudHJpZXM6IFsnc291dGgga29yZWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0tXRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyZi5cXHUwNjQzJyxcblx0XHRudW06ICc0MTQnLFxuXHRcdGRpZ2l0czogMyxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0t1d2FpdGkgZGluYXInLFxuXHRcdGNvdW50cmllczogWydrdXdhaXQnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0tZRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMTM2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdDYXltYW4gSXNsYW5kcyBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydjYXltYW4gaXNsYW5kcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS1pUJyxcblx0XHRzeW1ib2w6ICdcXHUzMDEyJyxcblx0XHRudW06ICczOTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0themFraHN0YW5pIHRlbmdlJyxcblx0XHRjb3VudHJpZXM6IFsna2F6YWtoc3RhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTEFLJyxcblx0XHRzeW1ib2w6ICdcXHUyMGFkJyxcblx0XHRudW06ICc0MTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0xhbyBraXAnLFxuXHRcdGNvdW50cmllczogWydsYW9zJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdMQlAnLFxuXHRcdHN5bWJvbDogJ1xcdTA2NDQuXFx1MDY0NCcsXG5cdFx0bnVtOiAnNDIyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfU0QsXG5cdFx0Y3VycmVuY3k6ICdMZWJhbmVzZSBwb3VuZCcsXG5cdFx0Y291bnRyaWVzOiBbJ2xlYmFub24nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0xLUicsXG5cdFx0c3ltYm9sOiAnXFx1MjBhOCcsXG5cdFx0bnVtOiAnMTQ0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTcmkgTGFua2FuIHJ1cGVlJyxcblx0XHRjb3VudHJpZXM6IFsnc3JpIGxhbmthJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdMUkQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzQzMCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTGliZXJpYW4gZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnbGliZXJpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTFNMJyxcblx0XHRzeW1ib2w6ICdMJyxcblx0XHRudW06ICc0MjYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0xlc290aG8gbG90aScsXG5cdFx0Y291bnRyaWVzOiBbJ2xlc290aG8nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0xZRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDY0NC5cXHUwNjJmJyxcblx0XHRudW06ICc0MzQnLFxuXHRcdGRpZ2l0czogMyxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0xpYnlhbiBkaW5hcicsXG5cdFx0Y291bnRyaWVzOiBbJ2xpYnlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNQUQnLFxuXHRcdHN5bWJvbDogJ1xcdTA2MmYuXFx1MDY0NS4nLFxuXHRcdG51bTogJzUwNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTW9yb2NjYW4gZGlyaGFtJyxcblx0XHRjb3VudHJpZXM6IFsnbW9yb2NjbyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTURMJyxcblx0XHRzeW1ib2w6ICdMJyxcblx0XHRudW06ICc0OTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ01vbGRvdmFuIGxldScsXG5cdFx0Y291bnRyaWVzOiBbJ21vbGRvdmEgKGV4Y2VwdCAgdHJhbnNuaXN0cmlhKSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTUdBJyxcblx0XHRzeW1ib2w6ICdBcicsXG5cdFx0bnVtOiAnOTY5Jyxcblx0XHRkaWdpdHM6IDEsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNYWxhZ2FzeSBhcmlhcnknLFxuXHRcdGNvdW50cmllczogWydtYWRhZ2FzY2FyJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNS0QnLFxuXHRcdHN5bWJvbDogJ1xcdTA0MzRcXHUwNDM1XFx1MDQzZCcsXG5cdFx0bnVtOiAnODA3Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNYWNlZG9uaWFuIGRlbmFyJyxcblx0XHRjb3VudHJpZXM6IFsnbWFjZWRvbmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNTUsnLFxuXHRcdHN5bWJvbDogJ0snLFxuXHRcdG51bTogJzEwNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTXlhbm1hIGt5YXQnLFxuXHRcdGNvdW50cmllczogWydteWFubWFyJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNTlQnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYWUnLFxuXHRcdG51bTogJzQ5NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTW9uZ29saWFuIHR1Z3JpaycsXG5cdFx0Y291bnRyaWVzOiBbJ21vbmdvbGlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNT1AnLFxuXHRcdHN5bWJvbDogJ1AnLFxuXHRcdG51bTogJzQ0NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTWFjYW5lc2UgcGF0YWNhJyxcblx0XHRjb3VudHJpZXM6IFsnbWFjYW8nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01STycsXG5cdFx0c3ltYm9sOiAnVU0nLFxuXHRcdG51bTogJzQ3OCcsXG5cdFx0ZGlnaXRzOiAxLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTWF1cml0YW5pYW4gb3VndWl5YScsXG5cdFx0Y291bnRyaWVzOiBbJ21hdXJpdGFuaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01VUicsXG5cdFx0c3ltYm9sOiAnXFx1MjBhOCcsXG5cdFx0bnVtOiAnNDgwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNYXVyaXRpYW4gcnVwZWUnLFxuXHRcdGNvdW50cmllczogWydtYXVyaXRpdXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01WUicsXG5cdFx0c3ltYm9sOiAnTVZSJyxcblx0XHRudW06ICc0NjInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ01hbGRpdmlhbiBydWZpeWFhJyxcblx0XHRjb3VudHJpZXM6IFsnbWFsZGl2ZXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01XSycsXG5cdFx0c3ltYm9sOiAnTUsnLFxuXHRcdG51bTogJzQ1NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTWFsYXdpYW4ga3dhY2hhJyxcblx0XHRjb3VudHJpZXM6IFsnbWFsYXdpJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNWE4nLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzQ4NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTWV4aWNhbiBwZXNvJyxcblx0XHRjb3VudHJpZXM6IFsnbWV4aWNvJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNWVInLFxuXHRcdHN5bWJvbDogJ1JNJyxcblx0XHRudW06ICc0NTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ01hbGF5c2lhbiByaW5nZ2l0Jyxcblx0XHRjb3VudHJpZXM6IFsnbWFsYXlzaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01aTicsXG5cdFx0c3ltYm9sOiAnTVRuJyxcblx0XHRudW06ICc5NDMnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ01vemFtYmljYW4gbWV0aWNhbCcsXG5cdFx0Y291bnRyaWVzOiBbJ21vemFtYmlxdWUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ05BRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnNTE2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdOYW1pYmlhbiBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWyduYW1pYmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdOR04nLFxuXHRcdHN5bWJvbDogJ1xcdTIwYTYnLFxuXHRcdG51bTogJzU2NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTmlnZXJpYW4gbmFpcmEnLFxuXHRcdGNvdW50cmllczogWyduaWdlcmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdOSU8nLFxuXHRcdHN5bWJvbDogJ1xcdTAwNDNcXHUwMDI0Jyxcblx0XHRudW06ICc1NTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05pY2FyYWd1YW4gY8OzcmRvYmEnLFxuXHRcdGNvdW50cmllczogWyduaWNhcmFndWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ05PSycsXG5cdFx0c3ltYm9sOiAna3InLFxuXHRcdG51bTogJzU3OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnTm9yd2VnaWFuIGtyb25lJyxcblx0XHRjb3VudHJpZXM6IFsnbm9yd2F5JywgJ3N2YWxiYXJkJywgJ2phbiBtYXllbicsICdib3V2ZXQgaXNsYW5kJywgJ3F1ZWVuIG1hdWQgbGFuZCcsICdwZXRlciBpIGlzbGFuZCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTlBSJyxcblx0XHRzeW1ib2w6ICdcXHUyMGE4Jyxcblx0XHRudW06ICc1MjQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05lcGFsZXNlIHJ1cGVlJyxcblx0XHRjb3VudHJpZXM6IFsnbmVwYWwnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ05aRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnNTU0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdOZXcgWmVhbGFuZCBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydjb29rIGlzbGFuZHMnLCAnbmV3IHplYWxhbmQnLCAnbml1ZScsICdwaXRjYWlybicsICd0b2tlbGF1JywgJ3Jvc3MgZGVwZW5kZW5jeSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnT01SJyxcblx0XHRzeW1ib2w6ICdcXHUwNjMxLlxcdTA2MzkuJyxcblx0XHRudW06ICc1MTInLFxuXHRcdGRpZ2l0czogMyxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ09tYW5pIHJpYWwnLFxuXHRcdGNvdW50cmllczogWydvbWFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdQQUInLFxuXHRcdHN5bWJvbDogJ0IvLicsXG5cdFx0bnVtOiAnNTkwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdQYW5hbWFuaWFuIGJhbGJvYScsXG5cdFx0Y291bnRyaWVzOiBbJ3BhbmFtYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnUEVOJyxcblx0XHRzeW1ib2w6ICdTLy4nLFxuXHRcdG51bTogJzYwNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnUGVydXZpYW4gbnVldm8gc29sJyxcblx0XHRjb3VudHJpZXM6IFsncGVydSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnUEdLJyxcblx0XHRzeW1ib2w6ICdLJyxcblx0XHRudW06ICc1OTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1BhcHVhIE5ldyBHdWluZWFuIGtpbmEnLFxuXHRcdGNvdW50cmllczogWydwYXB1YSBuZXcgZ3VpbmVhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdQSFAnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYjEnLFxuXHRcdG51bTogJzYwOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnUGhpbGlwcGluZSBwZXNvJyxcblx0XHRjb3VudHJpZXM6IFsncGhpbGlwcGluZXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1BLUicsXG5cdFx0c3ltYm9sOiAnXFx1MjBhOCcsXG5cdFx0bnVtOiAnNTg2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdQYWtpc3RhbmkgcnVwZWUnLFxuXHRcdGNvdW50cmllczogWydwYWtpc3RhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnUExOJyxcblx0XHRzeW1ib2w6ICd6XFx1MDE0MicsXG5cdFx0bnVtOiAnOTg1Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfU0MsXG5cdFx0Y3VycmVuY3k6ICdQb2xpc2ggesWCb3R5Jyxcblx0XHRjb3VudHJpZXM6IFsncG9sYW5kJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdQWUcnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYjInLFxuXHRcdG51bTogJzYwMCcsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnUGFyYWd1YXlhbiBndWFyYW7DrScsXG5cdFx0Y291bnRyaWVzOiBbJ3BhcmFndWF5J11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdRQVInLFxuXHRcdHN5bWJvbDogJ1xcdTA2MzEuXFx1MDY0MicsXG5cdFx0bnVtOiAnNjM0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdRYXRhcmkgcml5YWwnLFxuXHRcdGNvdW50cmllczogWydxYXRhciddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnUk9OJyxcblx0XHRzeW1ib2w6ICdMJyxcblx0XHRudW06ICc5NDYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ1JvbWFuaWFuIG5ldyBsZXUnLFxuXHRcdGNvdW50cmllczogWydyb21hbmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdSU0QnLFxuXHRcdHN5bWJvbDogJ1xcdTA0MjBcXHUwNDIxXFx1MDQxNCcsXG5cdFx0bnVtOiAnOTQxJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTZXJiaWFuIGRpbmFyJyxcblx0XHRjb3VudHJpZXM6IFsnc2VyYmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdSVUInLFxuXHRcdHN5bWJvbDogJ1xcdTA0NDAuJyxcblx0XHRudW06ICc2NDMnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ1J1c3NpYW4gcm91YmxlJyxcblx0XHRjb3VudHJpZXM6IFsncnVzc2lhJywgJ2Fia2hhemlhJywgJ3NvdXRoIG9zc2V0aWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1JXRicsXG5cdFx0c3ltYm9sOiAnRlJ3Jyxcblx0XHRudW06ICc2NDYnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1J3YW5kYW4gZnJhbmMnLFxuXHRcdGNvdW50cmllczogWydyd2FuZGEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NBUicsXG5cdFx0c3ltYm9sOiAnXFx1MDYzMS5cXHUwNjMzJyxcblx0XHRudW06ICc2ODInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NhdWRpIHJpeWFsJyxcblx0XHRjb3VudHJpZXM6IFsnc2F1ZGkgYXJhYmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTQkQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzA5MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU29sb21vbiBJc2xhbmRzIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ3NvbG9tb24gaXNsYW5kcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU0NSJyxcblx0XHRzeW1ib2w6ICdcXHUyMGE4Jyxcblx0XHRudW06ICc2OTAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NleWNoZWxsZXMgcnVwZWUnLFxuXHRcdGNvdW50cmllczogWydzZXljaGVsbGVzJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTREcnLFxuXHRcdHN5bWJvbDogJ1xcdTAwYTMnLFxuXHRcdG51bTogJzkzOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU3VkYW5lc2UgcG91bmQnLFxuXHRcdGNvdW50cmllczogWydzdWRhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU0VLJyxcblx0XHRzeW1ib2w6ICdrcicsXG5cdFx0bnVtOiAnNzUyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfU0MsXG5cdFx0Y3VycmVuY3k6ICdTd2VkaXNoIGtyb25hL2tyb25vcicsXG5cdFx0Y291bnRyaWVzOiBbJ3N3ZWRlbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU0dEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc3MDInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NpbmdhcG9yZSBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydzaW5nYXBvcmUnLCAnYnJ1bmVpJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTSFAnLFxuXHRcdHN5bWJvbDogJ1xcdTAwYTMnLFxuXHRcdG51bTogJzY1NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU2FpbnQgSGVsZW5hIHBvdW5kJyxcblx0XHRjb3VudHJpZXM6IFsnc2FpbnQgaGVsZW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTTEwnLFxuXHRcdHN5bWJvbDogJ0xlJyxcblx0XHRudW06ICc2OTQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NpZXJyYSBMZW9uZWFuIGxlb25lJyxcblx0XHRjb3VudHJpZXM6IFsnc2llcnJhIGxlb25lJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTT1MnLFxuXHRcdHN5bWJvbDogJ1NoJyxcblx0XHRudW06ICc3MDYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NvbWFsaSBzaGlsbGluZycsXG5cdFx0Y291bnRyaWVzOiBbJ3NvbWFsaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NSRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnOTY4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTdXJpbmFtZXNlIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ3N1cmluYW1lJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTU1AnLFxuXHRcdHN5bWJvbDogJ1xcdTAwYTMnLFxuXHRcdG51bTogJzcyOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU291dGggU3VkYW5lc2UgcG91bmQnLFxuXHRcdGNvdW50cmllczogWydzb3V0aCBzdWRhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU1REJyxcblx0XHRzeW1ib2w6ICdEYicsXG5cdFx0bnVtOiAnNjc4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTw6NvIFRvbcOpIGFuZCBQcsOtbmNpcGUgZG9icmEnLFxuXHRcdGNvdW50cmllczogWydzw6NvIHRvbcOpIGFuZCBwcsOtbmNpcGUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NWQycsXG5cdFx0c3ltYm9sOiAnXFx1MjBhMScsXG5cdFx0bnVtOiAnJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTYWx2YWRvcmFuIGNvbG9uJyxcblx0XHRjb3VudHJpZXM6IFsnZWwgc2FsdmFkb3InXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NZUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDBhM1MnLFxuXHRcdG51bTogJzc2MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU3lyaWFuIHBvdW5kJyxcblx0XHRjb3VudHJpZXM6IFsnc3lyaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NaTCcsXG5cdFx0c3ltYm9sOiAnTCcsXG5cdFx0bnVtOiAnNzQ4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBgJHtjb21tYX0ke3NwYWNlfSwke2RlY2ltYWx9YCxcblx0XHRjdXJyZW5jeTogJ1N3YXppIGxpbGFuZ2VuaScsXG5cdFx0Y291bnRyaWVzOiBbJ3N3YXppbGFuZCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVEhCJyxcblx0XHRzeW1ib2w6ICdcXHUwZTNmJyxcblx0XHRudW06ICc3NjQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1RoYWkgYmFodCcsXG5cdFx0Y291bnRyaWVzOiBbJ3RoYWlsYW5kJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdUSlMnLFxuXHRcdHN5bWJvbDogJ1xcdTA0MDVcXHUwNDFjJyxcblx0XHRudW06ICc5NzInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1RhamlraXN0YW5pIHNvbW9uaScsXG5cdFx0Y291bnRyaWVzOiBbJ3RhamlraXN0YW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RNVCcsXG5cdFx0c3ltYm9sOiAnbScsXG5cdFx0bnVtOiAnOTM0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdUdXJrbWVuaXN0YW5pIG1hbmF0Jyxcblx0XHRjb3VudHJpZXM6IFsndHVya21lbmlzdGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdUTkQnLFxuXHRcdHN5bWJvbDogJ1xcdTA2MmYuXFx1MDYyYScsXG5cdFx0bnVtOiAnNzg4Jyxcblx0XHRkaWdpdHM6IDMsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdUdW5pc2lhbiBkaW5hcicsXG5cdFx0Y291bnRyaWVzOiBbJ3R1bmlzaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RPUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDA1NFxcdTAwMjQnLFxuXHRcdG51bTogJzc3NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnVG9uZ2FuIHBhyrthbmdhJyxcblx0XHRjb3VudHJpZXM6IFsndG9uZ2EnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RSWScsXG5cdFx0c3ltYm9sOiAnVEwnLFxuXHRcdG51bTogJzk0OScsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnVHVya2lzaCBsaXJhJyxcblx0XHRjb3VudHJpZXM6IFsndHVya2V5JywgICdub3J0aGVybiBjeXBydXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RURCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnNzgwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdUcmluaWRhZCBhbmQgVG9iYWdvIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ3RyaW5pZGFkIGFuZCB0b2JhZ28nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RXRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnOTAxJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdOZXcgVGFpd2FuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ3JlcHVibGljIG9mIGNoaW5hICh0YWl3YW4pJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdUWlMnLFxuXHRcdHN5bWJvbDogJ1NoJyxcblx0XHRudW06ICc4MzQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1RhbnphbmlhbiBzaGlsbGluZycsXG5cdFx0Y291bnRyaWVzOiBbJ3RhbnphbmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdVQUgnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYjQnLFxuXHRcdG51bTogJzk4MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX1NDLFxuXHRcdGN1cnJlbmN5OiAnVWtyYWluaWFuIGhyeXZuaWEnLFxuXHRcdGNvdW50cmllczogWyd1a3JhaW5lJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdVR1gnLFxuXHRcdHN5bWJvbDogJ1VTaCcsXG5cdFx0bnVtOiAnODAwJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdVZ2FuZGFuIHNoaWxsaW5nJyxcblx0XHRjb3VudHJpZXM6IFsndWdhbmRhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdVU0QnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzg0MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnVW5pdGVkIFN0YXRlcyBkb2xsYXInLFxuXHRcdGNvdW50cmllczogW1xuXHRcdFx0J2FtZXJpY2FuIHNhbW9hJywgJ2JhcmJhZG9zJywgJ2Jlcm11ZGEnLCAnYnJpdGlzaCBpbmRpYW4gb2NlYW4gdGVycml0b3J5Jyxcblx0XHRcdCdicml0aXNoIHZpcmdpbiBpc2xhbmRzLCBjYXJpYmJlYW4gbmV0aGVybGFuZHMnLCAnZWN1YWRvcicsICdlbCBzYWx2YWRvcicsXG5cdFx0XHQnZ3VhbScsICdoYWl0aScsICdtYXJzaGFsbCBpc2xhbmRzJywgJ2ZlZGVyYXRlZCBzdGF0ZXMgb2YgbWljcm9uZXNpYScsXG5cdFx0XHQnbm9ydGhlcm4gbWFyaWFuYSBpc2xhbmRzJywgJ3BhbGF1JywgJ3BhbmFtYScsICdwdWVydG8gcmljbycsICd0aW1vci1sZXN0ZScsXG5cdFx0XHQndHVya3MgYW5kIGNhaWNvcyBpc2xhbmRzJywgJ3VuaXRlZCBzdGF0ZXMnLCAndS5zLiB2aXJnaW4gaXNsYW5kcycsICd6aW1iYWJ3ZSdcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVVlVJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc4NTgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ1VydWd1YXlhbiBwZXNvJyxcblx0XHRjb3VudHJpZXM6IFsndXJ1Z3VheSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVVpTJyxcblx0XHRzeW1ib2w6ICdcXHUwNDNiXFx1MDQzMicsXG5cdFx0bnVtOiAnODYwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdVemJla2lzdGFuIHNvbScsXG5cdFx0Y291bnRyaWVzOiBbJ3V6YmVraXN0YW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1ZFRicsXG5cdFx0c3ltYm9sOiAnQnMgRicsXG5cdFx0bnVtOiAnOTM3Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdWZW5lenVlbGFuIGJvbMOtdmFyJyxcblx0XHRjb3VudHJpZXM6IFsndmVuZXp1ZWxhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdWTkQnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYWInLFxuXHRcdG51bTogJzcwNCcsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnVmlldG5hbWVzZSBkb25nJyxcblx0XHRjb3VudHJpZXM6IFsndmlldG5hbSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVlVWJyxcblx0XHRzeW1ib2w6ICdWdCcsXG5cdFx0bnVtOiAnNTQ4Jyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdWYW51YXR1IHZhdHUnLFxuXHRcdGNvdW50cmllczogWyd2YW51YXR1J11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdXU1QnLFxuXHRcdHN5bWJvbDogJ1NBVCQnLFxuXHRcdG51bTogJzg4MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU2Ftb2FuIHRhbGEnLFxuXHRcdGNvdW50cmllczogWydzYW1vYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWEFGJyxcblx0XHRzeW1ib2w6ICdGQ0ZBJyxcblx0XHRudW06ICc5NTAnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0NGQSBmcmFuYyBCRUFDJyxcblx0XHRjb3VudHJpZXM6IFsnY2FtZXJvb24nLCAnY2VudHJhbCBhZnJpY2FuIHJlcHVibGljJywgJ3JlcHVibGljIG9mIHRoZSBjb25nbycsICdjaGFkJywgJ2VxdWF0b3JpYWwgZ3VpbmVhJywgJ2dhYm9uJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdYQlQnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYmYnLFxuXHRcdG51bTogJycsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQml0Y29pbicsXG5cdFx0Y291bnRyaWVzOiBbXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1hDRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnOTUxJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdFYXN0IENhcmliYmVhbiBkb2xsYXInLFxuXHRcdGNvdW50cmllczogW1xuXHRcdFx0J2FuZ3VpbGxhJyxcblx0XHRcdCdhbnRpZ3VhIGFuZCBiYXJidWRhJyxcblx0XHRcdCdkb21pbmljYScsXG5cdFx0XHQnZ3JlbmFkYScsXG5cdFx0XHQnbW9udHNlcnJhdCcsXG5cdFx0XHQnc2FpbnQga2l0dHMgYW5kIG5ldmlzJyxcblx0XHRcdCdzYWludCBsdWNpYScsXG5cdFx0XHQnc2FpbnQgdmluY2VudCBhbmQgdGhlIGdyZW5hZGluZXMnXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1hEUicsXG5cdFx0c3ltYm9sOiAnU0RSJyxcblx0XHRudW06ICc5NjAnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NwZWNpYWwgZHJhd2luZyByaWdodHMnLFxuXHRcdGNvdW50cmllczogWydpbnRlcm5hdGlvbmFsIG1vbmV0YXJ5IGZ1bmQnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1hPRicsXG5cdFx0c3ltYm9sOiAnQ0ZBJyxcblx0XHRudW06ICc5NTInLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0NGQSBmcmFuYyBCQ0VBTycsXG5cdFx0Y291bnRyaWVzOiBbJ2JlbmluJywgJ2J1cmtpbmEgZmFzbycsICdjw7R0ZSBkXFwnaXZvaXJlJywgJ2d1aW5lYS1iaXNzYXUnLCAnbWFsaScsICduaWdlcicsICdzZW5lZ2FsJywgJ3RvZ28nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1hQRicsXG5cdFx0c3ltYm9sOiAnRnInLFxuXHRcdG51bTogJzk1MycsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ0ZQIGZyYW5jIChGcmFuYyBkdSBQYWNpZmlxdWUpJyxcblx0XHRjb3VudHJpZXM6IFsnZnJlbmNoIHBvbHluZXNpYScsICduZXcgY2FsZWRvbmlhJywgJ3dhbGxpcyBhbmQgZnV0dW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdYVFMnLFxuXHRcdHN5bWJvbDogJ1QnLFxuXHRcdG51bTogJzk2MycsXG5cdFx0ZGlnaXRzOiA0LFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ29kZSByZXNlcnZlZCBmb3IgdGVzdGluZyBwdXJwb3NlcycsXG5cdFx0Y291bnRyaWVzOiBbXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1hYWCcsXG5cdFx0c3ltYm9sOiAnJyxcblx0XHRudW06ICc5OTknLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05vIEN1cnJlbmN5Jyxcblx0XHRjb3VudHJpZXM6IFtdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWUVSJyxcblx0XHRzeW1ib2w6ICdcXHVmZGZjJyxcblx0XHRudW06ICc4ODYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1llbWVuaSByaWFsJyxcblx0XHRjb3VudHJpZXM6IFsneWVtZW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1pBUicsXG5cdFx0c3ltYm9sOiAnUicsXG5cdFx0bnVtOiAnNzEwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfU0QsXG5cdFx0Y3VycmVuY3k6ICdTb3V0aCBBZnJpY2FuIHJhbmQnLFxuXHRcdGNvdW50cmllczogWydzb3V0aCBhZnJpY2EnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1pNVycsXG5cdFx0c3ltYm9sOiAnWksnLFxuXHRcdG51bTogJzk2NycsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnWmFtYmlhbiBrd2FjaGEnLFxuXHRcdGNvdW50cmllczogWyd6YW1iaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1pXTCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnOTMyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfU0QsXG5cdFx0Y3VycmVuY3k6ICdaaW1iYWJ3ZWFuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ3ppbWJhYndlJ11cblx0fVxuXTtcblxuXG4iXX0=