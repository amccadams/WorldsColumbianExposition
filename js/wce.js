$(document).ready(function () {


$( function($){
	var undefVar, answerInfo = ["It was during this vocal competition between cities that Chicago was dubbed 'The Windy City' by Charles A. Dana, editor of the New York Sun."],
	// ["The fair was built in an amazing three years."]
	arr = [1, 2, 3, 4];
	arr["five"] = 5;
	
	var quiz = {
		
		//isn't working with ansInfo array right now
		multiList: [
			{
				ques: "Where was the World's Columbian Exposition?",
				ans: "Chicago",
				ansSel: ["New York", "St. Louis"]
			},
			{
				ques: "What destroyed the World's Columbian Exposition?",
				ans: "A Fire",
				ansSel: ["A Snowstorm", "A Flood"]
				// ansInfo: answerInfo[0]
			},
			{
				ques: "Which new invention was showcased at the World's Columbian Exposition?",
				ans: "Ferris Wheel",
				ansSel: ["Peanut Butter", "Velcro Shoes", "Two Person Bicycle"]
			}
		],
		tf: [		
			{
				ques: "It took five years to build the World's Columbian Exposition",
				ans: (1 === '1'),
				ansInfo: answerInfo[0]
			},
			{
				ques: "The exposition closed on October 30, 1893.",
				ans: (undefVar == null),
				ansInfo: answerInfo[1]
			},	
			{
				ques: "New York, Washington D.C. and St Louis also vied for the opportunity to host the Worrld's Columbian Exposition",
				ans: (undefVar == null),
				ansInfo: answerInfo[0] 
			}		
		],
		fill: [			
			{
				ques: "The fair was actually planned to open in",
				ans: ("18" + 92)
			},
			{
				ques: "What year was the World's Columbian Exposition?",
				ans: (1893)
			}
		]
	},
	options = {
		help: "Try...<ul><li><a href='https://developer.mozilla.org/en/a_re-introduction_to_javascript' target ='_blank'>A Re-introduction to Javascript</a><li><a href='http://www.hunlock.com/blogs/Mastering_Javascript_Arrays' target='_blank'>Mastering Arrays</a></li><li><a href='http://www.jibbering.com/faq/faq_notes/type_convert.html' target='_blank'>Type casting</a></li></ul>",
		intro: "Test your knowledge about <br><i>The World's Columbian Exposition</i>.",
		allRandom: true,
		title: "World's Columbian Exposition"
	};
	$("#quizArea").jQuizMe(quiz, options);
});

////highslidegallery/////

hs.graphicsDir = 'graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.dimmingOpacity = 0.8;
hs.outlineType = 'rounded-white';
hs.captionEval = 'this.thumb.alt';
hs.marginBottom = 105; // make room for the thumbstrip and the controls
hs.numberPosition = 'caption';

// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	overlayOptions: {
		className: 'text-controls',
		position: 'bottom center',
		relativeTo: 'viewport',
		offsetY: -60
	},
	thumbstrip: {
		position: 'bottom center',
		mode: 'horizontal',
		relativeTo: 'viewport'
	}
});

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

$(function() {
	$(".btn").click(function() {
		("#historyParagraph").hide();
		$("#historyParagraph").hover(
			function() {
				$(this).last().show();
			},
			function() {
				$(this).last().hide();
			}
			)
	});
});

$(function() {
    $('#photo-button').click(function() {
       $('#photoContent.hidden').fadeIn().removeClass('hidden');
       // $('.content').hide();
       $('#image1').replaceWith($('div#photoContent')); 
       $('#photoContent').show();
    });
});

$(function() {
    $('#quiz-button').click(function() {
    	$('#quizContent.hidden').fadeIn().removeClass('hidden');
    	$('.content').hide();
    	$('#image1').replaceWith($('div#quizContent'));
    	$('#historyContent').show();
    });
});

$(function() {
    $('#map-button').click(function() {
       $('#mapContent.hidden').fadeIn().removeClass('hidden');
       $('.content').hide();
    	$('#image1').replaceWith($('div#mapContent')); 
    	$('#mapContent').show();
    });
});

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
    });



}); //end document ready