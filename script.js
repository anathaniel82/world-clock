/* 
  This is our JavaScript file - it's like the brain of our webpage!
  JavaScript is a programming language that makes web pages interactive.
  Think of it like the remote control for a TV - HTML is the TV screen,
  CSS is how the TV looks, and JavaScript is the buttons that make things happen!
*/

// 
// First, let's create a big list of major metropolitan cities from all over the world!
// Each city has a name and a timezone (which tells us what time it is there).
// Think of timezones like different clocks in different parts of the world!
// This list includes capitals AND major metropolitan cities to ensure all timezones are covered!
//
const capitals = [
  // 
  // These are major cities from around the world, organized by region and timezone.
  // Each one looks like: { name: "City Name", timezone: "Timezone Name" }
  // The name is what we show to users, and the timezone tells JavaScript
  // what time it is in that city!
  //
  // AFRICA
  { name: "Abuja, Nigeria", timezone: "Africa/Lagos" },
  { name: "Accra, Ghana", timezone: "Africa/Accra" },
  { name: "Addis Ababa, Ethiopia", timezone: "Africa/Addis_Ababa" },
  { name: "Algiers, Algeria", timezone: "Africa/Algiers" },
  { name: "Antananarivo, Madagascar", timezone: "Indian/Antananarivo" },
  { name: "Asmara, Eritrea", timezone: "Africa/Asmara" },
  { name: "Bamako, Mali", timezone: "Africa/Bamako" },
  { name: "Bangui, Central African Republic", timezone: "Africa/Bangui" },
  { name: "Banjul, Gambia", timezone: "Africa/Banjul" },
  { name: "Bissau, Guinea-Bissau", timezone: "Africa/Bissau" },
  { name: "Cairo, Egypt", timezone: "Africa/Cairo" },
  { name: "Conakry, Guinea", timezone: "Africa/Conakry" },
  { name: "Dakar, Senegal", timezone: "Africa/Dakar" },
  { name: "Dar es Salaam, Tanzania", timezone: "Africa/Dar_es_Salaam" },
  { name: "Djibouti, Djibouti", timezone: "Africa/Djibouti" },
  { name: "Dodoma, Tanzania", timezone: "Africa/Dar_es_Salaam" },
  { name: "Freetown, Sierra Leone", timezone: "Africa/Freetown" },
  { name: "Gaborone, Botswana", timezone: "Africa/Gaborone" },
  { name: "Harare, Zimbabwe", timezone: "Africa/Harare" },
  { name: "Kampala, Uganda", timezone: "Africa/Kampala" },
  { name: "Khartoum, Sudan", timezone: "Africa/Khartoum" },
  { name: "Kigali, Rwanda", timezone: "Africa/Kigali" },
  { name: "Kinshasa, Democratic Republic of the Congo", timezone: "Africa/Kinshasa" },
  { name: "Lagos, Nigeria", timezone: "Africa/Lagos" },
  { name: "Libreville, Gabon", timezone: "Africa/Libreville" },
  { name: "Lilongwe, Malawi", timezone: "Africa/Blantyre" },
  { name: "Lomé, Togo", timezone: "Africa/Lome" },
  { name: "Luanda, Angola", timezone: "Africa/Luanda" },
  { name: "Lusaka, Zambia", timezone: "Africa/Lusaka" },
  { name: "Malabo, Equatorial Guinea", timezone: "Africa/Malabo" },
  { name: "Maputo, Mozambique", timezone: "Africa/Maputo" },
  { name: "Mogadishu, Somalia", timezone: "Africa/Mogadishu" },
  { name: "Monrovia, Liberia", timezone: "Africa/Monrovia" },
  { name: "Nairobi, Kenya", timezone: "Africa/Nairobi" },
  { name: "Niamey, Niger", timezone: "Africa/Niamey" },
  { name: "Nouakchott, Mauritania", timezone: "Africa/Nouakchott" },
  { name: "Ouagadougou, Burkina Faso", timezone: "Africa/Ouagadougou" },
  { name: "Porto-Novo, Benin", timezone: "Africa/Porto-Novo" },
  { name: "Praia, Cape Verde", timezone: "Atlantic/Cape_Verde" },
  { name: "Rabat, Morocco", timezone: "Africa/Casablanca" },
  { name: "Tripoli, Libya", timezone: "Africa/Tripoli" },
  { name: "Tunis, Tunisia", timezone: "Africa/Tunis" },
  { name: "Windhoek, Namibia", timezone: "Africa/Windhoek" },
  { name: "Yaoundé, Cameroon", timezone: "Africa/Douala" },
  
  // ASIA
  { name: "Abu Dhabi, United Arab Emirates", timezone: "Asia/Dubai" },
  { name: "Amman, Jordan", timezone: "Asia/Amman" },
  { name: "Ankara, Turkey", timezone: "Europe/Istanbul" },
  { name: "Ashgabat, Turkmenistan", timezone: "Asia/Ashgabat" },
  { name: "Astana, Kazakhstan", timezone: "Asia/Almaty" },
  { name: "Baghdad, Iraq", timezone: "Asia/Baghdad" },
  { name: "Baku, Azerbaijan", timezone: "Asia/Baku" },
  { name: "Bangkok, Thailand", timezone: "Asia/Bangkok" },
  { name: "Beijing, China", timezone: "Asia/Shanghai" },
  { name: "Beirut, Lebanon", timezone: "Asia/Beirut" },
  { name: "Bishkek, Kyrgyzstan", timezone: "Asia/Bishkek" },
  { name: "Colombo, Sri Lanka", timezone: "Asia/Colombo" },
  { name: "Damascus, Syria", timezone: "Asia/Damascus" },
  { name: "Dhaka, Bangladesh", timezone: "Asia/Dhaka" },
  { name: "Dili, East Timor", timezone: "Asia/Dili" },
  { name: "Doha, Qatar", timezone: "Asia/Qatar" },
  { name: "Dushanbe, Tajikistan", timezone: "Asia/Dushanbe" },
  { name: "Hanoi, Vietnam", timezone: "Asia/Ho_Chi_Minh" },
  { name: "Islamabad, Pakistan", timezone: "Asia/Karachi" },
  { name: "Jakarta, Indonesia", timezone: "Asia/Jakarta" },
  { name: "Jerusalem, Israel", timezone: "Asia/Jerusalem" },
  { name: "Kabul, Afghanistan", timezone: "Asia/Kabul" },
  { name: "Kathmandu, Nepal", timezone: "Asia/Kathmandu" },
  { name: "Kuala Lumpur, Malaysia", timezone: "Asia/Kuala_Lumpur" },
  { name: "Kuwait City, Kuwait", timezone: "Asia/Kuwait" },
  { name: "Manila, Philippines", timezone: "Asia/Manila" },
  { name: "Muscat, Oman", timezone: "Asia/Muscat" },
  { name: "Naypyidaw, Myanmar", timezone: "Asia/Yangon" },
  { name: "New Delhi, India", timezone: "Asia/Kolkata" },
  { name: "Phnom Penh, Cambodia", timezone: "Asia/Phnom_Penh" },
  { name: "Pyongyang, North Korea", timezone: "Asia/Pyongyang" },
  { name: "Riyadh, Saudi Arabia", timezone: "Asia/Riyadh" },
  { name: "Seoul, South Korea", timezone: "Asia/Seoul" },
  { name: "Singapore, Singapore", timezone: "Asia/Singapore" },
  { name: "Tashkent, Uzbekistan", timezone: "Asia/Tashkent" },
  { name: "Tehran, Iran", timezone: "Asia/Tehran" },
  { name: "Thimphu, Bhutan", timezone: "Asia/Thimphu" },
  { name: "Tokyo, Japan", timezone: "Asia/Tokyo" },
  { name: "Ulaanbaatar, Mongolia", timezone: "Asia/Ulaanbaatar" },
  { name: "Vientiane, Laos", timezone: "Asia/Vientiane" },
  { name: "Yerevan, Armenia", timezone: "Asia/Yerevan" },
  
  // EUROPE
  { name: "Amsterdam, Netherlands", timezone: "Europe/Amsterdam" },
  { name: "Athens, Greece", timezone: "Europe/Athens" },
  { name: "Belgrade, Serbia", timezone: "Europe/Belgrade" },
  { name: "Berlin, Germany", timezone: "Europe/Berlin" },
  { name: "Bern, Switzerland", timezone: "Europe/Zurich" },
  { name: "Bratislava, Slovakia", timezone: "Europe/Bratislava" },
  { name: "Brussels, Belgium", timezone: "Europe/Brussels" },
  { name: "Bucharest, Romania", timezone: "Europe/Bucharest" },
  { name: "Budapest, Hungary", timezone: "Europe/Budapest" },
  { name: "Chisinau, Moldova", timezone: "Europe/Chisinau" },
  { name: "Copenhagen, Denmark", timezone: "Europe/Copenhagen" },
  { name: "Dublin, Ireland", timezone: "Europe/Dublin" },
  { name: "Helsinki, Finland", timezone: "Europe/Helsinki" },
  { name: "Kiev, Ukraine", timezone: "Europe/Kiev" },
  { name: "Lisbon, Portugal", timezone: "Europe/Lisbon" },
  { name: "Ljubljana, Slovenia", timezone: "Europe/Ljubljana" },
  { name: "London, United Kingdom", timezone: "Europe/London" },
  { name: "Luxembourg, Luxembourg", timezone: "Europe/Luxembourg" },
  { name: "Madrid, Spain", timezone: "Europe/Madrid" },
  { name: "Minsk, Belarus", timezone: "Europe/Minsk" },
  { name: "Monaco, Monaco", timezone: "Europe/Monaco" },
  { name: "Moscow, Russia", timezone: "Europe/Moscow" },
  { name: "Nicosia, Cyprus", timezone: "Asia/Nicosia" },
  { name: "Oslo, Norway", timezone: "Europe/Oslo" },
  { name: "Paris, France", timezone: "Europe/Paris" },
  { name: "Podgorica, Montenegro", timezone: "Europe/Podgorica" },
  { name: "Prague, Czech Republic", timezone: "Europe/Prague" },
  { name: "Reykjavik, Iceland", timezone: "Atlantic/Reykjavik" },
  { name: "Riga, Latvia", timezone: "Europe/Riga" },
  { name: "Rome, Italy", timezone: "Europe/Rome" },
  { name: "Sarajevo, Bosnia and Herzegovina", timezone: "Europe/Sarajevo" },
  { name: "Skopje, North Macedonia", timezone: "Europe/Skopje" },
  { name: "Sofia, Bulgaria", timezone: "Europe/Sofia" },
  { name: "Stockholm, Sweden", timezone: "Europe/Stockholm" },
  { name: "Tallinn, Estonia", timezone: "Europe/Tallinn" },
  { name: "Tirana, Albania", timezone: "Europe/Tirane" },
  { name: "Vaduz, Liechtenstein", timezone: "Europe/Vaduz" },
  { name: "Valletta, Malta", timezone: "Europe/Malta" },
  { name: "Vienna, Austria", timezone: "Europe/Vienna" },
  { name: "Vilnius, Lithuania", timezone: "Europe/Vilnius" },
  { name: "Warsaw, Poland", timezone: "Europe/Warsaw" },
  { name: "Zagreb, Croatia", timezone: "Europe/Zagreb" },
  
  // NORTH AMERICA
  { name: "Belmopan, Belize", timezone: "America/Belize" },
  { name: "Bridgetown, Barbados", timezone: "America/Barbados" },
  { name: "Guatemala City, Guatemala", timezone: "America/Guatemala" },
  { name: "Havana, Cuba", timezone: "America/Havana" },
  { name: "Kingston, Jamaica", timezone: "America/Jamaica" },
  { name: "Managua, Nicaragua", timezone: "America/Managua" },
  { name: "Mexico City, Mexico", timezone: "America/Mexico_City" },
  { name: "Nassau, Bahamas", timezone: "America/Nassau" },
  { name: "Ottawa, Canada", timezone: "America/Toronto" },
  { name: "Panama City, Panama", timezone: "America/Panama" },
  { name: "Port-au-Prince, Haiti", timezone: "America/Port-au-Prince" },
  { name: "San José, Costa Rica", timezone: "America/Costa_Rica" },
  { name: "San Salvador, El Salvador", timezone: "America/El_Salvador" },
  { name: "Santo Domingo, Dominican Republic", timezone: "America/Santo_Domingo" },
  { name: "Tegucigalpa, Honduras", timezone: "America/Tegucigalpa" },
  { name: "Washington, D.C., United States", timezone: "America/New_York" },
  
  // SOUTH AMERICA
  { name: "Asunción, Paraguay", timezone: "America/Asuncion" },
  { name: "Bogotá, Colombia", timezone: "America/Bogota" },
  { name: "Brasília, Brazil", timezone: "America/Sao_Paulo" },
  { name: "Buenos Aires, Argentina", timezone: "America/Argentina/Buenos_Aires" },
  { name: "Caracas, Venezuela", timezone: "America/Caracas" },
  { name: "Georgetown, Guyana", timezone: "America/Guyana" },
  { name: "La Paz, Bolivia", timezone: "America/La_Paz" },
  { name: "Lima, Peru", timezone: "America/Lima" },
  { name: "Montevideo, Uruguay", timezone: "America/Montevideo" },
  { name: "Paramaribo, Suriname", timezone: "America/Paramaribo" },
  { name: "Quito, Ecuador", timezone: "America/Guayaquil" },
  { name: "Santiago, Chile", timezone: "America/Santiago" },
  { name: "Sucre, Bolivia", timezone: "America/La_Paz" },
  
  // OCEANIA
  { name: "Apia, Samoa", timezone: "Pacific/Apia" },
  { name: "Auckland, New Zealand", timezone: "Pacific/Auckland" },
  { name: "Brisbane, Australia", timezone: "Australia/Brisbane" },
  { name: "Canberra, Australia", timezone: "Australia/Sydney" },
  { name: "Christchurch, New Zealand", timezone: "Pacific/Auckland" },
  { name: "Darwin, Australia", timezone: "Australia/Darwin" },
  { name: "Funafuti, Tuvalu", timezone: "Pacific/Funafuti" },
  { name: "Hobart, Australia", timezone: "Australia/Hobart" },
  { name: "Honolulu, Hawaii, United States", timezone: "Pacific/Honolulu" },
  { name: "Honiara, Solomon Islands", timezone: "Pacific/Guadalcanal" },
  { name: "Majuro, Marshall Islands", timezone: "Pacific/Majuro" },
  { name: "Melbourne, Australia", timezone: "Australia/Melbourne" },
  { name: "Nuku'alofa, Tonga", timezone: "Pacific/Tongatapu" },
  { name: "Palikir, Micronesia", timezone: "Pacific/Pohnpei" },
  { name: "Perth, Australia", timezone: "Australia/Perth" },
  { name: "Port Moresby, Papua New Guinea", timezone: "Pacific/Port_Moresby" },
  { name: "Port Vila, Vanuatu", timezone: "Pacific/Efate" },
  { name: "Suva, Fiji", timezone: "Pacific/Fiji" },
  { name: "Sydney, Australia", timezone: "Australia/Sydney" },
  { name: "Tarawa, Kiribati", timezone: "Pacific/Tarawa" },
  { name: "Wellington, New Zealand", timezone: "Pacific/Auckland" },
  
  // MAJOR METROPOLITAN CITIES - NORTH AMERICA
  { name: "Anchorage, Alaska, United States", timezone: "America/Anchorage" },
  { name: "Atlanta, Georgia, United States", timezone: "America/New_York" },
  { name: "Boston, Massachusetts, United States", timezone: "America/New_York" },
  { name: "Calgary, Canada", timezone: "America/Edmonton" },
  { name: "Chicago, Illinois, United States", timezone: "America/Chicago" },
  { name: "Dallas, Texas, United States", timezone: "America/Chicago" },
  { name: "Denver, Colorado, United States", timezone: "America/Denver" },
  { name: "Detroit, Michigan, United States", timezone: "America/New_York" },
  { name: "Edmonton, Canada", timezone: "America/Edmonton" },
  { name: "Houston, Texas, United States", timezone: "America/Chicago" },
  { name: "Las Vegas, Nevada, United States", timezone: "America/Los_Angeles" },
  { name: "Los Angeles, California, United States", timezone: "America/Los_Angeles" },
  { name: "Mexico City, Mexico", timezone: "America/Mexico_City" },
  { name: "Miami, Florida, United States", timezone: "America/New_York" },
  { name: "Montreal, Canada", timezone: "America/Toronto" },
  { name: "New York, New York, United States", timezone: "America/New_York" },
  { name: "Philadelphia, Pennsylvania, United States", timezone: "America/New_York" },
  { name: "Phoenix, Arizona, United States", timezone: "America/Phoenix" },
  { name: "San Diego, California, United States", timezone: "America/Los_Angeles" },
  { name: "San Francisco, California, United States", timezone: "America/Los_Angeles" },
  { name: "Seattle, Washington, United States", timezone: "America/Los_Angeles" },
  { name: "Toronto, Canada", timezone: "America/Toronto" },
  { name: "Vancouver, Canada", timezone: "America/Vancouver" },
  { name: "Washington, D.C., United States", timezone: "America/New_York" },
  
  // MAJOR METROPOLITAN CITIES - ASIA
  { name: "Bangkok, Thailand", timezone: "Asia/Bangkok" },
  { name: "Bangalore, India", timezone: "Asia/Kolkata" },
  { name: "Beijing, China", timezone: "Asia/Shanghai" },
  { name: "Busan, South Korea", timezone: "Asia/Seoul" },
  { name: "Chennai, India", timezone: "Asia/Kolkata" },
  { name: "Chongqing, China", timezone: "Asia/Shanghai" },
  { name: "Delhi, India", timezone: "Asia/Kolkata" },
  { name: "Dubai, United Arab Emirates", timezone: "Asia/Dubai" },
  { name: "Guangzhou, China", timezone: "Asia/Shanghai" },
  { name: "Hangzhou, China", timezone: "Asia/Shanghai" },
  { name: "Ho Chi Minh City, Vietnam", timezone: "Asia/Ho_Chi_Minh" },
  { name: "Hong Kong, China", timezone: "Asia/Hong_Kong" },
  { name: "Hyderabad, India", timezone: "Asia/Kolkata" },
  { name: "Jakarta, Indonesia", timezone: "Asia/Jakarta" },
  { name: "Karachi, Pakistan", timezone: "Asia/Karachi" },
  { name: "Kolkata, India", timezone: "Asia/Kolkata" },
  { name: "Kuala Lumpur, Malaysia", timezone: "Asia/Kuala_Lumpur" },
  { name: "Manila, Philippines", timezone: "Asia/Manila" },
  { name: "Mumbai, India", timezone: "Asia/Kolkata" },
  { name: "Nagoya, Japan", timezone: "Asia/Tokyo" },
  { name: "Osaka, Japan", timezone: "Asia/Tokyo" },
  { name: "Seoul, South Korea", timezone: "Asia/Seoul" },
  { name: "Shanghai, China", timezone: "Asia/Shanghai" },
  { name: "Shenzhen, China", timezone: "Asia/Shanghai" },
  { name: "Singapore, Singapore", timezone: "Asia/Singapore" },
  { name: "Taipei, Taiwan", timezone: "Asia/Taipei" },
  { name: "Tokyo, Japan", timezone: "Asia/Tokyo" },
  { name: "Yokohama, Japan", timezone: "Asia/Tokyo" },
  
  // MAJOR METROPOLITAN CITIES - EUROPE
  { name: "Amsterdam, Netherlands", timezone: "Europe/Amsterdam" },
  { name: "Barcelona, Spain", timezone: "Europe/Madrid" },
  { name: "Berlin, Germany", timezone: "Europe/Berlin" },
  { name: "Brussels, Belgium", timezone: "Europe/Brussels" },
  { name: "Copenhagen, Denmark", timezone: "Europe/Copenhagen" },
  { name: "Dublin, Ireland", timezone: "Europe/Dublin" },
  { name: "Frankfurt, Germany", timezone: "Europe/Berlin" },
  { name: "Hamburg, Germany", timezone: "Europe/Berlin" },
  { name: "Istanbul, Turkey", timezone: "Europe/Istanbul" },
  { name: "Lisbon, Portugal", timezone: "Europe/Lisbon" },
  { name: "London, United Kingdom", timezone: "Europe/London" },
  { name: "Madrid, Spain", timezone: "Europe/Madrid" },
  { name: "Manchester, United Kingdom", timezone: "Europe/London" },
  { name: "Milan, Italy", timezone: "Europe/Rome" },
  { name: "Moscow, Russia", timezone: "Europe/Moscow" },
  { name: "Munich, Germany", timezone: "Europe/Berlin" },
  { name: "Paris, France", timezone: "Europe/Paris" },
  { name: "Prague, Czech Republic", timezone: "Europe/Prague" },
  { name: "Rome, Italy", timezone: "Europe/Rome" },
  { name: "Stockholm, Sweden", timezone: "Europe/Stockholm" },
  { name: "Vienna, Austria", timezone: "Europe/Vienna" },
  { name: "Warsaw, Poland", timezone: "Europe/Warsaw" },
  { name: "Zurich, Switzerland", timezone: "Europe/Zurich" },
  
  // MAJOR METROPOLITAN CITIES - SOUTH AMERICA
  { name: "Bogotá, Colombia", timezone: "America/Bogota" },
  { name: "Brasília, Brazil", timezone: "America/Sao_Paulo" },
  { name: "Buenos Aires, Argentina", timezone: "America/Argentina/Buenos_Aires" },
  { name: "Caracas, Venezuela", timezone: "America/Caracas" },
  { name: "Lima, Peru", timezone: "America/Lima" },
  { name: "Rio de Janeiro, Brazil", timezone: "America/Sao_Paulo" },
  { name: "Santiago, Chile", timezone: "America/Santiago" },
  { name: "São Paulo, Brazil", timezone: "America/Sao_Paulo" },
  
  // MAJOR METROPOLITAN CITIES - AFRICA
  { name: "Cairo, Egypt", timezone: "Africa/Cairo" },
  { name: "Casablanca, Morocco", timezone: "Africa/Casablanca" },
  { name: "Johannesburg, South Africa", timezone: "Africa/Johannesburg" },
  { name: "Lagos, Nigeria", timezone: "Africa/Lagos" },
  { name: "Nairobi, Kenya", timezone: "Africa/Nairobi" },
  
  // ADDITIONAL TIMEZONES TO ENSURE COMPLETE COVERAGE
  // Pacific Timezones
  { name: "Anchorage, United States", timezone: "America/Anchorage" },
  { name: "Fairbanks, Alaska, United States", timezone: "America/Anchorage" },
  { name: "Juneau, Alaska, United States", timezone: "America/Juneau" },
  { name: "Nome, Alaska, United States", timezone: "America/Nome" },
  { name: "Sitka, Alaska, United States", timezone: "America/Sitka" },
  { name: "Yakutat, Alaska, United States", timezone: "America/Yakutat" },
  { name: "Adak, Alaska, United States", timezone: "America/Adak" },
  
  // Mountain Timezones
  { name: "Albuquerque, New Mexico, United States", timezone: "America/Denver" },
  { name: "Boise, Idaho, United States", timezone: "America/Denver" },
  { name: "Salt Lake City, Utah, United States", timezone: "America/Denver" },
  
  // Central Timezones
  { name: "Kansas City, Missouri, United States", timezone: "America/Chicago" },
  { name: "Minneapolis, Minnesota, United States", timezone: "America/Chicago" },
  { name: "New Orleans, Louisiana, United States", timezone: "America/Chicago" },
  { name: "Oklahoma City, Oklahoma, United States", timezone: "America/Chicago" },
  { name: "San Antonio, Texas, United States", timezone: "America/Chicago" },
  { name: "St. Louis, Missouri, United States", timezone: "America/Chicago" },
  
  // Eastern Timezones
  { name: "Baltimore, Maryland, United States", timezone: "America/New_York" },
  { name: "Buffalo, New York, United States", timezone: "America/New_York" },
  { name: "Charlotte, North Carolina, United States", timezone: "America/New_York" },
  { name: "Cleveland, Ohio, United States", timezone: "America/New_York" },
  { name: "Jacksonville, Florida, United States", timezone: "America/New_York" },
  { name: "Pittsburgh, Pennsylvania, United States", timezone: "America/New_York" },
  { name: "Tampa, Florida, United States", timezone: "America/New_York" },
  
  // Additional Asian Cities for Timezone Coverage
  { name: "Almaty, Kazakhstan", timezone: "Asia/Almaty" },
  { name: "Bishkek, Kyrgyzstan", timezone: "Asia/Bishkek" },
  { name: "Dushanbe, Tajikistan", timezone: "Asia/Dushanbe" },
  { name: "Tashkent, Uzbekistan", timezone: "Asia/Tashkent" },
  { name: "Yekaterinburg, Russia", timezone: "Asia/Yekaterinburg" },
  { name: "Novosibirsk, Russia", timezone: "Asia/Novosibirsk" },
  { name: "Krasnoyarsk, Russia", timezone: "Asia/Krasnoyarsk" },
  { name: "Irkutsk, Russia", timezone: "Asia/Irkutsk" },
  { name: "Yakutsk, Russia", timezone: "Asia/Yakutsk" },
  { name: "Vladivostok, Russia", timezone: "Asia/Vladivostok" },
  { name: "Magadan, Russia", timezone: "Asia/Magadan" },
  { name: "Kamchatka, Russia", timezone: "Asia/Kamchatka" },
  
  // Additional European Cities
  { name: "Athens, Greece", timezone: "Europe/Athens" },
  { name: "Bucharest, Romania", timezone: "Europe/Bucharest" },
  { name: "Budapest, Hungary", timezone: "Europe/Budapest" },
  { name: "Helsinki, Finland", timezone: "Europe/Helsinki" },
  { name: "Kiev, Ukraine", timezone: "Europe/Kiev" },
  { name: "Oslo, Norway", timezone: "Europe/Oslo" },
  { name: "Riga, Latvia", timezone: "Europe/Riga" },
  { name: "Sofia, Bulgaria", timezone: "Europe/Sofia" },
  { name: "Tallinn, Estonia", timezone: "Europe/Tallinn" },
  { name: "Vilnius, Lithuania", timezone: "Europe/Vilnius" },
  
  // Additional South American Cities
  { name: "Montevideo, Uruguay", timezone: "America/Montevideo" },
  { name: "Quito, Ecuador", timezone: "America/Guayaquil" },
  { name: "La Paz, Bolivia", timezone: "America/La_Paz" },
  { name: "Asunción, Paraguay", timezone: "America/Asuncion" },
  { name: "Georgetown, Guyana", timezone: "America/Guyana" },
  { name: "Paramaribo, Suriname", timezone: "America/Paramaribo" },
  
  // Additional African Cities
  { name: "Addis Ababa, Ethiopia", timezone: "Africa/Addis_Ababa" },
  { name: "Algiers, Algeria", timezone: "Africa/Algiers" },
  { name: "Dar es Salaam, Tanzania", timezone: "Africa/Dar_es_Salaam" },
  { name: "Kampala, Uganda", timezone: "Africa/Kampala" },
  { name: "Khartoum, Sudan", timezone: "Africa/Khartoum" },
  { name: "Luanda, Angola", timezone: "Africa/Luanda" },
  { name: "Maputo, Mozambique", timezone: "Africa/Maputo" },
  { name: "Tunis, Tunisia", timezone: "Africa/Tunis" },
  
  // Additional Middle Eastern Cities
  { name: "Abu Dhabi, United Arab Emirates", timezone: "Asia/Dubai" },
  { name: "Amman, Jordan", timezone: "Asia/Amman" },
  { name: "Baghdad, Iraq", timezone: "Asia/Baghdad" },
  { name: "Beirut, Lebanon", timezone: "Asia/Beirut" },
  { name: "Doha, Qatar", timezone: "Asia/Qatar" },
  { name: "Jerusalem, Israel", timezone: "Asia/Jerusalem" },
  { name: "Kuwait City, Kuwait", timezone: "Asia/Kuwait" },
  { name: "Muscat, Oman", timezone: "Asia/Muscat" },
  { name: "Riyadh, Saudi Arabia", timezone: "Asia/Riyadh" },
  { name: "Tehran, Iran", timezone: "Asia/Tehran" },
  
  // Additional Asian Cities
  { name: "Colombo, Sri Lanka", timezone: "Asia/Colombo" },
  { name: "Dhaka, Bangladesh", timezone: "Asia/Dhaka" },
  { name: "Kathmandu, Nepal", timezone: "Asia/Kathmandu" },
  { name: "Phnom Penh, Cambodia", timezone: "Asia/Phnom_Penh" },
  { name: "Vientiane, Laos", timezone: "Asia/Vientiane" },
  { name: "Yangon, Myanmar", timezone: "Asia/Yangon" },
  { name: "Ulaanbaatar, Mongolia", timezone: "Asia/Ulaanbaatar" }
];

