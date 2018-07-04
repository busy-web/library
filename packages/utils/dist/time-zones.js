(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "moment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @module utils
     *
     */
    const moment_1 = require("moment");
    function getTimeZoneType(tzc) {
        let tz;
        if (tzc !== undefined) {
            let locale = moment_1.default.locale();
            if (locale === 'en-US') {
                locale = 'default';
            }
            tz = tzc.data.find((tzd) => tzd.locale === locale);
            if (tz !== undefined) {
                locale = 'default';
                tz = tzc.data.find((tzd) => tzd.locale === locale);
            }
        }
        return tz;
    }
    function timeZoneString(offset, isDST) {
        const tzContainer = TIME_ZONES.find((tzc) => tzc.id === offset);
        let zone;
        const tz = getTimeZoneType(tzContainer);
        if (tz !== undefined) {
            if (isDST) {
                zone = tz.period.dst;
            }
            else {
                zone = tz.period.std;
            }
        }
        return zone;
    }
    exports.timeZoneString = timeZoneString;
    const TIME_ZONES = [
        {
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
        {
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
        {
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
                        std: 'PST',
                        dst: 'AKDT' // Alaska Daylight Saving TimeEntryJulJul 13 2015 10:46:59GMTGMT-8:00
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
                        std: 'MST',
                        dst: 'PDT' // Pacific Daylight Saving TimeEntryJulJul 13 2015 11:46:59GMTGMT-7:00
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
                        std: 'CST',
                        dst: 'MDT' // Mountain Daylight Saving TimeEntryJulJul 13 2015 12:46:59GMTGMT-6:00
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
                        std: 'EST',
                        dst: 'CDT' // Central Daylight Saving TimeEntryJulJul 13 2015 13:46:59GMTGMT-5:00
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
                        std: 'PRT',
                        dst: 'EDT' // Eastern Daylight Saving TimeEntryJulJul 13 2015 14:46:59GMTGMT-4:00
                    }
                }
            ]
        },
        {
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
                },
                {
                    locale: 'pg',
                    period: {
                        std: 'BET',
                        dst: 'BET'
                    }
                } // Brazil Eastern TimeEntryJulJul 13 2015 15:46:59GMTGMT-3:00
            ]
        },
        {
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
                },
                {
                    locale: 'gm',
                    period: {
                        std: 'WET',
                        dst: 'WET'
                    }
                } // Western European TimeEntryJulJul 13 2015 18:46:59GMTGMT+0:00+
            ]
        },
        {
            id: '3600',
            data: [
                {
                    locale: 'default',
                    period: {
                        std: 'CET',
                        dst: 'WEST' // Western European Summer TimeEntryJulJul 13 2015 19:46:59GMTGMT+1:00+
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
                        std: 'EET',
                        dst: 'CEST' // Central European Summer TimeEntryJulJul 13 2015 20:46:59GMTGMT+2:00+
                    }
                },
                {
                    locale: 'ar',
                    period: {
                        std: 'ART',
                        dst: 'ART'
                    }
                },
            ]
        },
        {
            id: '10800',
            data: [
                {
                    locale: 'default',
                    period: {
                        std: 'EAT',
                        dst: 'EEST' // Eastern European Summer TimeEntryJulJul 13 2015 21:46:59GMTGMT+3:00+
                    }
                }
            ]
        },
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
                },
                {
                    locale: 'ch',
                    period: {
                        std: 'CTT',
                        dst: 'CTT'
                    }
                },
                {
                    locale: 'en',
                    period: {
                        std: 'SGT',
                        dst: 'SGT'
                    }
                } // Singapore TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
            ]
        },
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS16b25lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90aW1lLXpvbmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7OztPQUdHO0lBQ0gsbUNBQTRCO0lBaUI1Qix5QkFBeUIsR0FBc0M7UUFDOUQsSUFBSSxFQUE0QixDQUFDO1FBQ2pDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLE1BQU0sR0FBVyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JDLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtnQkFDdkIsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUVELEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsQ0FBQyxHQUFpQixFQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FDckQsQ0FBQztZQUVGLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtnQkFDckIsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDbkIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixDQUFDLEdBQWlCLEVBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUNyRCxDQUFDO2FBQ0Y7U0FDRDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELHdCQUErQixNQUFjLEVBQUUsS0FBYztRQUM1RCxNQUFNLFdBQVcsR0FBc0MsVUFBVSxDQUFDLElBQUksQ0FDckUsQ0FBQyxHQUEwQixFQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FDMUQsQ0FBQztRQUVGLElBQUksSUFBd0IsQ0FBQztRQUU3QixNQUFNLEVBQUUsR0FBNkIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLEtBQUssRUFBRTtnQkFD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QUNEO1FBQ0Q7WUFDQyxFQUFFLEVBQUUsT0FBTztZQUNYLElBQUksRUFBRTtnQkFDTDtvQkFDQyxNQUFNLEVBQUUsU0FBUztvQkFDakIsTUFBTSxFQUFFO3dCQUNQLEdBQUcsRUFBRSxLQUFLO3dCQUNWLEdBQUcsRUFBRSxLQUFLO3FCQUNWO2lCQUNEO2FBQ0Q7U0FDRDtRQUNEO1lBQ0MsRUFBRSxFQUFFLE9BQU87WUFDWCxJQUFJLEVBQUU7Z0JBQ0w7b0JBQ0MsTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLE1BQU0sRUFBRTt3QkFDUCxHQUFHLEVBQUUsTUFBTTt3QkFDWCxHQUFHLEVBQUUsTUFBTTtxQkFDWDtpQkFDRDthQUNEO1NBQ0Q7UUFDRDtZQUNDLEVBQUUsRUFBRSxPQUFPO1lBQ1gsSUFBSSxFQUFFO2dCQUNMO29CQUNDLE1BQU0sRUFBRSxTQUFTO29CQUNqQixNQUFNLEVBQUU7d0JBQ1AsR0FBRyxFQUFFLE1BQU07d0JBQ1gsR0FBRyxFQUFFLE1BQU07cUJBQ1g7aUJBQ0Q7YUFDRDtTQUNEO0tBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSB1dGlsc1xuICpcbiAqL1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbnRlcmZhY2UgRFNUSW5mb1R5cGUge1xuXHRzdGQ6IHN0cmluZztcblx0ZHN0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUaW1lWm9uZVR5cGUge1xuXHRsb2NhbGU6IHN0cmluZztcblx0cGVyaW9kOiBEU1RJbmZvVHlwZTtcbn1cblxuaW50ZXJmYWNlIFRpbWVab25lVHlwZUNvbnRhaW5lciB7XG5cdGlkOiBzdHJpbmc7XG5cdGRhdGE6IFRpbWVab25lVHlwZVtdO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lWm9uZVR5cGUodHpjOiBUaW1lWm9uZVR5cGVDb250YWluZXIgfCB1bmRlZmluZWQpOiBUaW1lWm9uZVR5cGUgfCB1bmRlZmluZWQge1xuXHRsZXQgdHo6IFRpbWVab25lVHlwZSB8IHVuZGVmaW5lZDtcblx0aWYgKHR6YyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0bGV0IGxvY2FsZTogc3RyaW5nID0gbW9tZW50LmxvY2FsZSgpO1xuXHRcdGlmIChsb2NhbGUgPT09ICdlbi1VUycpIHtcblx0XHRcdGxvY2FsZSA9ICdkZWZhdWx0Jztcblx0XHR9XG5cblx0XHR0eiA9IHR6Yy5kYXRhLmZpbmQoXG5cdFx0XHQodHpkOiBUaW1lWm9uZVR5cGUpOiBib29sZWFuID0+IHR6ZC5sb2NhbGUgPT09IGxvY2FsZVxuXHRcdCk7XG5cblx0XHRpZiAodHogIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bG9jYWxlID0gJ2RlZmF1bHQnO1xuXHRcdFx0dHogPSB0emMuZGF0YS5maW5kKFxuXHRcdFx0XHQodHpkOiBUaW1lWm9uZVR5cGUpOiBib29sZWFuID0+IHR6ZC5sb2NhbGUgPT09IGxvY2FsZVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHR6O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZVpvbmVTdHJpbmcob2Zmc2V0OiBzdHJpbmcsIGlzRFNUOiBib29sZWFuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0Y29uc3QgdHpDb250YWluZXI6IFRpbWVab25lVHlwZUNvbnRhaW5lciB8IHVuZGVmaW5lZCA9IFRJTUVfWk9ORVMuZmluZChcblx0XHQodHpjOiBUaW1lWm9uZVR5cGVDb250YWluZXIpOiBib29sZWFuID0+IHR6Yy5pZCA9PT0gb2Zmc2V0XG5cdCk7XG5cblx0bGV0IHpvbmU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdCB0ejogVGltZVpvbmVUeXBlIHwgdW5kZWZpbmVkID0gZ2V0VGltZVpvbmVUeXBlKHR6Q29udGFpbmVyKTtcblx0aWYgKHR6ICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoaXNEU1QpIHtcblx0XHRcdHpvbmUgPSB0ei5wZXJpb2QuZHN0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR6b25lID0gdHoucGVyaW9kLnN0ZDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gem9uZTtcbn1cblxuY29uc3QgVElNRV9aT05FUzogVGltZVpvbmVUeXBlQ29udGFpbmVyW10gPSBbXG5cdHtcdC8vIE1pZHdheSBJc2xhbmRzIFRpbWVFbnRyeUp1bCAxMyAyMDE1IDA3OjQ2OjU5R01ULTExOjAwXG5cdFx0aWQ6ICctMzk2MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ01JVCcsXG5cdFx0XHRcdFx0ZHN0OiAnTUlUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBIYXdhaWkgc3RkIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDA4OjQ2OjU5R01UR01ULTEwOjAwXG5cdFx0aWQ6ICctMzYwMDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0hBU1QnLFxuXHRcdFx0XHRcdGRzdDogJ0hBU1QnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcdC8vIEFsYXNrYSBzdGQgVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMDk6NDY6NTlHTVRHTVQtOTowMFxuXHRcdGlkOiAnLTMyNDAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdBS1NUJyxcblx0XHRcdFx0XHRkc3Q6ICdBS1NUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0aWQ6ICctMjg4MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ1BTVCcsICAvLyBQYWNpZmljIHN0ZCBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxMDo0Njo1OUdNVEdNVC04OjAwXG5cdFx0XHRcdFx0ZHN0OiAnQUtEVCdcdCAgLy8gQWxhc2thIERheWxpZ2h0IFNhdmluZyBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxMDo0Njo1OUdNVEdNVC04OjAwXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRpZDogJy0yNTIwMCcsXG5cdFx0ZGF0YTogW1xuXHRcdFx0e1xuXHRcdFx0XHRsb2NhbGU6ICdkZWZhdWx0Jyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnTVNUJywgIC8vIE1vdW50YWluIHN0ZCBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxMTo0Njo1OUdNVEdNVC03OjAwXG5cdFx0XHRcdFx0ZHN0OiAnUERUJ1x0XHQvLyBQYWNpZmljIERheWxpZ2h0IFNhdmluZyBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxMTo0Njo1OUdNVEdNVC03OjAwXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRpZDogJy0yMTYwMCcsXG5cdFx0ZGF0YTogW1xuXHRcdFx0e1xuXHRcdFx0XHRsb2NhbGU6ICdkZWZhdWx0Jyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnQ1NUJywgIC8vIENlbnRyYWwgc3RkIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDEyOjQ2OjU5R01UR01ULTY6MDBcblx0XHRcdFx0XHRkc3Q6ICdNRFQnXHRcdC8vIE1vdW50YWluIERheWxpZ2h0IFNhdmluZyBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxMjo0Njo1OUdNVEdNVC02OjAwXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRpZDogJy0xODAwMCcsXG5cdFx0ZGF0YTogW1xuXHRcdFx0e1xuXHRcdFx0XHRsb2NhbGU6ICdkZWZhdWx0Jyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnRVNUJywgIC8vIEVhc3Rlcm4gc3RkIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDEzOjQ2OjU5R01UR01ULTU6MDBcblx0XHRcdFx0XHRkc3Q6ICdDRFQnXHRcdC8vIENlbnRyYWwgRGF5bGlnaHQgU2F2aW5nIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDEzOjQ2OjU5R01UR01ULTU6MDBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGlkOiAnLTE0NDAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdQUlQnLCAgLy8gUHVlcnRvIFJpY28gYW5kIFVTIFZpcmdpbiBJc2xhbmRzIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDE0OjQ2OjU5R01UR01ULTQ6MDBcblx0XHRcdFx0XHRkc3Q6ICdFRFQnXHRcdC8vIEVhc3Rlcm4gRGF5bGlnaHQgU2F2aW5nIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDE0OjQ2OjU5R01UR01ULTQ6MDBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1x0Ly8gQ2FuYWRhIE5ld2ZvdW5kbGFuZCBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxNToxNjo1OUdNVEdNVC0zOjMwXG5cdFx0aWQ6ICctMTI2MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0NOVCcsXG5cdFx0XHRcdFx0ZHN0OiAnQ05UJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0aWQ6ICctMTA4MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0FHVCcsXG5cdFx0XHRcdFx0ZHN0OiAnQUdUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAgLy8gQXJnZW50aW5hIHN0ZCBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxNTo0Njo1OUdNVEdNVC0zOjAwXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ3BnJyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnQkVUJyxcblx0XHRcdFx0XHRkc3Q6ICdCRVQnXG5cdFx0XHRcdH1cblx0XHRcdH0gIC8vIEJyYXppbCBFYXN0ZXJuIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDE1OjQ2OjU5R01UR01ULTM6MDBcblx0XHRdXG5cdH0sXG5cdHtcdC8vIENlbnRyYWwgQWZyaWNhbiBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAxNzo0Njo1OUdNVEdNVC0xOjAwXG5cdFx0aWQ6ICctMzYwMCcsXG5cdFx0ZGF0YTogW1xuXHRcdFx0e1xuXHRcdFx0XHRsb2NhbGU6ICdkZWZhdWx0Jyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnQ0FUJyxcblx0XHRcdFx0XHRkc3Q6ICdDQVQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRpZDogJzAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0dNVCcsXG5cdFx0XHRcdFx0ZHN0OiAnR01UJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAgLy8gR3JlZW53aWNoIE1lYW4gVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMTg6NDY6NTlHTVRHTVQrXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2dtJyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnV0VUJyxcblx0XHRcdFx0XHRkc3Q6ICdXRVQnXG5cdFx0XHRcdH1cblx0XHRcdH0gIC8vIFdlc3Rlcm4gRXVyb3BlYW4gVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMTg6NDY6NTlHTVRHTVQrMDowMCtcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRpZDogJzM2MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0NFVCcsICAvLyBDZW50cmFsIEV1cm9wZWFuIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDE5OjQ2OjU5R01UR01UKzE6MDArXG5cdFx0XHRcdFx0ZHN0OiAnV0VTVCdcdFx0Ly8gV2VzdGVybiBFdXJvcGVhbiBTdW1tZXIgVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMTk6NDY6NTlHTVRHTVQrMTowMCtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGlkOiAnNzIwMCcsXG5cdFx0ZGF0YTogW1xuXHRcdFx0e1xuXHRcdFx0XHRsb2NhbGU6ICdkZWZhdWx0Jyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnRUVUJywgIC8vIEVhc3Rlcm4gRXVyb3BlYW4gVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMjA6NDY6NTlHTVRHTVQrMjowMCtcblx0XHRcdFx0XHRkc3Q6ICdDRVNUJyBcdCAgLy8gQ2VudHJhbCBFdXJvcGVhbiBTdW1tZXIgVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMjA6NDY6NTlHTVRHTVQrMjowMCtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnYXInLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdBUlQnLFxuXHRcdFx0XHRcdGRzdDogJ0FSVCdcblx0XHRcdFx0fVxuXHRcdFx0fSwgIC8vIChBcmFiaWMpIEVneXB0IHN0ZCBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAyMDo0Njo1OUdNVEdNVCsyOjAwK1xuXHRcdF1cblx0fSxcblx0e1xuXHRcdGlkOiAnMTA4MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0VBVCcsICAvLyBFYXN0ZXJuIEFmcmljYW4gVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMjE6NDY6NTlHTVRHTVQrMzowMCtcblx0XHRcdFx0XHRkc3Q6ICdFRVNUJ1x0XHQvLyBFYXN0ZXJuIEV1cm9wZWFuIFN1bW1lciBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAyMTo0Njo1OUdNVEdNVCszOjAwK1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBNaWRkbGUgRWFzdCBUaW1lRW50cnlKdWxKdWwgMTMgMjAxNSAyMjoxNjo1OUdNVEdNVCszOjMwK1xuXHRcdGlkOiAnMTI2MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ01FVCcsXG5cdFx0XHRcdFx0ZHN0OiAnTUVUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBOZWFyIEVhc3QgVGltZUVudHJ5SnVsSnVsIDEzIDIwMTUgMjI6NDY6NTlHTVRHTVQrNDowMCtcblx0XHRpZDogJzE0NDAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdORVQnLFxuXHRcdFx0XHRcdGRzdDogJ05FVCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1x0Ly8gUGFraXN0YW4gTGFob3JlIFRpbWVFbnRyeUp1bEp1bCAxMyAyMDE1IDIzOjQ2OjU5R01UR01UKzU6MDArXG5cdFx0aWQ6ICcxODAwMCcsXG5cdFx0ZGF0YTogW1xuXHRcdFx0e1xuXHRcdFx0XHRsb2NhbGU6ICdkZWZhdWx0Jyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnUExUJyxcblx0XHRcdFx0XHRkc3Q6ICdQTFQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcdC8vIEluZGlhIHN0ZCBUaW1lRW50cnlKdWxKdWwgMTQgMjAxNSAwMDoxNjo1OUdNVEdNVCs1OjMwK1xuXHRcdGlkOiAnMTk4MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0lTVCcsXG5cdFx0XHRcdFx0ZHN0OiAnSVNUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBCYW5nbGFkZXNoIHN0ZCBUaW1lRW50cnlKdWxKdWwgMTQgMjAxNSAwMDo0Njo1OUdNVEdNVCs2OjAwK1xuXHRcdGlkOiAnMjE2MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0JTVCcsXG5cdFx0XHRcdFx0ZHN0OiAnQlNUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBJbmRvY2hpbmEgVGltZUVudHJ5SnVsSnVsIDE0IDIwMTUgMDE6NDY6NTlHTVRHTVQrNzowMCtcblx0XHRpZDogJzI1MjAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdJQ1QnLFxuXHRcdFx0XHRcdGRzdDogJ0lDVCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGlkOiAnMjg4MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ0FXU1QnLFxuXHRcdFx0XHRcdGRzdDogJ0FXU1QnXG5cdFx0XHRcdH1cblx0XHRcdH0sIC8vIEF1c3RyYWxpYSBXZXN0ZXJuIFRpbWVFbnRyeUp1bEp1bCAxNCAyMDE1IDAyOjQ2OjU5R01UR01UKzg6MDArXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2NoJyxcblx0XHRcdFx0cGVyaW9kOiB7XG5cdFx0XHRcdFx0c3RkOiAnQ1RUJyxcblx0XHRcdFx0XHRkc3Q6ICdDVFQnXG5cdFx0XHRcdH1cblx0XHRcdH0sICAvLyBDaGluYSBUYWl3YW4gVGltZUVudHJ5SnVsSnVsIDE0IDIwMTUgMDI6NDY6NTlHTVRHTVQrODowMCtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZW4nLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdTR1QnLFxuXHRcdFx0XHRcdGRzdDogJ1NHVCdcblx0XHRcdFx0fVxuXHRcdFx0fSAgLy8gU2luZ2Fwb3JlIFRpbWVFbnRyeUp1bEp1bCAxNCAyMDE1IDAyOjQ2OjU5R01UR01UKzg6MDArXG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBKYXBhbiBzdGQgVGltZUVudHJ5SnVsSnVsIDE0IDIwMTUgMDM6NDY6NTlHTVRHTVQrOTowMCtcblx0XHRpZDogJzMyNDAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdKU1QnLFxuXHRcdFx0XHRcdGRzdDogJ0pTVCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1x0Ly8gQXVzdHJhbGlhIENlbnRyYWwgVGltZUVudHJ5SnVsSnVsIDE0IDIwMTUgMDQ6MTY6NTlHTVRHTVQrOTozMCtcblx0XHRpZDogJzM0MjAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdBQ1NUJyxcblx0XHRcdFx0XHRkc3Q6ICdBQ1NUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBBdXN0cmFsaWEgRWFzdGVybiBUaW1lRW50cnlKdWxKdWwgMTQgMjAxNSAwNDo0Njo1OUdNVEdNVCsxMDowMCtcblx0XHRpZDogJzM2MDAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdBRVNUJyxcblx0XHRcdFx0XHRkc3Q6ICdBRVNUJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XHQvLyBTb2xvbW9uIHN0ZCBUaW1lRW50cnlKdWxKdWwgMTQgMjAxNSAwNTo0Njo1OUdNVEdNVCsxMTowMCtcblx0XHRpZDogJzM5NjAwJyxcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGxvY2FsZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRwZXJpb2Q6IHtcblx0XHRcdFx0XHRzdGQ6ICdTU1QnLFxuXHRcdFx0XHRcdGRzdDogJ1NTVCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1x0Ly8gTmV3IFplYWxhbmQgc3RkIFRpbWVFbnRyeUp1bEp1bCAxNCAyMDE1IDA2OjQ2OjU5R01UR01UKzEyOjAwK1xuXHRcdGlkOiAnNDMyMDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ05aU1QnLFxuXHRcdFx0XHRcdGRzdDogJ05aU1QnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcdC8vIE5ldyBaZWFsYW5kIERheWxpZ2h0IFNhdmluZyBUaW1lRW50cnlKdWxKdWwgMTQgMjAxNSAwNzo0Njo1OUdNVEdNVCsxMzowMFxuXHRcdGlkOiAnNDY4MDAnLFxuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9jYWxlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdHBlcmlvZDoge1xuXHRcdFx0XHRcdHN0ZDogJ05aRFQnLFxuXHRcdFx0XHRcdGRzdDogJ05aRFQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH1cbl07XG5cbiJdfQ==