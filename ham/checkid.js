let checkid = function(id){
    if(id.length<10 || id.length>10){
        return false;
    }else{
        var s = id.toUpperCase();
        s =s.slice(0,2);
        if(s!="DH"){
            return false;
        }
    }
    return true;
}

module.exports = checkid;