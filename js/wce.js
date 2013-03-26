$(document).ready(function () {





//// Replace main content ////
// $("#history-button").on("click", function(){
// 		$("#historyContent").show();
// 		console.log('meow');
// });

// $("#quiz-button").on("click", function(){
// 		$("#quizContent").show();
// 		console.log('meow');
// });

// $("#map-button").on("click", function(){
// 		$("#mapContent").show();
// 		console.log('meow');
// });
///Make "hidden" work in bootstrap-responsive///


// $("#history-button").click(function(){
//         $('#historyContent').toggle();
//     });


// $("history-button").click(function () {
//   $("#imgBookCover").replaceWith( "#historyContent" + "meow");
// });


	//$("#imgBookCover").replaceWith("#historyContent");

//code I'm trying//
// $('#history-button').click(function() {
//     if ($('.target-visibility').css('visibility') == 'hidden'){ // check visibility
//         $('.target-visibility').css({'visibility': 'visible', display: ''});
//     }else{
//         $('.target-visibility').css({'visibility': 'hidden', display: ''});
//     }
// });

// $(function() {
// 		$('history-button').click(function(){
// 			$('#imgBookCover').replaceWith
// 		})
// }

// $(function() {
//     $('#history-button').click(function() {
//        $('#historyContent.hidden').fadeIn().removeClass('hidden');
//        $('.content').hide();
//        $('#image1').replaceWith($('div#historyContent')); 
//        $('#historyContent').show();
//     });
// });

//$(function() {
//$(".btn").click(function(){
	//var item = $(this.attr("#historyContent");
	// var content = $("p").html("#historyParagraph");
	//$(".featureContainer").html(".content");
	//})
//}

// $(function() {
// 	$(".btn").click(function() {
// 		("#historyParagraph").hide();
// 		$("#historyParagraph").hover(
// 			function() {
// 				$(this).last().show();
// 			},
// 			function() {
// 				$(this).last().hide();
// 			}
// 			)
// 	});
// });

// $(function() {
//     $('#photo-button').click(function() {
//        $('#photoContent.hidden').fadeIn().removeClass('hidden');
//        // $('.content').hide();
//        $('#image1').replaceWith($('div#photoContent')); 
//        $('#photoContent').show();
//     });
// });

// $(function() {
//     $('#quiz-button').click(function() {
//     	$('#quizContent.hidden').fadeIn().removeClass('hidden');
//     	$('.content').hide();
//     	$('#image1').replaceWith($('div#quizContent'));
//     	$('#historyContent').show();
//     });
// });

// $(function() {
//     $('#map-button').click(function() {
//        $('#mapContent.hidden').fadeIn().removeClass('hidden');
//        $('.content').hide();
//     	$('#image1').replaceWith($('div#mapContent')); 
//     	$('#mapContent').show();
//     });
// });





// $('#history-button').on('click', function(){
//     $('.content').hide();
//     $('#historyContent').show();
// });
// $('#map-button').on('click', function(){
//     $('.content').hide();
//     $('#mapContent').show();
// });
// $('#photo-button').on('click', function(){
//     $('.content').hide();
//     $('#photoContent').show();
// });
// $('#quiz-button').on('click', function(){
//     $('.content').hide();
//     $('#quizContent').show();
// });

/////mapster javascript/////

// $('img').mapster({

// fillOpacity: 0.4,
//         fillColor: "000000",
//         stroke: true,
//         strokeColor: "ffffff",
//         strokeOpacity: 0.8,
//         strokeWidth: 2,
//         mapKey: 'name',
        
//         showToolTip:true,
//        toolTipClose: ["tooltip-hover", "area-mouseout"],
//         areas:[
//         {
//         	key:"A",
//         	toolTip:"This is a Building", 
//         },
//         {
//         	key:"B",
//         	toolTip:"This is B Building",
//         },
//         {
//         	key:"building",
//         	toolTip:$("#ArtBuilding"),
//         },
//         {
//         	key:"J",
//         	toolTip: $("#buildingtest"),
//         },
//         ]
//    });
      

      $('img').mapster({
    fillOpacity: 0.4,
        fillColor: "000000",
        stroke: true,
        strokeColor: "ffffff",
        strokeOpacity: 0.8,
        strokeWidth: 2,
    toolTipContainer: $('#tooltip-container'),
    mapKey: 'data-key',
    areas: [ {
        key: 'all',
        toolTip: true
    }],
    showToolTip: true,
    onShowToolTip: function(data) {
        if (this.href && this.href!='#') {
            data.toolTip.html('<img src="'+this.href+'">')
            ;
        }
        
    }});


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
            $(".question").eq(0).show();
        });
$("tweet-results").on("click"), function(){
	
}

    });





}); //end document ready