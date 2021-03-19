// Set target date UTC (-1 hour) (year, month (0-11), day, hour, minute, second, millisecond)
const TARGET_UTC = new Date(Date.UTC(2021, 3, 22, 12, 30, 0));

// Constants for calculation
const FACTOR_SEC = 1000;
const FACTOR_MIN = FACTOR_SEC * 60;
const FACTOR_HRS = FACTOR_MIN * 60;
const FACTOR_DAY = FACTOR_HRS * 24;

// Format number two digits
function formatNum(number) {
	return number.toString().padStart(2, '0');
}

// Calculate and display countdown
let interval = setInterval(() => {
	// Read current time
	const now = new Date().getTime();

	// Calculate distance
	const distance = TARGET_UTC.getTime() - now;

	// Check timer for expiration
	if (distance < 0) {
		document.getElementById("tpc_pac_001__timer").innerHTML = "00 : 00 : 00 : 00";

		// Stop timer
		clearInterval(interval);
	} else {
		// Calculate values
		const days = Math.floor(distance / FACTOR_DAY);
		const hours = Math.floor((distance % FACTOR_DAY) / FACTOR_HRS);
		const minutes = Math.floor((distance % FACTOR_HRS) / FACTOR_MIN);
		const seconds = Math.floor((distance % FACTOR_MIN) / FACTOR_SEC);

		// Display values
		document.getElementById("tpc_pac_001__timer").innerHTML = formatNum(days) + " : " + formatNum(hours) + " : " + formatNum(minutes) + " : " + formatNum(seconds);
	}
}, 1 * FACTOR_SEC);