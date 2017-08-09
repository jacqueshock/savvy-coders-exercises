// Functions that are equal to  and use other Functions

/* var answerLogger = function(fn) {
var answer = fn();
$('#answer').text(answer)
}; */

/* var answerLogger = function(Arr) {
  $("answer").html("<ol></ol>");
  for (var i = 0; i < Arr.length; i++) {
  $("#answer").append("<li>" + Arr[i]() + "</li>");
  }
}

answerLogger(
  [
    function() {return "I should appear in div#answer!"},
    function() {return "I should appear in div#answer!"},
    function() {return "I should appear in div#answer!"},
    function() {return "I should appear in div#answer!"},
  ]
)  */


/* answerLogger (function() {
  return "I should appear in div#answer!"
}) */


/* var secretKeeper = function(string1, string2) {
	var secret = "You can't find me.";
  var publicPhrase = string1 + " " secret + " " + string2;

  $("#answer").append(publicPhrase);
};  */

var times5 = multipliesBy(5); {

  var multipliesBy = function(num1){
    return function(num2) {
      return num1 * num2;
    }
  };
}