// 
// Now let's set up some variables to keep track of things.
// Think of variables like labeled boxes where we store information!
//
// 
// We have 8 clocks, so we need to store which city is selected for each clock.
// We'll use an array (a list) to store 8 cities - one for each clock!
//
const NUM_CLOCKS = 8;
// 
// NUM_CLOCKS is a constant (a value that never changes) that tells us we have 8 clocks.
// We use a constant so if we ever want to change the number of clocks,
// we only have to change it in one place!
//

// 
// Find New Delhi, India in our list of capitals to use as the default city.
//
const defaultCity = capitals.find(city => city.name === "New Delhi, India");
// 
// This finds New Delhi, India in our list of capitals.
// find() is like searching through a phone book until you find the name you're looking for!
//

// 
// Create an array to store the selected city for each clock.
// We'll fill it with New Delhi, India for all 8 clocks to start!
//
let selectedCities = [];
// 
// This array will store which city is selected for each clock.
// selectedCities[0] is the city for clock 0, selectedCities[1] is for clock 1, etc.
//

for (let i = 0; i < NUM_CLOCKS; i++) {
  // 
  // This loop runs 8 times (once for each clock).
  // i goes from 0 to 7 (that's 8 numbers: 0, 1, 2, 3, 4, 5, 6, 7).
  //

  selectedCities[i] = defaultCity;
  // 
  // Set the default city for this clock to New Delhi, India.
  //

}

