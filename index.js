const isMobileNumberValid = (mobile_number, country_code = 91) => {
  // if country code is 91, then it should validate
  // mobile no. and return true or false result
  let mobile_number_regex = /^[6-9]\d{9}$/;
  return mobile_number_regex.test(mobile_number);
};

const isRequired = (required) => {
  //should not be empty
  let requiredRegex = /^[\s\t\r\n]*\S+/;
  return requiredRegex.test(required);
};

const isPasswordValid = (password) => {
  // should contain at least one digit
  // should contain at least one lower case
  // should contain at least one upper case
  // should contain at least 8 from the mentioned characters
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
};

const isPINValid = (pin) => {
  // Pin should be min. 6 digit and numberic
  let pinRegex = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;
  return pinRegex.test(pin);
};

const isOTPValid = (otp) => {
  // Check for OTP, min 6 and numeric
  let otpRegex = /^[0-9]{6}$/;
  return otpRegex.test(otp);
};

const isInputValid = (value, min_char_length = 1) => {
  // This will be used for name, address etc
  // its should 1st trim empty values
  // and char length should meet minimum requirement
  let value_trimmed = value.trim();
  return value_trimmed.length >= min_char_length;
};

/**
 *
 * @param {string} pan_card_number
 * @description PAN Card Number should be in "ABCDE1234F" format
 * @returns {boolean}
 */
const isPANCardValid = (pan_card_number) => {
  // This should match the criteria of Indian PAN Card
  // 10 Char
  // Char 1-5 upper case alphabet
  // Char 6-9 numeric value 0-9
  // Char 10th upper case alphabet
  // no whitespaces
  let pan_card_regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return pan_card_regex.test(pan_card_number);
};

/**
 *
 * @param {Date} birth_date
 * @param {number} min_age
 * @description Date format must be in "MM-DD-YYYY"
 * @returns {boolean}
 */
const isAgeValid = (birth_date, min_age = 18) => {
  // Age should be minimum 18 years(default value)
  let today = new Date();
  let birth_date_obj = new Date(birth_date); // it set birth date in object one day before
  birth_date_obj.setDate(birth_date_obj.getDate() + 1);
  let age = today.getFullYear() - birth_date_obj.getFullYear();
  let m = today.getMonth() - birth_date_obj.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth_date_obj.getDate())) {
    age--;
  }
  return age >= min_age;
};

const isEmailValid = (email) => {
  // Validate Email Address
  // Email should be in proper format
  // and should not contain whitespaces
  let emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return emailRegex.test(email);
};

const isWebsiteValid = (website) => {
  let urlRegex = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!urlRegex.test(website);
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
  isPasswordValid,
  isRequired,
};

export default obj;
