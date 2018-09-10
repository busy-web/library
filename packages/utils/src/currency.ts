/**
 * @module Utils
 *
 */

export default class Currency {
	public static codes(): string[] {
		return sortByCode(CURRENCY_CODES).map((cc: ICurCode): string => cc.code);
	}

	public static code(code: string): ICurCode | undefined {
		code = code.toUpperCase();
		return sortByCode(CURRENCY_CODES).find((cc: ICurCode): boolean => cc.code === code);
	}

	public static country(name: string): ICurCode[] {
		name = name.toLowerCase();
		return CURRENCY_CODES.filter(c => {
			return (c.countries || []).indexOf(name) > -1;
		});
	}

	public static number(num: number | string): ICurCode | undefined {
		let numStr: string = num.toString();
		if (typeof num === 'number') {
			numStr = ('000' + num).substr(-3);
		}
		return CURRENCY_CODES.find((cc: ICurCode): boolean => cc.num === numStr);
	}

	public static countries(): string[] {
		const list: string[] = [];
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

function sortByCode(list: ICurCode[]): ICurCode[] {
	return list.sort((ca: ICurCode, cb: ICurCode): number => {
		if (ca.code < cb.code) {
			return -1;
		} else if (ca.code > cb.code) {
			return 1;
		} else {
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

interface ICurCode {
	code: string;
	symbol: string;
	num: string;
	digits: number;
	format: string;
	currency: string;
	countries: string[];
}

const CURRENCY_CODES: ICurCode[] = [
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
		countries: ['turkey',  'northern cyprus']
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


