"use strict";
/**
 * @module Utils
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Currency {
    static codes() {
        return sortByCode(CURRENCY_CODES).map((cc) => cc.code);
    }
    static code(code) {
        code = code.toUpperCase();
        return sortByCode(CURRENCY_CODES).find((cc) => cc.code === code);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3VycmVuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSDtJQUNRLE1BQU0sQ0FBQyxLQUFLO1FBQ2xCLE9BQU8sVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQVksRUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVk7UUFDOUIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixPQUFPLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFZLEVBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWTtRQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFvQjtRQUN4QyxJQUFJLE1BQU0sR0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDNUIsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxjQUFjLENBQUMsSUFBSSxD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U0FBUyxFQUFFLEVBQUU7S0FDYjtJQUNEO1FBQ0MsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsS0FBSztRQUNWLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsYUFBYTtRQUN2QixTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7S0FDcEI7SUFDRDtRQUNDLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLEdBQUc7UUFDWCxHQUFHLEVBQUUsS0FBSztRQUNWLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUMzQjtJQUNEO1FBQ0MsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLEdBQUcsRUFBRSxLQUFLO1FBQ1YsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO0tBQ3JCO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQ3ZCO0NBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBVdGlsc1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeSB7XG5cdHB1YmxpYyBzdGF0aWMgY29kZXMoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiBzb3J0QnlDb2RlKENVUlJFTkNZX0NPREVTKS5tYXAoKGNjOiBJQ3VyQ29kZSk6IHN0cmluZyA9PiBjYy5jb2RlKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY29kZShjb2RlOiBzdHJpbmcpOiBJQ3VyQ29kZSB8IHVuZGVmaW5lZCB7XG5cdFx0Y29kZSA9IGNvZGUudG9VcHBlckNhc2UoKTtcblx0XHRyZXR1cm4gc29ydEJ5Q29kZShDVVJSRU5DWV9DT0RFUykuZmluZCgoY2M6IElDdXJDb2RlKTogYm9vbGVhbiA9PiBjYy5jb2RlID09PSBjb2RlKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY291bnRyeShuYW1lOiBzdHJpbmcpOiBJQ3VyQ29kZVtdIHtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBDVVJSRU5DWV9DT0RFUy5maWx0ZXIoYyA9PiB7XG5cdFx0XHRyZXR1cm4gKGMuY291bnRyaWVzIHx8IFtdKS5pbmRleE9mKG5hbWUpID4gLTE7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG51bWJlcihudW06IG51bWJlciB8IHN0cmluZyk6IElDdXJDb2RlIHwgdW5kZWZpbmVkIHtcblx0XHRsZXQgbnVtU3RyOiBzdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcblx0XHRpZiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpIHtcblx0XHRcdG51bVN0ciA9ICgnMDAwJyArIG51bSkuc3Vic3RyKC0zKTtcblx0XHR9XG5cdFx0cmV0dXJuIENVUlJFTkNZX0NPREVTLmZpbmQoKGNjOiBJQ3VyQ29kZSk6IGJvb2xlYW4gPT4gY2MubnVtID09PSBudW1TdHIpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjb3VudHJpZXMoKTogc3RyaW5nW10ge1xuXHRcdGNvbnN0IGxpc3Q6IHN0cmluZ1tdID0gW107XG5cdFx0Q1VSUkVOQ1lfQ09ERVMubWFwKGNjID0+IGNjLmNvdW50cmllcykuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbSAhPT0gbnVsbCAmJiBpdGVtLmxlbmd0aCkge1xuXHRcdFx0XHRpdGVtLmZvckVhY2goY291bnRyeSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihjb3VudHJ5KSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdGxpc3QucHVzaChjb3VudHJ5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBsaXN0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNvcnRCeUNvZGUobGlzdDogSUN1ckNvZGVbXSk6IElDdXJDb2RlW10ge1xuXHRyZXR1cm4gbGlzdC5zb3J0KChjYTogSUN1ckNvZGUsIGNiOiBJQ3VyQ29kZSk6IG51bWJlciA9PiB7XG5cdFx0aWYgKGNhLmNvZGUgPCBjYi5jb2RlKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fSBlbHNlIGlmIChjYS5jb2RlID4gY2IuY29kZSkge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fSk7XG59XG5cbmNvbnN0IHNwYWNlID0gJ1xcdTAwMjAnO1xuY29uc3QgYXBvc3Ryb3BoZSA9ICdcXHUwMDI3JztcbmNvbnN0IGNvbW1hID0gJ1xcdTAwMmMnO1xuY29uc3QgZGVjaW1hbCA9ICdcXHUwMDJlJztcbmNvbnN0IERFTF9DRCA9IGAke2NvbW1hfSwke2RlY2ltYWx9YDtcbmNvbnN0IERFTF9EQyA9IGAke2RlY2ltYWx9LCR7Y29tbWF9YDtcbmNvbnN0IERFTF9TRCA9IGAke3NwYWNlfSwke2RlY2ltYWx9YDtcbmNvbnN0IERFTF9TQyA9IGAke3NwYWNlfSwke2NvbW1hfWA7XG5jb25zdCBERUxfQUQgPSBgJHthcG9zdHJvcGhlfSwke2RlY2ltYWx9YDtcblxuaW50ZXJmYWNlIElDdXJDb2RlIHtcblx0Y29kZTogc3RyaW5nO1xuXHRzeW1ib2w6IHN0cmluZztcblx0bnVtOiBzdHJpbmc7XG5cdGRpZ2l0czogbnVtYmVyO1xuXHRmb3JtYXQ6IHN0cmluZztcblx0Y3VycmVuY3k6IHN0cmluZztcblx0Y291bnRyaWVzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgQ1VSUkVOQ1lfQ09ERVM6IElDdXJDb2RlW10gPSBbXG5cdHtcblx0XHRjb2RlOiAnQUVEJyxcblx0XHRzeW1ib2w6ICdcXHUwNjJmLlxcdTA2MjUnLFxuXHRcdG51bTogJzc4NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMgZGlyaGFtJyxcblx0XHRjb3VudHJpZXM6IFsndW5pdGVkIGFyYWIgZW1pcmF0ZXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0FGTicsXG5cdFx0c3ltYm9sOiAnXFx1MDYwYicsXG5cdFx0bnVtOiAnOTcxJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdBZmdoYW4gYWZnaGFuaScsXG5cdFx0Y291bnRyaWVzOiBbJ2FmZ2hhbmlzdGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBTEwnLFxuXHRcdHN5bWJvbDogJ1xcdTAwNGNcXHUwMDY1XFx1MDA2YicsXG5cdFx0bnVtOiAnMDA4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdBbGJhbmlhbiBsZWsnLFxuXHRcdGNvdW50cmllczogWydhbGJhbmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBTUQnLFxuXHRcdHN5bWJvbDogJ1xcdTA1NjRcXHUwNTgwLicsXG5cdFx0bnVtOiAnMDUxJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdBcm1lbmlhbiBkcmFtJyxcblx0XHRjb3VudHJpZXM6IFsnYXJtZW5pYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQU5HJyxcblx0XHRzeW1ib2w6ICdcXHUwMTkyJyxcblx0XHRudW06ICc1MzInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ05ldGhlcmxhbmRzIEFudGlsbGVhbiBndWlsZGVyJyxcblx0XHRjb3VudHJpZXM6IFsnY3VyYcOnYW8nLCAnc2ludCBtYWFydGVuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBT0EnLFxuXHRcdHN5bWJvbDogJ0t6Jyxcblx0XHRudW06ICc5NzMnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0FuZ29sYW4ga3dhbnphJyxcblx0XHRjb3VudHJpZXM6IFsnYW5nb2xhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBUlMnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzAzMicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnQXJnZW50aW5lIHBlc28nLFxuXHRcdGNvdW50cmllczogWydhcmdlbnRpbmEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0FVRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMDM2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfU0QsXG5cdFx0Y3VycmVuY3k6ICdBdXN0cmFsaWFuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbXG5cdFx0XHQnYXVzdHJhbGlhJyxcblx0XHRcdCdhdXN0cmFsaWFuIGFudGFyY3RpYyB0ZXJyaXRvcnknLFxuXHRcdFx0J2NocmlzdG1hcyBpc2xhbmQnLFxuXHRcdFx0J2NvY29zIChrZWVsaW5nKSBpc2xhbmRzJyxcblx0XHRcdCdoZWFyZCBhbmQgbWNkb25hbGQgaXNsYW5kcycsXG5cdFx0XHQna2lyaWJhdGknLFxuXHRcdFx0J25hdXJ1Jyxcblx0XHRcdCdub3Jmb2xrIGlzbGFuZCcsXG5cdFx0XHQndHV2YWx1J1xuXHRcdF1cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBV0cnLFxuXHRcdHN5bWJvbDogJ1xcdTAxOTInLFxuXHRcdG51bTogJzUzMycsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQXJ1YmFuIGZsb3JpbicsXG5cdFx0Y291bnRyaWVzOiBbJ2FydWJhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdBWk4nLFxuXHRcdHN5bWJvbDogJ1xcdTIwYmMnLFxuXHRcdG51bTogJzk0NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQXplcmJhaWphbmkgbWFuYXQnLFxuXHRcdGNvdW50cmllczogWydhemVyYmFpamFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCQU0nLFxuXHRcdHN5bWJvbDogJ1xcdTA0MWFcXHUwNDFjJyxcblx0XHRudW06ICc5NzcnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEgY29udmVydGlibGUgbWFyaycsXG5cdFx0Y291bnRyaWVzOiBbJ2Jvc25pYSBhbmQgaGVyemVnb3ZpbmEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0JCRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMDUyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCYXJiYWRvcyBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydiYXJiYWRvcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQkRUJyxcblx0XHRzeW1ib2w6ICdcXHUwOWYzJyxcblx0XHRudW06ICcwNTAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0JhbmdsYWRlc2hpIHRha2EnLFxuXHRcdGNvdW50cmllczogWydiYW5nbGFkZXNoJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCR04nLFxuXHRcdHN5bWJvbDogJ1xcdTA0M2JcXHUwNDMyJyxcblx0XHRudW06ICc5NzUnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0J1bGdhcmlhbiBsZXYnLFxuXHRcdGNvdW50cmllczogWydidWxnYXJpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQkhEJyxcblx0XHRzeW1ib2w6ICdcXHUwNjI4LlxcdTA2MmYnLFxuXHRcdG51bTogJzA0OCcsXG5cdFx0ZGlnaXRzOiAzLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQmFocmFpbmkgZGluYXInLFxuXHRcdGNvdW50cmllczogWydiYWhyYWluJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCSUYnLFxuXHRcdHN5bWJvbDogJ0ZyJyxcblx0XHRudW06ICcxMDgnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0J1cnVuZGlhbiBmcmFuYycsXG5cdFx0Y291bnRyaWVzOiBbJ2J1cnVuZGknXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0JNRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMDYwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCZXJtdWRpYW4gZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnYmVybXVkYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQk5EJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcwOTYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0JydW5laSBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydicnVuZWknLCAnc2luZ2Fwb3JlJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCT0InLFxuXHRcdHN5bWJvbDogJ0JzLicsXG5cdFx0bnVtOiAnMDY4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCb2xpdmlhbm8nLFxuXHRcdGNvdW50cmllczogWydib2xpdmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCUkwnLFxuXHRcdHN5bWJvbDogJ1xcdTAwNTJcXHUwMDI0Jyxcblx0XHRudW06ICc5ODYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ0JyYXppbGlhbiByZWFsJyxcblx0XHRjb3VudHJpZXM6IFsnYnJhemlsJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCU0QnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzA0NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQmFoYW1pYW4gZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnYmFoYW1hcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQlROJyxcblx0XHRzeW1ib2w6ICdOdS4nLFxuXHRcdG51bTogJzA2NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQmh1dGFuZXNlIG5ndWx0cnVtJyxcblx0XHRjb3VudHJpZXM6IFsnYmh1dGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCV1AnLFxuXHRcdHN5bWJvbDogJ1AnLFxuXHRcdG51bTogJzA3MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQm90c3dhbmEgcHVsYScsXG5cdFx0Y291bnRyaWVzOiBbJ2JvdHN3YW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdCWU4nLFxuXHRcdHN5bWJvbDogJ0JyJyxcblx0XHRudW06ICc5MzMnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05ldyBCZWxhcnVzaWFuIHJ1YmxlJyxcblx0XHRjb3VudHJpZXM6IFsnYmVsYXJ1cyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQlpEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcwODQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0JlbGl6ZSBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydiZWxpemUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0NBRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMTI0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdDYW5hZGlhbiBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydjYW5hZGEnLCAnc2FpbnQgcGllcnJlIGFuZCBtaXF1ZWxvbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQ0RGJyxcblx0XHRzeW1ib2w6ICdGcicsXG5cdFx0bnVtOiAnOTc2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdDb25nb2xlc2UgZnJhbmMnLFxuXHRcdGNvdW50cmllczogWydkZW1vY3JhdGljIHJlcHVibGljIG9mIGNvbmdvJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDSEYnLFxuXHRcdHN5bWJvbDogJ0ZyJyxcblx0XHRudW06ICc3NTYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9BRCxcblx0XHRjdXJyZW5jeTogJ1N3aXNzIGZyYW5jJyxcblx0XHRjb3VudHJpZXM6IFsnc3dpdHplcmxhbmQnLCAnbGllY2h0ZW5zdGVpbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnQ0xQJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcxNTInLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ0NoaWxlYW4gcGVzbycsXG5cdFx0Y291bnRyaWVzOiBbJ2NoaWxlJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDTlknLFxuXHRcdHN5bWJvbDogJ1xcdTAwYTUnLFxuXHRcdG51bTogJzE1NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ2hpbmVzZSB5dWFuJyxcblx0XHRjb3VudHJpZXM6IFsnY2hpbmEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0NPUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMTcwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdDb2xvbWJpYW4gcGVzbycsXG5cdFx0Y291bnRyaWVzOiBbJ2NvbG9tYmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDUkMnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYTEnLFxuXHRcdG51bTogJzE4OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnQ29zdGEgUmljYW4gY29sb24nLFxuXHRcdGNvdW50cmllczogWydjb3N0YSByaWNhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdDVVAnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzE5MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ3ViYW4gcGVzbycsXG5cdFx0Y291bnRyaWVzOiBbJ2N1YmEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0NWRScsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMTMyJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdDYXBlIFZlcmRlIGVzY3VkbycsXG5cdFx0Y291bnRyaWVzOiBbJ2NhcGUgdmVyZGUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0NaSycsXG5cdFx0c3ltYm9sOiAnS1xcdTAxMGQnLFxuXHRcdG51bTogJzIwMycsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnQ3plY2gga29ydW5hJyxcblx0XHRjb3VudHJpZXM6IFsnY3plY2ggcmVwdWJsaWMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0RKRicsXG5cdFx0c3ltYm9sOiAnRmRqJyxcblx0XHRudW06ICcyNjInLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0RqaWJvdXRpYW4gZnJhbmMnLFxuXHRcdGNvdW50cmllczogWydkamlib3V0aSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnREtLJyxcblx0XHRzeW1ib2w6ICdrcicsXG5cdFx0bnVtOiAnMjA4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdEYW5pc2gga3JvbmUnLFxuXHRcdGNvdW50cmllczogWydkZW5tYXJrJywgJ2Zhcm9lIGlzbGFuZHMnLCAnZ3JlZW5sYW5kJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdET1AnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzIxNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnRG9taW5pY2FuIHBlc28nLFxuXHRcdGNvdW50cmllczogWydkb21pbmljYW4gcmVwdWJsaWMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0RaRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyZi5cXHUwNjJjJyxcblx0XHRudW06ICcwMTInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0FsZ2VyaWFuIGRpbmFyJyxcblx0XHRjb3VudHJpZXM6IFsnYWxnZXJpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnRUdQJyxcblx0XHRzeW1ib2w6ICdcXHUwNjJjLlxcdTA2NDUnLFxuXHRcdG51bTogJzgxOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnRWd5cHRpYW4gcG91bmQnLFxuXHRcdGNvdW50cmllczogWydlZ3lwdCcsICdwYWxlc3RpbmlhbiB0ZXJyaXRvcmllcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnRVJOJyxcblx0XHRzeW1ib2w6ICdOZmsnLFxuXHRcdG51bTogJzIzMicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnRXJpdHJlYW4gbmFrZmEnLFxuXHRcdGNvdW50cmllczogWydlcml0cmVhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdFVEInLFxuXHRcdHN5bWJvbDogJ0JyJyxcblx0XHRudW06ICcyMzAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0V0aGlvcGlhbiBiaXJyJyxcblx0XHRjb3VudHJpZXM6IFsnZXRoaW9waWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0VVUicsXG5cdFx0c3ltYm9sOiAnXFx1MjBhYycsXG5cdFx0bnVtOiAnOTc4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdFdXJvJyxcblx0XHRjb3VudHJpZXM6IFtcblx0XHRcdCdhbmRvcnJhJywgJ2F1c3RyaWEnLCAnYmVsZ2l1bScsICdjeXBydXMnLCAnZXN0b25pYScsICdmaW5sYW5kJywgJ2ZyYW5jZScsXG5cdFx0XHQnZ2VybWFueScsICdncmVlY2UnLCAnaXJlbGFuZCcsICdpdGFseScsICdrb3Nvdm8nLCAnbHV4ZW1ib3VyZycsICdtYWx0YScsXG5cdFx0XHQnbW9uYWNvJywgJ21vbnRlbmVncm8nLCAnbmV0aGVybGFuZHMnLCAncG9ydHVnYWwnLCAnc2FuIG1hcmlubycsICdzbG92YWtpYScsXG5cdFx0XHQnc2xvdmVuaWEnLCAnc3BhaW4nLCAndmF0aWNhbiBjaXR5J1xuXHRcdF1cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdGSkQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzI0MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnRmlqaSBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydmaWppJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdGS1AnLFxuXHRcdHN5bWJvbDogJ1xcdTAwYTMnLFxuXHRcdG51bTogJzIzOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnRmFsa2xhbmQgSXNsYW5kcyBwb3VuZCcsXG5cdFx0Y291bnRyaWVzOiBbJ2ZhbGtsYW5kIGlzbGFuZHMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0dCUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDBhMycsXG5cdFx0bnVtOiAnODI2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdQb3VuZCBzdGVybGluZycsXG5cdFx0Y291bnRyaWVzOiBbXG5cdFx0XHQndW5pdGVkIGtpbmdkb20nLFxuXHRcdFx0J2JyaXRpc2ggY3Jvd24gZGVwZW5kZW5jaWVzICh0aGUgIGlzbGUgb2YgbWFuIGFuZCB0aGUgY2hhbm5lbCBpc2xhbmRzKScsXG5cdFx0XHQnc291dGggZ2VvcmdpYSBhbmQgdGhlIHNvdXRoIHNhbmR3aWNoIGlzbGFuZHMnLFxuXHRcdFx0J2JyaXRpc2ggYW50YXJjdGljIHRlcnJpdG9yeScsXG5cdFx0XHQnYnJpdGlzaCBpbmRpYW4gb2NlYW4gdGVycml0b3J5J1xuXHRcdF1cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdHRUwnLFxuXHRcdHN5bWJvbDogJ1xcdTEwZGEnLFxuXHRcdG51bTogJzk4MScsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnR2VvcmdpYW4gbGFyaScsXG5cdFx0Y291bnRyaWVzOiBbJ2dlb3JnaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0dIUycsXG5cdFx0c3ltYm9sOiAnXFx1MjBiNScsXG5cdFx0bnVtOiAnOTM2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdHaGFuYWlhbiBjZWRpJyxcblx0XHRjb3VudHJpZXM6IFsnZ2hhbmEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0dJUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDBhMycsXG5cdFx0bnVtOiAnMjkyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdHaWJyYWx0YXIgcG91bmQnLFxuXHRcdGNvdW50cmllczogWydnaWJyYWx0YXInXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0dNRCcsXG5cdFx0c3ltYm9sOiAnRCcsXG5cdFx0bnVtOiAnMjcwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdHYW1iaWFuIGRhbGFzaScsXG5cdFx0Y291bnRyaWVzOiBbJ2dhbWJpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnR05GJyxcblx0XHRzeW1ib2w6ICdGcicsXG5cdFx0bnVtOiAnMzI0Jyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdHdWluZWFuIGZyYW5jJyxcblx0XHRjb3VudHJpZXM6IFsnZ3VpbmVhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdHVFEnLFxuXHRcdHN5bWJvbDogJ1EnLFxuXHRcdG51bTogJzMyMCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnR3VhdGVtYWxhbiBxdWV0emFsJyxcblx0XHRjb3VudHJpZXM6IFsnZ3VhdGVtYWxhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdHWUQnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzMyOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnR3V5YW5lc2UgZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnZ3V5YW5hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdIS0QnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzM0NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnSG9uZyBLb25nIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ2hvbmcga29uZycsICdtYWNhbyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSE5MJyxcblx0XHRzeW1ib2w6ICdMJyxcblx0XHRudW06ICczNDAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0hvbmR1cmFuIGxlbXBpcmEnLFxuXHRcdGNvdW50cmllczogWydob25kdXJhcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSFJLJyxcblx0XHRzeW1ib2w6ICdrbicsXG5cdFx0bnVtOiAnMTkxJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdDcm9hdGlhbiBrdW5hJyxcblx0XHRjb3VudHJpZXM6IFsnY3JvYXRpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSFRHJyxcblx0XHRzeW1ib2w6ICdHJyxcblx0XHRudW06ICczMzInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0hhaXRpYW4gZ291cmRlJyxcblx0XHRjb3VudHJpZXM6IFsnaGFpdGknXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0hVRicsXG5cdFx0c3ltYm9sOiAnRnQnLFxuXHRcdG51bTogJzM0OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnSHVuZ2FyaWFuIGZvcmludCcsXG5cdFx0Y291bnRyaWVzOiBbJ2h1bmdhcnknXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0lEUicsXG5cdFx0c3ltYm9sOiAnUnAnLFxuXHRcdG51bTogJzM2MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnSW5kb25lc2lhbiBydXBpYWgnLFxuXHRcdGNvdW50cmllczogWydpbmRvbmVzaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0lMUycsXG5cdFx0c3ltYm9sOiAnXFx1MjBhYScsXG5cdFx0bnVtOiAnMzc2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdJc3JhZWxpIG5ldyBzaGVrZWwnLFxuXHRcdGNvdW50cmllczogWydpc3JhZWwnLCAncGFsZXN0aW5pYW4gdGVycml0b3JpZXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0lOUicsXG5cdFx0c3ltYm9sOiAnXFx1MjBiOScsXG5cdFx0bnVtOiAnMzU2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdJbmRpYW4gcnVwZWUnLFxuXHRcdGNvdW50cmllczogWydpbmRpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSVFEJyxcblx0XHRzeW1ib2w6ICdcXHUwNjM5LlxcdTA2MmYnLFxuXHRcdG51bTogJzM2OCcsXG5cdFx0ZGlnaXRzOiAzLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnSXJhcWkgZGluYXInLFxuXHRcdGNvdW50cmllczogWydpcmFxJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdJUlInLFxuXHRcdHN5bWJvbDogJ1xcdWZkZmMnLFxuXHRcdG51bTogJzM2NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnSXJhbmlhbiByaWFsJyxcblx0XHRjb3VudHJpZXM6IFsnaXJhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSVNLJyxcblx0XHRzeW1ib2w6ICdrcicsXG5cdFx0bnVtOiAnMzUyJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdJY2VsYW5kaWMga3LDs25hJyxcblx0XHRjb3VudHJpZXM6IFsnaWNlbGFuZCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSk1EJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICczODgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0phbWFpY2FuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ2phbWFpY2EnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0pPRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyZi5cXHUwNjI3Jyxcblx0XHRudW06ICc0MDAnLFxuXHRcdGRpZ2l0czogMyxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0pvcmRhbmlhbiBkaW5hcicsXG5cdFx0Y291bnRyaWVzOiBbJ2pvcmRhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnSlBZJyxcblx0XHRzeW1ib2w6ICdcXHUwMGE1Jyxcblx0XHRudW06ICczOTInLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0phcGFuZXNlIHllbicsXG5cdFx0Y291bnRyaWVzOiBbJ2phcGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdLRVMnLFxuXHRcdHN5bWJvbDogJ0tTaCcsXG5cdFx0bnVtOiAnNDA0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdLZW55YW4gc2hpbGxpbmcnLFxuXHRcdGNvdW50cmllczogWydrZW55YSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS0dTJyxcblx0XHRzeW1ib2w6ICdzb20nLFxuXHRcdG51bTogJzQxNycsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnS3lyZ3l6c3Rhbmkgc29tJyxcblx0XHRjb3VudHJpZXM6IFsna3lyZ3l6c3RhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS0hSJyxcblx0XHRzeW1ib2w6ICdcXHUxN2RiJyxcblx0XHRudW06ICcxMTYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0NhbWJvZGlhbiByaWVsJyxcblx0XHRjb3VudHJpZXM6IFsnY2FtYm9kaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0tNRicsXG5cdFx0c3ltYm9sOiAnRnInLFxuXHRcdG51bTogJzE3NCcsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ29tb3JvIGZyYW5jJyxcblx0XHRjb3VudHJpZXM6IFsnY29tb3JvcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS1BXJyxcblx0XHRzeW1ib2w6ICdcXHUyMGE5Jyxcblx0XHRudW06ICc0MDgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05vcnRoIEtvcmVhbiB3b24nLFxuXHRcdGNvdW50cmllczogWydub3J0aCBrb3JlYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS1JXJyxcblx0XHRzeW1ib2w6ICdcXHUyMGE5Jyxcblx0XHRudW06ICc0MTAnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NvdXRoIEtvcmVhbiB3b24nLFxuXHRcdGNvdW50cmllczogWydzb3V0aCBrb3JlYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS1dEJyxcblx0XHRzeW1ib2w6ICdcXHUwNjJmLlxcdTA2NDMnLFxuXHRcdG51bTogJzQxNCcsXG5cdFx0ZGlnaXRzOiAzLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnS3V3YWl0aSBkaW5hcicsXG5cdFx0Y291bnRyaWVzOiBbJ2t1d2FpdCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnS1lEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICcxMzYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0NheW1hbiBJc2xhbmRzIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ2NheW1hbiBpc2xhbmRzJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdLWlQnLFxuXHRcdHN5bWJvbDogJ1xcdTMwMTInLFxuXHRcdG51bTogJzM5OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnS2F6YWtoc3RhbmkgdGVuZ2UnLFxuXHRcdGNvdW50cmllczogWydrYXpha2hzdGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdMQUsnLFxuXHRcdHN5bWJvbDogJ1xcdTIwYWQnLFxuXHRcdG51bTogJzQxOCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTGFvIGtpcCcsXG5cdFx0Y291bnRyaWVzOiBbJ2xhb3MnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0xCUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDY0NC5cXHUwNjQ0Jyxcblx0XHRudW06ICc0MjInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9TRCxcblx0XHRjdXJyZW5jeTogJ0xlYmFuZXNlIHBvdW5kJyxcblx0XHRjb3VudHJpZXM6IFsnbGViYW5vbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTEtSJyxcblx0XHRzeW1ib2w6ICdcXHUyMGE4Jyxcblx0XHRudW06ICcxNDQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NyaSBMYW5rYW4gcnVwZWUnLFxuXHRcdGNvdW50cmllczogWydzcmkgbGFua2EnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ0xSRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnNDMwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdMaWJlcmlhbiBkb2xsYXInLFxuXHRcdGNvdW50cmllczogWydsaWJlcmlhJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdMU0wnLFxuXHRcdHN5bWJvbDogJ0wnLFxuXHRcdG51bTogJzQyNicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTGVzb3RobyBsb3RpJyxcblx0XHRjb3VudHJpZXM6IFsnbGVzb3RobyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTFlEJyxcblx0XHRzeW1ib2w6ICdcXHUwNjQ0LlxcdTA2MmYnLFxuXHRcdG51bTogJzQzNCcsXG5cdFx0ZGlnaXRzOiAzLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTGlieWFuIGRpbmFyJyxcblx0XHRjb3VudHJpZXM6IFsnbGlieWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01BRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyZi5cXHUwNjQ1LicsXG5cdFx0bnVtOiAnNTA0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNb3JvY2NhbiBkaXJoYW0nLFxuXHRcdGNvdW50cmllczogWydtb3JvY2NvJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNREwnLFxuXHRcdHN5bWJvbDogJ0wnLFxuXHRcdG51bTogJzQ5OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTW9sZG92YW4gbGV1Jyxcblx0XHRjb3VudHJpZXM6IFsnbW9sZG92YSAoZXhjZXB0ICB0cmFuc25pc3RyaWEpJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdNR0EnLFxuXHRcdHN5bWJvbDogJ0FyJyxcblx0XHRudW06ICc5NjknLFxuXHRcdGRpZ2l0czogMSxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ01hbGFnYXN5IGFyaWFyeScsXG5cdFx0Y291bnRyaWVzOiBbJ21hZGFnYXNjYXInXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01LRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDQzNFxcdTA0MzVcXHUwNDNkJyxcblx0XHRudW06ICc4MDcnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ01hY2Vkb25pYW4gZGVuYXInLFxuXHRcdGNvdW50cmllczogWydtYWNlZG9uaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01NSycsXG5cdFx0c3ltYm9sOiAnSycsXG5cdFx0bnVtOiAnMTA0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNeWFubWEga3lhdCcsXG5cdFx0Y291bnRyaWVzOiBbJ215YW5tYXInXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01OVCcsXG5cdFx0c3ltYm9sOiAnXFx1MjBhZScsXG5cdFx0bnVtOiAnNDk2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNb25nb2xpYW4gdHVncmlrJyxcblx0XHRjb3VudHJpZXM6IFsnbW9uZ29saWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01PUCcsXG5cdFx0c3ltYm9sOiAnUCcsXG5cdFx0bnVtOiAnNDQ2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNYWNhbmVzZSBwYXRhY2EnLFxuXHRcdGNvdW50cmllczogWydtYWNhbyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTVJPJyxcblx0XHRzeW1ib2w6ICdVTScsXG5cdFx0bnVtOiAnNDc4Jyxcblx0XHRkaWdpdHM6IDEsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNYXVyaXRhbmlhbiBvdWd1aXlhJyxcblx0XHRjb3VudHJpZXM6IFsnbWF1cml0YW5pYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTVVSJyxcblx0XHRzeW1ib2w6ICdcXHUyMGE4Jyxcblx0XHRudW06ICc0ODAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ01hdXJpdGlhbiBydXBlZScsXG5cdFx0Y291bnRyaWVzOiBbJ21hdXJpdGl1cyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTVZSJyxcblx0XHRzeW1ib2w6ICdNVlInLFxuXHRcdG51bTogJzQ2MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTWFsZGl2aWFuIHJ1Zml5YWEnLFxuXHRcdGNvdW50cmllczogWydtYWxkaXZlcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTVdLJyxcblx0XHRzeW1ib2w6ICdNSycsXG5cdFx0bnVtOiAnNDU0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNYWxhd2lhbiBrd2FjaGEnLFxuXHRcdGNvdW50cmllczogWydtYWxhd2knXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01YTicsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnNDg0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdNZXhpY2FuIHBlc28nLFxuXHRcdGNvdW50cmllczogWydtZXhpY28nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ01ZUicsXG5cdFx0c3ltYm9sOiAnUk0nLFxuXHRcdG51bTogJzQ1OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTWFsYXlzaWFuIHJpbmdnaXQnLFxuXHRcdGNvdW50cmllczogWydtYWxheXNpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTVpOJyxcblx0XHRzeW1ib2w6ICdNVG4nLFxuXHRcdG51bTogJzk0MycsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTW96YW1iaWNhbiBtZXRpY2FsJyxcblx0XHRjb3VudHJpZXM6IFsnbW96YW1iaXF1ZSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTkFEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc1MTYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05hbWliaWFuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ25hbWliaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ05HTicsXG5cdFx0c3ltYm9sOiAnXFx1MjBhNicsXG5cdFx0bnVtOiAnNTY2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdOaWdlcmlhbiBuYWlyYScsXG5cdFx0Y291bnRyaWVzOiBbJ25pZ2VyaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ05JTycsXG5cdFx0c3ltYm9sOiAnXFx1MDA0M1xcdTAwMjQnLFxuXHRcdG51bTogJzU1OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTmljYXJhZ3VhbiBjw7NyZG9iYScsXG5cdFx0Y291bnRyaWVzOiBbJ25pY2FyYWd1YSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTk9LJyxcblx0XHRzeW1ib2w6ICdrcicsXG5cdFx0bnVtOiAnNTc4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdOb3J3ZWdpYW4ga3JvbmUnLFxuXHRcdGNvdW50cmllczogWydub3J3YXknLCAnc3ZhbGJhcmQnLCAnamFuIG1heWVuJywgJ2JvdXZldCBpc2xhbmQnLCAncXVlZW4gbWF1ZCBsYW5kJywgJ3BldGVyIGkgaXNsYW5kJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdOUFInLFxuXHRcdHN5bWJvbDogJ1xcdTIwYTgnLFxuXHRcdG51bTogJzUyNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTmVwYWxlc2UgcnVwZWUnLFxuXHRcdGNvdW50cmllczogWyduZXBhbCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnTlpEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc1NTQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05ldyBaZWFsYW5kIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ2Nvb2sgaXNsYW5kcycsICduZXcgemVhbGFuZCcsICduaXVlJywgJ3BpdGNhaXJuJywgJ3Rva2VsYXUnLCAncm9zcyBkZXBlbmRlbmN5J11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdPTVInLFxuXHRcdHN5bWJvbDogJ1xcdTA2MzEuXFx1MDYzOS4nLFxuXHRcdG51bTogJzUxMicsXG5cdFx0ZGlnaXRzOiAzLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnT21hbmkgcmlhbCcsXG5cdFx0Y291bnRyaWVzOiBbJ29tYW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1BBQicsXG5cdFx0c3ltYm9sOiAnQi8uJyxcblx0XHRudW06ICc1OTAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1BhbmFtYW5pYW4gYmFsYm9hJyxcblx0XHRjb3VudHJpZXM6IFsncGFuYW1hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdQRU4nLFxuXHRcdHN5bWJvbDogJ1MvLicsXG5cdFx0bnVtOiAnNjA0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdQZXJ1dmlhbiBudWV2byBzb2wnLFxuXHRcdGNvdW50cmllczogWydwZXJ1J11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdQR0snLFxuXHRcdHN5bWJvbDogJ0snLFxuXHRcdG51bTogJzU5OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnUGFwdWEgTmV3IEd1aW5lYW4ga2luYScsXG5cdFx0Y291bnRyaWVzOiBbJ3BhcHVhIG5ldyBndWluZWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1BIUCcsXG5cdFx0c3ltYm9sOiAnXFx1MjBiMScsXG5cdFx0bnVtOiAnNjA4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdQaGlsaXBwaW5lIHBlc28nLFxuXHRcdGNvdW50cmllczogWydwaGlsaXBwaW5lcyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnUEtSJyxcblx0XHRzeW1ib2w6ICdcXHUyMGE4Jyxcblx0XHRudW06ICc1ODYnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1Bha2lzdGFuaSBydXBlZScsXG5cdFx0Y291bnRyaWVzOiBbJ3Bha2lzdGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdQTE4nLFxuXHRcdHN5bWJvbDogJ3pcXHUwMTQyJyxcblx0XHRudW06ICc5ODUnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9TQyxcblx0XHRjdXJyZW5jeTogJ1BvbGlzaCB6xYJvdHknLFxuXHRcdGNvdW50cmllczogWydwb2xhbmQnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1BZRycsXG5cdFx0c3ltYm9sOiAnXFx1MjBiMicsXG5cdFx0bnVtOiAnNjAwJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdQYXJhZ3VheWFuIGd1YXJhbsOtJyxcblx0XHRjb3VudHJpZXM6IFsncGFyYWd1YXknXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1FBUicsXG5cdFx0c3ltYm9sOiAnXFx1MDYzMS5cXHUwNjQyJyxcblx0XHRudW06ICc2MzQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1FhdGFyaSByaXlhbCcsXG5cdFx0Y291bnRyaWVzOiBbJ3FhdGFyJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdST04nLFxuXHRcdHN5bWJvbDogJ0wnLFxuXHRcdG51bTogJzk0NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnUm9tYW5pYW4gbmV3IGxldScsXG5cdFx0Y291bnRyaWVzOiBbJ3JvbWFuaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1JTRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDQyMFxcdTA0MjFcXHUwNDE0Jyxcblx0XHRudW06ICc5NDEnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NlcmJpYW4gZGluYXInLFxuXHRcdGNvdW50cmllczogWydzZXJiaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1JVQicsXG5cdFx0c3ltYm9sOiAnXFx1MDQ0MC4nLFxuXHRcdG51bTogJzY0MycsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnUnVzc2lhbiByb3VibGUnLFxuXHRcdGNvdW50cmllczogWydydXNzaWEnLCAnYWJraGF6aWEnLCAnc291dGggb3NzZXRpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnUldGJyxcblx0XHRzeW1ib2w6ICdGUncnLFxuXHRcdG51bTogJzY0NicsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnUndhbmRhbiBmcmFuYycsXG5cdFx0Y291bnRyaWVzOiBbJ3J3YW5kYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU0FSJyxcblx0XHRzeW1ib2w6ICdcXHUwNjMxLlxcdTA2MzMnLFxuXHRcdG51bTogJzY4MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU2F1ZGkgcml5YWwnLFxuXHRcdGNvdW50cmllczogWydzYXVkaSBhcmFiaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NCRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnMDkwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTb2xvbW9uIElzbGFuZHMgZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnc29sb21vbiBpc2xhbmRzJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTQ1InLFxuXHRcdHN5bWJvbDogJ1xcdTIwYTgnLFxuXHRcdG51bTogJzY5MCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU2V5Y2hlbGxlcyBydXBlZScsXG5cdFx0Y291bnRyaWVzOiBbJ3NleWNoZWxsZXMnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NERycsXG5cdFx0c3ltYm9sOiAnXFx1MDBhMycsXG5cdFx0bnVtOiAnOTM4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTdWRhbmVzZSBwb3VuZCcsXG5cdFx0Y291bnRyaWVzOiBbJ3N1ZGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTRUsnLFxuXHRcdHN5bWJvbDogJ2tyJyxcblx0XHRudW06ICc3NTInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9TQyxcblx0XHRjdXJyZW5jeTogJ1N3ZWRpc2gga3JvbmEva3Jvbm9yJyxcblx0XHRjb3VudHJpZXM6IFsnc3dlZGVuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTR0QnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzcwMicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU2luZ2Fwb3JlIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbJ3NpbmdhcG9yZScsICdicnVuZWknXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NIUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDBhMycsXG5cdFx0bnVtOiAnNjU0Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTYWludCBIZWxlbmEgcG91bmQnLFxuXHRcdGNvdW50cmllczogWydzYWludCBoZWxlbmEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NMTCcsXG5cdFx0c3ltYm9sOiAnTGUnLFxuXHRcdG51bTogJzY5NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU2llcnJhIExlb25lYW4gbGVvbmUnLFxuXHRcdGNvdW50cmllczogWydzaWVycmEgbGVvbmUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NPUycsXG5cdFx0c3ltYm9sOiAnU2gnLFxuXHRcdG51bTogJzcwNicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU29tYWxpIHNoaWxsaW5nJyxcblx0XHRjb3VudHJpZXM6IFsnc29tYWxpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU1JEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc5NjgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1N1cmluYW1lc2UgZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnc3VyaW5hbWUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1NTUCcsXG5cdFx0c3ltYm9sOiAnXFx1MDBhMycsXG5cdFx0bnVtOiAnNzI4Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTb3V0aCBTdWRhbmVzZSBwb3VuZCcsXG5cdFx0Y291bnRyaWVzOiBbJ3NvdXRoIHN1ZGFuJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdTVEQnLFxuXHRcdHN5bWJvbDogJ0RiJyxcblx0XHRudW06ICc2NzgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1PDo28gVG9tw6kgYW5kIFByw61uY2lwZSBkb2JyYScsXG5cdFx0Y291bnRyaWVzOiBbJ3PDo28gdG9tw6kgYW5kIHByw61uY2lwZSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU1ZDJyxcblx0XHRzeW1ib2w6ICdcXHUyMGExJyxcblx0XHRudW06ICcnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1NhbHZhZG9yYW4gY29sb24nLFxuXHRcdGNvdW50cmllczogWydlbCBzYWx2YWRvciddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU1lQJyxcblx0XHRzeW1ib2w6ICdcXHUwMGEzUycsXG5cdFx0bnVtOiAnNzYwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTeXJpYW4gcG91bmQnLFxuXHRcdGNvdW50cmllczogWydzeXJpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnU1pMJyxcblx0XHRzeW1ib2w6ICdMJyxcblx0XHRudW06ICc3NDgnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IGAke2NvbW1hfSR7c3BhY2V9LCR7ZGVjaW1hbH1gLFxuXHRcdGN1cnJlbmN5OiAnU3dhemkgbGlsYW5nZW5pJyxcblx0XHRjb3VudHJpZXM6IFsnc3dhemlsYW5kJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdUSEInLFxuXHRcdHN5bWJvbDogJ1xcdTBlM2YnLFxuXHRcdG51bTogJzc2NCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnVGhhaSBiYWh0Jyxcblx0XHRjb3VudHJpZXM6IFsndGhhaWxhbmQnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RKUycsXG5cdFx0c3ltYm9sOiAnXFx1MDQwNVxcdTA0MWMnLFxuXHRcdG51bTogJzk3MicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnVGFqaWtpc3Rhbmkgc29tb25pJyxcblx0XHRjb3VudHJpZXM6IFsndGFqaWtpc3RhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVE1UJyxcblx0XHRzeW1ib2w6ICdtJyxcblx0XHRudW06ICc5MzQnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1R1cmttZW5pc3RhbmkgbWFuYXQnLFxuXHRcdGNvdW50cmllczogWyd0dXJrbWVuaXN0YW4nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RORCcsXG5cdFx0c3ltYm9sOiAnXFx1MDYyZi5cXHUwNjJhJyxcblx0XHRudW06ICc3ODgnLFxuXHRcdGRpZ2l0czogMyxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1R1bmlzaWFuIGRpbmFyJyxcblx0XHRjb3VudHJpZXM6IFsndHVuaXNpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVE9QJyxcblx0XHRzeW1ib2w6ICdcXHUwMDU0XFx1MDAyNCcsXG5cdFx0bnVtOiAnNzc2Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdUb25nYW4gcGHKu2FuZ2EnLFxuXHRcdGNvdW50cmllczogWyd0b25nYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVFJZJyxcblx0XHRzeW1ib2w6ICdUTCcsXG5cdFx0bnVtOiAnOTQ5Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdUdXJraXNoIGxpcmEnLFxuXHRcdGNvdW50cmllczogWyd0dXJrZXknLCAgJ25vcnRoZXJuIGN5cHJ1cyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVFREJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc3ODAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28gZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsndHJpbmlkYWQgYW5kIHRvYmFnbyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVFdEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc5MDEnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ05ldyBUYWl3YW4gZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsncmVwdWJsaWMgb2YgY2hpbmEgKHRhaXdhbiknXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1RaUycsXG5cdFx0c3ltYm9sOiAnU2gnLFxuXHRcdG51bTogJzgzNCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnVGFuemFuaWFuIHNoaWxsaW5nJyxcblx0XHRjb3VudHJpZXM6IFsndGFuemFuaWEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1VBSCcsXG5cdFx0c3ltYm9sOiAnXFx1MjBiNCcsXG5cdFx0bnVtOiAnOTgwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfU0MsXG5cdFx0Y3VycmVuY3k6ICdVa3JhaW5pYW4gaHJ5dm5pYScsXG5cdFx0Y291bnRyaWVzOiBbJ3VrcmFpbmUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1VHWCcsXG5cdFx0c3ltYm9sOiAnVVNoJyxcblx0XHRudW06ICc4MDAnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1VnYW5kYW4gc2hpbGxpbmcnLFxuXHRcdGNvdW50cmllczogWyd1Z2FuZGEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1VTRCcsXG5cdFx0c3ltYm9sOiAnXFx1MDAyNCcsXG5cdFx0bnVtOiAnODQwJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdVbml0ZWQgU3RhdGVzIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbXG5cdFx0XHQnYW1lcmljYW4gc2Ftb2EnLCAnYmFyYmFkb3MnLCAnYmVybXVkYScsICdicml0aXNoIGluZGlhbiBvY2VhbiB0ZXJyaXRvcnknLFxuXHRcdFx0J2JyaXRpc2ggdmlyZ2luIGlzbGFuZHMsIGNhcmliYmVhbiBuZXRoZXJsYW5kcycsICdlY3VhZG9yJywgJ2VsIHNhbHZhZG9yJyxcblx0XHRcdCdndWFtJywgJ2hhaXRpJywgJ21hcnNoYWxsIGlzbGFuZHMnLCAnZmVkZXJhdGVkIHN0YXRlcyBvZiBtaWNyb25lc2lhJyxcblx0XHRcdCdub3J0aGVybiBtYXJpYW5hIGlzbGFuZHMnLCAncGFsYXUnLCAncGFuYW1hJywgJ3B1ZXJ0byByaWNvJywgJ3RpbW9yLWxlc3RlJyxcblx0XHRcdCd0dXJrcyBhbmQgY2FpY29zIGlzbGFuZHMnLCAndW5pdGVkIHN0YXRlcycsICd1LnMuIHZpcmdpbiBpc2xhbmRzJywgJ3ppbWJhYndlJ1xuXHRcdF1cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdVWVUnLFxuXHRcdHN5bWJvbDogJ1xcdTAwMjQnLFxuXHRcdG51bTogJzg1OCcsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0RDLFxuXHRcdGN1cnJlbmN5OiAnVXJ1Z3VheWFuIHBlc28nLFxuXHRcdGNvdW50cmllczogWyd1cnVndWF5J11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdVWlMnLFxuXHRcdHN5bWJvbDogJ1xcdTA0M2JcXHUwNDMyJyxcblx0XHRudW06ICc4NjAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1V6YmVraXN0YW4gc29tJyxcblx0XHRjb3VudHJpZXM6IFsndXpiZWtpc3RhbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnVkVGJyxcblx0XHRzeW1ib2w6ICdCcyBGJyxcblx0XHRudW06ICc5MzcnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9EQyxcblx0XHRjdXJyZW5jeTogJ1ZlbmV6dWVsYW4gYm9sw612YXInLFxuXHRcdGNvdW50cmllczogWyd2ZW5lenVlbGEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1ZORCcsXG5cdFx0c3ltYm9sOiAnXFx1MjBhYicsXG5cdFx0bnVtOiAnNzA0Jyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfREMsXG5cdFx0Y3VycmVuY3k6ICdWaWV0bmFtZXNlIGRvbmcnLFxuXHRcdGNvdW50cmllczogWyd2aWV0bmFtJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdWVVYnLFxuXHRcdHN5bWJvbDogJ1Z0Jyxcblx0XHRudW06ICc1NDgnLFxuXHRcdGRpZ2l0czogMCxcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ1ZhbnVhdHUgdmF0dScsXG5cdFx0Y291bnRyaWVzOiBbJ3ZhbnVhdHUnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1dTVCcsXG5cdFx0c3ltYm9sOiAnU0FUJCcsXG5cdFx0bnVtOiAnODgyJyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdTYW1vYW4gdGFsYScsXG5cdFx0Y291bnRyaWVzOiBbJ3NhbW9hJ11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdYQUYnLFxuXHRcdHN5bWJvbDogJ0ZDRkEnLFxuXHRcdG51bTogJzk1MCcsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ0ZBIGZyYW5jIEJFQUMnLFxuXHRcdGNvdW50cmllczogWydjYW1lcm9vbicsICdjZW50cmFsIGFmcmljYW4gcmVwdWJsaWMnLCAncmVwdWJsaWMgb2YgdGhlIGNvbmdvJywgJ2NoYWQnLCAnZXF1YXRvcmlhbCBndWluZWEnLCAnZ2Fib24nXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1hCVCcsXG5cdFx0c3ltYm9sOiAnXFx1MjBiZicsXG5cdFx0bnVtOiAnJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdCaXRjb2luJyxcblx0XHRjb3VudHJpZXM6IFtdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWENEJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc5NTEnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9DRCxcblx0XHRjdXJyZW5jeTogJ0Vhc3QgQ2FyaWJiZWFuIGRvbGxhcicsXG5cdFx0Y291bnRyaWVzOiBbXG5cdFx0XHQnYW5ndWlsbGEnLFxuXHRcdFx0J2FudGlndWEgYW5kIGJhcmJ1ZGEnLFxuXHRcdFx0J2RvbWluaWNhJyxcblx0XHRcdCdncmVuYWRhJyxcblx0XHRcdCdtb250c2VycmF0Jyxcblx0XHRcdCdzYWludCBraXR0cyBhbmQgbmV2aXMnLFxuXHRcdFx0J3NhaW50IGx1Y2lhJyxcblx0XHRcdCdzYWludCB2aW5jZW50IGFuZCB0aGUgZ3JlbmFkaW5lcydcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWERSJyxcblx0XHRzeW1ib2w6ICdTRFInLFxuXHRcdG51bTogJzk2MCcsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnU3BlY2lhbCBkcmF3aW5nIHJpZ2h0cycsXG5cdFx0Y291bnRyaWVzOiBbJ2ludGVybmF0aW9uYWwgbW9uZXRhcnkgZnVuZCddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWE9GJyxcblx0XHRzeW1ib2w6ICdDRkEnLFxuXHRcdG51bTogJzk1MicsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnQ0ZBIGZyYW5jIEJDRUFPJyxcblx0XHRjb3VudHJpZXM6IFsnYmVuaW4nLCAnYnVya2luYSBmYXNvJywgJ2PDtHRlIGRcXCdpdm9pcmUnLCAnZ3VpbmVhLWJpc3NhdScsICdtYWxpJywgJ25pZ2VyJywgJ3NlbmVnYWwnLCAndG9nbyddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWFBGJyxcblx0XHRzeW1ib2w6ICdGcicsXG5cdFx0bnVtOiAnOTUzJyxcblx0XHRkaWdpdHM6IDAsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdDRlAgZnJhbmMgKEZyYW5jIGR1IFBhY2lmaXF1ZSknLFxuXHRcdGNvdW50cmllczogWydmcmVuY2ggcG9seW5lc2lhJywgJ25ldyBjYWxlZG9uaWEnLCAnd2FsbGlzIGFuZCBmdXR1bmEnXVxuXHR9LFxuXHR7XG5cdFx0Y29kZTogJ1hUUycsXG5cdFx0c3ltYm9sOiAnVCcsXG5cdFx0bnVtOiAnOTYzJyxcblx0XHRkaWdpdHM6IDQsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdDb2RlIHJlc2VydmVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzJyxcblx0XHRjb3VudHJpZXM6IFtdXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWFhYJyxcblx0XHRzeW1ib2w6ICcnLFxuXHRcdG51bTogJzk5OScsXG5cdFx0ZGlnaXRzOiAwLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnTm8gQ3VycmVuY3knLFxuXHRcdGNvdW50cmllczogW11cblx0fSxcblx0e1xuXHRcdGNvZGU6ICdZRVInLFxuXHRcdHN5bWJvbDogJ1xcdWZkZmMnLFxuXHRcdG51bTogJzg4NicsXG5cdFx0ZGlnaXRzOiAyLFxuXHRcdGZvcm1hdDogREVMX0NELFxuXHRcdGN1cnJlbmN5OiAnWWVtZW5pIHJpYWwnLFxuXHRcdGNvdW50cmllczogWyd5ZW1lbiddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWkFSJyxcblx0XHRzeW1ib2w6ICdSJyxcblx0XHRudW06ICc3MTAnLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9TRCxcblx0XHRjdXJyZW5jeTogJ1NvdXRoIEFmcmljYW4gcmFuZCcsXG5cdFx0Y291bnRyaWVzOiBbJ3NvdXRoIGFmcmljYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWk1XJyxcblx0XHRzeW1ib2w6ICdaSycsXG5cdFx0bnVtOiAnOTY3Jyxcblx0XHRkaWdpdHM6IDIsXG5cdFx0Zm9ybWF0OiBERUxfQ0QsXG5cdFx0Y3VycmVuY3k6ICdaYW1iaWFuIGt3YWNoYScsXG5cdFx0Y291bnRyaWVzOiBbJ3phbWJpYSddXG5cdH0sXG5cdHtcblx0XHRjb2RlOiAnWldMJyxcblx0XHRzeW1ib2w6ICdcXHUwMDI0Jyxcblx0XHRudW06ICc5MzInLFxuXHRcdGRpZ2l0czogMixcblx0XHRmb3JtYXQ6IERFTF9TRCxcblx0XHRjdXJyZW5jeTogJ1ppbWJhYndlYW4gZG9sbGFyJyxcblx0XHRjb3VudHJpZXM6IFsnemltYmFid2UnXVxuXHR9XG5dO1xuXG5cbiJdfQ==