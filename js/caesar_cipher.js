var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var cipher = document.querySelector('#caesar-cipher');
var alphabetObj={};
alphabetObj.indexOf = function(target){
    
    var index = 1;
  
    Object.keys(this).forEach(key => {
        if (this[key]==target){
          index = key;
        } 
    });
    
    return parseInt(index);
};

alphabetObj.alphabet=[];

alphabetObj.setAlphabet = function(alphabet){
  
  this.alphabet = alphabet;
  
  var i = -(alphabet.length-1);
  alphabet.split('').forEach( char => {
    
    this[i++]=char;
    
  });
  
}

alphabetObj.length = function(){
  return this.alphabet.length;
}

alphabetObj.toString = function(){
  return this.alphabet;
}

alphabetObj.shift = function(char,num){
  
  var charIndex,cyphedIndex;
  var shifted;
  
  if ( num < 0 ){

      charIndex = this.indexOf(char);
      cyphedIndex = (charIndex+num)%this.length();
      shifted = this[cyphedIndex];
      
  }else{

      charIndex = this.alphabet.indexOf(char);
      cyphedIndex = (charIndex+num)%this.alphabet.length;
      shifted = this.alphabet[cyphedIndex];
      
  }
  
  return shifted;
  
}

alphabetObj.shiftMe = function(num){
  
  var shifted;
  
  var strArray = this.alphabet.split('');
  
  var shiftedArray = [];
  
  strArray.forEach(char => {
    
    shiftedArray.push(this.shift(char,num));
    
  });
  
  shifted = shiftedArray.join('');
  
  return shifted;
  
}

function encrypt(str, key){
	
	alphabetObj.setAlphabet(alphabet);
  // console.log(alphabetObj.shiftMe(num));return;

  var strArray = str.split('');
  
  var cyphedArray = [];
  
  strArray.forEach(char => {
    
    if(alphabet.indexOf(char)>-1){
      
      cyphedArray.push(alphabetObj.shift(char,parseInt(key)));
      
    }else{
      
      cyphedArray.push(char);
      
    }
    
  });

//  console.log(cyphedArray.join(''));
	
	return cyphedArray;
	
}
cipher.encrypt = encrypt;