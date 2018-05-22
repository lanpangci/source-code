Array.prototype.myReduce = function (fun, prevValue) {
    var i = this.length;
    if (!prevValue) {
        prevValue = this[0];
        i--;
    }
    for (i; i >= 0; i--) {
        prevValue = fun(prevValue, this[i], i);
    }
    return prevValue;
}
var 