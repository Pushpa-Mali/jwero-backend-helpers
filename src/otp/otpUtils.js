const { default: axios } = require("axios");

/**
 * Sends an OTP (One-Time Password) using the MSG91 OTP API.
 * @param {Object} params - Parameters for sending OTP.
 * @param {string} params.template_id - The template ID of the OTP message.
 * @param {string} params.mobile - The mobile number to which OTP will be sent.
 * @param {string} params.otp - The OTP (One-Time Password) to be sent.
 * @param {string} params.authkey - The authentication key for accessing the MSG91 API.
 * @returns {Promise<Object>} - A promise that resolves with the response data from the API.
 */

const sendMSG91OTPTemplate = async ({ template_id, mobile, otp, authkey }) => {
  let { data } = await axios({
    url: `https://control.msg91.com/api/v5/otp`,
    data: {
      template_id,
      mobile,
      otp,
    },
    headers: { authkey },
    method: "POST",
  });
  return data;
};

/**
 * Verifies an OTP (One-Time Password) using the MSG91 OTP API.
 * @param {Object} params - Parameters for verifying OTP.
 * @param {string} params.otp - The OTP (One-Time Password) to be verified.
 * @param {string} params.mobile - The mobile number for which OTP was sent.
 * @param {string} params.authkey - The authentication key for accessing the MSG91 API.
 * @returns {Promise<Object|boolean>} - A promise that resolves with the verification result or false if an error occurs.
 */

const verifyMSG91OTPTemplate = async ({ otp, mobile, authkey }) => {
  try {
    let { data } = await axios({
      url: `https://control.msg91.com/api/v5/otp/verify`,
      params: {
        mobile,
        otp,
      },
      headers: { authkey },
    });
    let alreadyVerified = data.message?.includes("already verified");
    let payload = {
      ...data,
      success: data.type === "success" || alreadyVerified,
    };
    if (alreadyVerified) payload.type = "success";
    return payload;
  } catch (error) {
    return false;
  }
};

module.exports = { sendMSG91OTPTemplate, verifyMSG91OTPTemplate };