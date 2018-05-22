Array.prototype.myMap = function (fun) {
    var newArr = [];
    var len = this.length;
    for (var i = 0; i < len; i++) {
        var temp = fun(this[i], i);
        newArr.push(temp);
    }
    return newArr;
}