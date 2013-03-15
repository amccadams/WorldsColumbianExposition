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

}); //end document ready