// 
// Create arrays to store information for each clock's dropdown.
// We need separate arrays for filtered cities and selected indices for each clock!
//
let filteredCitiesArrays = [];
// 
// This will store filtered city lists for each clock.
// filteredCitiesArrays[0] is the filtered list for clock 0, etc.
//

let selectedIndices = [];
// 
// This stores which city is highlighted in the dropdown for each clock.
// selectedIndices[0] is for clock 0, etc.
//

let previousCityValues = [];
// 
// This stores the previous city name for each clock before the user starts typing.
// We use this to restore the value if the user abandons the textbox without selecting.
//

for (let i = 0; i < NUM_CLOCKS; i++) {
  // 
  // Initialize arrays for each clock.
  //

  filteredCitiesArrays[i] = [];
  // 
  // Start with an empty filtered list for each clock.
  //

  selectedIndices[i] = -1;
  // 
  // Start with no city highlighted (-1 means "nothing selected").
  //

  previousCityValues[i] = '';
  // 
  // Start with an empty previous value for each clock.
  //

}

// 
// Now let's get references to all the HTML elements we need.
// We need to find all 8 canvas elements and all 8 input boxes!
//
const canvases = document.querySelectorAll('.clock-canvas');
// 
// querySelectorAll finds ALL elements with the class 'clock-canvas'.
// This gives us an array with all 8 canvas elements!
//

