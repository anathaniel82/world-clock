/* 
  This is our JavaScript file - it's like the brain of our webpage!
  JavaScript is a programming language that makes web pages interactive.
  Think of it like the remote control for a TV - HTML is the TV screen,
  CSS is how the TV looks, and JavaScript is the buttons that make things happen!
*/

// 
// First, let's create a big list of all the capital cities in the world!
// Each city has a name and a timezone (which tells us what time it is there).
// Think of timezones like different clocks in different parts of the world!
//
const capitals = [
  // 
  // These are all the capital cities, organized by continent.
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
  { name: "Canberra, Australia", timezone: "Australia/Sydney" },
  { name: "Funafuti, Tuvalu", timezone: "Pacific/Funafuti" },
  { name: "Honiara, Solomon Islands", timezone: "Pacific/Guadalcanal" },
  { name: "Majuro, Marshall Islands", timezone: "Pacific/Majuro" },
  { name: "Nuku'alofa, Tonga", timezone: "Pacific/Tongatapu" },
  { name: "Palikir, Micronesia", timezone: "Pacific/Pohnpei" },
  { name: "Port Moresby, Papua New Guinea", timezone: "Pacific/Port_Moresby" },
  { name: "Port Vila, Vanuatu", timezone: "Pacific/Efate" },
  { name: "Suva, Fiji", timezone: "Pacific/Fiji" },
  { name: "Tarawa, Kiribati", timezone: "Pacific/Tarawa" },
  { name: "Wellington, New Zealand", timezone: "Pacific/Auckland" }
];

// 
// Now let's set up some variables to keep track of things.
// Think of variables like labeled boxes where we store information!
//
// 
// Find Washington D.C. in our list of capitals and set it as the default city.
// We use the find() function which searches through the list until it finds
// a city where the name matches "Washington, D.C., United States".
//
let selectedCity = capitals.find(city => city.name === "Washington, D.C., United States");
// 
// This stores which city is currently selected.
// We start with Washington D.C. as the default city.
// The "let" keyword means "this is a variable that might change later"!
// find() is like searching through a phone book until you find the name you're looking for!
//

let filteredCities = [];
// 
// This will store the list of cities that match what the user types.
// It starts empty, but we'll fill it when the user types in the search box!
//

let selectedIndex = -1;
// 
// This keeps track of which city in the dropdown list is currently
// highlighted (when using keyboard navigation).
// -1 means "nothing is selected yet"!
//

// 
// Now let's get references to the HTML elements we need to work with.
// Think of this like getting the remote controls for different parts of our webpage!
//
const cityInput = document.getElementById('city-dropdown');
// 
// This finds the input box where users type city names.
// getElementById is like saying "Hey HTML, find me the element with id='city-dropdown'!"
//

const cityList = document.getElementById('city-list');
// 
// This finds the dropdown list container where we'll show matching cities.
//

const canvas = document.getElementById('clock-canvas');
// 
// This finds the canvas (drawing area) where we'll draw our clock.
//

const ctx = canvas.getContext('2d');
// 
// This gets the "drawing context" - think of it like getting a pen and paper
// so we can draw on the canvas! '2d' means we're drawing in 2 dimensions
// (flat, not 3D like a video game).
//

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
// This function draws the clock face with roman numerals.
// Think of it like drawing a clock on a piece of paper!
//
function drawClock() {
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
    // Now let's draw the roman numerals for each hour.
    // Roman numerals are like I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII.
    //

    const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    // 
    // This is an array (a list) of roman numerals.
    // XII is at position 0 (for 12 o'clock), I is at position 1 (for 1 o'clock), etc.
    //

    const numeral = romanNumerals[i];
    // 
    // Get the roman numeral for this hour (i).
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
    // Calculate where to put the roman numeral text.
    // radius - 30 means 30 pixels in from the edge (closer than the markers).
    //

    const textY = centerY + Math.sin(angle) * (radius - 30);
    // 
    // Same for the y position.
    //

    ctx.fillText(numeral, textX, textY);
    // 
    // fillText actually draws the text on the canvas.
    // It's like writing the roman numeral at that position!
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

  drawHand(hourAngle, radius * 0.5, 6, '#fff');
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

  drawHand(minuteAngle, radius * 0.7, 4, '#fff');
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

  drawHand(secondAngle, radius * 0.8, 2, '#fff');
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

}

