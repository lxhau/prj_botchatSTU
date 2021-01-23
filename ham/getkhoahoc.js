let checkkhoahoc = function(id) {
    if(id.length<10 || id.length>10){
        return "NALL";
    }else{
        var s = id.toUpperCase();
        s =s.slice(3,5);
        return s;
    }
}

module.exports = checkkhoahoc;