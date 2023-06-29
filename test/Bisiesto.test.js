class Bisiesto{
     esBisiesto(year) {
       if (year %4 == 0 || year %400 == 0) {
        return true
       }else {
        return false
    }


    }//end sBisiesto
}//end class

obj = new Bisiesto

console.log(obj.esBisiesto(2020))
