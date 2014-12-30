// ==UserScript==
// @name WIT timetable automatic selection
// @namespace http://antonkrug.eu
// @version 0.3
// @description It selects your desired course
// @match http://studentssp.wit.ie/Timetables/StudentGroupTT.aspx
// @copyright 2014+ Anton Krug
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
if ($("#CboPOS").val()="") {
	$("#CboPOS").val('85EA4CF769354ECAD9F18363EC561527');
	$("#CboStudParentGrp").val('kcomp_b2-X');
	$("#BtnRetrieve").click();
} else {
	$('#divTT table').first().remove();
	$('#divTT *').each(function() {
		xsize= parseInt($(this).css('font-size')) + 1;    
		$(this).css('font-size', '9px');
	});
	}
});
