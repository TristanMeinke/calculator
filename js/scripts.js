var add = function (number1, number2) {
  return number1 + number2
};

var subtract = function (number1, number2) {
  return number1 - number2
};


var multiply = function (number1, number2) {
  return number1 * number2
};


var divide = function (number1, number2) {
  return number1 / number2
};

var squared = function (number) {
  return number * number;
};

var power = function (number1, number2) {
  result = number1;

  for (i = 0; i < number2; i++)
  {
    result * number1;
  }

  return result;
};

// jQuery begins...

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });

  $("form#squared").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#squared").val());
    var result = squared(number);
    $("#output").text(result);
  });

  $("form#power").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#power1").val());
    var number2 = parseInt($("#power2").val());
    var result = power(number1, number2);
    $("#output").text(result);
  });

});