const cityInputs = document.querySelectorAll('.city-input');
// 
// querySelectorAll finds ALL elements with the class 'city-input'.
// This gives us an array with all 8 input boxes!
//

// 
// Create an array to store the drawing contexts for each canvas.
// The drawing context is like a pen and paper for each canvas!
//
const contexts = [];
// 
// This array will store the drawing context for each canvas.
//

for (let i = 0; i < NUM_CLOCKS; i++) {
  // 
  // Loop through each canvas and get its drawing context.
  //

  contexts[i] = canvases[i].getContext('2d');
  // 
  // Get the drawing context for this canvas.
  // getContext('2d') gives us a "pen and paper" to draw on this canvas!
  //

}

// 
// This function gets the GMT offset for a given timezone.
// GMT (Greenwich Mean Time) is like the "zero point" for all timezones.
// This function tells us how many hours ahead or behind GMT a timezone is!
//
function getGMTOffset(timezone) {
  // 
  // timezone is the timezone we want to get the offset for (like "America/New_York").
  //

  // 
  // Get the current time.
  //
  const now = new Date();
  // 
  // Get the current system time.
  //

  // 
  // Create a formatter to get the time in UTC (GMT).
  //
  const utcFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    // 
    // UTC is the same as GMT - it's the zero point for all timezones!
    //
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  // 
  // This formatter will give us the UTC time.
  //

  // 
  // Create a formatter to get the time in the target timezone.
  //
  const targetFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    // 
    // This tells the formatter which timezone we want.
    //
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  // 
  // This formatter will give us the time in the target timezone.
  //

  // 
  // Get the UTC time as parts.
  //
  const utcParts = utcFormatter.formatToParts(now);
  // 
  // formatToParts breaks the formatted time into pieces.
  //

  const utcHour = parseInt(utcParts.find(p => p.type === 'hour').value);
  // 
  // Find the hour part and convert it to a number.
  //

  const utcMinute = parseInt(utcParts.find(p => p.type === 'minute').value);
  // 
  // Find the minute part and convert it to a number.
  //

  // 
  // Get the target timezone time as parts.
  //
  const targetParts = targetFormatter.formatToParts(now);
  // 
  // formatToParts breaks the formatted time into pieces.
  //

  const targetHour = parseInt(targetParts.find(p => p.type === 'hour').value);
  // 
  // Find the hour part and convert it to a number.
  //

  const targetMinute = parseInt(targetParts.find(p => p.type === 'minute').value);
  // 
  // Find the minute part and convert it to a number.
  //

  // 
  // Calculate the difference in minutes.
  //
  const utcTotalMinutes = utcHour * 60 + utcMinute;
  // 
  // Convert UTC time to total minutes (hours * 60 + minutes).
  //

  const targetTotalMinutes = targetHour * 60 + targetMinute;
  // 
  // Convert target time to total minutes.
  //

  let offsetMinutes = targetTotalMinutes - utcTotalMinutes;
  // 
  // Calculate the difference in minutes.
  //

  // 
  // Handle the case where the time wraps around midnight.
  // For example, if UTC is 23:00 and target is 01:00, the offset is +2 hours, not -22 hours.
  //
  if (offsetMinutes > 12 * 60) {
    // 
    // If the offset is more than 12 hours, it probably wrapped around.
    //

    offsetMinutes = offsetMinutes - 24 * 60;
    // 
    // Subtract 24 hours (in minutes) to get the correct offset.
    //

  } else if (offsetMinutes < -12 * 60) {
    // 
    // If the offset is less than -12 hours, it probably wrapped around the other way.
    //

    offsetMinutes = offsetMinutes + 24 * 60;
    // 
    // Add 24 hours (in minutes) to get the correct offset.
    //

  }

  // 
  // Format the offset with a + or - sign.
  //
  const sign = offsetMinutes >= 0 ? '+' : '-';
  // 
  // If offsetMinutes is positive or zero, use '+', otherwise use '-'.
  //

  const absMinutes = Math.abs(offsetMinutes);
  // 
  // Get the absolute value (remove the negative sign if there is one).
  //

  const hours = Math.floor(absMinutes / 60);
  // 
  // Get the whole number of hours (divide minutes by 60 and round down).
  //

  const minutes = absMinutes % 60;
  // 
  // Get the remaining minutes (the remainder after dividing by 60).
  //

  if (minutes === 0) {
    // 
    // If there are no minutes (it's a whole hour offset)...
    //

    return sign + hours;
    // 
    // Return just the hours with the sign (like "+5" or "-8").
    //

  } else {
    // 
    // If there are minutes (like +5:30 or -3:30)...
    //

    return sign + hours + ':' + minutes.toString().padStart(2, '0');
    // 
    // Return hours and minutes with the sign (like "+5:30" or "-3:30").
    // padStart makes sure minutes always has 2 digits (so "05" instead of "5").
    //

  }

}

