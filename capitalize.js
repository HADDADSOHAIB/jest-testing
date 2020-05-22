/* eslint-disable import/prefer-default-export */
const capitalize = (str) => {
  if (!str.trim()) {
    return '';
  }

  const firstChar = str.split('')[0].toLocaleUpperCase();
  const reminderString = str.split('').slice(1).join('');
  return `${firstChar}${reminderString}`;
};

module.exports = capitalize;
