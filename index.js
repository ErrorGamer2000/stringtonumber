var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','-','_','+','=','/','|','{','}','[',']',':',';','"',"'",'.',',','<','>','?',' '];

var encode = (str) => {
  var toReturn = "";
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]).toString().length == 1) {
      toReturn += '0' + (arr.indexOf(str[i]) + 1).toString();
    } else {
      toReturn += (arr.indexOf(str[i]) + 1).toString();
    }
  }
  toReturn += '00'
  return toReturn;
}

var decode = (num) => {
  var toReturn = "";
  for (var i = 0; Number(num[i].toString() + num[i + 1].toString()) > 0; i += 2) {
	  toReturn += arr[Number(num[i].toString() + num[i + 1].toString())-1]
  }
  return toReturn;
}

var setKey = (key) => {
	arr = key
}

module.exports = {
  setKey: setKey,
  encode: encode,
  decode: decode
}