// 
// This function calculates the time in a target timezone based on the system time.
// Think of it like converting "What time is it here?" to "What time is it there?"
// We use the system's current time as our starting point, then calculate
// what time it would be in the target city's timezone!
//
function getTimeInTimezone(targetTimezone) {
  // 
  // targetTimezone is the timezone we want to convert to (like "America/New_York").
  //

  // 
  // First, get the current system time.
  // This is the time on YOUR computer right now!
  //
  const systemTime = new Date();
  // 
  // new Date() gets the current time from your computer's clock.
  // Think of it like looking at the clock on your wall!
  //

  // 
  // Get the system's timezone (your computer's timezone).
  // This tells us what timezone your computer is set to!
  //
  const systemTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // 
  // Intl.DateTimeFormat().resolvedOptions().timeZone gets your computer's timezone.
  // It's like asking "What timezone is my computer set to?"
  // For example, it might return "America/Los_Angeles" or "Europe/London".
  //

  // 
  // Get the UTC time (Universal Time Coordinated).
  // UTC is like a universal clock that everyone in the world can use as a reference!
  // It doesn't change based on where you are - it's the same everywhere!
  //
  const utcTime = systemTime.getTime();
  // 
  // getTime() gives us the number of milliseconds since January 1, 1970 in UTC.
  // This is a universal way to represent time that doesn't depend on timezones!
  //

  // 
  // Now we need to figure out what time it is in the target timezone.
  // We'll do this by creating a formatter that shows us the time in that timezone,
  // then parsing that time back into hours, minutes, and seconds!
  //

  // 
  // Create a formatter that will show us the time in the target timezone.
  // Think of it like a translator that converts UTC time to the target timezone!
  //
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: targetTimezone,
    // 
    // This tells the formatter which timezone we want (like "America/New_York").
    //
    hour12: false,
    // 
    // hour12: false means use 24-hour format (0-23) instead of 12-hour (1-12 AM/PM).
    //
    hour: '2-digit',
    // 
    // '2-digit' means always show 2 digits (so "09" instead of "9").
    //
    minute: '2-digit',
    second: '2-digit'
  });
  // 
  // This creates a formatter that will convert any time to the target timezone!
  //

  // 
  // Use the formatter to get the time in the target timezone as parts.
  // formatToParts() breaks the time into separate pieces (hours, minutes, seconds)!
  //
  const timeParts = formatter.formatToParts(systemTime);
  // 
  // formatToParts() takes our system time and converts it to the target timezone,
  // then breaks it into pieces. It returns an array like:
  // [
  //   { type: 'hour', value: '14' },
  //   { type: 'minute', value: '30' },
  //   { type: 'second', value: '45' }
  // ]
  //

  // 
  // Extract the hours, minutes, and seconds from the parts.
  // We'll search through the parts array to find each piece!
  //
  const hours = parseInt(timeParts.find(part => part.type === 'hour').value);
  // 
  // find() searches through the array until it finds a part where type is 'hour'.
  // Then we get its value (like "14") and convert it to a number with parseInt().
  //

  const minutes = parseInt(timeParts.find(part => part.type === 'minute').value);
  // 
  // Same thing for minutes - find the part with type 'minute' and get its value.
  //

  const seconds = parseInt(timeParts.find(part => part.type === 'second').value);
  // 
  // Same thing for seconds - find the part with type 'second' and get its value.
  //

  // 
  // Return an object with the time components.
  // This is like packaging up the hours, minutes, and seconds in a box!
  //
  return { hours, minutes, seconds };
  // 
  // We return an object with three properties: hours, minutes, and seconds.
  // This is like giving someone a box with three labeled compartments!
  //

}

