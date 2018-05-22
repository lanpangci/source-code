Array.prototype.myforEach = function(fun) {
    for(var i = 0; i < this.length; i++) {
        fun(this[i], i);
    }
}