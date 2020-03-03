function calcTime(offSet) {

		d = new Date();
		utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		nd = new Date(utc + (3600000*offSet));
		return nd.toLocaleString();

}

// defines side bar

function addPremiumUserSidebarItem(isPremium) {
    answersBackofficeSdk.addTicketInfoSection('Users Local Time', calcTime(offSet) + ' in ' + userCity);
}

// declared variables

let tixData
let timeZones
let fullTz
let offSet
let name
let userCity

// listener executres on ticket page load

answersBackofficeSdk.addListener(answersBackofficeSdk.eventTypes.ticketLoaded, function (ticketData) {
  	tixData = ticketData;
		timeZones = [{"offset":"-12.00","name":"Etc/-12"},{"offset":"-11.00","name":"Etc/-11"},{"offset":"-11.00","name":"Pacific/Midway"},{"offset":"-10.00","name":"America/Adak"},{"offset":"+9.00","name":"America/Anchorage"},{"offset":"+9.00","name":"Pacific/Gambier"},{"offset":"+8.00","name":"America/Dawson_Creek"},{"offset":"+8.00","name":"America/Ensenada"},{"offset":"+8.00","name":"America/Los_Angeles"},{"offset":"+7.00","name":"America/Chihuahua"},{"offset":"+7.00","name":"America/Denver"},{"offset":"+6.00","name":"America/Belize"},{"offset":"+6.00","name":"America/Cancun"},{"offset":"+6.00","name":"America/Chicago"},{"offset":"+6.00","name":"Chile/EasterIsland"},{"offset":"+5.00","name":"America/Bogota"},{"offset":"+5.00","name":"America/Havana"},{"offset":"+5.00","name":"America/New_York"},{"offset":"+4.30","name":"America/Caracas"},{"offset":"+4.00","name":"America/Campo_Grande"},{"offset":"+4.00","name":"America/Glace_Bay"},{"offset":"+4.00","name":"America/Goose_Bay"},{"offset":"+4.00","name":"America/Santiago"},{"offset":"+4.00","name":"America/La_Paz"},{"offset":"+3.00","name":"America/Argentina/Buenos_Aires"},{"offset":"+3.00","name":"America/Montevideo"},{"offset":"+3.00","name":"America/Araguaina"},{"offset":"+3.00","name":"America/Godthab"},{"offset":"+3.00","name":"America/Miquelon"},{"offset":"-03.00","name":"America/Sao_Paulo"},{"offset":"+3.30","name":"America/St_Johns"},{"offset":"+2.00","name":"America/Noronha"},{"offset":"+1.00","name":"Atlantic/Cape_Verde"},{"offset":"","name":"Europe/Belfast"},{"offset":"","name":"Africa/Abidjan"},{"offset":"","name":"Europe/Dublin"},{"offset":"","name":"Europe/Lisbon"},{"offset":"","name":"Europe/London"},{"offset":"UTC","name":"UTC"},{"offset":"+1.00","name":"Africa/Algiers"},{"offset":"+1.00","name":"Africa/Windhoek"},{"offset":"+1.00","name":"Atlantic/Azores"},{"offset":"+1.00","name":"Atlantic/Stanley"},{"offset":"+1.00","name":"Europe/Amsterdam"},{"offset":"+1.00","name":"Europe/Belgrade"},{"offset":"+1.00","name":"Europe/Brussels"},{"offset":"+2.00","name":"Africa/Cairo"},{"offset":"+2.00","name":"Africa/Blantyre"},{"offset":"+2.00","name":"Asia/Beirut"},{"offset":"+2.00","name":"Asia/Damascus"},{"offset":"+2.00","name":"Asia/Gaza"},{"offset":"+2.00","name":"Asia/Jerusalem"},{"offset":"+3.00","name":"Africa/Addis_Ababa"},{"offset":"+3.00","name":"Asia/Riyadh89"},{"offset":"+3.00","name":"Europe/Minsk"},{"offset":"+3.30","name":"Asia/Tehran"},{"offset":"+4.00","name":"Asia/Dubai"},{"offset":"+4.00","name":"Asia/Yerevan"},{"offset":"+4.00","name":"Europe/Moscow"},{"offset":"+4.30","name":"Asia/Kabul"},{"offset":"+5.00","name":"Asia/Tashkent"},{"offset":"+5.30","name":"Asia/Kolkata"},{"offset":"+5.45","name":"Asia/Katmandu"},{"offset":"+6.00","name":"Asia/Dhaka"},{"offset":"+6.00","name":"Asia/Yekaterinburg"},{"offset":"+6.30","name":"Asia/Rangoon"},{"offset":"+7.00","name":"Asia/Bangkok"},{"offset":"+7.00","name":"Asia/Novosibirsk"},{"offset":"+8.00","name":"Etc/+8"},{"offset":"+8.00","name":"Asia/Hong_Kong"},{"offset":"+8.00","name":"Asia/Krasnoyarsk"},{"offset":"+8.00","name":"Australia/Perth"},{"offset":"+8.45","name":"Australia/Eucla"},{"offset":"+9.00","name":"Asia/Irkutsk"},{"offset":"+9.00","name":"Asia/Seoul"},{"offset":"+9.00","name":"Asia/Tokyo"},{"offset":"+9.30","name":"Australia/Adelaide"},{"offset":"+9.30","name":"Australia/Darwin"},{"offset":"+9.30","name":"Pacific/Marquesas"},{"offset":"+10.00","name":"Etc/+10"},{"offset":"+10.00","name":"Australia/Brisbane"},{"offset":"+10.00","name":"Australia/Hobart"},{"offset":"+10.00","name":"Asia/Yakutsk"},{"offset":"+10.30","name":"Australia/Lord_Howe"},{"offset":"+11.00","name":"Asia/Vladivostok"},{"offset":"+11.30","name":"Pacific/Norfolk"},{"offset":"+12.00","name":"Etc/+12"},{"offset":"+12.00","name":"Asia/Anadyr"},{"offset":"+12.00","name":"Asia/Magadan"},{"offset":"+12.00","name":"Pacific/Auckland"},{"offset":"+12.45","name":"Pacific/Chatham"},{"offset":"+13.00","name":"Pacific/Tongatapu"},{"offset":"+14.00","name":"Pacific/Kiritimati"}];


		let timeZone = tixData.userInfo.timezone;

		userCity = tixData.userInfo.city;

		let i
		for (i = 0; i < timeZones.length; i++) {
			if (timeZone === timeZones[i].name) {
				fullTz = timeZones[i]
				offSet = timeZones[i].offset
				name  = timeZones[i].name

			}

	};

		addPremiumUserSidebarItem(timeZone);
});





		// timeZones = [{"offset":"-12.00","name":"Etc/-12"},{"offset":"-11.00","name":"Etc/-11"},{"offset":"-11.00","name":"Pacific/Midway"},{"offset":"-10.00","name":"America/Adak"},{"offset":"+9.00","name":"America/Anchorage"},{"offset":"+9.00","name":"Pacific/Gambier"},{"offset":"+8.00","name":"America/Dawson_Creek"},{"offset":"+8.00","name":"America/Ensenada"},{"offset":"+8.00","name":"America/Los_Angeles"},{"offset":"+7.00","name":"America/Chihuahua"},{"offset":"+7.00","name":"America/Denver"},{"offset":"+6.00","name":"America/Belize"},{"offset":"+6.00","name":"America/Cancun"},{"offset":"+6.00","name":"America/Chicago"},{"offset":"+6.00","name":"Chile/EasterIsland"},{"offset":"+5.00","name":"America/Bogota"},{"offset":"+5.00","name":"America/Havana"},{"offset":"+5.00","name":"America/New_York"},{"offset":"+4.30","name":"America/Caracas"},{"offset":"+4.00","name":"America/Campo_Grande"},{"offset":"+4.00","name":"America/Glace_Bay"},{"offset":"+4.00","name":"America/Goose_Bay"},{"offset":"+4.00","name":"America/Santiago"},{"offset":"+4.00","name":"America/La_Paz"},{"offset":"+3.00","name":"America/Argentina/Buenos_Aires"},{"offset":"+3.00","name":"America/Montevideo"},{"offset":"+3.00","name":"America/Araguaina"},{"offset":"+3.00","name":"America/Godthab"},{"offset":"+3.00","name":"America/Miquelon"},{"offset":"-03.00","name":"America/Sao_Paulo"},{"offset":"+3.30","name":"America/St_Johns"},{"offset":"+2.00","name":"America/Noronha"},{"offset":"+1.00","name":"Atlantic/Cape_Verde"},{"offset":"","name":"Europe/Belfast"},{"offset":"","name":"Africa/Abidjan"},{"offset":"","name":"Europe/Dublin"},{"offset":"","name":"Europe/Lisbon"},{"offset":"","name":"Europe/London"},{"offset":"UTC","name":"UTC"},{"offset":"+1.00","name":"Africa/Algiers"},{"offset":"+1.00","name":"Africa/Windhoek"},{"offset":"+1.00","name":"Atlantic/Azores"},{"offset":"+1.00","name":"Atlantic/Stanley"},{"offset":"+1.00","name":"Europe/Amsterdam"},{"offset":"+1.00","name":"Europe/Belgrade"},{"offset":"+1.00","name":"Europe/Brussels"},{"offset":"+2.00","name":"Africa/Cairo"},{"offset":"+2.00","name":"Africa/Blantyre"},{"offset":"+2.00","name":"Asia/Beirut"},{"offset":"+2.00","name":"Asia/Damascus"},{"offset":"+2.00","name":"Asia/Gaza"},{"offset":"+2.00","name":"Asia/Jerusalem"},{"offset":"+3.00","name":"Africa/Addis_Ababa"},{"offset":"+3.00","name":"Asia/Riyadh89"},{"offset":"+3.00","name":"Europe/Minsk"},{"offset":"+3.30","name":"Asia/Tehran"},{"offset":"+4.00","name":"Asia/Dubai"},{"offset":"+4.00","name":"Asia/Yerevan"},{"offset":"+4.00","name":"Europe/Moscow"},{"offset":"+4.30","name":"Asia/Kabul"},{"offset":"+5.00","name":"Asia/Tashkent"},{"offset":"+5.30","name":"Asia/Kolkata"},{"offset":"+5.45","name":"Asia/Katmandu"},{"offset":"+6.00","name":"Asia/Dhaka"},{"offset":"+6.00","name":"Asia/Yekaterinburg"},{"offset":"+6.30","name":"Asia/Rangoon"},{"offset":"+7.00","name":"Asia/Bangkok"},{"offset":"+7.00","name":"Asia/Novosibirsk"},{"offset":"+8.00","name":"Etc/+8"},{"offset":"+8.00","name":"Asia/Hong_Kong"},{"offset":"+8.00","name":"Asia/Krasnoyarsk"},{"offset":"+8.00","name":"Australia/Perth"},{"offset":"+8.45","name":"Australia/Eucla"},{"offset":"+9.00","name":"Asia/Irkutsk"},{"offset":"+9.00","name":"Asia/Seoul"},{"offset":"+9.00","name":"Asia/Tokyo"},{"offset":"+9.30","name":"Australia/Adelaide"},{"offset":"+9.30","name":"Australia/Darwin"},{"offset":"+9.30","name":"Pacific/Marquesas"},{"offset":"+10.00","name":"Etc/+10"},{"offset":"+10.00","name":"Australia/Brisbane"},{"offset":"+10.00","name":"Australia/Hobart"},{"offset":"+10.00","name":"Asia/Yakutsk"},{"offset":"+10.30","name":"Australia/Lord_Howe"},{"offset":"+11.00","name":"Asia/Vladivostok"},{"offset":"+11.30","name":"Pacific/Norfolk"},{"offset":"+12.00","name":"Etc/+12"},{"offset":"+12.00","name":"Asia/Anadyr"},{"offset":"+12.00","name":"Asia/Magadan"},{"offset":"+12.00","name":"Pacific/Auckland"},{"offset":"+12.45","name":"Pacific/Chatham"},{"offset":"+13.00","name":"Pacific/Tongatapu"},{"offset":"+14.00","name":"Pacific/Kiritimati"}]
