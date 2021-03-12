module.exports = function reverse(n) {
    if (typeof n === "number") {
        return Number(Math.abs(n).toString().split("").reverse().join(""));
    }
};
