let checkLop = function(text){
    if(text.length<10 || text.length>10){
        return "NALL";
    }else{
        var s = text.toUpperCase();
        s =s.slice(2,3);
        return s;
    }
}

module.exports = checkLop;