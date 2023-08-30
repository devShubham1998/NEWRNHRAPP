/* eslint-disable eslint-comments/no-unlimited-disable */
/*
 * @file: Regex.js
 * @description: Regex used for validation in application.
 * @date: 20.01.2022
 * @author: Aditya Jena
 * */
/* eslint-disable */

"use strict";

const sliceLocal = (numbers: string) => {
  if (numbers.length <= 3) {
    return numbers;
  }
  return `${numbers.slice(0, 3)}${numbers.slice(3, 10)}`;
};
const sliceInternational = (numbers: string) => {
  if (numbers.length <= 3) {
    return numbers;
  }
  if (numbers.length <= 5) {
    return `${numbers.slice(0, 3)}${numbers.slice(3)}`;
  }
  return `${numbers.slice(0, 3)}${numbers.slice(3, 5)}${numbers.slice(5, 12)}`;
};

export const scriptValidationRegex =
  /(<([^>]+)>)|([\#\$\^\*\+\=\<\>\{\}\[\]\:\"\|\~\`\_\-])|(^.* OR $)/g;

export const Validations = {
  email: function (val: string) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  },

  emoji: function (text: string) {
    var reg = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    return reg.test(text);
  },

  phoneNumber: function (text: string) {
    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(text);
  },

  ifscCode: function (text: string) {
    return /^[A-Za-z]{4}\d{7}$/.test(text);
  },

  formatPhoneNumber: function (text: string) {
    const value = String(text);
    if (!value) {
      return "";
    }

    const leadingPlus = value.match(/^\+/g);
    const leadingZeros = value.match(/^00/g);
    const numbers = value.replace(/[^\d]/g, "");

    if (leadingPlus) {
      const plus = leadingPlus[0];
      const sliced = sliceInternational(numbers);
      return `${plus}${sliced}`;
    }

    if (leadingZeros && numbers.length > 2) {
      const zeros = leadingZeros[0];
      const trailingNumbers = numbers.substring(2, numbers.length);
      const sliced = sliceInternational(trailingNumbers);
      return `${zeros}${sliced}`;
    }

    return sliceLocal(numbers);
  },

  validateMobileWithoutCC: function (val: string) {
    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
      val
    );
  },

  validateMobileWithCC: function (val: string) {
    return /^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}[0-11]/.test(val);
  },

  validateString: function (val: string) {
    return /^[a-zA-Z\x20]{3,25}$/.test(val);
  },

  validateStringMinimumLength2: function (val: string) {
    return /^[a-zA-Z\x20]{2,25}$/.test(val);
  },

  validatePassword: function (val: string) {
    // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(val);
    //return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_]\S{5,16}$/.test(val);
    //return^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(val);
    //return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(val);
    return /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/.test(val);
  },

  validateNumbers: function (val: string) {
    return /^[0-9]{0,}$/.test(val);
  },

  validateURL: function (url: string) {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
      url
    );
  },

  validatePrice(val: string) {
    return /^(\d*([.,](?=\d{1}))?\d+)?$/.test(val);
  },

  validateAlphaNumberic(val: string) {
    return /^[a-zA-Z0-9]*$/.test(val);
  },

  getNumbericValuesFromString(val: string) {
    return val.match(/^\d+|\d+\b|\d+(?=\w)/g);
  },

  validateDecimalNumbers(val: string) {
    return /^((\d|[1-9]\d+)(\.\d{0,1})?|\.\d{0,1})$/.test(val);
  },

  validateAddress: function (text: string) {
    return text.length > 200 ? false : true;
  },
  /**
   * Method used to remove trailing zeros after decimal point.
   */

  removeTrailingZeros(numberAmount: number) {
    let amount = numberAmount.toString();
    let regEx2 = /[0]+$/; // to check zeros after decimal point
    let regEx3 = /[.]$/; // remove decimal point.
    if (amount.indexOf(".") > -1) {
      amount = amount.replace(regEx2, "");
      amount = amount.replace(regEx3, "");
    }
    return parseFloat(amount).toFixed(2);
  },
};
