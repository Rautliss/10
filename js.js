function count(){
  var listOfLinks = document.forms['form'].links.value;
  var links = listOfLinks.split(', ');
  var http = ['h', 't', 't', 'p', ':', '/', '/'];
  var https = ['h', 't', 't', 'p', 's', ':', '/', '/'];
  for(var i = 0; i < links.length; i++){
    var ii = 0; // счетчик http и https
    var deleteNumber = 0, // номера символов, которые нужно удалить вначале ссылки
        maxDeleteNumber = 8;
    var tempText = links[i].split('');
    for(var i1 = 0; i1 < tempText.length; i1++){
      for(var i2 = 0; i2 < maxDeleteNumber; i2++){ // проверка символа
        if(tempText[i1] === http[ii]){
          deleteNumber++;
          ii++;
          break;
        } else {
          if(tempText[i1] === https[ii]){
            deleteNumber++;
            ii++;
            break;
          }
          else {
            ii++;
          }
        }
      }
    }
    console.log(deleteNumber);
    tempText.splice(0, deleteNumber);
    var all = tempText.join('');
    links[i] = all;
    console.log(links[i]);
  }
  var sortedLinks = links.sort();
  var all = sortedLinks.join('\n');
  alert(all);
}
