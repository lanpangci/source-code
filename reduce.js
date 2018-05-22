Array.prototype.myReduce = function (fun, prevValue) {
    var i = 0;
    if (!prevValue) {
        prevValue = this[0];
        i = 1;
    }
    for (i; i < this.length; i++) {
        prevValue = fun(prevValue, this[i], i);
    }
    return prevValue;
}
var 