// 
// This function draws the clock face with roman numerals for a specific clock.
// Think of it like drawing a clock on a piece of paper!
//
function drawClock(clockId) {
  // 
  // clockId tells us which clock to draw (0, 1, 2, 3, 4, 5, 6, or 7).
  //

  // 
  // Get the canvas and context for this specific clock.
  //
  const canvas = canvases[clockId];
  // 
  // Get the canvas element for this clock.
  //

  const ctx = contexts[clockId];
  // 
  // Get the drawing context (pen and paper) for this clock.
  //

  const selectedCity = selectedCities[clockId];
  // 
  // Get the selected city for this clock.
  //

  // 
  // First, let's clear the canvas (like erasing a whiteboard).
  // We need to do this every time we draw, otherwise old drawings
  // would stay on the screen!
  //
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 
  // clearRect clears a rectangle (a square or rectangle shape).
  // 0, 0 means start at the top-left corner.
  // canvas.width, canvas.height means clear the whole canvas!
  //

  // 
  // Get the current time in the selected city's timezone using our system time.
  // We call our getTimeInTimezone function to calculate the time based on
  // the system's current time and timezone!
  //
  const time = getTimeInTimezone(selectedCity.timezone);
  // 
  // This calls our function to calculate what time it is in the selected city,
  // based on the system's current time. It returns an object with hours, minutes, and seconds.
  //

  const hours = time.hours;
  // 
  // Extract the hours from the time object.
  // Think of it like opening a box and taking out the hours!
  //

  const minutes = time.minutes;
  // 
  // Extract the minutes from the time object.
  //

  const seconds = time.seconds;
  // 
  // Extract the seconds from the time object.
  //

  // 
  // Calculate the center of the clock (the middle point).
  // Think of it like finding the center of a circle!
  //
  const centerX = canvas.width / 2;
  // 
  // canvas.width is the width of our canvas (400 pixels).
  // Dividing by 2 gives us the middle: 200 pixels from the left edge.
  //

  const centerY = canvas.height / 2;
  // 
  // Same for height: 200 pixels from the top edge.
  // So the center is at (200, 200)!
  //

  const radius = Math.min(canvas.width, canvas.height) / 2 - 20;
  // 
  // This calculates the radius (how far from center to edge) of our clock.
  // Math.min finds the smaller number (in case width and height are different).
  // We subtract 20 to leave some space around the edge (like a margin).
  // So if canvas is 400x400, radius = (400 / 2) - 20 = 180 pixels.
  //

  // 
  // Draw the outer circle of the clock face.
  // Think of it like drawing a big circle with a compass!
  //
  ctx.beginPath();
  // 
  // beginPath tells the canvas "I'm starting a new drawing path".
  // Like picking up a pen to start drawing!
  //

  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  // 
  // arc draws part of a circle (or a full circle).
  // centerX, centerY is where the center of the circle is.
  // radius is how big the circle is.
  // 0, 2 * Math.PI means "draw from 0 degrees all the way around to 360 degrees"
  // (a full circle). Math.PI is approximately 3.14, so 2 * Math.PI is about 6.28,
  // which represents 360 degrees in radians (a way of measuring angles).
  //

  ctx.strokeStyle = '#fff';
  // 
  // strokeStyle sets the color of the line we're drawing.
  // #fff is white color (inverted from dark gray for the black background).
  //

  ctx.lineWidth = 3;
  // 
  // lineWidth sets how thick the line is (3 pixels thick).
  //

  ctx.stroke();
  // 
  // stroke() actually draws the line we described above.
  // It's like putting the pen to paper and drawing!
  //

  // 
  // Now let's draw the hour markers (the little lines around the clock).
  // There are 12 hours on a clock, so we'll draw 12 markers!
  //
  for (let i = 0; i < 12; i++) {
    // 
    // This is a "for loop" - it repeats the code inside 12 times.
    // i starts at 0, then becomes 1, then 2, all the way up to 11.
    // Think of it like counting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 (that's 12 numbers!)
    //

    const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
    // 
    // This calculates the angle for each hour marker.
    // On a clock, 12 o'clock is at the top, but in math, 0 degrees is to the right.
    // So we subtract Math.PI / 2 (which is 90 degrees) to rotate it so 12 is at the top!
    // i * Math.PI * 2 / 12 means "divide the circle into 12 equal parts".
    //

    const x1 = centerX + Math.cos(angle) * (radius - 15);
    // 
    // Math.cos calculates the x-coordinate (left-right position) of a point
    // on a circle at a given angle. Think of it like "how far right is this point?"
    // radius - 15 means we start the line 15 pixels in from the edge.
    //

    const y1 = centerY + Math.sin(angle) * (radius - 15);
    // 
    // Math.sin calculates the y-coordinate (up-down position).
    // Think of it like "how far down is this point?"
    //

    const x2 = centerX + Math.cos(angle) * (radius - 5);
    // 
    // This is the outer end of the marker line (closer to the edge).
    //

    const y2 = centerY + Math.sin(angle) * (radius - 5);
    // 
    // Same for y2.
    //

    ctx.beginPath();
    // 
    // Start a new line for this marker.
    //

    ctx.moveTo(x1, y1);
    // 
    // moveTo moves the "pen" to the starting point without drawing.
    // Like lifting your pen and moving it to where you want to start drawing!
    //

    ctx.lineTo(x2, y2);
    // 
    // lineTo draws a line from the current position to this new position.
    // Like drawing a line from point (x1, y1) to point (x2, y2)!
    //

    ctx.strokeStyle = '#999';
    // 
    // Light gray color for the hour markers (inverted from medium gray).
    //

    ctx.lineWidth = 2;
    // 
    // 2 pixels thick.
    //

    ctx.stroke();
    // 
    // Actually draw the line!
    //

  // 
  // Now let's draw the regular numbers for each hour.
  // Regular numbers are like 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11.
  //

  const numbers = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  // 
  // This is an array (a list) of regular numbers.
  // '12' is at position 0 (for 12 o'clock), '1' is at position 1 (for 1 o'clock), etc.
  //

  const number = numbers[i];
  // 
  // Get the number for this hour (i).
  //

  ctx.font = 'bold 20px Arial';
  // 
  // Set the font for the text. 'bold' means make it thick and dark.
  // '20px' means 20 pixels tall. 'Arial' is the font name.
  //

  ctx.fillStyle = '#fff';
  // 
  // Set the text color to white (inverted from black for the black background).
  //

  ctx.textAlign = 'center';
  // 
  // textAlign: 'center' means center the text horizontally.
  // Like writing text so it's balanced on both sides!
  //

  ctx.textBaseline = 'middle';
  // 
  // textBaseline: 'middle' means center the text vertically.
  // Like writing text so it's balanced top and bottom!
  //

  const textX = centerX + Math.cos(angle) * (radius - 30);
  // 
  // Calculate where to put the number text.
  // radius - 30 means 30 pixels in from the edge (closer than the markers).
  //

  const textY = centerY + Math.sin(angle) * (radius - 30);
  // 
  // Same for the y position.
  //

  ctx.fillText(number, textX, textY);
  // 
  // fillText actually draws the text on the canvas.
  // It's like writing the number at that position!
  //

  }

  // 
  // Now let's draw the hour hand (the short hand that points to the hour).
  //

  const hourAngle = ((hours % 12) * 30 + minutes * 0.5) * Math.PI / 180 - Math.PI / 2;
  // 
  // This calculates the angle for the hour hand.
  // (hours % 12) converts 24-hour time to 12-hour (so 14 becomes 2).
  // * 30 means each hour is 30 degrees (360 / 12 = 30).
  // + minutes * 0.5 means the hour hand moves a little bit for each minute
  // (because at 2:30, the hour hand should be halfway between 2 and 3).
  // * Math.PI / 180 converts degrees to radians (math way of measuring angles).
  // - Math.PI / 2 rotates it so 12 o'clock is at the top.
  //

  drawHand(ctx, canvas, hourAngle, radius * 0.5, 6, '#fff');
  // 
  // drawHand is a function we'll create below that draws a clock hand.
  // hourAngle is the direction to point.
  // radius * 0.5 means make it half the radius long (so it's shorter than the minute hand).
  // 6 is the thickness (6 pixels wide).
  // '#fff' is white color (inverted from black for the black background).
  //

  // 
  // Now let's draw the minute hand (the long hand that points to the minute).
  //

  const minuteAngle = (minutes * 6 + seconds * 0.1) * Math.PI / 180 - Math.PI / 2;
  // 
  // This calculates the angle for the minute hand.
  // minutes * 6 means each minute is 6 degrees (360 / 60 = 6).
  // + seconds * 0.1 means the minute hand moves a tiny bit for each second.
  //

  drawHand(ctx, canvas, minuteAngle, radius * 0.7, 4, '#fff');
  // 
  // Draw the minute hand. radius * 0.7 means make it 70% of the radius long.
  // 4 pixels thick, white color (inverted from dark gray for the black background).
  //

  // 
  // Now let's draw the second hand (the thin hand that points to the second).
  //

  const secondAngle = (seconds * 6) * Math.PI / 180 - Math.PI / 2;
  // 
  // This calculates the angle for the second hand.
  // seconds * 6 means each second is 6 degrees.
  //

  drawHand(ctx, canvas, secondAngle, radius * 0.8, 2, '#fff');
  // 
  // Draw the second hand. radius * 0.8 means make it 80% of the radius long.
  // 2 pixels thick (thin!), white color (inverted from medium gray for the black background).
  //

  // 
  // Finally, let's draw a small circle in the center (the pivot point).
  //

  ctx.beginPath();
  // 
  // Start a new circle.
  //

  ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
  // 
  // Draw a small circle at the center, 5 pixels radius.
  //

  ctx.fillStyle = '#fff';
  // 
  // White color (inverted from black for the black background).
  //

  ctx.fill();
  // 
  // fill() fills the circle with color (makes it solid).
  //

  // 
  // Now let's update the digital time box above the clock with the military time (24-hour format).
  // We'll format it as HH:MM (hours:minutes)!
  //

  // 
  // Format the hours and minutes as 2-digit strings (always show 2 digits).
  // For example, if hours is 5, it becomes "05". If hours is 14, it stays "14".
  //
  const hoursString = hours.toString().padStart(2, '0');
  // 
  // padStart(2, '0') makes sure the number always has 2 digits.
  // If hours is 5, padStart adds a "0" at the beginning to make it "05".
  // If hours is already 14, it stays "14" (no padding needed).
  //

  const minutesString = minutes.toString().padStart(2, '0');
  // 
  // Same thing for minutes - always show 2 digits!
  //

  // 
  // Find the digital time box for this clock and update it.
  //
  const digitalTimeBox = document.querySelector(`.digital-time-box[data-clock-id="${clockId}"]`);
  // 
  // querySelector finds the digital time box with the matching clock ID.
  //

  if (digitalTimeBox) {
    // 
    // If we found the digital time box...
    //

    digitalTimeBox.textContent = hoursString + ':' + minutesString;
    // 
    // Update the text content to show the time in HH:MM format.
    // For example, "14:30" or "05:45".
    //

  }

}

