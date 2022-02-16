const isMobileNumberValid = (mobile_number, country_code = 91) => {
	// if country code is 91, then it should validate
	// mobile no. and return true or false result
	return false;
};

const isPINValid = (pin) => {
	// Pin should be min. 6 digit and numberic
	return false;
};

const isOTPValid = (otp) => {
	// Check for OTP, min 6 and numeric
	return false;
};

const isInputValid = (value, min_char_length = 1) => {
	// This will be used for name, address etc
	// its should 1st trim empty values
	// and char length should meet minimum requirement
	return false;
};

const isPANCardValid = (pan_card_number) => {
	// This should match the criteria of Indian PAN Card
	// 10 Char
	// Char 1-5 upper case alphabet
	// Char 6-9 numeric value 0-9
	// Char 10th upper case alphabet
	// no whitespaces
	return false;
};

const isAgeValid = (age, min_age = 18) => {
	// Age should be minimum 18 years(default value)
	return false;
};

const isEmailValid = (email) => {
	// Validate Email Address
	return false;
};

const isWebsiteValid = (website) => {
	//
	return false;
};

let obj = {
	isTestValid: () => {
		return true;
	},
	isMobileNumberValid,
	isPINValid,
	isOTPValid,
	isInputValid,
	isPANCardValid,
	isAgeValid,
	isEmailValid,
	isWebsiteValid,
};

export default obj;
