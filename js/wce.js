$(document).ready(function () {
  ///fancybox///
  $('.fancybox').fancybox();
  ///image mapster///
  $('img').mapster({
    fillOpacity: 0.4,
    fillColor: "000000",
    stroke: true,
    strokeColor: "ffffff",
    strokeOpacity: 0.8,
    strokeWidth: 2,
    toolTipContainer: $('#tooltip-container'),
    mapKey: 'data-key',
    areas: [{
        key: 'all',
        toolTip: true
      }
    ],
    showToolTip: true,
    onShowToolTip: function (data) {
      if (this.href && this.href != '#') {
        data.toolTip.html('<img src="' + this.href + '">');
      }
    }
  });
  ///Quiz///
  var total = $(".question").length;
  var score = 0;
  $(".submit-answer-button").on("click", function () {
    var question = $(this).parents(".question");
    var answer_choices = question.find("input");
    var submitted_answers = question.find("input:checked");
    var incorrect_answers = false;
    submitted_answers.each(function (index, element) {
      if ($(element).hasClass("incorrect-answer")) {
        incorrect_answers = true;
      }
    });
    answer_choices.each(function (index, element) {
      if ($(element).hasClass("correct-answer") && !$(element).is(":checked")) {
        incorrect_answers = true;
      }
    });
    if (incorrect_answers) {
      $(question).find(".incorrect-alert").show();
    } else {
      $(question).find(".correct-alert").show();
      score++
    }
    $(this).attr("disabled", "true");
    $(question).find(".explanation").show();
    $(question).find(".next-button").show();
    $(".next-button").on("click", function () {
      // hide current question
      $(question).hide();
      $(".score").hide();
      // show next question
      $(question).next().show();
    });
    if ($(question).hasClass("last")) {
      $(".score").find(".correct-answers").text(score);
      $(".score").find(".total-questions").text(total);
      $(".score").show();
    }
    $(".take-quiz-again").on("click", function () {
      $(".question").hide();
      $(".score").hide();
      $(".next-button").hide();
      $(".explanation").hide();
      $(".correct-alert").hide();
      $(".incorrect-alert").hide();
      $(".submit-answer-button").removeAttr("disabled");
      // NEW
      $("input").removeAttr("checked");
      $(".question").eq(0).show();
    });
  });
}); //end document ready