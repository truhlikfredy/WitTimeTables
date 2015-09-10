// ==UserScript==
// @name WIT timetable automatic selection
// @namespace http://antonkrug.eu
// @version 0.4
// @description It selects your desired course
// @match http://studentssp.wit.ie/Timetables/StudentGroupTT.aspx
// @copyright 2014+ Anton Krug
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
	var school='SS';					//School of science
	var department='548715F70874B2B1561DDC98FE61E5C0';	//Computing, maths & physics department
        var course='85EA4CF769354ECAD9F18363EC561528';		//Applied Computing Y3
	var group='kcomp_b3-W';					//Students group
	var week='3';						//Week 20

	if ($("#CboPOS").val()=="%" ||  $("#CboPOS").val()=="E202D2DBD75D2CBF9E167CD46A2B0B68" ) ) {
		$("#cboSchool").val(school);
		$("#CboDep").val(department);
		$("#CboPOS").val(course);
		$("#CboStudParentGrp").val(group);
		$("#CboWeeks").val(week);
		$("#BtnRetrieve").click();
	} else {
		//Re-select some missing selections just for visuals.
		//And if somebody wants select something else (different week) so he will not be confused
		$("#CboStudParentGrp").val(group);
		//alter presentation of the time tables
		$('#divTT table').first().remove();			//remove logo
		$('#divTT *').each(function() {				//alter fonts
			xsize= parseInt($(this).css('font-size')) + 1;    
			$(this).css('font-size', '9px');
		});
	}
});
