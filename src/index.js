module.exports = function reverse(result) {

    result = Math.abs(result).toString();
    result = reverseInt(result);

    function reverseInt(num) {
        num = deleteZero(num);
        let splitString = num.split('');
        let reverseArr = splitString.reverse()
        let joinArray = reverseArr.join('');
        result = joinArray;
        return result;
    }

    function deleteZero(num) {
        if (num[num.length - 1] == '0') {
            num = num.slice(0, -1);
            deleteZero(num);
        }
        return num;
    }

    return result;
}
