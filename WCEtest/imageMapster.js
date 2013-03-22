$(document).ready(function () {
console.log("meow");
var image =$('#birdsEyeView');

image.mapster(
{

fillOpacity: 0.4,
        fillColor: "000000",
        stroke: true,
        strokeColor: "ffffff",
        strokeOpacity: 0.8,
        strokeWidth: 2,
        mapKey: 'name',
        
        showToolTip:true,
       toolTipClose: ["tooltip-hover", "area-mouseout"],
        areas:[
        {
        	key:"A",
        	toolTip:"This is a Building", 
        },
        {
        	key:"B",
        	toolTip:"This is B Building",
        },
        {
        	key:"building",
        	toolTip:"This is building Building",
        },
        {
        	key:"J",
        	toolTip:"This is J Building",
        },
        ]
   });
     

// $('#stateMap').mapster({
// mapKey: 'state'
// });

}); //end document ready