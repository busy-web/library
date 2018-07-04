/**
 * @module utils
 *
 */
import moment from 'moment';

interface DSTInfoType {
	std: string;
	dst: string;
}

interface TimeZoneType {
	locale: string;
	period: DSTInfoType;
}

interface TimeZoneTypeContainer {
	id: string;
	data: TimeZoneType[];
}

function getTimeZoneType(tzc: TimeZoneTypeContainer | undefined): TimeZoneType | undefined {
	let tz: TimeZoneType | undefined;
	if (tzc !== undefined) {
		let locale: string = moment.locale();
		if (locale === 'en-US') {
			locale = 'default';
		}

		tz = tzc.data.find(
			(tzd: TimeZoneType): boolean => tzd.locale === locale
		);

		if (tz !== undefined) {
			locale = 'default';
			tz = tzc.data.find(
				(tzd: TimeZoneType): boolean => tzd.locale === locale
			);
		}
	}
	return tz;
}

export function timeZoneString(offset: string, isDST: boolean): string | undefined {
	const tzContainer: TimeZoneTypeContainer | undefined = TIME_ZONES.find(
		(tzc: TimeZoneTypeContainer): boolean => tzc.id === offset
	);

	let zone: string | undefined;

	const tz: TimeZoneType | undefined = getTimeZoneType(tzContainer);
	if (tz !== undefined) {
		if (isDST) {
			zone = tz.period.dst;
		} else {
			zone = tz.period.std;
		}
	}

	return zone;
}

