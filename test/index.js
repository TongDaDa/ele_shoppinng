/**
 * @note
 * transform number split formal price StringNumber
 * @example
 * splitNum(3424234) ==>
 * splitNum(3424234.456) ==>
 * @param splited num {String[Number],Number}
 * @return
 */
function splitNum(num) {
  if (!/\d+/.test(num)) throw Error('splitNum is not effective number')

  let nums = num = num.toString(),
      dotIndex = nums.indexOf('.');

  nums = nums.substring(0,dotIndex === -1 ? num.length : dotIndex)
             .split('')
             .reverse()
             .join('');

  return nums.replace(/(\d{3})/g,'$1,')
             .replace(/\,$/,'')
             .split('')
             .reverse()
             .join('') + (dotIndex>=0 ? num.slice(dotIndex) : '')
}

// console.log(splitNum('adasdasdasdasd'));  // Error !~~
console.log(splitNum('145'));
// console.log(splitNum(342423345345000000000));
// console.log(splitNum(3424234234234233234.7777777777777));
// console.log(splitNum(3424234.456234234234234));
