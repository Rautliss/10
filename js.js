function count(){
  var number = document.forms['form'].number.value;
  var amount = 0;
  for(var i = 0; i < number.length; i++){
    var number1 = parseInt(number[i]);
    amount += number1;
  }
  alert('Сумма числе: ' + amount);
}