// 
// This function draws a clock hand (hour, minute, or second hand).
// Think of it like drawing an arrow that points in a certain direction!
//
function drawHand(ctx, canvas, angle, length, width, color) {
  // 
  // ctx: the drawing context (pen and paper) for this specific canvas.
  // canvas: the canvas element we're drawing on.
  // angle: which direction to point (in radians).
  // length: how long the hand should be.
  // width: how thick the hand should be.
  // color: what color the hand should be.
  //

  const centerX = canvas.width / 2;
  // 
  // Get the center X position (same as before).
  //

  const centerY = canvas.height / 2;
  // 
  // Get the center Y position (same as before).
  //

  const endX = centerX + Math.cos(angle) * length;
  // 
  // Calculate where the end of the hand should be.
  // Math.cos(angle) tells us how far right to go.
  // * length tells us how far to go in that direction.
  //

  const endY = centerY + Math.sin(angle) * length;
  // 
  // Same for the Y position (how far down to go).
  //

  ctx.beginPath();
  // 
  // Start a new line.
  //

  ctx.moveTo(centerX, centerY);
  // 
  // Start at the center of the clock.
  //

  ctx.lineTo(endX, endY);
  // 
  // Draw a line to the end point.
  //

  ctx.strokeStyle = color;
  // 
  // Set the line color.
  //

  ctx.lineWidth = width;
  // 
  // Set the line thickness.
  //

  ctx.stroke();
  // 
  // Actually draw the line!
  //

}

// 
// This function filters (searches through) the cities based on what the user types.
// Think of it like searching through a phone book for a name!
//
function filterCities(clockId, searchTerm) {
  // 
  // clockId tells us which clock's dropdown we're filtering for.
  // searchTerm is what the user typed in the input box.
  //

  if (!searchTerm) {
    // 
    // If searchTerm is empty (user hasn't typed anything),
    // show all cities!
    //

    filteredCitiesArrays[clockId] = capitals;
    // 
    // Set filteredCitiesArrays for this clock to the entire list of capitals.
    //

  } else {
    // 
    // Otherwise, search through the cities!
    //

    const lowerSearch = searchTerm.toLowerCase();
    // 
    // Convert the search term to lowercase.
    // This makes the search case-insensitive (so "LONDON" and "london" both work).
    // toLowerCase() is like making all letters small: "Hello" becomes "hello".
    //

    filteredCitiesArrays[clockId] = capitals.filter(city => {
      // 
      // filter() goes through each city in the capitals array
      // and only keeps the ones that match our search.
      // It's like saying "Keep only the cities where this is true..."
      //

      return city.name.toLowerCase().includes(lowerSearch);
      // 
      // includes() checks if one string contains another.
      // For example, "London" includes "lon", so it would match if you type "lon".
      // We convert both to lowercase so "LONDON" matches "london".
      //

    });
    // 
    // The result is stored in filteredCitiesArrays[clockId] - only the cities that match!
    //

  }

  displayCities(clockId);
  // 
  // Now update the dropdown list to show the filtered cities for this clock.
  //

}

// 
// This function displays the filtered cities in the dropdown list for a specific clock.
// Think of it like writing a list of names on a piece of paper!
//
function displayCities(clockId) {
  // 
  // clockId tells us which clock's dropdown we're displaying cities for.
  //

  // 
  // Get the city list element for this specific clock.
  //
  const cityList = cityInputs[clockId].parentElement.querySelector('.city-list');
  // 
  // Find the city list that belongs to this clock's input box.
  // parentElement gets the wrapper div, then querySelector finds the city-list inside it.
  //

  // 
  // First, clear the dropdown list (remove any cities that were there before).
  //

  cityList.innerHTML = '';
  // 
  // innerHTML is the HTML content inside an element.
  // Setting it to '' (empty string) clears it out.
  // Like erasing everything on a whiteboard!
  //

  if (filteredCitiesArrays[clockId].length === 0) {
    // 
    // If there are no matching cities, show a message.
    //

    const noResults = document.createElement('div');
    // 
    // createElement creates a new HTML element (like a <div>).
    // Think of it like creating a new box!
    //

    noResults.className = 'city-item';
    // 
    // Give it the same class as city items so it looks the same.
    //

    noResults.textContent = 'No cities found';
    // 
    // Set the text to "No cities found".
    //

    cityList.appendChild(noResults);
    // 
    // appendChild adds this element to the cityList.
    // Like putting a new box inside a bigger box!
    //

    return;
    // 
    // return means "stop here, don't continue with the rest of the function".
    //

  }

  // 
  // Otherwise, create a list item for each matching city.
  //

  filteredCitiesArrays[clockId].forEach((city, index) => {
    // 
    // forEach goes through each city in filteredCitiesArrays for this clock.
    // city is the current city, index is its position (0, 1, 2, etc.).
    //

    const cityItem = document.createElement('div');
    // 
    // Create a new div (box) for this city.
    //

    cityItem.className = 'city-item';
    // 
    // Give it the class 'city-item' so CSS can style it.
    //

    // 
    // Get the GMT offset for this city's timezone.
    //
    const gmtOffset = getGMTOffset(city.timezone);
    // 
    // Call our getGMTOffset function to get the offset (like "+5" or "-8").
    //

    // 
    // Display the city name with GMT offset.
    //
    cityItem.innerHTML = `<span class="city-name">${city.name}</span> <span class="gmt-offset">GMT${gmtOffset}</span>`;
    // 
    // Set the HTML content to show the city name and GMT offset.
    // We use innerHTML instead of textContent so we can add HTML tags for styling.
    // The city name is in a span with class "city-name".
    // The GMT offset is in a span with class "gmt-offset".
    //

    cityItem.addEventListener('click', () => {
      // 
      // addEventListener adds a "click" handler - code that runs when you click.
      // It's like saying "When someone clicks this, do this thing!"
      //

      selectCity(clockId, city);
      // 
      // selectCity updates this specific clock to show the time in the selected city.
      //

    });

    cityList.appendChild(cityItem);
    // 
    // Add this city item to the dropdown list.
    //

  });

  selectedIndices[clockId] = -1;
  // 
  // Reset the selected index for this clock (for keyboard navigation).
  //

}

// 
// This function is called when a user selects a city (by clicking or keyboard).
// It updates a specific clock to show the time in that city!
//
function selectCity(clockId, city) {
  // 
  // clockId tells us which clock to update.
  // city is the city object that was selected (like { name: "London", timezone: "Europe/London" }).
  //

  selectedCities[clockId] = city;
  // 
  // Update the selected city for this specific clock.
  //

  cityInputs[clockId].value = city.name;
  // 
  // Update the input box for this clock to show the selected city's name.
  //

  previousCityValues[clockId] = city.name;
  // 
  // Update the previous city value to the newly selected city.
  // This way if the user clicks away later, we'll restore this value.
  //

  const cityList = cityInputs[clockId].parentElement.querySelector('.city-list');
  // 
  // Get the city list element for this clock.
  //

  cityList.style.display = 'none';
  // 
  // Hide the dropdown list (since the user has made their selection).
  //

  drawClock(clockId);
  // 
  // Redraw this specific clock with the new city's time!
  //

}

// 
// This function handles keyboard navigation in the dropdown for a specific clock.
// It lets users use arrow keys to move up and down, and Enter to select!
//
function handleKeyboardNavigation(clockId, e) {
  // 
  // clockId tells us which clock's dropdown we're navigating.
  // e is the "event" object - it contains information about what key was pressed.
  //

  const cityList = cityInputs[clockId].parentElement.querySelector('.city-list');
  // 
  // Get the city list element for this clock.
  //

  if (!cityList.style.display || cityList.style.display === 'none') {
    // 
    // If the dropdown list is hidden, don't do anything.
    //

    return;
    // 
    // Stop here, don't continue.
    //

  }

  const items = cityList.querySelectorAll('.city-item');
  // 
  // Get all the city items in the dropdown list.
  // querySelectorAll finds all elements with class 'city-item'.
  //

  if (items.length === 0) {
    // 
    // If there are no items, don't do anything.
    //

    return;
    // 
    // Stop here.
    //

  }

  switch (e.key) {
    // 
    // switch is like a bunch of "if" statements.
    // It checks what key was pressed and does different things for different keys.
    //

    case 'ArrowDown':
      // 
      // If the user pressed the down arrow key...
      //

      e.preventDefault();
      // 
      // preventDefault() stops the browser from doing its default action
      // (like scrolling the page). We want to handle this ourselves!
      //

      selectedIndices[clockId] = (selectedIndices[clockId] + 1) % items.length;
      // 
      // Move to the next item. The % (modulo) operator makes it wrap around
      // (so if you're at the last item and press down, you go to the first item).
      //

      updateSelection(clockId, items);
      // 
      // Update which item is highlighted.
      //

      break;
      // 
      // break means "stop here, don't check other cases".
      //

    case 'ArrowUp':
      // 
      // If the user pressed the up arrow key...
      //

      e.preventDefault();
      // 
      // Stop the default action.
      //

      selectedIndices[clockId] = (selectedIndices[clockId] - 1 + items.length) % items.length;
      // 
      // Move to the previous item. The + items.length makes sure
      // we don't get a negative number (so it wraps around properly).
      //

      updateSelection(clockId, items);
      // 
      // Update which item is highlighted.
      //

      break;

    case 'Enter':
      // 
      // If the user pressed the Enter key...
      //

      e.preventDefault();
      // 
      // Stop the default action.
      //

      if (selectedIndices[clockId] >= 0 && selectedIndices[clockId] < filteredCitiesArrays[clockId].length) {
        // 
        // If a city is selected (selectedIndex is valid)...
        //

        selectCity(clockId, filteredCitiesArrays[clockId][selectedIndices[clockId]]);
        // 
        // Select that city for this clock!
        //

      }

      break;

    case 'Escape':
      // 
      // If the user pressed the Escape key...
      //

      cityList.style.display = 'none';
      // 
      // Hide the dropdown list.
      //

      break;

  }

}