const TIME_ZONES: TimeZoneTypeContainer[] = [
	{	// Midway Islands TimeEntryJul 13 2015 07:46:59GMT-11:00
		id: '-39600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'MIT',
					dst: 'MIT'
				}
			}
		]
	},
	{	// Hawaii std TimeEntryJulJul 13 2015 08:46:59GMTGMT-10:00
		id: '-36000',
		data: [
			{
				locale: 'default',
				period: {
					std: 'HAST',
					dst: 'HAST'
				}
			}
		]
	},
	{	// Alaska std TimeEntryJulJul 13 2015 09:46:59GMTGMT-9:00
		id: '-32400',
		data: [
			{
				locale: 'default',
				period: {
					std: 'AKST',
					dst: 'AKST'
				}
			}
		]
	},
	{
		id: '-28800',
		data: [
			{
				locale: 'default',
				period: {
					std: 'PST',  // Pacific std TimeEntryJulJul 13 2015 10:46:59GMTGMT-8:00
					dst: 'AKDT'	  // Alaska Daylight Saving TimeEntryJulJul 13 2015 10:46:59GMTGMT-8:00
				}
			}
		]
	},
	{
		id: '-25200',
		data: [
			{
				locale: 'default',
				period: {
					std: 'MST',  // Mountain std TimeEntryJulJul 13 2015 11:46:59GMTGMT-7:00
					dst: 'PDT'		// Pacific Daylight Saving TimeEntryJulJul 13 2015 11:46:59GMTGMT-7:00
				}
			}
		]
	},
	{
		id: '-21600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'CST',  // Central std TimeEntryJulJul 13 2015 12:46:59GMTGMT-6:00
					dst: 'MDT'		// Mountain Daylight Saving TimeEntryJulJul 13 2015 12:46:59GMTGMT-6:00
				}
			}
		]
	},
	{
		id: '-18000',
		data: [
			{
				locale: 'default',
				period: {
					std: 'EST',  // Eastern std TimeEntryJulJul 13 2015 13:46:59GMTGMT-5:00
					dst: 'CDT'		// Central Daylight Saving TimeEntryJulJul 13 2015 13:46:59GMTGMT-5:00
				}
			}
		]
	},
	{
		id: '-14400',
		data: [
			{
				locale: 'default',
				period: {
					std: 'PRT',  // Puerto Rico and US Virgin Islands TimeEntryJulJul 13 2015 14:46:59GMTGMT-4:00
					dst: 'EDT'		// Eastern Daylight Saving TimeEntryJulJul 13 2015 14:46:59GMTGMT-4:00
				}
			}
		]
	},
	{	// Canada Newfoundland TimeEntryJulJul 13 2015 15:16:59GMTGMT-3:30
		id: '-12600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'CNT',
					dst: 'CNT'
				}
			}
		]
	},
	{
		id: '-10800',
		data: [
			{
				locale: 'default',
				period: {
					std: 'AGT',
					dst: 'AGT'
				}
			},  // Argentina std TimeEntryJulJul 13 2015 15:46:59GMTGMT-3:00
			{
				locale: 'pg',
				period: {
					std: 'BET',
					dst: 'BET'
				}
			}  // Brazil Eastern TimeEntryJulJul 13 2015 15:46:59GMTGMT-3:00
		]
	},
	{	// Central African TimeEntryJulJul 13 2015 17:46:59GMTGMT-1:00
		id: '-3600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'CAT',
					dst: 'CAT'
				}
			}
		]
	},
	{
		id: '0',
		data: [
			{
				locale: 'default',
				period: {
					std: 'GMT',
					dst: 'GMT'
				}
			},  // Greenwich Mean TimeEntryJulJul 13 2015 18:46:59GMTGMT+
			{
				locale: 'gm',
				period: {
					std: 'WET',
					dst: 'WET'
				}
			}  // Western European TimeEntryJulJul 13 2015 18:46:59GMTGMT+0:00+
		]
	},
	{
		id: '3600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'CET',  // Central European TimeEntryJulJul 13 2015 19:46:59GMTGMT+1:00+
					dst: 'WEST'		// Western European Summer TimeEntryJulJul 13 2015 19:46:59GMTGMT+1:00+
				}
			}
		]
	},
	{
		id: '7200',
		data: [
			{
				locale: 'default',
				period: {
					std: 'EET',  // Eastern European TimeEntryJulJul 13 2015 20:46:59GMTGMT+2:00+
					dst: 'CEST' 	  // Central European Summer TimeEntryJulJul 13 2015 20:46:59GMTGMT+2:00+
				}
			},
			{
				locale: 'ar',
				period: {
					std: 'ART',
					dst: 'ART'
				}
			},  // (Arabic) Egypt std TimeEntryJulJul 13 2015 20:46:59GMTGMT+2:00+
		]
	},
	{
		id: '10800',
		data: [
			{
				locale: 'default',
				period: {
					std: 'EAT',  // Eastern African TimeEntryJulJul 13 2015 21:46:59GMTGMT+3:00+
					dst: 'EEST'		// Eastern European Summer TimeEntryJulJul 13 2015 21:46:59GMTGMT+3:00+
				}
			}
		]
	},
	{	// Middle East TimeEntryJulJul 13 2015 22:16:59GMTGMT+3:30+
		id: '12600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'MET',
					dst: 'MET'
				}
			}
		]
	},
	{	// Near East TimeEntryJulJul 13 2015 22:46:59GMTGMT+4:00+
		id: '14400',
		data: [
			{
				locale: 'default',
				period: {
					std: 'NET',
					dst: 'NET'
				}
			}
		]
	},
	{	// Pakistan Lahore TimeEntryJulJul 13 2015 23:46:59GMTGMT+5:00+
		id: '18000',
		data: [
			{
				locale: 'default',
				period: {
					std: 'PLT',
					dst: 'PLT'
				}
			}
		]
	},
	{	// India std TimeEntryJulJul 14 2015 00:16:59GMTGMT+5:30+
		id: '19800',
		data: [
			{
				locale: 'default',
				period: {
					std: 'IST',
					dst: 'IST'
				}
			}
		]
	},
	{	// Bangladesh std TimeEntryJulJul 14 2015 00:46:59GMTGMT+6:00+
		id: '21600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'BST',
					dst: 'BST'
				}
			}
		]
	},
	{	// Indochina TimeEntryJulJul 14 2015 01:46:59GMTGMT+7:00+
		id: '25200',
		data: [
			{
				locale: 'default',
				period: {
					std: 'ICT',
					dst: 'ICT'
				}
			}
		]
	},
	{
		id: '28800',
		data: [
			{
				locale: 'default',
				period: {
					std: 'AWST',
					dst: 'AWST'
				}
			}, // Australia Western TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
			{
				locale: 'ch',
				period: {
					std: 'CTT',
					dst: 'CTT'
				}
			},  // China Taiwan TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
			{
				locale: 'en',
				period: {
					std: 'SGT',
					dst: 'SGT'
				}
			}  // Singapore TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
		]
	},
	{	// Japan std TimeEntryJulJul 14 2015 03:46:59GMTGMT+9:00+
		id: '32400',
		data: [
			{
				locale: 'default',
				period: {
					std: 'JST',
					dst: 'JST'
				}
			}
		]
	},
	{	// Australia Central TimeEntryJulJul 14 2015 04:16:59GMTGMT+9:30+
		id: '34200',
		data: [
			{
				locale: 'default',
				period: {
					std: 'ACST',
					dst: 'ACST'
				}
			}
		]
	},
	{	// Australia Eastern TimeEntryJulJul 14 2015 04:46:59GMTGMT+10:00+
		id: '36000',
		data: [
			{
				locale: 'default',
				period: {
					std: 'AEST',
					dst: 'AEST'
				}
			}
		]
	},
	{	// Solomon std TimeEntryJulJul 14 2015 05:46:59GMTGMT+11:00+
		id: '39600',
		data: [
			{
				locale: 'default',
				period: {
					std: 'SST',
					dst: 'SST'
				}
			}
		]
	},
	{	// New Zealand std TimeEntryJulJul 14 2015 06:46:59GMTGMT+12:00+
		id: '43200',
		data: [
			{
				locale: 'default',
				period: {
					std: 'NZST',
					dst: 'NZST'
				}
			}
		]
	},
	{	// New Zealand Daylight Saving TimeEntryJulJul 14 2015 07:46:59GMTGMT+13:00
		id: '46800',
		data: [
			{
				locale: 'default',
				period: {
					std: 'NZDT',
					dst: 'NZDT'
				}
			}
		]
	}
];

