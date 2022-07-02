module.exports = function reverse (n) {
    let arr = Number(('' + n).split('').reverse().join(""))
    return arr
}
