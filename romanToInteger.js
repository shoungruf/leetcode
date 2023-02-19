/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let res= 0;
    if(s==null){
        res =0 ;
    }
   let sys =  new Map();
    sys.set( 'I', 1);
    sys.set( 'V', 5);
    sys.set( 'X', 10);
    sys.set( 'L', 50);
    sys.set( 'C', 100);
    sys.set( 'D', 500);
    sys.set( 'M', 1000);

    for(i=0;i<s.length;i++){
        if(sys.get(s.charAt(i)) < sys.get(s.charAt(i+1))){
            res = res - sys.get(s.charAt(i));
        }else{
            res = res + sys.get(s.charAt(i));
        }
    }
    return res;

};