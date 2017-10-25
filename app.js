function findShortestOfThreeWords(word1, word2, word3){
  var leng1 = word1.length;
  var leng2 = word2.length;
  var leng3 = word3.length;

  if(leng1 <= leng2 && leng1 <= leng3){
    return word1;
  }else if(leng2 < leng1 && leng2 <= leng3){
    return word2;
  }else{
    return word3;
  }
}
