# jwero-backend-helpers

## installation

```
npm install jwero-backend-helpers

```
## Utility functions

## Remove Duplicates in an array

removeDuplicates utility function removes duplicates from the array and return the array

## Example usage

```
const removeDuplicates = require('./removeDuplicates');

const arr = [1, 2, 3, 1, 2, 4, 5, 6, 5];
console.log(removeDuplicates(arr));

```

## OTP Functions using MSG91 API

This repository contains functions for sending and verifying OTP (One-Time Password) using the MSG91 OTP API.

### Functions

#### `sendMSG91OTPTemplate(params)`

This function sends an OTP to a mobile number using the MSG91 OTP API.

Parameters:
- `template_id`: The template ID of the OTP message.
- `mobile`: The mobile number to which OTP will be sent.
- `otp`: The OTP (One-Time Password) to be sent.
- `authkey`: The authentication key for accessing the MSG91 API.

Returns:
- A promise that resolves with the response data from the API.


### Example Usage

```javascript
const { sendMSG91OTPTemplate, verifyMSG91OTPTemplate } = require("./otpUtils");

// Sending OTP
sendMSG91OTPTemplate({
  template_id: "your_template_id",
  mobile: "recipient_mobile_number",
  otp: "generated_otp",
  authkey: "your_auth_key",
}).then(response => {
  console.log("OTP Sent:", response);
}).catch(error => {
  console.error("Error sending OTP:", error);
});
```

#### `verifyMSG91OTPTemplate(params)`

This function verifies an OTP for a mobile number using the MSG91 OTP API.

Parameters:
- `otp`: The OTP (One-Time Password) to be verified.
- `mobile`: The mobile number for which OTP was sent.
- `authkey`: The authentication key for accessing the MSG91 API.

Returns:
- A promise that resolves with the verification result. If an error occurs, it returns `false`.

### Example Usage

```javascript

// Verifying OTP
verifyMSG91OTPTemplate({
  otp: "entered_otp",
  mobile: "recipient_mobile_number",
  authkey: "your_auth_key",
}).then(response => {
  console.log("OTP Verification Result:", response);
}).catch(error => {
  console.error("Error verifying OTP:", error);
});

```