// 
// This function updates which city item is highlighted (for keyboard navigation).
//
function updateSelection(clockId, items) {
  // 
  // clockId tells us which clock's dropdown we're updating.
  // items is the list of all city items in the dropdown.
  //

  items.forEach((item, index) => {
    // 
    // Go through each item...
    //

    if (index === selectedIndices[clockId]) {
      // 
      // If this is the selected item for this clock...
      //

      item.classList.add('active');
      // 
      // Add the 'active' class to highlight it.
      //

      item.scrollIntoView({ block: 'nearest' });
      // 
      // scrollIntoView scrolls the dropdown so this item is visible.
      // block: 'nearest' means "only scroll if necessary".
      //

    } else {
      // 
      // Otherwise...
      //

      item.classList.remove('active');
      // 
      // Remove the 'active' class (unhighlight it).
      //

    }

  });

}

// 
// Now let's set up all the event listeners (things that happen when users do stuff).
// Think of event listeners like setting up alarms - "When this happens, do that!"
// We need to set up event listeners for all 8 clocks!
//

for (let i = 0; i < NUM_CLOCKS; i++) {
  // 
  // This loop sets up event listeners for each of the 8 clocks.
  // i goes from 0 to 7 (that's 8 clocks).
  //

  const clockId = i;
  // 
  // Store the clock ID so we can use it inside the event handlers.
  //

  const cityInput = cityInputs[i];
  // 
  // Get the input box for this clock.
  //

  // 
  // When the user types in the input box, filter the cities.
  //
  cityInput.addEventListener('input', (e) => {
    // 
    // 'input' event fires every time the user types or deletes something.
    // e is the event object.
    //

    const searchTerm = e.target.value;
    // 
    // e.target is the input box, and .value is what the user typed.
    //

    filterCities(clockId, searchTerm);
    // 
    // Filter the cities for this specific clock based on what they typed.
    //

    const cityList = cityInput.parentElement.querySelector('.city-list');
    // 
    // Get the city list for this clock.
    //

    cityList.style.display = 'block';
    // 
    // Show the dropdown list.
    //

    selectedIndices[clockId] = -1;
    // 
    // Reset the selected index for this clock.
    //

  });

  // 
  // When the user clicks on the input box, show the dropdown list.
  //
  cityInput.addEventListener('focus', () => {
    // 
    // 'focus' event fires when the user clicks on or tabs to the input box.
    //

    // 
    // Store the current value before clearing it.
    // This way we can restore it if the user abandons the textbox.
    //
    previousCityValues[clockId] = cityInput.value;
    // 
    // Save the current city name to the previousCityValues array.
    //

    // 
    // Clear the textbox to allow the user to start typing.
    //
    cityInput.value = '';
    // 
    // Set the input box value to empty string so the user can type freely.
    //

    if (filteredCitiesArrays[clockId].length === 0) {
      // 
      // If we haven't filtered yet for this clock, show all cities.
      //

      filterCities(clockId, '');
      // 
      // Filter with empty string shows all cities.
      //

    }

    const cityList = cityInput.parentElement.querySelector('.city-list');
    // 
    // Get the city list for this clock.
    //

    cityList.style.display = 'block';
    // 
    // Show the dropdown list.
    //

  });

  // 
  // When the user clicks away from the input box (loses focus), restore the previous value
  // if they didn't select a new city.
  //
  cityInput.addEventListener('blur', (e) => {
    // 
    // 'blur' event fires when the input box loses focus (user clicks away or tabs away).
    // e is the event object.
    //

    // 
    // Check if the user clicked on a city item in the dropdown.
    // If they did, we don't want to restore the value because selectCity will handle it.
    //
    const cityList = cityInput.parentElement.querySelector('.city-list');
    // 
    // Get the city list for this clock.
    //

    const relatedTarget = e.relatedTarget;
    // 
    // relatedTarget is the element that will receive focus next.
    // If the user clicked on a city item, relatedTarget will be that item.
    //

    // 
    // Check if the user clicked on a city item or if the input is empty.
    //
    if (!relatedTarget || !cityList.contains(relatedTarget)) {
      // 
      // If relatedTarget doesn't exist OR it's not inside the city list,
      // the user clicked away without selecting a city.
      //

      if (cityInput.value.trim() === '') {
        // 
        // If the input box is empty (or only has spaces)...
        //

        // 
        // Restore the previous city value.
        //
        if (previousCityValues[clockId] && selectedCities[clockId]) {
          // 
          // If we have a previous value and a selected city...
          //

          cityInput.value = previousCityValues[clockId];
          // 
          // Restore the previous city name to the input box.
          //

          // 
          // Make sure the clock still shows the correct time.
          //
          drawClock(clockId);
          // 
          // Redraw the clock to ensure it shows the correct time.
          //

        }

      }

      // 
      // Hide the dropdown list after a short delay.
      // We use setTimeout to give the click event on city items time to fire first.
      //
      setTimeout(() => {
        // 
        // Wait a tiny bit (10 milliseconds) before hiding the dropdown.
        // This ensures that if the user clicked on a city item, the click event
        // has time to fire before we hide the dropdown.
        //

        cityList.style.display = 'none';
        // 
        // Hide the dropdown list.
        //

      }, 10);
      // 
      // 10 milliseconds is a very short delay - users won't notice it!
      //

    }

  });

  // 
  // When the user presses a key, handle keyboard navigation.
  //
  cityInput.addEventListener('keydown', (e) => {
    // 
    // 'keydown' event fires when a key is pressed down.
    //

    handleKeyboardNavigation(clockId, e);
    // 
    // Call our handleKeyboardNavigation function for this specific clock.
    //

  });

  // 
  // Set the input field to show New Delhi, India as the default city.
  // This makes sure the dropdown shows the correct city name when the page loads!
  //
  if (defaultCity) {
    // 
    // If we found New Delhi, India in our list (which we should have!)...
    //

    cityInput.value = defaultCity.name;
    // 
    // Set the input box to show "New Delhi, India".
    // This way users can see which city is currently selected!
    //

    previousCityValues[clockId] = defaultCity.name;
    // 
    // Also set the previous city value to the default city.
    // This way if the user clicks on the textbox and then clicks away,
    // it will restore to New Delhi, India.
    //

  }

}

// 
// When the user clicks outside any input box, hide all dropdown lists.
//
document.addEventListener('click', (e) => {
  // 
  // 'click' event on the whole document (the entire page).
  //

  for (let i = 0; i < NUM_CLOCKS; i++) {
    // 
    // Check each clock's input and dropdown.
    //

    const cityInput = cityInputs[i];
    // 
    // Get the input box for this clock.
    //

    const cityList = cityInput.parentElement.querySelector('.city-list');
    // 
    // Get the dropdown list for this clock.
    //

    if (!cityInput.contains(e.target) && !cityList.contains(e.target)) {
      // 
      // If the click was NOT on this input box AND NOT on this dropdown list...
      // contains() checks if an element is inside another element.
      //

      cityList.style.display = 'none';
      // 
      // Hide this clock's dropdown list.
      //

    }

  }

});

// 
// Finally, let's start all the clocks!
// We need to draw them once immediately, then update them every second.
//

// 
// Draw all clocks right away (so they show immediately when the page loads).
//
for (let i = 0; i < NUM_CLOCKS; i++) {
  // 
  // Loop through all 8 clocks and draw each one.
  //

  drawClock(i);
  // 
  // Draw this clock right away!
  //

}

// 
// Update all clocks every second.
//
setInterval(() => {
  // 
  // setInterval runs a function repeatedly.
  // 1000 means "every 1000 milliseconds" (which is 1 second).
  //

  for (let i = 0; i < NUM_CLOCKS; i++) {
    // 
    // Loop through all 8 clocks and update each one.
    //

    drawClock(i);
    // 
    // Draw this clock with the current time!
    //

  }

}, 1000);
// 
// So all clocks update every second to show the current time!
//

