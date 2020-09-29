module.exports = function toReadable(number) {
    const units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    },
        tens = {
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety'
        },
        strNumber = String(number);

    switch (strNumber.length) {
        case 1:
            return units[number];
        case 2:
            if (strNumber[0] === '1') {
                return tens[number];
            } else if (strNumber[strNumber.length - 1] === '0') {
                return `${tens[Number(strNumber[strNumber.length - 2])]}`;
            } else {
                return `${tens[Number(strNumber[0])]} ${units[Number(strNumber[1])]}`;
            }
        default:
            if (strNumber[1] === '1') {
                return `${units[Number(strNumber[strNumber.length - 3])]} hundred ${tens[Number(strNumber.slice(-2))]}`;
            } else if (strNumber[strNumber.length - 1] === '0' && strNumber[strNumber.length - 2] === '0') {
                return `${units[Number(strNumber[strNumber.length - 3])]} hundred`;
            } else if (strNumber[strNumber.length - 1] === '0') {
                return `${units[Number(strNumber[strNumber.length - 3])]} hundred ${tens[Number(strNumber[strNumber.length - 2])]}`;
            } else if (strNumber[1] === '0') {
                return `${units[Number(strNumber[strNumber.length - 3])]} hundred ${units[Number(strNumber[strNumber.length - 1])]}`;
            } else {
                return `${units[Number(strNumber[strNumber.length - 3])]} hundred ${tens[Number(strNumber[strNumber.length - 2])]} ${units[Number(strNumber[strNumber.length - 1])]}`;
            }
    }
}
