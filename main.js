function removeOddSum(arr,a,b) {

    return arr.filter(item => (item.a + item.b) % 2 === 0);
}

module.exports = removeOddSum;

