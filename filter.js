Array.prototype.myFilter = function (fun) {
    var ops = Object.prototype.toString;
    var oa = "[object Array]";
    var arr = [];
    var temp;
    for (var i = 0; i < this.length; i++) {
        if (fun(this[i], i)) {
            if (this[i] && typeof (this[i]) == 'object') {
                if (ops.call(this[i]) == oa) {
                    temp = [];
                } else {
                    temp = {};
                }
                clone(this[i], temp);
                arr.push(temp);
            } else {
                arr.push(this[i]);
            }

        }
    }
    return arr;
}