// 
// This function draws a clock hand (hour, minute, or second hand).
// Think of it like drawing an arrow that points in a certain direction!
//
function drawHand(angle, length, width, color) {
  // 
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
function filterCities(searchTerm) {
  // 
  // searchTerm is what the user typed in the input box.
  //

  if (!searchTerm) {
    // 
    // If searchTerm is empty (user hasn't typed anything),
    // show all cities!
    //

    filteredCities = capitals;
    // 
    // Set filteredCities to the entire list of capitals.
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

    filteredCities = capitals.filter(city => {
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
    // The result is stored in filteredCities - only the cities that match!
    //

  }

  displayCities();
  // 
  // Now update the dropdown list to show the filtered cities.
  //

}

// 
// This function displays the filtered cities in the dropdown list.
// Think of it like writing a list of names on a piece of paper!
//
function displayCities() {
  // 
  // First, clear the dropdown list (remove any cities that were there before).
  //

  cityList.innerHTML = '';
  // 
  // innerHTML is the HTML content inside an element.
  // Setting it to '' (empty string) clears it out.
  // Like erasing everything on a whiteboard!
  //

  if (filteredCities.length === 0) {
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

  filteredCities.forEach((city, index) => {
    // 
    // forEach goes through each city in filteredCities.
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

    cityItem.textContent = city.name;
    // 
    // Set the text to the city's name (like "London, United Kingdom").
    //

    cityItem.addEventListener('click', () => {
      // 
      // addEventListener adds a "click" handler - code that runs when you click.
      // It's like saying "When someone clicks this, do this thing!"
      //

      selectCity(city);
      // 
      // selectCity is a function we'll create that changes the clock
      // to show the time in the selected city.
      //

    });

    cityList.appendChild(cityItem);
    // 
    // Add this city item to the dropdown list.
    //

  });

  selectedIndex = -1;
  // 
  // Reset the selected index (for keyboard navigation).
  //

}

// 
// This function is called when a user selects a city (by clicking or keyboard).
// It updates the clock to show the time in that city!
//
function selectCity(city) {
  // 
  // city is the city object that was selected (like { name: "London", timezone: "Europe/London" }).
  //

  selectedCity = city;
  // 
  // Update our selectedCity variable to remember which city is selected.
  //

  cityInput.value = city.name;
  // 
  // Update the input box to show the selected city's name.
  //

  cityList.style.display = 'none';
  // 
  // Hide the dropdown list (since the user has made their selection).
  //

  drawClock();
  // 
  // Redraw the clock with the new city's time!
  //

}

// 
// This function handles keyboard navigation in the dropdown.
// It lets users use arrow keys to move up and down, and Enter to select!
//
function handleKeyboardNavigation(e) {
  // 
  // e is the "event" object - it contains information about what key was pressed.
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

      selectedIndex = (selectedIndex + 1) % items.length;
      // 
      // Move to the next item. The % (modulo) operator makes it wrap around
      // (so if you're at the last item and press down, you go to the first item).
      //

      updateSelection(items);
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

      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      // 
      // Move to the previous item. The + items.length makes sure
      // we don't get a negative number (so it wraps around properly).
      //

      updateSelection(items);
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

      if (selectedIndex >= 0 && selectedIndex < filteredCities.length) {
        // 
        // If a city is selected (selectedIndex is valid)...
        //

        selectCity(filteredCities[selectedIndex]);
        // 
        // Select that city!
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
function updateSelection(items) {
  // 
  // items is the list of all city items in the dropdown.
  //

  items.forEach((item, index) => {
    // 
    // Go through each item...
    //

    if (index === selectedIndex) {
      // 
      // If this is the selected item...
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

  filterCities(searchTerm);
  // 
  // Filter the cities based on what they typed.
  //

  cityList.style.display = 'block';
  // 
  // Show the dropdown list.
  //

  selectedIndex = -1;
  // 
  // Reset the selected index.
  //

});

// 
// When the user clicks on the input box, show the dropdown list.
//
cityInput.addEventListener('focus', () => {
  // 
  // 'focus' event fires when the user clicks on or tabs to the input box.
  //

  if (filteredCities.length === 0) {
    // 
    // If we haven't filtered yet, show all cities.
    //

    filterCities('');
    // 
    // Filter with empty string shows all cities.
    //

  }

  cityList.style.display = 'block';
  // 
  // Show the dropdown list.
  //

});

// 
// When the user clicks outside the input box, hide the dropdown list.
//
document.addEventListener('click', (e) => {
  // 
  // 'click' event on the whole document (the entire page).
  //

  if (!cityInput.contains(e.target) && !cityList.contains(e.target)) {
    // 
    // If the click was NOT on the input box AND NOT on the dropdown list...
    // contains() checks if an element is inside another element.
    //

    cityList.style.display = 'none';
    // 
    // Hide the dropdown list.
    //

  }

});

// 
// When the user presses a key, handle keyboard navigation.
//
cityInput.addEventListener('keydown', handleKeyboardNavigation);
// 
// 'keydown' event fires when a key is pressed down.
// We call our handleKeyboardNavigation function to handle it.
//

// 
// Finally, let's start the clock!
// We need to draw it once immediately, then update it every second.
//

// 
// Set the input field to show Washington D.C. as the default city.
// This makes sure the dropdown shows the correct city name when the page loads!
//
if (selectedCity) {
  // 
  // If we found Washington D.C. in our list (which we should have!)...
  //

  cityInput.value = selectedCity.name;
  // 
  // Set the input box to show "Washington, D.C., United States".
  // This way users can see which city is currently selected!
  //

}

drawClock();
// 
// Draw the clock right away (so it shows immediately when the page loads).
//

setInterval(drawClock, 1000);
// 
// setInterval runs a function repeatedly.
// drawClock is the function to run.
// 1000 means "every 1000 milliseconds" (which is 1 second).
// So the clock updates every second to show the current time!
//

