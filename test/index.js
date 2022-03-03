import validator from "../index.js";

console.log(
  "Mobile Validation : ",
  validator.isMobileNumberValid(8192983939, 91)
);
console.log("Pin Validation : ", validator.isPINValid(100000));
console.log("OTP Validation : ", validator.isOTPValid(478394));
console.log("PAN Card Validation : ", validator.isPANCardValid("ABCDE1234F"));
console.log("Age Validation : ", validator.isAgeValid("07-23-2003", 18));
console.log("Email Validation : ", validator.isEmailValid("abcd@h.com"));
console.log("Website Validation : ", validator.isWebsiteValid("abc.com"));
